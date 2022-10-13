import React, {useState} from "react";
import "../component/Login.css";
import {Link} from "react-router-dom";
import {useAlert} from "react-alert";
import {useHistory} from "react-router-dom";
import * as API from '../Services/api';
import {useAuth} from "../Services/auth";

const Adminlogin = () => {
    let alert = useAlert();
    let history = useHistory();
    const { setLoading, handleUser} = useAuth();

    const [adminlogin, setAdminlogin] = useState({
        admin_username: "",
        admin_password: "",
    });

    const handleLoginInput = (e) => {
        const {name, value} = e.target;
        setAdminlogin({
            ...adminlogin,
            [name]: value,
        });
    };

    const handleAdminLogin = async (e) => {
        e.preventDefault();
        const {admin_username, admin_password} = adminlogin;

        setLoading(true);

        if (admin_username && admin_password) {
             API.postRequest('admin-login', adminlogin).then(result => {
                alert.success(result.message);
                handleUser(result.success);
                result.success && history.push("/admindashboard")
            }).catch(error => {
                alert.error(error);
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
                <div className="row admin-section">
                    <div className="col-12 adminleftctn">
                        <form className="my-form" onSubmit={handleAdminLogin}>
                            <span className="wel-msg">Welcome To Carrykar</span>
                            <span className="log-title">Login As Admin</span>
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
