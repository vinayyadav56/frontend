// import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import emailicon from "../images/emailicon.png";
// import axios from "axios"
const Paymentform = () => {
  return (
    <>
      <div className="per_form">
        <div className="row">
          <div className="form-group col-6">
            <label>Account holder Name*</label>
            <input className="form-control" type="text" id="fnameid" />
          </div>
          <div className="form-group col-6">
            <label>Branch Name*</label>
            <input className="form-control" type="text" id="lnameid" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-5 pr-2">
            <label>Account Number*</label>
            <input className="form-control" type="text" id="phnid" />
          </div>
          <div className="form-group col-7">
            <label>IFSC Code*</label>
            <div className="input-group">
              {/* <div className="input-group-append">
                <span className="input-group-text">
                  <img src={emailicon} alt="emailicons" />
                </span>
              </div> */}
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>UPI Id</label>
          <input className="form-control" type="text" id="addid" />
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label>PAN No:</label>
            <input className="form-control" type="text" id="pnoid" />
          </div>
          <div className="form-group col-6">
            <label>Aadhar No:</label>
            <input className="form-control" type="text" id="adnid" />
          </div>
        </div>
        <div className="form-group">
          <label>Alternate No:</label>
          <input
            className="form-control optional"
            placeholder="Optional"
            type="text"
            id="altnoid"
          />
        </div>
        <div className="persnl-detail-btns">
          <button className="btn">Save</button>
        </div>
      </div>
    </>
  );
};

export default Paymentform;
