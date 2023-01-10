import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useAlert } from 'react-alert';
import { useState, useEffect } from 'react';
import { useAuth } from '../Services/auth';
import { useHistory } from 'react-router-dom';
import { makeRequest } from '../Services/api';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 2,
    pb: 3,
    // Adding media query..
    '@media (max-width: 767px)': {
        width: 330,
    },
};
export default function CommuterSignUp() {
    let alert = useAlert();
    const history = useHistory();
    const auth = useAuth();

    const { setLoading, handleUser } = useAuth();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRedirect = () => {
        history.push("/login")
    }

    // const userid = auth.isAuthenticated() ? user.id : '' ;
    // const user_id = userid
    const [userDatas, setuserDatas] = useState({
        user_id: "",
        pan_no: "",
        aadhar_no: "",
        vehicle_type: "",
        vehicle_registration_number: "",
        driving_licens_number: "",
        type: "dailycommuter"
    });



    const handleInput = (e) => {
        const { name, value } = e.target;
        setuserDatas({
            ...userDatas,
            [name]: value,
        });
    };

    const handleRegisterCommuter = (e) => {
        e.preventDefault();
        setLoading(true);
        makeRequest('POST', `commuterSignup`, userDatas).then(result => {
            alert.success(result.message)
            handleUser(result.userData);
            setOpen(false);

        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })

    };

    useEffect(() => {
        setuserDatas(auth.user)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (auth.isUser() || auth.isCarrier()) {
        return (
            <>
                <button onClick={handleOpen} type="button" className="become-btn">Become a Commuter</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <div id="parent-modal-description">
                            <div className="modal-body p-0">
                                <span aria-hidden="true" className='popup_close_btn' onClick={handleClose}>&times;</span>
                                <form onSubmit={handleRegisterCommuter}>
                                    <div>
                                        <div className="signup-create">
                                            <h3>
                                                Register<span className="ml-2 mb-0">Commuter</span>
                                            </h3>
                                        </div>
                                       


                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor='pan'>Pan No** :</label>
                                                <input type="text" onChange={handleInput} name="pan_no" value={userDatas.pan_no} id='pan' className="form-control" />
                                            </div>
                                            <div className="col">
                                                <label htmlFor='aadhar_no'>Aadhar No** :</label>
                                                <input type="number" id='aadhar_no' onChange={handleInput} name="aadhar_no" value={userDatas.aadhar_no} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col">
                                                <label htmlFor='pan'>Rc Number :</label>
                                                <input type="text" id='pan' onChange={handleInput} name="vehicle_registration_number" value={userDatas.vehicle_registration_number} className="form-control" />
                                            </div>
                                            <div className="col">
                                                <label htmlFor='licenseno'>License No** :</label>
                                                <input type="text" id='licenseno' onChange={handleInput} name="driving_licens_number" value={userDatas.driving_licens_number} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className='col'>
                                                <label htmlFor="Select">Select Vehicle Type</label>
                                                <select id="selectuser" value={userDatas.vehicle_type} name='vehicle_type' className="form-control"
                                                    required type='Select' onChange={handleInput}>
                                                    <option>Select Vehicle Type</option>
                                                    <option value="car">Car</option>
                                                    <option value="bus">Bus</option>
                                                    <option value="bike">Bike</option>
                                                </select>
                                            </div>

                                        </div>
                                        <button type="submit" className='signup-btn mt-4'>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Box>
                </Modal >
            </>
        )
    } else {
        return (
            <button onClick={handleRedirect} type="button" className="become-btn">Become a Commuter</button>
        )
    }
}