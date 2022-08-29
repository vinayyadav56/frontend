import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import Newpartner from "./Newpartner";
// import { Button } from "react-bootstrap";
import axios from "axios";
const Addpartner = () => {
  let alert = useAlert();
  let history = useHistory();
  const [partnerregister, setPartnerregister] = useState({
    partner_email: "",
    partner_password: "",
    partner_state: "",
    partner_name: "",
    partner_city: "",
    partner_address: "",
    partner_phone: "",
    partner_pincode: "",
  });
  const handleInput = (e) => {
    // const newData = { ...partnerregister };
    // newData[e.target.name] = e.target.value;
    // setPartnerregister(newData);
    // console.log("newData" + JSON.stringify(newData));

    const { name, value } = e.target;
    setPartnerregister({
      ...partnerregister,
      [name]: value,
    });
  };

  const handlePartner = (e) => {
    e.preventDefault();

    const {
      partner_email,
      partner_password,
      partner_state,
      partner_name,
      partner_city,
      partner_address,
      partner_phone,
      partner_pincode,
    } = partnerregister;
    axios
      .post("http://35.91.35.188/api/partners", {
        partner_email: partner_email,
        partner_password: partner_password,
        partner_state: partner_state,
        partner_name: partner_name,
        partner_city: partner_city,
        partner_address: partner_address,
        partner_phone: partner_phone,
        partner_pincode: partner_pincode,
      })
      .then((res) => {
        console.log("res " + res);
      });
  };

  // const handlePartner = (e) => {
  //   e.preventDefault();
  //   const {
  //     partner_name ,
  //     partner_email ,
  //     partner_password ,
  //     partner_phone ,
  //     partner_pincode ,
  //     partner_state ,
  //     partner_city ,
  //     partner_address } = partnerregister;
  //   // console.log(handlePartner);
  //   if (
  //     partner_name
  //     &&  partner_email
  //     && partner_password
  //     && partner_phone
  //     && partner_pincode
  //     && partner_state
  //     && partner_city
  //     && partner_address ) {
  //     axios
  //       .post("http://35.91.35.188/api/partners", partnerregister)
  //       .then( (response) => {
  //         console.log(response);
  //         alert.success("Add succesfully");
  //         // history.push("/admindashbaord");
  //       });

  //   } else {
  //     alert.error("Invalid Inputs");
  //   }
  // };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <AddIcon />
        Add Partner
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
                New Partner Details
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
              <Newpartner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addpartner;
