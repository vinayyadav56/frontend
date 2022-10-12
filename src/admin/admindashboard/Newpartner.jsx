import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { FormGroup, FormLabel , TextField } from "@material-ui/core";
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
        <FormLabel sx={{marginTop:'10px'}}  htmlFor='#pname'>Partner Name</FormLabel >
        <TextField
          sx={{ marginTop:'0px' }}
          id="pname"
          type="text"
          variant='outlined'
          margin='none'
        
          size='small'
          name="partner_name"
          placeholder="Partner Name"
          onChange={handleInput}
          value={partnerregister.partner_name}
        ></TextField>
        <FormLabel sx={{marginTop:'10px'}}  htmlFor='#pemail'>Partner Email</FormLabel >
        <TextField
          sx={{ marginTop:'0px' }}
          type="text"
          id="pemail"
          name="partner_email"
          variant='outlined'
          margin='none'
        
          size='small'
          placeholder="Partner Email"
          onChange={handleInput}
          value={partnerregister.partner_email}
        ></TextField>
        <FormLabel sx={{margintop:'10px'}}  htmlFor='#phone'>Partner Phone</FormLabel >
        <TextField
          sx={{ marginTop:'0px' }}
          id="phone"
          type="text"
          name="partner_phone"
          onChange={handleInput}
          variant='outlined'
          margin='none'
        
          size='small'
          placeholder="Partner Name"
          value={partnerregister.partner_phone}
        ></TextField>
        <FormLabel sx={{marginTop:'10px'}}  htmlFor='#pincode'>Partner Pincode</FormLabel >
        <TextField
          sx={{ marginTop:'0px' }}
          id="pincode"
          type="text"
          name="partner_pincode"
          onChange={handleInput}
          variant='outlined'
          margin='none'
        
          size='small'
          placeholder="Partner Pincode"

          value={partnerregister.partner_pincode}
        ></TextField>
        <FormLabel sx={{marginTop:'10px'}}  htmlFor='#state'>Partner State</FormLabel >
        <TextField
          sx={{ marginTop:'0px' }}
          id="state"
          type="text"
          name="partner_state"
          onChange={handleInput}
          variant='outlined'
          margin='none'
        
          size='small'
          placeholder="Partner State"
          value={partnerregister.partner_state}
        ></TextField>
        <FormLabel sx={{marginTop:'10px'}}  htmlFor='#pcity'>Partner City</FormLabel >
        <TextField
          sx={{ marginTop:'0px' }}
          id="pcity"
          type="text"
          name="partner_city"
          onChange={handleInput}
          variant='outlined'
          margin='none'
        
          size='small'
          placeholder="Partner City"
          value={partnerregister.partner_city}
        ></TextField>
        <FormLabel sx={{marginTop:'10px'}}  htmlFor='#paddress'>Partner Address</FormLabel >
        <TextField
          sx={{ marginTop:'0px' }}
          id="paddress"
          type="text"
          name="partner_address"
          onChange={handleInput}
          variant='outlined'
          margin='none'
          size='small'
          placeholder="Partner Address"
          value={partnerregister.partner_address}
        ></TextField>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Save Partner</button>
        </div>
      </FormGroup >

    </div >
  );
};

export default Newpartner;
