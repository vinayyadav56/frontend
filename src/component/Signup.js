import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useAlert } from "react-alert";
// import { myUserContext } from "./UserContext";
import newLogo from '../images/newlogo1.png'
const Signup = () => {
  let alert = useAlert();
  let history = useHistory();
  // const [user, setUser] = useContext(myUserContext);
  const [user, setUser] = useState({
    first_name: "",
    phone_no: "",
    email: "",
    last_name: "",
    password: "",
    reEnterPass: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Register = (e) => {
    e.preventDefault();

    const {
      first_name,
      last_name,
      phone_no,
      email,
      password,
      reEnterPass,
      dob,
      address,
      city,
      state,
      pincode,
    } = user;
    if (
      first_name &&
      last_name &&
      phone_no &&
      email &&
      password &&
      dob &&
      state &&
      city &&
      pincode &&
      address &&
      password === reEnterPass
    ) {
      axios.post("http://35.91.35.188/api/register-user", user).then((result) => {
        if (result.data.success === true) {
          alert.success(result.data.message);
          history.push("/carrier/dashboard/postavailabilty");
        } else if (result.data.success === false) {
          alert.success(result.data.message);
        }
      });
    } else {
      alert.error("Invalid inputs");
    }
  };

  return (
    <>
      <div className="container-fluid admin-login signup-log">
        <div className="d-flex signup-section">
          <div className="row signup_form_cs">
            <div className="col-md-6 col-sm-12 adminleftctn">
              <div className="my-form">
                <div className="login-det mt-2">
                  <form onSubmit={Register}>
                    <div>
                      <div className="signup-create">
                        <h3>
                          Create<span className="ml-2">Account</span>
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="#fsname">FirstName</label>
                            <input
                              type="text"
                              name="first_name"
                              id="fsname"
                              className="form-control"
                              required
                              placeholder="First name"
                              autoComplete="off"
                              value={user.first_name}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="#lsname">Last Name</label>
                            <input
                              type="text"
                              name="last_name"
                              id="lsname"
                              className="form-control"
                              required
                              placeholder="Last name"
                              autoComplete="off"
                              value={user.last_name}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="#pHone">Phone No.</label>
                            <input
                              type="number"
                              required
                              pattern="[0-9]{10}"
                              name="phone_no"
                              className="form-control"
                              id="pHone"
                              placeholder="Phone number"
                              autoComplete="off"
                              value={user.phone_no}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="#eMail">Email</label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              required
                              id="eMail"
                              placeholder="Email"
                              autoComplete="off"
                              value={user.email}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="#password" >Password</label>
                            <input
                              name="password"
                              className="form-control"
                              required
                              placeholder="Password"
                              type="password"
                              id="password"
                              autoComplete="off"
                              value={user.password}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="#cnpss">Confirm Password</label>
                            <input
                              type="password"
                              name="reEnterPass"
                              className="form-control"
                              required
                              id="cnpss"
                              placeholder="Confirm password"
                              autoComplete="off"
                              value={user.reEnterPass}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="#selectuser" >User Type</label>
                        <select id="selectuser" value={user.type} name='type' className="form-control"
                          required type='Select' onChange={handleInput}>
                          {console.log(user.type)}
                          <option>Select User</option>
                          <option value="customer" >Customer</option>
                          <option value="carrier" >Carrier</option>
                        </select>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="#dob">DOB</label>
                            <input
                              id="dob"
                              type="date"
                              name="dob"
                              className="form-control"
                              required
                              placeholder="DOB"
                              autoComplete="off"
                              value={user.dob}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="#pcode">Pincode</label>
                            <input
                              type="number"
                              name="pincode"
                              id="pcode"
                              className="form-control"
                              required
                              placeholder="Pin Code"
                              autoComplete="off"
                              value={user.pincode}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="#state">State</label>
                            <input
                              type="text"
                              name="state"
                              id="state"
                              className="form-control"
                              required
                              placeholder="State"
                              autoComplete="off"
                              value={user.state}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="#city">City</label>
                            <input
                              id="city"
                              type="text"
                              name="city"
                              className="form-control"
                              required
                              placeholder="City"
                              autoComplete="off"
                              value={user.city}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="#add">Address</label>
                        <input
                          id="add"
                          name="address"
                          className="form-control"
                          required
                          placeholder="Address"
                          type="text"
                          autoComplete="off"
                          value={user.address}
                          onChange={handleInput}
                        />
                      </div>
                      <p className="sign-footer">
                        Already have an account?
                        <button
                          type="button"
                          onClick={() => history.push("/login")}
                        >
                          Login Here
                        </button>
                      </p>
                      <button className="signup-btn" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 adminrightctn">
              <div className="text_section">
                <div>
                  <Link to='/'>
                    <img src={newLogo} style={{ width: '100px', height: 'auto' }} alt='newalg' />
                  </Link>
                  <h2>Welcome To CarryKar</h2>
                  <Link to='/login' className="btn go_back_btn">Log In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Signup;
