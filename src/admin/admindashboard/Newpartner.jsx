import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import {makeRequest} from "../../Services/api";
import {useAuth} from "../../Services/auth";

const Newpartner = () => {
    let alert = useAlert();
    let history = useHistory();
    const {setLoading} = useAuth();

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
        const {name, value} = e.target;
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
            setLoading(true);

            makeRequest('POST', `createNewPartner`, partnerregister).then(result => {
                alert.success(result.message);
                result.success && history.push("/admindashboard");
                console.log(result)
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
            <form
                onSubmit={(e) => handlePartner(e)}
                className="partner_add"
            >
                <label htmlFor='#pn'>Partner Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="pn"
                    size='small'
                    name="partner_name"
                    placeholder="Partner Name"
                    onChange={handleInput}
                    value={partnerregister.partner_name}
                ></input>
                <label htmlFor='#pe'>Partner Email</label>
                <input
                    type="email"
                    name="partner_email"
                    className="form-control"
                    id="pe"
                    size='small'
                    placeholder="Partner Email"
                    onChange={handleInput}
                    value={partnerregister.partner_email}
                ></input>
                  <label htmlFor='#pp'>Partner Password</label>
                 <input
                    type="password"
                    name="partner_password"
                    onChange={handleInput}
                    className="form-control"
                    id="pp"
                    size='small'
                    placeholder="Partner password"
                    value={partnerregister.partner_password}
                ></input>
                <label htmlFor='#pnum'>Partner Phone</label>
                <input
                    type="number"
                    name="partner_phone"
                    onChange={handleInput}
                    className="form-control"
                    id="pnum"
                    size='small'
                    placeholder="Partner Phone"
                    value={partnerregister.partner_phone}
                ></input>
                <label htmlFor='#pcd'>Partner Pincode</label>
                <input
                    type="number"
                    name="partner_pincode"
                    onChange={handleInput}
                    className="form-control"
                    id="pcd"
                    size='small'
                    placeholder="Partner Pincode"
                    value={partnerregister.partner_pincode}
                ></input>
                <label htmlFor='#pst'>Partner State</label>
                <input
                    type="text"
                    name="partner_state"
                    onChange={handleInput}
                    className="form-control"
                    id="pst"
                    size='small'
                    placeholder="Partner state"
                    value={partnerregister.partner_state}
                ></input>
                <label htmlFor='#pcity'>Partner City</label>
                <input
                    type="text"
                    name="partner_city"
                    onChange={handleInput}
                    className="form-control"
                    id="pcity"
                    size='small'
                    placeholder="Partner City"
                    value={partnerregister.partner_city}
                ></input>
                <label htmlFor='#padd'>Partner Address</label>
                <input
                    type="text"
                    name="partner_address"
                    onChange={handleInput}
                    size='small'
                    id='padd'
                    className="form-control"
                    placeholder="Partner Address"
                    value={partnerregister.partner_address}
                ></input>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">Save Partner</button>
                </div>
            </form>

        </div>
    );
};

export default Newpartner;
