import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { useAuth } from '../Services/auth';
import { postRequest } from '../Services/api';
import newLogo from '../images/newlogo1.png'
const Login = () => {
  const { setLoading, handleUser } = useAuth();
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
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginuser;
    if (email && password) {
      setLoading(true);
      postRequest('login', loginuser).then(result => {
        alert.success(result.message);
        handleUser(result.userDetails);
        if (result.userDetails.is_customer === 1) {
          history.push("/customer/dashboard")
        }
        if(result.userDetails.is_carrier === 1) {
          history.push("/carrier/dashboard")
        }
       
      }).catch(error => {
        alert.error(error.message);
      }).finally(() => {
        setLoading(false);
      });
    } else {
      alert.error("Invalid inputs please retry");
    }

  };

  return (
    <>
      <div className="container-fluid admin-login">
        <div className="d-flex user-login-section">
          <div className="row signup_form_cs ">
            <div className="col-md-6 adminleftctn">
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
            <div className="col-md-6 adminrightctn">
              <div className="text_section">
                <div>
                  <Link to='/'>
                    <img src={newLogo} style={{ width: '100px', height: 'auto' }} alt='newalg' />
                  </Link>
                  <h2>Hello! ,Friends</h2>
                  <Link to='/signup' className="btn go_back_btn">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
