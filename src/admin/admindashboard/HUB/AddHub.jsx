import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import { FormGroup, TextField } from "@material-ui/core";
const Newpartner = () => {
    let alert = useAlert();
    let history = useHistory();
    const [hub, setHub] = useState({
        state: "",
        partner_password: "",
        city: "",
        pin: "",
        contact_number: "",
        alternate_contact_number: "",
        hub_full_address: "",
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setHub({
            ...hub,
            [name]: value,
        });
    };
    const handlePartner = (e) => {
        e.preventDefault();
        const {
            state,
            partner_password,
            city,
            pin,
            contact_number,
            alternate_contact_number,
            hub_full_address,
        } = hub;
        // console.log(handlePartner);
        if (
            state &&
            partner_password &&
            city &&
            pin &&
            contact_number &&
            alternate_contact_number &&
            hub_full_address
        ) {
            axios
                .post("http://35.91.35.188/api/partners", hub)
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
        <div>
            <button
                type="button"
                className="btn add_partner"
                data-toggle="modal"
                data-target="#deliverypartner"
            >
                <AddIcon />
                Add Hub
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
                                Add Hub Details
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
                                    name="state"
                                    variant='outlined'
                                    margin="normal"
                                    size='small'
                                    placeholder="Hub Name"
                                    label="Hub Name"
                                    onChange={handleInput}
                                    value={hub.state}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="state"
                                    variant='outlined'
                                    margin="normal"
                                    size='small'
                                    placeholder="State"
                                    label="State"
                                    onChange={handleInput}
                                    value={hub.state}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="city"
                                    onChange={handleInput}
                                    variant='outlined'
                                    margin="normal"
                                    size='small'
                                    placeholder="City"
                                    label="City"
                                    value={hub.city}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="pin"
                                    onChange={handleInput}
                                    variant='outlined'
                                    margin="normal"
                                    size='small'
                                    placeholder="Pincode"
                                    label="Pincode"
                                    value={hub.pin}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="contact_number"
                                    onChange={handleInput}
                                    variant='outlined'
                                    margin="normal"
                                    size='small'
                                    placeholder="Contact Number"
                                    label="Contact Number"
                                    value={hub.contact_number}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="alternate_contact_number"
                                    onChange={handleInput}
                                    variant='outlined'
                                    margin="normal"
                                    size='small'
                                    placeholder="Alternate Number"
                                    label="Alternate Number"
                                    value={hub.alternate_contact_number}
                                ></TextField>
                                <TextField
                                    type="text"
                                    name="hub_full_address"
                                    onChange={handleInput}
                                    variant='outlined'
                                    margin='normal'
                                    size='small'
                                    placeholder="Full Address"
                                    label="Full Address"
                                    value={hub.hub_full_address}
                                ></TextField>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary">Add Hub</button>
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newpartner;