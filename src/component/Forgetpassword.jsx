import axios from 'axios';
import {useState} from 'react';
import { useAlert } from "react-alert";
import { useHistory } from 'react-router-dom';
const Forgetpassword = () => {
    let history = useHistory();
    let alert  = useAlert();
   const [newpassword , setNewpassword] = useState({
    email:"",
    password:"",
    confirm_password:"",
   });
   const  handleLoginInput = (e) =>{
    const{ name , value } = e.target;
    setNewpassword({
      ...newpassword,
      [name] : value,
    });
};
   const handleForget = (e) =>{
    e.preventDefault();
    const {email,confirm_password , password} = newpassword ;
    if( email && password === confirm_password ) {
        axios.post("http://35.91.35.188/api/forgot-pass", newpassword)
        .then((result) => {
            alert.show(result.data.message);
            history.push("/login");
        });
}
    else if(password !==confirm_password){
        alert.error("Password must be same");
    }
    else{
        alert.error("Invalid inputs please retry");
      }
}
  return (
    <>
       <div className="container-fluid admin-login">
        <div className="row admin-section forget">
          <div className="col-12 adminleftctn">
              <form className="my-form" onSubmit={handleForget}>
                <span className="wel-msg">Welcome To Carrykar</span>
                <span className="log-title">Forget Your Password</span>
                <div className="login-det mt-2">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={newpassword.email}
                      onChange={handleLoginInput}
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="New Password"
                      value={newpassword.password}
                      onChange={handleLoginInput}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      value={newpassword.confirm_password}
                      onChange={handleLoginInput}
                    />
                  </div>
                </div>
                <div className="admin-footer">
                  <button type="submit" className="login-btn">
                    Save Changes
                  </button>
                </div>
              </form>
      
          </div>
        </div>
      </div>
    </>
  )
}
export default Forgetpassword;