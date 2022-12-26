import React from 'react'
import { Fragment } from 'react'
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import '../admindashboard/Adminmenu.css'
import Previews from './DeliveryImageSelector';
import { makeRequest } from "../../Services/api";
import { useAuth } from "../../Services/auth";
const AddDeliveryPartner = () => {
    let alert = useAlert();
    const { setLoading } = useAuth()

    let history = useHistory();
    const [agent, setAgent] = useState({
        first_name: "",
        last_name: "",
        email_id: "",
        dob: "",
        alter_phone_no: "",
        phone_no: "",
        pin: "",
        state: "",
        city: "",
        linked_hub_id: "",
        current_address: "",
        permanent_address: "",
        pan_card_no: "",
        driving_licence_no: "",
        is_aadhar_verified: 1,
        is_pan_verified: 1,
        is_driving_licence_verified: 1
    });
    const handleInput = (e) => {
        const { name, value } = e.target;
        setAgent({
            ...agent,
            [name]: value,
        });
    };
    const handlePartner = (e) => {
        e.preventDefault();
        const {
            first_name,
            last_name,
            email_id,
            dob,
            phone_no,
            alter_phone_no,
            pin,
            state,
            city,
            current_address,
            permanent_address,
            pan_card_no,
            driving_licence_no,
            linked_hub_id,
            is_pan_verified,
            is_driving_licence_verified,
            is_aadhar_verified

        } = agent;
        if (
            first_name &&
            last_name &&
            email_id &&
            dob &&
            alter_phone_no &&
            phone_no &&
            pin &&
            state &&
            city &&
            current_address &&
            permanent_address &&
            pan_card_no &&
            driving_licence_no &&
            linked_hub_id &&
            is_pan_verified &&
            is_driving_licence_verified &&
            is_aadhar_verified
        ) {
            setLoading(true);

            makeRequest('POST', `createNewDeliveryAgent`, agent).then(result => {
                alert.success(result.message);
                result.success && history.push("/hub/dashboard");
            }).catch(err => {
                alert.error(err.message);
            }).finally(() => {
                setLoading(false);
            })
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
                Add Delivery Partner
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
                                Add Delivery Partner Details
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
                            <form
                                onSubmit={(e) => handlePartner(e)}
                                className="agent_add"
                            >
                                <label for="#hubid">HUB ID</label>
                                <select id='hubid' name='linked_hub_id' className="custom-select" onChange={handleInput} value={agent.linked_hub_id}>
                                    <option selected>Choose hub id</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                                <div className="row mb-3">
                                    <div className="col-6">
                                        <label for="#firstname">FirstName</label>
                                        <input id='firstname' name='first_name' type="text" onChange={handleInput} value={agent.first_name} className="form-control" placeholder="First name" />
                                        <label for="#lastname">LastName</label>
                                        <input id='lastname' name='last_name' type="text" onChange={handleInput} value={agent.last_name} className="form-control" placeholder="Last name" />
                                        <label for="#dob">DOB</label>
                                        <input id='dob' type="date" name='dob' onChange={handleInput} value={agent.dob} className="form-control" placeholder="DOB" />
                                        <label for="#email">Email ID</label>
                                        <input id='email' type="email" name='email_id' onChange={handleInput} value={agent.email_id} className="form-control" placeholder="Email Id" />
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                        <Previews />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label for="#phoneno">Phone No*</label>
                                        <input id='phoneno' name='phone_no' type="number" onChange={handleInput} value={agent.phone_no} className="form-control" placeholder="Phone No" />
                                    </div>
                                    <div className="col">
                                        <label for="#altnumber">Alternate Number</label>
                                        <input type="number" name='alter_phone_no' id="altnumber" onChange={handleInput} value={agent.alter_phone_no} className="form-control" placeholder="Alternate Phone No" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label for="#pin">Pincode</label>
                                        <input id='pin' name='pin' type="number" onChange={handleInput} value={agent.pin} className="form-control" placeholder="Pincode" />
                                    </div>
                                    <div className="col">
                                        <label for="#dlno">Driving License No.</label>
                                        <input id='dlno' name='driving_licence_no' type="text" onChange={handleInput} value={agent.driving_licence_no} className="form-control" placeholder="License No." />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label for="#city">City</label>
                                        <input id='city' name='city' type="text" onChange={handleInput} value={agent.city} className="form-control" placeholder="City" />
                                    </div>
                                    <div className="col">
                                        <label for="#state">State</label>
                                        <input type="text" name='state' id="state" onChange={handleInput} value={agent.state} className="form-control" placeholder="State" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label for="#currentaddress">Current Address</label>
                                        <input name='current_address' id='currentaddress' type="text" onChange={handleInput} value={agent.current_address} className="form-control" placeholder="Current Address" />
                                    </div>
                                    <div className="col">
                                        <label for="#paddress">Permanent Address</label>
                                        <input name='permanent_address' type="text" id="paddress" onChange={handleInput} value={agent.permanent_address} className="form-control" placeholder="Permanent Address" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label for="#panno">Pan No.</label>
                                        <input id='panno' name='pan_card_no' type="text" onChange={handleInput} value={agent.pan_card_no} className="form-control" placeholder="Pan No" />
                                    </div>
                                    <div className="col">
                                        <label for="#addno">Aadhar No.</label>
                                        <input type="number" id="addno" name='aadhar_card_no' onChange={handleInput} value={agent.aadhar_card_no} className="form-control" placeholder="Aadhar No" />
                                    </div>
                                </div>
                                {/* <div className="row mb-3">
                                    <div className="col">
                                        <label for="#panimg">Pan Card Image</label>
                                        <input name='current_address' id='panimg' type="file" onChange={handleInput} value={agent.pan_card_image_link} className="form-control" placeholder="Current Address" />
                                    </div>
                                    <div className="col">
                                        <label for="#acardimg">Aadhar Card Image</label>
                                        <input name='aadhar_card_image_link' type="file" id="acardimg" onChange={handleInput} value={agent.aadhar_card_image_link} className="form-control" placeholder="Permanent Address" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label for="#dliimg">Driving License Image</label>
                                        <input id='dliimg' name='driving_license_image_link' type="file" onChange={handleInput} value={agent.driving_license_image_link} className="form-control" placeholder="Pan No" />
                                    </div>
                                </div> */}
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary">Save Agent</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AddDeliveryPartner
