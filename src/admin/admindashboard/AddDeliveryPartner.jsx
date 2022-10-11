import React from 'react'
import { Fragment } from 'react'
import AddIcon from "@mui/icons-material/Add";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { FormGroup, TextField } from "@material-ui/core";
const AddDeliveryPartner = () => {
    let alert = useAlert();
    let history = useHistory();
    const [partnerregister, setPartnerregister] = useState({
        partner_name: "",
        partner_email: "",
        partner_password: "",
        partner_phone: "",
        partner_pincode: "",
        partner_state: "",
        partner_city: "",
        partner_address: "",
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setPartnerregister({
            ...partnerregister,
            [name]: value,
        });
    };
    const handlePartner = (e) => {
        e.preventDefault();
        const {
            partner_name,
            partner_email,
            partner_password,
            partner_phone,
            partner_pincode,
            partner_state,
            partner_city,
            partner_address,
        } = partnerregister;
        // console.log(handlePartner);
        if (
            partner_name &&
            partner_email &&
            partner_password &&
            partner_phone &&
            partner_pincode &&
            partner_state &&
            partner_city &&
            partner_address
        ) {
            axios
                .post("http://35.91.35.188/api/partners", partnerregister)
                .then((response) => {
                    if (response.data.success === true) {
                        alert.success(response.data.message);
                        history.push("/admindashboard");
                    } else if (response.data.success === false) {
                        alert.error(response.data.message);
                    }
                });
        } else {
            alert.error("Invalid Inputs");
        }
    };
    return (
        <Fragment>
            <button
                type="button"
                className="btn add_partner"
                data-toggle="modal"
                data-target="#deliverypartner"
            >
                <AddIcon />
                Add Delivery Details Details
            </button>
            <div
                className="modal fade"
                id="deliverypartner"
                role="dialog"
                aria-labelledby="deliverypartnerTitle"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered add-partner"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deliverypartnerTitle">
                                Add Delivery Details Details
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Delivery Close"
                            >
                                <span aria-hidden="true" className="modal-off">
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FormGroup
                                onSubmit={(e) => handlePartner(e)}
                                className="partner_add"
                            >
                                <TextField
                                    type="text"
                                    
                                    margin="normal"
                                    size='small'
                                    label=" Name"
                                    name="partner_name"
                                    placeholder=" Name"
                                    onChange={handleInput}
                                    value={partnerregister.partner_name}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="partner_email"
                                    
                                    margin="normal"
                                    size='small'
                                    placeholder=" Email"
                                    label=" Email"
                                    onChange={handleInput}
                                    value={partnerregister.partner_email}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="partner_phone"
                                    onChange={handleInput}
                                    
                                    margin="normal"
                                    size='small'
                                    placeholder=" Name"
                                    label=" Phone"
                                    value={partnerregister.partner_phone}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="partner_pincode"
                                    onChange={handleInput}
                                    
                                    margin="normal"
                                    size='small'
                                    placeholder=" Pincode"
                                    label=" Pincode"
                                    value={partnerregister.partner_pincode}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="partner_state"
                                    onChange={handleInput}
                                    
                                    margin="normal"
                                    size='small'
                                    placeholder=" Name"
                                    label=" State"
                                    value={partnerregister.partner_state}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="partner_city"
                                    onChange={handleInput}
                                    
                                    margin="normal"
                                    size='small'
                                    placeholder=" City"
                                    label=" City"
                                    value={partnerregister.partner_city}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="partner_address"
                                    onChange={handleInput}
                                    
                                    margin='normal'
                                    size='small'
                                    placeholder=" Address"
                                    label=" Address"
                                    value={partnerregister.partner_address}
                                ></TextField>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary">Save </button>
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AddDeliveryPartner