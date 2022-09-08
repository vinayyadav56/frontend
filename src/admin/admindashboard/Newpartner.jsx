import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import axios from "axios";
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
            console.log(response.data);
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
      <form className="partner_add" onSubmit={(e) => handlePartner(e)}>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="partner_name"
          onChange={handleInput}
          value={partnerregister.partner_name}
        ></input>
        <input
          type="text"
          className="form-control"
          name="partner_email"
          placeholder="Email"
          onChange={handleInput}
          value={partnerregister.partner_email}
        ></input>
        <input
          type="text"
          className="form-control"
          name="partner_password"
          onChange={handleInput}
          placeholder="Password"
          value={partnerregister.partner_password}
        ></input>
        <input
          type="text"
          className="form-control"
          name="partner_phone"
          onChange={handleInput}
          placeholder="Phone"
          value={partnerregister.partner_phone}
        ></input>
        <input
          type="text"
          className="form-control"
          name="partner_pincode"
          onChange={handleInput}
          placeholder="Pincode"
          value={partnerregister.partner_pincode}
        ></input>
        <input
          type="text"
          className="form-control"
          name="partner_state"
          onChange={handleInput}
          placeholder="State"
          value={partnerregister.partner_state}
        ></input>
        <input
          type="text"
          name="partner_city"
          className="form-control"
          onChange={handleInput}
          placeholder="City"
          value={partnerregister.partner_city}
        ></input>
        <input
          type="text"
          className="form-control"
          name="partner_address"
          onChange={handleInput}
          placeholder="Address"
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
