import { Button, CardContent } from '@material-ui/core'
import React from 'react'
import {CreateShippingOrder, StartPayment} from "../../Services/Payment";
// import axios from "axios";
import {useAuth} from "../../Services/auth";
import {useAlert} from "react-alert";

const Billing = ({ values,handleModalClose }) => {
    const {user, setLoading} = useAuth();
    const alert = useAlert();
    // const submitFormData = (e) => {
    //     e.preventDefault();
    // };
    const {
        reciver_name,
        reciver_phone_no,
        reciver_email_id,
        reciver_house_no,
        reciver_area,
        reciver_pincode,
        reciver_state,
        reciver_city,
        sender_name,
        sender_phone_no,
        sender_email_id,
        sender_house_no,
        sender_area,
        sender_pincode,
        sender_state,
        sender_city } = values;

    const paymentCallback = (res) => {
        console.log(res);
        setLoading(false);
        handleModalClose();
        alert.success("Your payment completed successfully");
    }

    const handlePayment = async () => {
        try{
            setLoading(true);

            let Order = await CreateShippingOrder({
                amount: 500
            })

            let payment = await StartPayment({
                "amount": Order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Carrykar",
                "description": "Shipping Changes based on weight",
                "order_id": Order.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "prefill": {
                    "name": user.first_name,
                    "email": user.email,
                    "contact": user.phone_no
                },
                handler: paymentCallback
            });

        }catch (e){
            alert.error(e.message());
        }
    }

    return (
        <div>
            <CardContent className='billing_details'>
                <h4>Sender Details:</h4>
                <p>
                    Email :{sender_email_id}
                </p>
                <p>
                    Name :{sender_name}
                </p>
                <p>
                    Contact :{sender_phone_no}
                </p>
                <p>
                    Address :{sender_house_no}, {sender_pincode},{sender_city} ,{sender_state}
                </p>
                <p>
                    {sender_area}
                </p>
            </CardContent>
            <CardContent className='shipping_details'>
                <h4>Shiping Details:</h4>
                <p>
                    {reciver_email_id}
                </p>
                <p>
                    {reciver_name}
                </p>
                <p>
                    {reciver_phone_no}
                </p>
                <p>
                    {reciver_house_no}, {reciver_pincode}, {reciver_city},{reciver_state}
                </p>
                <p>
                    {reciver_area}
                </p>
                <div className='d-flex justify-content-center'>
                    <Button
                        type="button"
                        className='mt-3 address_btn'
                        onClick={handlePayment}
                    >
                        Submit
                    </Button>
                </div>

            </CardContent>
        </div>
    )
}

export default Billing;
