import { Button, Card, CardContent, FormGroup, Typography } from '@material-ui/core'
import React from 'react'

const Billing = ({ values, prevStep }) => {
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
            <FormGroup>
                <Card sx={{ marginTop: 100, textAlign: "left" }}>
                    <CardContent>
                        <p>Pickup Address:</p>
                        <Typography>
                            {sender_email_id}
                        </Typography>
                        <Typography>
                            {sender_name}
                        </Typography>
                        <Typography>
                            {sender_phone_no}
                        </Typography>
                        <Typography>
                            {sender_house_no}, {sender_pincode},{sender_city} ,{sender_state}
                        </Typography>
                        <Typography>
                            {sender_area}
                        </Typography>
                        
                        <Button
                            onClick={prevStep}
                            type="button"
                            className='address_btn'
                        >
                            Prev
                        </Button>
                        <Button
                            type="button"
                            className='address_btn'
                        >
                            Submit
                        </Button>
                    </CardContent>
                    <CardContent>
                        <p>Shiping Details:</p>
                        <Typography>
                            {reciver_email_id}
                        </Typography>
                        <Typography>
                            {reciver_name}
                        </Typography>
                        <Typography>
                            {reciver_phone_no}
                        </Typography>
                        <Typography>
                            {reciver_house_no}, {reciver_pincode}, {reciver_city},{reciver_state}
                        </Typography>
                        <Typography>
                            {reciver_area}
                        </Typography>
                        <Button
                            onClick={prevStep}
                            type="button"
                            className='address_btn'
                        >
                            Prev
                        </Button>
                        <Button
                            type="button"
                            className='address_btn'
                        >
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            </FormGroup>
        </div>
    )
}

export default Billing;