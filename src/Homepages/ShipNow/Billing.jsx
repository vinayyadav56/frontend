import { Button, CardContent } from '@material-ui/core'
import React from 'react'
import {CreateShippingOrder, StartPayment} from "../../Services/Payment";
// import axios from "axios";
import {useAuth} from "../../Services/auth";
import {useAlert} from "react-alert";
import {makeRequest} from "../../Services/api";

const Billing = ({ values,handleModalClose, prevStep }) => {
    const {user, setLoading} = useAuth();
    const alert = useAlert();

    const paymentCallback = (res) => {
        setLoading(false);
        createShipmentOrder();
        alert.success("Your payment completed successfully");
    }

    const createShipmentOrder = () => {
        let shipment = {
            "delivery_pincode": values.delivery_pincode,
            "pickup_pincode": values.pickup_pincode,
            "pickup_timing": values.schedule_date,
            "delivery_type": "EXP",
            "sender_id":1,
            "reciever_details": {
                "receiver_name":values.receiver_address.receiver_name,
                "receiver_email": values.receiver_address.receiver_email_id,
                "receiver_contact_no": values.receiver_address.receiver_phone_no,
                "address": {
                    "receiver_house_number":values.receiver_address.receiver_house_no,
                    "receiver_locality": values.receiver_address.receiver_area,
                    "receiver_city": values.receiver_address.receiver_city,
                    "receiver_state": values.receiver_address.receiver_state,
                    "receiver_pincode": values.receiver_address.receiver_pincode
                }
            },
            "package_details": {
                "package_size":"S",
                "package_dimension": "10*20*30",
                "cateogory_id": "1",
                "sub_category_id":"2",
                "additional_details": "test"
            }
        }

        makeRequest('POST', 'createNewShipmentOrderByCustomer', shipment).then(res => {
            console.log(res);
        }).catch(e => {
            console.log(e);
        })

        handleModalClose();
        alert.success("Your Order Created Successfully");
    }

    const handlePayment = async () => {
        try{
            setLoading(true);

            let Order = await CreateShippingOrder({
                amount: values.delivery_cost
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
                    <strong>Name</strong>  :{values.sender_address.sender_name}
                </p>
                <p>
                    <strong>Email</strong>  :{values.sender_address.sender_email_id}
                </p>
                <p>
                    <strong>Contact</strong>  :{values.sender_address.sender_phone_no}
                </p>
                <p>
                    <strong>Address</strong>  :{values.sender_address.sender_house_no},{values.sender_address.sender_area},{values.sender_address.sender_city} ,{values.sender_address.sender_state},{values.sender_address.sender_pincode}
                </p>
            </CardContent>
            <CardContent className='shipping_details'>
                <h4>Shiping Details:</h4>
                <p>
                    <strong>Email</strong>:    {values.receiver_address.receiver_email_id}
                </p>
                <p>
                    <strong>Name</strong>: {values.receiver_address.receiver_name}
                </p>
                <p>
                    <strong>Contact</strong>: {values.receiver_address.receiver_phone_no}
                </p>
                <p>
                    <strong>Address</strong>: {values.receiver_address.receiver_house_no}, {values.receiver_address.receiver_area}, {values.receiver_address.receiver_city},{values.receiver_address.receiver_state}, {values.receiver_address.receiver_pincode}
                </p>

            </CardContent>
            <CardContent className='shipping_details'>
                <h4>Package Details:</h4>
                <p>
                    <strong>Size</strong>: {values.package_size}
                </p>
                <p>
                    <strong>Category</strong>: {values.category}
                </p>
                <p>
                    <strong>Sub Category</strong>: {values.sub_category}
                </p>
                <p>
                    <strong>Schedule Date</strong>: {values.schedule_date}
                </p>
                <strong>Cost:</strong> {values.delivery_cost}

                <div  className='mt-4' style={{ display: 'flex', justifyContent: 'space-between', pt: 2, flex: '1 auto' }}>
                    <Button
                        color="inherit"
                        onClick={prevStep}
                        className='address_btn'
                    >
                        Prev
                    </Button>
                    <Button
                        color="success"
                        type="button"
                        className='address_btn btn-success'
                        onClick={handlePayment}
                    >
                        Proceed
                    </Button>
                </div>
            </CardContent>
        </div>
    )
}

export default Billing;
