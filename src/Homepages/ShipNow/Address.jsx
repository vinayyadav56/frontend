import { Box, Button, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import { useState } from 'react';
import validator from "validator";
const Address = ({ values, handleFormData, nextStep, prevStep }) => {
    const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to step 2
        if (
            validator.isEmpty(values.pickup_pincode) ||
            validator.isEmpty(values.delivery_pincode)
        ) {
            setError(true);
        } else {
            nextStep();
        }
    };

    return (
        <div>
            <FormGroup onSubmit={submitFormData}>
                <p className="package_text">Address Details</p>
                <FormControl fullWidth variant="outlined" className="my-5" sx={{ display: 'block' }} size="small">
                    <InputLabel id="pickup-address">Pickup Address</InputLabel>
                    <Select
                        labelId="pickup-address"
                        id="pickup-address"
                        label="Pickup Address"
                        placeholder="Enter pickup address"
                        onChange={handleFormData("sender_address")}
                    >
                        <MenuItem>
                            <button type="button" className="btn address_btn" data-toggle="modal" data-target="#addressmodal">
                                <AddIcon />
                            </button>
                        </MenuItem>
                    </Select>
                </FormControl>
                <div className="modal fade address_modal" id="addressmodal" tabIndex="-1" role="dialog" aria-labelledby="addressmodalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addressmodalLabel">Add Pickup Address</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <FormGroup onSubmit={submitFormData}>
                                    <p>Contact Details</p>
                                    <TextField
                                        size="small"
                                        id="pickup_name"
                                        label="Name"
                                        variant="outlined"
                                        placeholder="Enter Name"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("sender_name")}
                                        defaultValue={values.sender_name}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <TextField
                                        size="small"
                                        id="phone"
                                        label="Phone"
                                        variant="outlined"
                                        placeholder="Enter Phone Number"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("sender_phone_no")}
                                        defaultValue={values.sender_phone_no}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <TextField
                                        size="small"
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        placeholder="Enter Email"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("sender_email_id")}
                                        defaultValue={values.sender_email_id}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <p className="mt-2">Address Details</p>
                                    <TextField
                                        size="small"
                                        id="pickup_name"
                                        label="House no."
                                        variant="outlined"
                                        placeholder="Flat/House no./Building/Apartment"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("sender_name")}
                                        defaultValue={values.sender_name}
                                    />
                                    <TextField
                                        size="small"
                                        id="phone"
                                        label="Locality"
                                        variant="outlined"
                                        placeholder="Area,Street,Sector"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("sender_area")}
                                        defaultValue={values.sender_area}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <TextField
                                        size="small"
                                        id="email"
                                        label="Pincode"
                                        variant="outlined"
                                        placeholder="Enter Pincode"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("sender_pincode")}
                                        defaultValue={values.sender_pincode}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <Box>
                                        <TextField
                                            size="small"
                                            id="email"
                                            label="City"
                                            variant="outlined"
                                            placeholder="Enter City"
                                            component="form"
                                            fullWidth
                                            margin="normal"
                                            onChange={handleFormData("sender_city")}
                                            defaultValue={values.sender_city}
                                        />
                                        {error ? (
                                            <Typography style={{ color: "red" }}>
                                                This is a required field
                                            </Typography>
                                        ) : (
                                            ""
                                        )}
                                        <TextField
                                            size="small"
                                            id="email"
                                            label="State"
                                            variant="outlined"
                                            placeholder="Enter State"
                                            margin="normal"
                                            fullWidth
                                            onChange={handleFormData()}
                                            defaultValue={values.sender_state}
                                        />
                                        {error ? (
                                            <Typography style={{ color: "red" }}>
                                                This is a required field
                                            </Typography>
                                        ) : (
                                            ""
                                        )}
                                    </Box>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </FormGroup>
                            </div>

                        </div>
                    </div>
                </div>

                <FormControl fullWidth variant="outlined" className="mb-5" sx={{ display: 'block' }} size="small">
                    <InputLabel id="delivery-address">Delivery Address</InputLabel>
                    <Select
                        labelId="Delivery address"
                        id="delivery-address"
                        label="Delivery Address"
                        placeholder="Enter Delivery address"
                        defaultValue={values.reciver_address}
                        onChange={handleFormData("reciver_address")}
                    >
                        <MenuItem>
                            <button type="button" className="btn address_btn" data-toggle="modal" data-target="#deliveraddress">
                                <AddIcon />
                            </button>
                        </MenuItem>
                    </Select>
                </FormControl>
                <div className="modal fade address_modal" id="deliveraddress" tabIndex="-1" role="dialog" aria-labelledby="deliveraddressLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="deliveraddressLabel">Add Delivery Address</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <FormGroup onSubmit={submitFormData}>
                                    <p>Contact Details</p>
                                    <TextField
                                        size="small"
                                        id="pickup_name"
                                        label="Name"
                                        variant="outlined"
                                        placeholder="Enter Name"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("reciver_name")}
                                        defaultValue={values.reciver_name}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <TextField
                                        size="small"
                                        id="phone"
                                        label="Phone"
                                        variant="outlined"
                                        placeholder="Enter Phone Number"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("reciver_phone_no")}
                                        defaultValue={values.reciver_phone_no}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <TextField
                                        size="small"
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        placeholder="Enter Email"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData()}
                                        defaultValue={values.reciver_email_id}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <p className="mt-2">Address Details</p>
                                    <TextField
                                        size="small"
                                        id="pickup_name"
                                        label="House no."
                                        variant="outlined"
                                        placeholder="Flat/House no./Building/Apartment"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("reciver_house_no")}
                                        defaultValue={values.reciver_house_no}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <TextField
                                        size="small"
                                        id="phone"
                                        label="Locality"
                                        variant="outlined"
                                        placeholder="Area,Street,Sector"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("reciver_area")}
                                        defaultValue={values.reciver_area}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <TextField
                                        size="small"
                                        id="email"
                                        label="Pincode"
                                        variant="outlined"
                                        placeholder="Enter Pincode"
                                        fullWidth
                                        margin="normal"
                                        onChange={handleFormData("reciver_pincode")}
                                        defaultValue={values.reciver_pincode}
                                    />
                                    {error ? (
                                        <Typography style={{ color: "red" }}>
                                            This is a required field
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <Box>
                                        <TextField
                                            size="small"
                                            id="email"
                                            label="City"
                                            variant="outlined"
                                            placeholder="Enter City"
                                            component="form"
                                            fullWidth
                                            margin="normal"
                                            onChange={handleFormData("reciver_city")}
                                            defaultValue={values.reciver_city}
                                        />
                                        {error ? (
                                            <Typography style={{ color: "red" }}>
                                                This is a required field
                                            </Typography>
                                        ) : (
                                            ""
                                        )}

                                        <TextField
                                            size="small"
                                            id="email"
                                            label="State"
                                            variant="outlined"
                                            placeholder="Enter State"
                                            margin="normal"
                                            fullWidth
                                            onChange={handleFormData("reciver_state")}
                                            defaultValue={values.reciver_state}
                                        />
                                        {error ? (
                                            <Typography style={{ color: "red" }}>
                                                This is a required field
                                            </Typography>
                                        ) : (
                                            ""
                                        )}
                                    </Box>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </FormGroup>

                            </div>

                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', pt: 2, flex: '1 auto' }}>
                    <Button
                        color="inherit"
                        onClick={prevStep}
                        type="submit"
                    >
                        Prev
                    </Button>
                    <Button
                        color="primary"
                        onClick={nextStep}
                        type="submit"
                    >
                        Next
                    </Button>
                </div>
                <p className="ship_text">Both the field are Mandatory**</p>
            </FormGroup>



        </div >
    )
}

export default Address