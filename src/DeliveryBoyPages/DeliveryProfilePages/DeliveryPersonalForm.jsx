import { useEffect, useState } from "react";
import emailicon from "../../images/emailicon.png";
import {makeRequest} from "../../Services/api";
import {useAuth} from "../../Services/auth";
import {useAlert} from "react-alert";
const DeliveryPersonalForm = () => {
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

    const fetchUser = async () => {
        const userId = user.tokenable_id;
        setLoading(true);
        makeRequest('GET', `user-detail/${userId}`).then(result => {
            alert.success(result.message);
            setuserDatas(result.userDetails[0]);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    }
    useEffect(() => {
        fetchUser()
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
                        <h3>Personal Info</h3>
                        <p>Update your personal detail here</p>
                    </div>
                    <div className="per_form">
                        <div className="row">
                            <div className="form-group py-0 col-6">
                                <label>First Name*</label>
                                <input
                                    name="first_name"
                                    onChange={handleInput}
                                    value={userDatas.first_name}
                                    className="form-control"
                                    type="text"
                                />
                            </div>
                            <div className="form-group py-0 col-6">
                                <label>Last Name*</label>
                                <input
                                    name="last_name"
                                    onChange={handleInput}
                                    value={userDatas.last_name}
                                    className="form-control"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group py-0 col-5 pr-2">
                                <label>Phone Number*</label>
                                <div className="row">
                                    <div className="col-4 pr-0">
                                        <select className="form-control">
                                            <option>+91</option>
                                            <option>+91</option>
                                            <option>+91</option>
                                        </select>
                                    </div>
                                    <div className="col-8 pl-1">
                                        <input
                                            name="phone_no"
                                            onChange={handleInput}
                                            className="form-control"
                                            type="text"
                                            value={userDatas.phone_no}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group py-0 col-7">
                                <label>Email*</label>
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <img src={emailicon} alt="emailicons" />
                                        </span>
                                    </div>
                                    <input
                                        name="email"
                                        onChange={handleInput}
                                        type="text"
                                        value={userDatas.email}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-0">
                            <label>Address*</label>
                            <input
                                name="address"
                                onChange={handleInput}
                                className="form-control"
                                type="text"
                                value={userDatas.address}
                            />
                        </div>
                        <div className="row">
                            <div className="form-group py-0 col-6">
                                <label>PAN Number*</label>
                                <input
                                    name="pan_no"
                                    onChange={handleInput}
                                    className="form-control"
                                    value={userDatas.dob}
                                    type="text"
                                />
                            </div>
                            <div className="form-group py-0 col-6">
                                <label>Aadhar Number*</label>
                                <input
                                    name="aadhar_no"
                                    onChange={handleInput}
                                    value={userDatas.city}
                                    className="form-control"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="form-group py-0">
                            <label>Alternate Number</label>
                            <input
                                name="alt_number"
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

export default DeliveryPersonalForm;
