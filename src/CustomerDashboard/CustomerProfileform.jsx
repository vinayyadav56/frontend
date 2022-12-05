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
  console.log(userDatas);
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
            <input
              name="first_name"
              onChange={handleInput}
              value={userDatas.last_name}
              className="form-control"
              type="text"
            />
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
                <input
                  name="first_name"
                  onChange={handleInput}
                  value={userDatas.phone_no}
                  className="form-control"
                  type="text"
                />
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
              <input
                name="first_name"
                onChange={handleInput}
                value={userDatas.email}
                className="form-control"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label >Address</label>
          <input
            name="first_name"
            onChange={handleInput}
            value={userDatas.address}
            className="form-control"
            type="text"
          />
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label >PAN No:</label>
            <input
              name="first_name"
              onChange={handleInput}
              value={userDatas.pan_no}
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group col-6">
            <label >Aadhar No:</label>
            <input
              name="first_name"
              onChange={handleInput}
              value={userDatas.alternate_no}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="form-group">
          <label >Alternate No:</label>
          <input
            name="first_name"
            onChange={handleInput}
            value={userDatas.alternate_no}
            className="form-control"
            type="text"
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