import { useEffect, useState } from "react";
// import axios from "axios";
import {makeRequest} from "../../Services/api";
import {useAuth} from "../../Services/auth";
import {useAlert} from "react-alert";
const PaymentInfo = ({ userActive }) => {
    const {user, setLoading} = useAuth();
    const alert = useAlert();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setuserDatas({
            ...userDatas,
            [name]: value,
        });
    };

    const [userDatas, setuserDatas] = useState({});

    // const fetchUser = async () => {
    //     const userId = user.tokenable_id;
    //     setLoading(true);

    //     makeRequest('GET', `user-detail/${userId}`).then(result => {
    //         alert.success(result.message);
    //         setuserDatas(result.userDetails[0]);
    //     }).catch(err => {
    //         alert.error(err.message);
    //     }).finally(() => {
    //         setLoading(false);
    //     })
    // }
    
    useEffect(() => {
        setuserDatas(user);
        // eslint-disable-next-line
    }, [])

    // UPDATE USER START
    const handleUpdate = async () => {
        const userId = user.tokenable_id;
        setLoading(true);

        makeRequest('PUT', `profile-update/${userId}`).then(result => {
            alert.success(result.message);
            setuserDatas(result.userDetails[0]);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };

    // UPDATE USERS ENDS
    return (
        <div>
            <div className="container-fluid personal-info-form px-0">
                <div className="col-lg-6 px-0">
                    <div className="headings">
                        <h3>Payment Details</h3>
                        <p>See your payment detail here</p>
                    </div>
                    <div className="per_form">
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <label>Account holder Name*</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={handleInput}
                                    value={userDatas.first_name}
                                />
                            </div>
                            <div className="form-group col-lg-6">
                                <label>Branch Name*</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={handleInput}
                                    value={userDatas.branch_name}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-5 lg-pr-2">
                                <label>Account Number*</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    onChange={handleInput}
                                    value={userDatas.acc_no}
                                />
                            </div>
                            <div className="form-group col-lg-7">
                                <label>IFSC Code*</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        onChange={handleInput}
                                        value={userDatas.ifsc_code}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>UPI Id</label>
                            <input
                                className="form-control"
                                onChange={handleInput}
                                value={userDatas.upi_address}
                                type="text"
                            />
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <label>PAN No:</label>
                                <input
                                    className="form-control"
                                    onChange={handleInput}
                                    value={userDatas.acc_no}
                                    type="text"
                                />
                            </div>
                            <div className="form-group col-lg-6">
                                <label>Aadhar No:</label>
                                <input
                                    className="form-control"
                                    onChange={handleInput}
                                    value={userDatas.acc_no}
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Alternate No:</label>
                            <input
                                className="form-control optional"
                                placeholder="Optional"
                                type="text"
                                onChange={handleInput}
                                value={userDatas.alternate_no}
                            />
                        </div>
                        <div className="persnl-detail-btns">
                            <button className="btn" onClick={handleUpdate}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentInfo;
