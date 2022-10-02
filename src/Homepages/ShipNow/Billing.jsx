import { Card, FormGroup } from '@material-ui/core'
import React from 'react'

const Billing = ({ values, handleFormData, nextStep, prevStep }) => {
    const submitFormData = (e) => {
        e.preventDefault();
    };
    const {
        delivery_pincode,
        pickup_pincode,
        sender_name,
        sender_phone_no,
        sender_email_id,
        sender_house_no,
        sender_area,
        sender_pincode,
        sender_state,
        sender_city} = values;
    return (
        <div>
            <FormGroup onSubmit={submitFormData}>
                <Card style={{ marginTop: 100, textAlign: "left" }}>
                    <Card.Body>
                        <strong>Delivery PinCode</strong>
                        <p>
                            {delivery_pincode}
                        </p>
                        <p>
                            {pickup_pincode}
                        </p>
                        <strong>Sender Details</strong>


                        <p>    {sender_name}</p>
                        <p>{sender_phone_no}</p>
                        <p>{sender_email_id}</p>
                        <p>{sender_house_no}</p>
                        <p>    {sender_area}</p>
                        <p> {sender_pincode}</p>
                        <p>   {sender_state}</p>
                        <p>    {sender_city}</p>
                    </Card.Body>
                </Card>
            </FormGroup>
        </div>
    )
}

export default Billing