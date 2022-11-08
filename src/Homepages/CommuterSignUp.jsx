import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useAlert } from 'react-alert';
import { useState } from 'react';
import { useAuth } from '../Services/auth';
import { useHistory } from 'react-router-dom';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '20px',
    pt: 2,
    px: 2,
    pb: 3,
};
export default function CommuterSignUp() {
    let alert = useAlert();
    const history = useHistory();
    const user = useAuth();
    const [open, setOpen] = React.useState(false);
    const [userLogin, setUserLogin] = useState({
        first_name: "",
        phone_no: "",
        email: "",
        last_name: "",
        password: "",
        reEnterPass: "",
        dob: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value,
        });
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleRedirect = () => {
        history.push("/login")
    }
    const handleClose = () => {
        setOpen(false);
        alert.success("Thanks for joining with us");
    };
    if  (!user.isAuthenticated()) {
        return (
            <button onClick={handleRedirect} type="button" className="become-btn">Become a Commuter</button>
        )
    } else {
        return(
            <>
                <button onClick={handleOpen} type="button" className="become-btn">Become a Commuter</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 500 }}>
                        <div id="parent-modal-description">
                            <div className="modal-body p-0">
                                <span aria-hidden="true" className='popup_close_btn' onClick={handleClose}>&times;</span>
                                <form>
                                    <div>
                                        <div className="signup-create">
                                            <h3>
                                                Register<span className="ml-2 mb-0">User</span>
                                            </h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="#fsname">FirstName</label>
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        id="fsname"
                                                        className="form-control"
                                                        required
                                                        placeholder="First name"
                                                        autoComplete="off"
                                                        value={userLogin.first_name}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="#lsname">Last Name</label>
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        id="lsname"
                                                        className="form-control"
                                                        required
                                                        placeholder="Last name"
                                                        autoComplete="off"
                                                        value={userLogin.last_name}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="#pHone">Phone No.</label>
                                                    <input
                                                        type="number"
                                                        required
                                                        pattern="[0-9]{10}"
                                                        name="phone_no"
                                                        className="form-control"
                                                        id="pHone"
                                                        placeholder="Phone number"
                                                        autoComplete="off"
                                                        value={userLogin.phone_no}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="#eMail">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        required
                                                        id="eMail"
                                                        placeholder="Email"
                                                        autoComplete="off"
                                                        value={userLogin.email}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="#password" >Password</label>
                                                    <input
                                                        name="password"
                                                        className="form-control"
                                                        required
                                                        placeholder="Password"
                                                        type="password"
                                                        id="password"
                                                        autoComplete="off"
                                                        value={userLogin.password}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="#cnpss">Confirm Password</label>
                                                    <input
                                                        type="password"
                                                        name="reEnterPass"
                                                        className="form-control"
                                                        required
                                                        id="cnpss"
                                                        placeholder="Confirm password"
                                                        autoComplete="off"
                                                        value={userLogin.reEnterPass}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="#selectuserLogin" >userLogin Type</label>
                                            <select id="selectuserLogin" value={userLogin.type} name='type' className="form-control"
                                                required type='Select' disabled onChange={handleInput}>
                                                <option value="carrier" >Carrier / Commuter</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="#dob">DOB</label>
                                                    <input
                                                        id="dob"
                                                        type="date"
                                                        name="dob"
                                                        className="form-control"
                                                        required
                                                        placeholder="DOB"
                                                        autoComplete="off"
                                                        value={userLogin.dob}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="#pcode">Pincode</label>
                                                    <input
                                                        type="number"
                                                        name="pincode"
                                                        id="pcode"
                                                        className="form-control"
                                                        required
                                                        placeholder="Pin Code"
                                                        autoComplete="off"
                                                        value={userLogin.pincode}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="#state">State</label>
                                                    <input
                                                        type="text"
                                                        name="state"
                                                        id="state"
                                                        className="form-control"
                                                        required
                                                        placeholder="State"
                                                        autoComplete="off"
                                                        value={userLogin.state}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="#city">City</label>
                                                    <input
                                                        id="city"
                                                        type="text"
                                                        name="city"
                                                        className="form-control"
                                                        required
                                                        placeholder="City"
                                                        autoComplete="off"
                                                        value={userLogin.city}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="#add">Address</label>
                                            <input
                                                id="add"
                                                name="address"
                                                className="form-control"
                                                required
                                                placeholder="Address"
                                                type="text"
                                                autoComplete="off"
                                                value={userLogin.address}
                                                onChange={handleInput}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button onClick={handleClose} className='signup-btn'>Register</button>
                    </Box>
                </Modal>
            </>
        )


    }
}