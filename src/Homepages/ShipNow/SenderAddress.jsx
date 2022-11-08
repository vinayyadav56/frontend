import { Box, Button, FormGroup, TextField } from '@material-ui/core'
import React from 'react'
// import "react-phone-number-input/style.css";
const Address = ({ values, handleFormData, nextStep, prevStep }) => {
    const submitFormData = (e) => {
        e.preventDefault();
        nextStep();
    };

    const handleInputChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        handleFormData("sender_address", {
            ...values.sender_address,
            [name]: val
        });
    }

    return (
        <div>
            <Box>
                <form onSubmit={submitFormData}>
                    <FormGroup sx={{ padding: '0px auto' }} className="address_modal">
                        <h5>Sender Details</h5>
                        <TextField
                            size="small"
                            name="sender_name"
                            label="Name"
                            variant="outlined"
                            placeholder="Enter Name"
                            fullWidth
                            autoFocus
                            margin="dense"
                            required
                            onChange={handleInputChange}
                            defaultValue={values.sender_address.sender_name}
                        />
                        <TextField
                            size="small"
                            name="sender_phone_no"
                            label="Phone"
                            type='number'
                            variant="outlined"
                            placeholder="Enter Phone Number"
                            fullWidth
                            margin="dense"
                            required
                            onChange={handleInputChange}
                            defaultValue={values.sender_address.sender_phone_no}
                        />
                        <TextField
                            size="small"
                            name="sender_email_id"
                            label="Email"
                            type="email"
                            variant="outlined"
                            placeholder="Enter Email"
                            fullWidth
                            margin="dense"
                            required
                            onChange={handleInputChange}
                            defaultValue={values.sender_address.sender_email_id}
                        />
                        <p className="mt-2 package_text">Pickup Address</p>
                        <TextField
                            size="small"
                            name="sender_house_no"
                            label="House no."
                            variant="outlined"
                            placeholder="Flat/House no./Building/Apartment"
                            fullWidth
                            margin="dense"
                            required
                            onChange={handleInputChange}
                            defaultValue={values.sender_address.sender_house_no}
                        />
                        <TextField
                            size="small"
                            name="sender_area"
                            label="Locality"
                            variant="outlined"
                            placeholder="Area,Street,Sector"
                            fullWidth
                            margin="dense"
                            required
                            onChange={handleInputChange}
                            defaultValue={values.sender_address.sender_area}
                        />
                        <TextField
                            size="small"
                            name="sender_pincode"
                            label="Pincode"
                            variant="outlined"
                            placeholder="Enter Pincode"
                            fullWidth
                            margin="dense"
                            inputProps={{readOnly: true}}
                            disabled
                            onChange={handleInputChange}
                            defaultValue={values.sender_address.sender_pincode}
                        />
                        <TextField
                            size="small"
                            name="sender_city"
                            label="City"
                            variant="outlined"
                            placeholder="Enter City"
                            component="form"
                            fullWidth
                            inputProps={{readOnly: true}}
                            disabled
                            margin="dense"
                            onChange={handleInputChange}
                            defaultValue={values.sender_address.sender_city}
                        />
                        <TextField
                            size="small"
                            id="state"
                            label="State"
                            variant="outlined"
                            placeholder="Enter State"
                            margin="dense"
                            fullWidth
                            inputProps={{readOnly: true}}
                            disabled
                            onChange={handleInputChange}
                            defaultValue={values.sender_address.sender_state}
                        />
                        <div className='mt-4' style={{ display: 'flex', justifyContent: 'space-between', pt: 2, flex: '1 auto' }}>
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

export default Address
