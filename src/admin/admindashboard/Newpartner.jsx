import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { FormGroup, FormLabel, TextField } from "@material-ui/core";
const Newpartner = () => {
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
    <div>
      <FormGroup
        onSubmit={(e) => handlePartner(e)}
        className="partner_add"
      >

        <label htmlFor="#name">Name</label>
        <input
          id='name'
          className="form-control"
          placeholder="Partner Name"
          type="text"
          name="partner_name"
          onChange={handleInput}
          value={partnerregister.partner_name}
        />
        <label htmlFor="#email">Email</label>
        <input
          id="email"
          className="form-control"
          placeholder="Partner Email"
          type="text"
          name="partner_email"
          onChange={handleInput}
          value={partnerregister.partner_email}
        />
        <label htmlFor="#phone">Phone No</label>
        <input
          className="form-control"
          placeholder="Partner Phone Number"
          type="text"
          id='phone'
          name="partner_phone"
          onChange={handleInput}
          value={partnerregister.partner_phone}
        />
        <label htmlFor="#pincode">Pincode</label>
        <input
          id='pincode'
          className="form-control"
          placeholder="Partner Pincode"
          type="text"
          name="partner_pincode"
          onChange={handleInput}
          value={partnerregister.partner_pincode}
        />
        <label htmlFor="#state">State</label>
        <input
          id="state"
          className="form-control"
          placeholder="Partner State"
          type="text"
          name="partner_state"
          onChange={handleInput}
          value={partnerregister.partner_state}
        />
        <label htmlFor="#city">City</label>
        <input
          id="city"
          className="form-control"
          placeholder="Partner City"
          type="text"
          name="partner_city"
          onChange={handleInput}
          value={partnerregister.partner_city}
        />
        <label htmlFor="#address">Address</label>
        <input
          id="address"
          className="form-control"
          placeholder="Partner Address"
          type="text"
          name="partner_address"
          onChange={handleInput}
          value={partnerregister.partner_address}
        />
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Save Partner</button>
        </div>
      </FormGroup >

    </div >
  );
};

export default Newpartner;
