import { Box, Button, FormGroup, TextField} from '@material-ui/core'
import React from 'react'
const ReceiverAddress = ({ values, handleFormData, nextStep, prevStep}) => {
    const submitFormData = (e) => {
        e.preventDefault();
        nextStep();
    };

    const handleInputChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        handleFormData("receiver_address", {
            ...values.receiver_address,
            [name]: val
        });

    }

    return (
        <div>
            <Box>
                <form onSubmit={submitFormData}>
                    <FormGroup sx={{padding:'0px auto'}} className="address_modal">
                        <h5>Receiver Details</h5>
                        <TextField
                            size="small"
                            name="receiver_name"
                            label="Name"
                            variant="outlined"
                            placeholder="Enter Name"
                            fullWidth
                            required
                            margin="dense"
                            onChange={handleInputChange}
                            defaultValue={values.receiver_address.receiver_name}
                        />
                        <TextField
                            size="small"
                            name="receiver_phone_no"
                            label="Phone"
                            type='number'
                            variant="outlined"
                            placeholder="Enter Phone Number"
                            fullWidth
                            required
                            margin="dense"
                            onChange={handleInputChange}
                            defaultValue={values.receiver_address.receiver_phone_no}
                        />
                        <TextField
                            size="small"
                            name="receiver_email_id"
                            label="Email"
                            type="email"
                            variant="outlined"
                            placeholder="Enter Email"
                            fullWidth
                            required
                            margin="dense"
                            onChange={handleInputChange}
                            defaultValue={values.receiver_address.receiver_email_id}
                        />
                        <p className="mt-2 package_text">Shipping Address</p>
                        <TextField
                            size="small"
                            name="receiver_house_no"
                            label="House no."
                            variant="outlined"
                            placeholder="Flat/House no./Building/Apartment"
                            fullWidth
                            required
                            margin="dense"
                            onChange={handleInputChange}
                            defaultValue={values.receiver_address.receiver_house_no}
                        />
                        <TextField
                            size="small"
                            name="receiver_area"
                            label="Locality"
                            variant="outlined"
                            placeholder="Area,Street,Sector"
                            fullWidth
                            margin="dense"
                            onChange={handleInputChange}
                            defaultValue={values.receiver_address.receiver_area}
                        />
                        <TextField
                            size="small"
                            name="receiver_pincode"
                            label="Pincode"
                            variant="outlined"
                            placeholder="Enter Pincode"
                            fullWidth
                            inputProps={{readOnly: true}}
                            disabled
                            margin="dense"
                            onChange={handleInputChange}
                            defaultValue={values.receiver_address.receiver_pincode}
                        />
                        <TextField
                            size="small"
                            name="receiver_city"
                            label="City"
                            variant="outlined"
                            placeholder="Enter City"
                            component="form"
                            fullWidth
                            inputProps={{readOnly: true}}
                            disabled
                            margin="dense"
                            onChange={handleInputChange}
                            defaultValue={values.receiver_address.receiver_city}
                        />
                        <TextField
                            size="small"
                            name="receiver_state"
                            label="State"
                            variant="outlined"
                            placeholder="Enter State"
                            margin="dense"
                            fullWidth
                            inputProps={{readOnly: true}}
                            disabled
                            onChange={handleInputChange}
                            defaultValue={values.receiver_address.receiver_state}
                        />
                        <div  className='mt-4' style={{ display: 'flex', justifyContent: 'space-between', pt: 2, flex: '1 auto' }}>
                            <Button
                                color="inherit"
                                onClick={prevStep}
                                className='address_btn'
                            >
                                Prev
                            </Button>
                            <Button
                                color="primary"
                                type="submit"
                                className='address_btn'
                            >
                                Next
                            </Button>
                        </div>
                        <p className="ship_text">All the field are Mandatory**</p>
                    </FormGroup>
                </form>
            </Box>

        </div >
    )
}

export default ReceiverAddress
