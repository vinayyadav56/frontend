import { useState } from 'react';
import { Fragment } from 'react'
import { useAlert } from 'react-alert';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Services/auth';
import { postRequest } from '../Services/api';
const AgentLogin = () => {
    const [loginuser, setLoginuser] = useState({
        email: "",
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
        const { email, password } = loginuser;

        if (email && password) {
            setLoading(true);

            postRequest('login', loginuser).then(result => {
                console.log(result);
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
        </Fragment>
    )
}

export default AgentLogin;