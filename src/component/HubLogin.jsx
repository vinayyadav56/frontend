import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'
import { postRequest } from '../Services/api'
import {useAuth} from "../Services/auth";


const HubLogin = () => {
    const {setLoading, handleUser } = useAuth();
    const [hubUserLogin, setHubUserLogin] = useState({
        username: "",
        password: ""
    })
    let alert = useAlert();
    let history = useHistory();

    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setHubUserLogin({
            ...hubUserLogin,
            [name]: value,
        })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const { username, password } = hubUserLogin;
        if (username && password) {
            setLoading(true);

            postRequest('hubLogin', hubUserLogin).then(result => {
                alert.success(result.message);
                result.success && handleUser(result.userDetails)
                history.push("/hub/dashboard")
            }).catch(error => {
                alert.error(error.message);
            }).finally(() => setLoading(false))
        } else {
            alert.error("Invalid inputs please retry");
        }
    }
    return (
        <Fragment>
            <div className="container-fluid admin-login">
                <div className="row admin-section">
                    <div className="col-12 adminleftctn">
                        <form className="my-form" onSubmit={handleLogin}>
                            <span className="wel-msg">Welcome To Carrykar</span>
                            <span className="log-title text-center">Hub Dashboard</span>
                            <div className="login-det mt-2">
                                <div className="form-group">
                                    <input
                                        type="username"
                                        name="username"
                                        placeholder="Username"
                                        value={hubUserLogin.username}
                                        onChange={handleLoginInput}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={hubUserLogin.password}
                                        onChange={handleLoginInput}
                                    />
                                </div>
                            </div>
                            <div className="admin-footer pt-3">
                                <button type="submit" className="login-btn mt-2">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HubLogin
