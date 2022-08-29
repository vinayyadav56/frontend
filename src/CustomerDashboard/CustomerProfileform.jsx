import React from 'react'
import { Link } from "react-router-dom";
import emailicon from "../images/emailicon.png";
const CustomerProfileform = () => {
  return (
    <div>
          <form>
        {/* {user.map(users =>{
            return(
                <>
                <div key={users.id}>
                  <h1>{users.first_name} </h1>
                </div>
                </>
            )
        })} */}
        <div className="row">
          <div className="form-group col-6">
            <label>First Name</label>
            <input className="form-control" type="text" id="fnameid" />
          </div>
          <div className="form-group col-6">
            <label>Last Name</label>
            <input className="form-control" type="text" id="lnameid" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-5 pr-2">
            <label >Phone No:</label>
            <div className="row">
              <div className="col-4 pr-0">
                <select className="form-control">
                  <option>+91</option>
                  <option>+91</option>
                  <option>+91</option>
                </select>
              </div>
              <div className="col-8 pl-1">
                <input className="form-control" type="text" id="phnid" />
              </div>
            </div>
          </div>
          <div className="form-group col-7">
            <label >Email</label>
            <div className="input-group">
              <div className="input-group-append">
                <span className="input-group-text">
                  <img src={emailicon} alt="emailicons" />
                </span>
              </div>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label >Address</label>
          <input className="form-control" type="text" id="addid" />
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label >PAN No:</label>
            <input className="form-control" type="text" id="pnoid" />
          </div>
          <div className="form-group col-6">
            <label >Aadhar No:</label>
            <input className="form-control" type="text" id="adnid" />
          </div>
        </div>
        <div className="form-group">
          <label >Alternate No:</label>
          <input
            className="form-control optional"
            placeholder="Optional"
            type="text"
            id="altnoid"
          />
        </div>
        <div className="persnl-detail-btns">
          <button className="btn">Save</button>
          <Link to="/resetpassword">Reset Password?</Link>
        </div>
      </form>
    </div>
  )
}

export default CustomerProfileform