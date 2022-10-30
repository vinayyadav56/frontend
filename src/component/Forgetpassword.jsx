import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useAlert } from "react-alert";
import { useHistory } from 'react-router-dom';
import { postRequest } from "../Services/api";
import { useAuth } from "../Services/auth";

const Forgetpassword = () => {
    const { setLoading } = useAuth();
    let history = useHistory();
    let alert = useAlert();

    const [newpassword, setNewpassword] = useState({
        email: "",
        password: "",
        confirm_password: "",
    });

    const handleLoginInput = (e) => {
        const { name, value } = e.target;
        setNewpassword({
            ...newpassword,
            [name]: value,
        });
    };

    const handleForget = (e) => {
        e.preventDefault();
        const { email, confirm_password, password } = newpassword;
        if (email && password === confirm_password) {
            setLoading(true);

            postRequest('forgot-pass', newpassword).then(result => {
                alert.success(result.message);
                result.success && history.push("/login");
            }).catch(error => {
                alert.error(error.message);
            }).finally(() => {
                setLoading(false);
            });
        } else if (password !== confirm_password) {
            alert.error("Password must be same");
        } else {
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
                                <TextField
                                    size="small"
                                    label="Email Address"
                                    name="email"
                                    variant="outlined"
                                    placeholder="****@gmail.com"
                                    fullWidth
                                    autoFocus
                                    margin="normal"
                                    onChange={handleLoginInput}
                                    value={newpassword.email}
                                >
                                </TextField>
                            </div>
                            <div className="admin-footer mt-4">
                                <button type="submit" className="login-btn">
                                    Send Reset Link
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
