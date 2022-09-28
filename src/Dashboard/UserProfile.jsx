import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import { useEffect, useState } from "react";
import axios from "axios";
import emailicon from "../images/emailicon.png";
const UserProfile = ({ addUserLocal, userActive }) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setuserDatas({
      ...userDatas,
      [name]: value,
    });
  };

  const [userDatas, setuserDatas] = useState({});

  const fetchUser  = async() => {
    const userId = userActive.tokenable_id;
    const response = await axios.get(
      `http://35.91.35.188/api/user-detail/${userId}`
    );
    try {
      setuserDatas(response.data.userDetails[0]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUser()
      // eslint-disable-next-line
  }, [])


  // UPDATE USER START
  const handleUpdate = async () => {
    const userId = userActive.tokenable_id;
    const res = await axios.put(
      `http://35.91.35.188/api/profile-update/${userId}`
    );
    try {
      setuserDatas(res.data.userDetails[0]);
    } catch (error) {
      console.log(error);
    }
  };
  // UPDATE USERS ENDS
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar userActive={userActive} />
        <section className="main-content">
          <Header addUserLocal={addUserLocal} />
          <div className="container-fluid personal-info-form">
            <div className="row">
              <div className="col-lg-6 mt-4">
                <div className="headings">
                  <h3>Personal Info</h3>
                  <p>Update your personal detail here</p>
                </div>
                <div className="per_form">
                  <div className="row">
                    <div className="form-group col-6">
                      <label>First Name*</label>
                      <input
                        name="first_name"
                        onChange={handleInput}
                        value={userDatas.first_name}
                        className="form-control"
                        type="text"
                      />
                    </div>
                    <div className="form-group col-6">
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
                    <div className="form-group col-5 pr-2">
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
                    <div className="form-group col-7">
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
                  <div className="form-group">
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
                    <div className="form-group col-6">
                      <label>PAN Number*</label>
                      <input
                        name="pan_no"
                        onChange={handleInput}
                        className="form-control"
                        value={userDatas.dob}
                        type="text"
                      />
                    </div>
                    <div className="form-group col-6">
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
                  <div className="form-group">
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
              <div className="col-lg-6 mt-4">
                <div className="headings">
                  <h3>Payment Details</h3>
                  <p>See your payment detail here</p>
                </div>
                <div className="per_form">
                  <div className="row">
                    <div className="form-group col-6">
                      <label>Account holder Name*</label>
                      <input
                        className="form-control"
                        type="text"
                        onChange={handleInput}
                        value={userDatas.first_name}
                      />
                    </div>
                    <div className="form-group col-6">
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
                    <div className="form-group col-5 pr-2">
                      <label>Account Number*</label>
                      <input
                        className="form-control"
                        type="password"
                        onChange={handleInput}
                        value={userDatas.acc_no}
                      />
                    </div>
                    <div className="form-group col-7">
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
                    <div className="form-group col-6">
                      <label>PAN No:</label>
                      <input
                        className="form-control"
                        onChange={handleInput}
                        value={userDatas.acc_no}
                        type="text"
                      />
                    </div>
                    <div className="form-group col-6">
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
        </section>
      </section>
    </div>
  );
};

export default UserProfile;
