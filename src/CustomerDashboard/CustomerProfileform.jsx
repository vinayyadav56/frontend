import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import emailicon from "../images/emailicon.png";
import { useAuth } from '../Services/auth';
const CustomerProfileform = () => {

  const {user} = useAuth();
  const auth = useAuth();

  const [userDatas, setuserDatas] = useState({});
  // console.log(userDatas.first_name);
  useEffect(() => {
    setuserDatas(user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  if (!auth.isUser()) {
    return <Redirect to="/login" />
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setuserDatas({
      ...userDatas,
      [name]: value,
    });
  };


  return (
    <div>
      <form>
        <div className="row">
          <div className="form-group py-0 col-6">
            <label>First Name*</label>
            <input
              name="first_name"
              onChange={handleInput}
              value={userDatas.first_name}
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group py-0 col-6">
            <label>Last Name*</label>
            <input
              name="last_name"
              onChange={handleInput}
              value={userDatas.last_name}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group py-0 col-5 pr-2">
            <label>Phone Number*</label>
            <div className="row">
              <div className="col-4 pr-0">
                <select className="form-control">
                  <option>+91</option>
                  <option>+91</option>
                  <option>+91</option>
                </select>
              </div>
              <div className="col-8 pl-1">
                <input
                  name="phone_no"
                  onChange={handleInput}
                  className="form-control"
                  type="text"
                  value={userDatas.phone_no}
                />
              </div>
            </div>
          </div>
          <div className="form-group py-0 col-7">
            <label>Email*</label>
            <div className="input-group">
              <div className="input-group-append">
                <span className="input-group-text">
                  <img src={emailicon} alt="emailicons" />
                </span>
              </div>
              <input
                name="email"
                onChange={handleInput}
                type="text"
                value={userDatas.email}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="form-group py-0">
          <label>Address*</label>
          <input
            name="address"
            onChange={handleInput}
            className="form-control"
            type="text"
            value={userDatas.address}
          />
        </div>
        <div className="row">
          <div className="form-group py-0 col-6">
            <label>PAN Number*</label>
            <input
              name="pan_no"
              onChange={handleInput}
              className="form-control"
              value={userDatas.dob}
              type="text"
            />
          </div>
          <div className="form-group py-0 col-6">
            <label>Aadhar Number*</label>
            <input
              name="aadhar_no"
              onChange={handleInput}
              value={userDatas.city}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="form-group py-0">
          <label>Alternate Number</label>
          <input
            name="alt_number"
            className="form-control optional"
            placeholder="Optional"
            type="text"
            onChange={handleInput}
            value={userDatas.alternate_no}
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