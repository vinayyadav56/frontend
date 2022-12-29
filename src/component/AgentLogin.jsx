import { useState } from 'react';
import { Fragment } from 'react'
import { useAlert } from 'react-alert';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Services/auth';
import { postRequest } from '../Services/api';
import newLogo from '../images/newlogo.png'
const AgentLogin = () => {
    const [loginuser, setLoginuser] = useState({
        email_id: "",
        password: "",
    });
    const { setLoading, handleUser } = useAuth();
    let alert = useAlert();
    let history = useHistory();
    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setLoginuser({
            ...loginuser,
            [name]: value,
        });
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email_id, password } = loginuser;
        if (email_id && password) {
            setLoading(true);
            postRequest('loginDeliveryAgent', loginuser).then(result => {
                alert.success(result.message);
                handleUser(result.userDetails);
                result.success && history.push("/delivery/dashboard")
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
        <Fragment>
            <div className="container-fluid admin-login">
                <div className="d-flex user-login-section">
                    <div className="row signup_form_cs ">
                        <div className="col-md-6 adminleftctn">
                            <form className="my-form" onSubmit={handleLogin}>
                                <span className="wel-msg">Welcome To Carrykar</span>
                                <span className="log-title">Login As Agent</span>
                                <div className="login-det mt-2">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email_id"
                                            placeholder="Email Address"
                                            value={loginuser.email_id}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AgentLogin;