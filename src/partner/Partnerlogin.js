import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { postRequest } from "../Services/api";
import { useAuth } from "../Services/auth";

const Adminlogin = () => {
  const { setLoading, handleUser } = useAuth();
  let alert = useAlert();
  let history = useHistory();

  const [login_partner, setLogin_partner] = useState({
    partner_email: "",
    partner_password: "",
  });

  const handlePartner = (e) => {
    const { name, value } = e.target;
    setLogin_partner({
      ...login_partner,
      [name]: value,
    });
  };

  const handleApipartner = (e) => {
    e.preventDefault();
    const { partner_email, partner_password } = login_partner;

    if (partner_email && partner_password) {
      setLoading(true);

      postRequest('partner-login', login_partner).then(result => {
        // console.log(result);
        alert.success(result.message);
        handleUser(result.userDetails);
        history.push("/partner/dashboard");
      }).catch(error => {
        alert.error(error.message);
      }).finally(() => {
        setLoading(false);
      });
    } else {
      alert.error("Invalid Inputs");
    }
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
              <span className="log-title">Login As Partner</span>
              <div className="login-det mt-2">
                <div className="form-group">
                  <input
                    type="email"
                    name="partner_email"
                    placeholder="Email"
                    value={login_partner.partner_email}
                    onChange={handlePartner}
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="partner_password"
                    placeholder="Password"
                    value={login_partner.partner_password}
                    onChange={handlePartner}
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
                  onClick={handleApipartner}
                >
                  Login
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
