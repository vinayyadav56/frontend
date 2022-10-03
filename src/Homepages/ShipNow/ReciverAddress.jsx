import { Box, Button, FormGroup, TextField} from '@material-ui/core'
import React from 'react'
const ReciverAddress = ({ values, handleFormData, nextStep, prevStep}) => {
    const submitFormData = (e) => {
        e.preventDefault();
    };

    console.log("My Val " + JSON.stringify(values));

    return (
        <div>
            <Box
                sx={{
                    maxHeight: 300,
                    overflow: 'scroll',
                    padding:'0px auto'
                }}>
                <FormGroup onSubmit={submitFormData} sx={{padding:'0px auto'}} className="address_modal">
                    <h5>Reciver Details</h5>
                    <TextField
                        size="small"
                        id="pickup_name"
                        label="Name"
                        variant="outlined"
                        placeholder="Enter Name"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("reciver_name")}
                        defaultValue={values.reciver_name}
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
                        onChange={handleFormData("reciver_phone_no")}
                        defaultValue={values.reciver_phone_no}
                    />
                    <TextField
                        size="small"
                        id="email"
                        label="Email"
                        variant="outlined"
                        placeholder="Enter Email"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("reciver_email_id")}
                        defaultValue={values.reciver_email_id}
                    />
                    <p className="mt-2 package_text">Shipping Address</p>
                    <TextField
                        size="small"
                        id="pickup_name"
                        label="House no."
                        variant="outlined"
                        placeholder="Flat/House no./Building/Apartment"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("reciver_house_no")}
                        defaultValue={values.reciver_house_no}
                    />
                    <TextField
                        size="small"
                        id="phone"
                        label="Locality"
                        variant="outlined"
                        placeholder="Area,Street,Sector"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("reciver_area")}
                        defaultValue={values.reciver_area}
                    />
                    <TextField
                        size="small"
                        id="email"
                        label="Pincode"
                        variant="outlined"
                        placeholder="Enter Pincode"
                        fullWidth
                        margin="dense"
                        onChange={handleFormData("reciver_pincode")}
                        defaultValue={values.reciver_pincode}
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
                            onChange={handleFormData("reciver_city")}
                            defaultValue={values.reciver_city}
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
                            defaultValue={values.reciver_state}
                        />
                    <div  className='mt-4' style={{ display: 'flex', justifyContent: 'space-between', pt: 2, flex: '1 auto' }}>
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

export default ReciverAddress