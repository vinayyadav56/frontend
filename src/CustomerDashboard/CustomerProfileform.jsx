import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { Link, } from "react-router-dom";
import emailicon from "../images/emailicon.png";
import { makeRequest } from '../Services/api';
import { useAuth } from '../Services/auth';
const CustomerProfileform = () => {
  const { user, setLoading } = useAuth();
  const alert = useAlert();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setuserDatas({
      ...userDatas,
      [name]: value,
    });
  };
  const [userDatas, setuserDatas] = useState({});
  useEffect(() => {
    setuserDatas(user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // UPDATE USER START
  const handleUpdate = async (e) => {
    e.preventDefault()
    const userId = user.tokenable_id;

    setLoading(true);

    makeRequest('PUT', `profile-update/${userId}`).then(result => {
      alert.success(result.message);
      setuserDatas(result.userDetails[0]);
    }).catch(err => {
      alert.error(err.message);
    }).finally(() => {
      setLoading(false);
    })
  };
  // UPDATE USERS ENDS
  
  // const auth = useAuth();
  // if (!auth.isAuthenticated()) {
  //   return <Redirect to="/login" />
  // }
  return (
    <div>
      <form>
        <div className="row">
          <div className="form-group col-6">
            <label>First Name</label>
            <input
              name="first_name"
              onChange={handleInput}
              value={userDatas.first_name}
              className="form-control"
              type="text"
            />
            {/* <input className="form-control" type="text" id="fnameid" /> */}
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
          <button type='button' className="btn" onClick={handleUpdate}>
            Save
          </button>
          <Link to="/resetpassword">Reset Password?</Link>
        </div>
      </form>
    </div>
  )
}

export default CustomerProfileform