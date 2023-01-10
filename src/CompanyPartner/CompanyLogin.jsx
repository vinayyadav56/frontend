import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import { Link, useHistory } from 'react-router-dom';
import { postRequest } from '../Services/api';
import { useAuth } from '../Services/auth';

const CompanyLogin = () => {
    const { setLoading, handleUser } = useAuth();
    let alert = useAlert();
    let history = useHistory();
  
    const [login_partner, setLogin_partner] = useState({
      company_email: "",
      company_password: "",
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
      const { company_email, company_password } = login_partner;
  
      if (company_email && company_password) {
        setLoading(true);
        postRequest('CompanyLogin', login_partner).then(result => {
          alert.success(result.message);
          handleUser(result.CompanyData);
          history.push("/company/dashboard");
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
                      name="company_email"
                      placeholder="Email"
                      value={login_partner.company_email}
                      onChange={handlePartner}
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="company_password"
                      placeholder="Password"
                      value={login_partner.company_password}
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

export default CompanyLogin