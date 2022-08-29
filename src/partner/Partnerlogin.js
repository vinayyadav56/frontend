import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Adminlogin = () => {
  const [partner_email, setPartner_email] = useState("");
  const [partner_password, setPartner_password] = useState("");
  const [error, setError] = useState("");
  const handleEmail = (e) => {
    setPartner_email(e.target.value);
  };

  const handlePassword = (e) => {
    setPartner_password(e.target.value);
  };

  const handleApi = () => {
    if (partner_email === "" || partner_password === "") {
      setError("Fields are required");
      return;
    }

    const {partner_email, partner_password} =

    axios
      .post("http://54.187.167.159/api/lo", {
        partner_email: partner_email,
        partner_password: partner_password,
      })

      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-fluid admin-login">
        <div className="row partner-section">
          <div className="col-12 adminleftctn">
            <div className="my-form">
              <span className="wel-msg">
                Welcome To Carrykar
              </span>
              <span className="log-title">Login to your account</span>
              <div className="login-det mt-2">
                <div className="form-group">
                  <input
                    type="email"
                    name="partner_email"
                    placeholder="Email"
                    value={partner_email}
                    onChange={handleEmail}
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="partner_password"
                    placeholder="Password"
                    value={partner_password}
                    onChange={handlePassword}
                  />
                </div>
              </div>
              <div className="admin-footer">
                <div className="forget-btn">
                  <Link to="/forget">Forget Password ?</Link>
                </div>
                <Link
                  to="/partner/dashboard"
                  className="login-btn"
                  onClick={handleApi}
                >
                  Login
                </Link>
                <span className="footer-title">
                  Don't have an account yet ?
                </span>
                <Link
                  to="/signup"
                  className="signup-btn"
                  onClick={handleApi}
                >
                  SIGNUP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Adminlogin;