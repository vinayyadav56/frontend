import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

const Login = ({ addUserLocal }) => {
  // const [loader, setLoader] = useState(false)
  let alert = useAlert();
  let history = useHistory();
  const [loginuser, setLoginuser] = useState({
    email: "",
    password: "",
  });
  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setLoginuser({
      ...loginuser,
      [name]: value,
    });
  };
  const handleLogin =  async(e) => {
    e.preventDefault();
    const { email, password } = loginuser;
    if (email && password) {
    await axios.post("http://35.91.35.188/api/login", loginuser)
    .then((response) => {
        if (response.data.success === true) {
          alert.success(response.data.message);
          // console.log("response.data.loginData " + response.data.loginData);
          addUserLocal(response.data.userDetails);;
          history.push("/carrier/dashboard/postavailabilty");
        } else if (response.data.success === false) {
          alert.success(response.data.message);
        }
      });
    } else {
      alert.error("Invalid Inputs");
    }
  };
  return (
    <>
      <div className="container-fluid admin-login">
        <div className="row user-login-section">
          <div className="col-12 adminleftctn">
            <form className="my-form" onSubmit={handleLogin}>
              <span className="wel-msg">Welcome To Carrykar</span>
              <span className="log-title">Login to continue</span>
              <div className="login-det mt-2">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={loginuser.email}
                    onChange={handleLoginInput}
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={loginuser.password}
                    onChange={handleLoginInput}
                  />
                </div>
              </div>
              <div className="admin-footer">
                <div className="forget-btn">
                  <Link to="/forgetpassword">Forget Password ?</Link>
                </div>
                <button type="submit" className="login-btn">
                  Login
                </button>
                <span className="footer-title">
                  Don't have an account yet ?
                </span>
                <Link
                  to="/signup"
                  className="signup-btn"
                  // onClick={handleApi}
                >
                  SIGNUP
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
