import { Box, Button, FormGroup, TextField} from '@material-ui/core'
import React from 'react'
import UserLocation from './UserLocation';
const Address = ({ values, handleFormData, nextStep, prevStep }) => {
    const submitFormData = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Box>
                <FormGroup onSubmit={submitFormData} sx={{ padding: '0px auto' }} className="address_modal">
                    <h5>Sender Details</h5>
                    <TextField
                        size="small"
                        id="pickup_name"
                        label="Name"
                        variant="outlined"
                        placeholder="Enter Name"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("sender_name")}
                        defaultValue={values.sender_name}
                    />
                    <TextField
                        size="small"
                        id="phone"
                        label="Phone"
                        type='number'
                        variant="outlined"
                        placeholder="Enter Phone Number"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("sender_phone_no")}
                        defaultValue={values.sender_phone_no}
                    />
                    <TextField
                        size="small"
                        id="email"
                        label="Email"
                        variant="outlined"
                        placeholder="Enter Email"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("sender_email_id")}
                        defaultValue={values.sender_email_id}
                    />
                    <p className="mt-2 package_text">Pickup Address</p>
                    <TextField
                        size="small"
                        id="pickup_name"
                        label="House no."
                        variant="outlined"
                        placeholder="Flat/House no./Building/Apartment"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("sender_house_no")}
                        defaultValue={values.sender_house_no}
                    />
                    <UserLocation/>
                    <TextField
                        size="small"
                        id="phone"
                        label="Locality"
                        variant="outlined"
                        placeholder="Area,Street,Sector"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("sender_area")}
                        defaultValue={values.sender_area}
                    />
                    <TextField
                        size="small"
                        id="email"
                        label="Pincode"
                        variant="outlined"
                        placeholder="Enter Pincode"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("sender_pincode")}
                        defaultValue={values.sender_pincode}
                    />
                    <TextField
                        size="small"
                        id="email"
                        label="City"
                        variant="outlined"
                        placeholder="Enter City"
                        component="form"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("sender_city")}
                        defaultValue={values.sender_city}
                    />
                    <TextField
                        size="small"
                        id="email"
                        label="State"
                        variant="outlined"
                        placeholder="Enter State"
                        margin="dense"
                        fullWidth
                        onChange={handleFormData()}
                        defaultValue={values.sender_state}
                    />
                    <div className='mt-4' style={{ display: 'flex', justifyContent: 'space-between', pt: 2, flex: '1 auto' }}>
                        <Button
                            color="inherit"
                            onClick={prevStep}
                            type="submit"
                            className='address_btn'
                        >
                            Prev
                        </Button>
                        <Button
                            color="primary"
                            onClick={nextStep}
                            type="submit"
                            className='address_btn'
                        >
                            Next
                        </Button>
                    </div>
                    <p className="ship_text">All the field are Mandatory**</p>
                </FormGroup>

            </Box>

        </div >
    )
}

export default Address