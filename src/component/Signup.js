import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useAlert } from "react-alert";
// import { myUserContext } from "./UserContext";

const Signup = () => {
  let alert = useAlert();
  let history = useHistory();

  // const [user, setUser] = useContext(myUserContext);
  const [user, setUser] = useState({
    first_name: "",
    phone_no: "",
    email: "",
    last_name:"",
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
          history.push("/carrier/dashboard");
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
        <div className="row signup-section">
          <div className="col-12 adminleftctn">
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
                          <input
                            type="text"
                            name="first_name"
                            className="myInput"
                            placeholder="First name"
                            autoComplete="off"
                            value={user.first_name}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="last_name"
                            className="myInput"
                            placeholder="Last name"
                            autoComplete="off"
                            value={user.last_name}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone_no"
                        className="myInput"
                        id="pHone"
                        placeholder="Phone number"
                        autoComplete="off"
                        value={user.phone_no}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="myInput"
                        id="eMail"
                        placeholder="Email"
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        className="myInput"
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="reEnterPass"
                        className="myInput"
                        id="confPassword"
                        placeholder="Confirm password"
                        autoComplete="off"
                        value={user.reEnterPass}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="date"
                            name="dob"
                            className="myInput"
                            placeholder="DOB"
                            autoComplete="off"
                            value={user.dob}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="pincode"
                            className="myInput"
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
                          <input
                            type="text"
                            name="state"
                            className="myInput"
                            placeholder="State"
                            autoComplete="off"
                            value={user.state}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="city"
                            className="myInput"
                            placeholder="City"
                            autoComplete="off"
                            value={user.city}
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        name="address"
                        className="myInput"
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
                        onClick={() => history.push("/carrier/login")}
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
        </div>
      </div>
    </>
  );
};

export default Signup;
