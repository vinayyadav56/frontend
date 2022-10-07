import { Button, CardContent } from '@material-ui/core'
import React from 'react'

const Billing = ({ values }) => {
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
                    >
                        Submit
                    </Button>
                </div>

            </CardContent>
        </div>
    )
}

export default Billing;