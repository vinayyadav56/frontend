import React, { useState } from "react";
import axios from "axios";
import "../component/Login.css";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
const Adminlogin = ({ addUserLocal }) => {
  let alert = useAlert();
  let history = useHistory();
 const [adminlogin , setAdminlogin] = useState({
  admin_username:"",
  admin_password:"",
 });
 const  handleLoginInput = (e) =>{
  const{ name , value } = e.target;
  setAdminlogin({
    ...adminlogin,
    [name] : value,
  });
 };
  const handleLogin = (e) => {
    e.preventDefault();
    const{admin_username , admin_password} = adminlogin ;
    if(admin_username && admin_password){
      axios
      .post("http://35.91.35.188/api/admin-login", adminlogin)
      .then((result) =>{
        
        if (result.data.success === true) {
          alert.success(result.data.message);
          // console.log("result.data.loginData " + result.data.loginData);
          // addUserLocal(result.data.loginData);
          history.push("/admindashboard");
        } else if (result.data.success === false) {
          alert.success(result.data.message);
        }
      });
      }else{
        alert.error("Invalid inputs please retry");
      }
    };
  return (
    <>
      <div className="container-fluid admin-login">
        <div className="row admin-section">
          <div className="col-12 adminleftctn">
              <form className="my-form" onSubmit={handleLogin}>
                <span className="wel-msg">Welcome To Carrykar</span>
                <span className="log-title">Login to continue</span>
                <div className="login-det mt-2">
                  <div className="form-group">
                    <input
                      type="text"
                      name="admin_username"
                      placeholder="Email Address"
                      value={adminlogin.admin_username}
                      onChange={handleLoginInput}
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="admin_password"
                      placeholder="Enter Password"
                      value={adminlogin.admin_password}
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
                </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
