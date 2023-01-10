import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../Services/auth";
import { makeRequest } from "../../../Services/api";
const RegisterCompany = () => {
    let alert = useAlert();
    let history = useHistory();
    const { setLoading } = useAuth();

    const [partnerregister, setPartnerregister] = useState({
        company_name: "",
        company_email: "",
        company_password: "",
        company_phone: "",
        company_pincode: "",
        company_state: "",
        company_city: "",
        company_address: "",
        company_locality: "",
        company_gst_no: ""
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
            company_name,
            company_email,
            company_password,
            company_phone,
            company_pincode,
            company_state,
            company_city,
            company_gst_no,
            company_locality,
            company_address,
        } = partnerregister;
        // console.log(handlePartner);
        if (
            company_name &&
            company_email &&
            company_password &&
            company_phone &&
            company_pincode &&
            company_state &&
            company_gst_no &&
            company_locality &&
            company_city &&
            company_address
        ) {
            setLoading(true);
            makeRequest('POST', `createNewPartner`, partnerregister).then(result => {
                alert.success(result.message);
                result.success && history.push("/admindashboard");
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
        <div>
            <button
                type="button"
                className="btn add_partner"
                data-toggle="modal"
                data-target="#exampleModalCenter"
            >
                <AddIcon />
                Add Company
            </button>
            <div
                className="modal fade"
                id="exampleModalCenter"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered add-partner"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">
                                New Company Details
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true" className="modal-off">
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form
                            onSubmit={(e) => handlePartner(e)}
                            className="partner_add"
                        >
                            <label htmlFor='#pn'>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="pn"
                                size='small'
                                name="company_name"
                                placeholder="Company Name"
                                onChange={handleInput}
                                value={partnerregister.company_name}
                            ></input>
                            <label htmlFor='#pe'>Email</label>
                            <input
                                type="email"
                                name="company_email"
                                className="form-control"
                                id="pe"
                                size='small'
                                placeholder="Company Email"
                                onChange={handleInput}
                                value={partnerregister.company_email}
                            ></input>
                            <label htmlFor='#pp'>Password</label>
                            <input
                                type="password"
                                name="company_password"
                                onChange={handleInput}
                                className="form-control"
                                id="pp"
                                size='small'
                                placeholder="Company password"
                                value={partnerregister.company_password}
                            ></input>
                            <label htmlFor='#pnum'>Phone</label>
                            <input
                                type="number"
                                name="company_phone"
                                onChange={handleInput}
                                className="form-control"
                                id="pnum"
                                size='small'
                                placeholder="Company Phone"
                                value={partnerregister.company_phone}
                            ></input>

                            <label htmlFor='#pgst'>GST No*</label>
                            <input
                                type="text"
                                name="company_gst_no"
                                onChange={handleInput}
                                className="form-control"
                                id="pgst"
                                size='small'
                                placeholder="Company GST No"
                                value={partnerregister.company_gst_no}
                            ></input>
                              <label htmlFor='#ploc'>Locality</label>
                            <input
                                type="number"
                                name="company_locality"
                                onChange={handleInput}
                                className="form-control"
                                id="ploc"
                                size='small'
                                placeholder="Company Locality"
                                value={partnerregister.company_locality}
                            ></input>
                            <label htmlFor='#pcd'>Pincode</label>
                            <input
                                type="number"
                                name="company_pincode"
                                onChange={handleInput}
                                className="form-control"
                                id="pcd"
                                size='small'
                                placeholder="Company Pincode"
                                value={partnerregister.company_pincode}
                            ></input>
                            <label htmlFor='#pcity'>City</label>
                            <input
                                type="text"
                                name="company_city"
                                onChange={handleInput}
                                className="form-control"
                                id="pcity"
                                size='small'
                                placeholder="Company City"
                                value={partnerregister.company_city}
                            ></input>
                            <label htmlFor='#pst'>State</label>
                            <input
                                type="text"
                                name="company_state"
                                onChange={handleInput}
                                className="form-control"
                                id="pst"
                                size='small'
                                placeholder="Company state"
                                value={partnerregister.company_state}
                            ></input>

                            <label htmlFor='#padd'>Address</label>
                            <input
                                type="text"
                                name="company_address"
                                onChange={handleInput}
                                size='small'
                                id='padd'
                                className="form-control"
                                placeholder="Company Address"
                                value={partnerregister.company_address}
                            ></input>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-primary">Save Partner</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RegisterCompany;