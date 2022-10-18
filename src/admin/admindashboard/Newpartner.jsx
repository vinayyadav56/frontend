import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import {FormGroup, TextField} from "@material-ui/core";
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

            makeRequest('POST', `partners`, partnerregister).then(result => {
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
            <FormGroup
                onSubmit={(e) => handlePartner(e)}
                className="partner_add"
            >
                <TextField
                    type="text"
                    variant='outlined'
                    margin="normal"
                    size='small'
                    label="Partner Name"
                    name="partner_name"
                    placeholder="Partner Name"
                    onChange={handleInput}
                    value={partnerregister.partner_name}
                ></TextField>
                <TextField
                    type="text"
                    name="partner_email"
                    variant='outlined'
                    margin="normal"
                    size='small'
                    placeholder="Partner Email"
                    label="Partner Email"
                    onChange={handleInput}
                    value={partnerregister.partner_email}
                ></TextField>
                <TextField
                    type="text"
                    name="partner_phone"
                    onChange={handleInput}
                    variant='outlined'
                    margin="normal"
                    size='small'
                    placeholder="Partner Name"
                    label="Phone"
                    value={partnerregister.partner_phone}
                ></TextField>
                <TextField
                    type="text"
                    name="partner_pincode"
                    onChange={handleInput}
                    variant='outlined'
                    margin="normal"
                    size='small'
                    placeholder="Partner Pincode"
                    label="Partner Pincode"
                    value={partnerregister.partner_pincode}
                ></TextField>
                <TextField
                    type="text"
                    name="partner_state"
                    onChange={handleInput}
                    variant='outlined'
                    margin="normal"
                    size='small'
                    placeholder="Partner Name"
                    label="State"
                    value={partnerregister.partner_state}
                ></TextField>
                <TextField
                    type="text"
                    name="partner_city"
                    onChange={handleInput}
                    variant='outlined'
                    margin="normal"
                    size='small'
                    placeholder="Partner City"
                    label="Partner City"
                    value={partnerregister.partner_city}
                ></TextField>
                <TextField
                    type="text"
                    name="partner_address"
                    onChange={handleInput}
                    variant='outlined'
                    margin='normal'
                    size='small'
                    placeholder="Partner Address"
                    label="Partner Address"
                    value={partnerregister.partner_address}
                ></TextField>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">Save Partner</button>
                </div>
            </FormGroup>

        </div>
    );
};

export default Newpartner;
