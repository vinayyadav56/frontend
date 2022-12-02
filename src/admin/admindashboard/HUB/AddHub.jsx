import React, { useState } from "react";
import { useAlert } from "react-alert";
import { postRequest } from '../../../Services/api';
import AddIcon from "@mui/icons-material/Add";
import { useAuth } from "../../../Services/auth";
import { useHistory } from "react-router-dom";
const Newpartner = () => {
    const { setLoading } = useAuth();
    let alert = useAlert();
    let history = useHistory();
    const [hub, setHub] = useState({
        hub_name: "",
        state: "",
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
    const handlePartner = async (e) => {
        e.preventDefault();
        const { hub_name,
            state,
            city,
            pin,
            contact_number,
            alternate_contact_number,
            hub_full_address,
        } = hub;
        if (
            hub_name &&
            state &&
            city &&
            pin &&
            contact_number &&
            alternate_contact_number &&
            hub_full_address
        ) {
            setLoading(true);
            postRequest('createNewHub', hub).then(result => {
                alert.success(result.message);
                result.success && history.push("/admindashboardhub")
            }).catch(error => {
                alert.error(error.message);
            }).finally(() => {
                setLoading(false);
            });
        }
    }
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
                            <form
                                className="partner_add"
                            >
                                <label htmlFor="#hubname">Hub Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="hub_name"
                                    id="hubname"
                                    margin="normal"
                                    size='small'
                                    placeholder="Hub Name"
                                    onChange={handleInput}
                                    value={hub.hub_name}
                                ></input>
                                <label htmlFor="#hubst">State</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="hubst"
                                    name="state"
                                    margin="normal"
                                    size='small'
                                    placeholder="State"
                                    onChange={handleInput}
                                    value={hub.state}
                                ></input>
                                <label htmlFor="#hubct">City</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="hubct"
                                    name="city"
                                    onChange={handleInput}
                                    margin="normal"
                                    size='small'
                                    placeholder="City"
                                    value={hub.city}
                                ></input>
                                <label htmlFor="#hupinc">Pincode</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="hubpinc"
                                    name="pin"
                                    onChange={handleInput}
                                    margin="normal"
                                    size='small'
                                    placeholder="Pincode"
                                    value={hub.pin}
                                ></input>
                                <label htmlFor="#hubcn">Contact Number</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="hubcn"
                                    name="contact_number"
                                    onChange={handleInput}
                                    margin="normal"
                                    size='small'
                                    placeholder="Contact Number"
                                    value={hub.contact_number}
                                ></input>
                                <label htmlFor="#huban">Alternate Number</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="huban"
                                    name="alternate_contact_number"
                                    onChange={handleInput}
                                    margin="normal"
                                    size='small'
                                    placeholder="Alternate Number"
                                    value={hub.alternate_contact_number}
                                ></input>
                                <label htmlFor="#hubadd">Address</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="hubadd"
                                    name="hub_full_address"
                                    onChange={handleInput}
                                    margin='normal'
                                    size='small'
                                    placeholder="Full Address"
                                    value={hub.hub_full_address}
                                ></input>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary" data-dismiss="modal" onClick={(e) => handlePartner(e)}>Add Hub</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newpartner;