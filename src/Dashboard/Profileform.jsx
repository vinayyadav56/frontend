import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import emailicon from "../images/emailicon.png";
import axios from "axios";
import { useAlert } from "react-alert";
const Profileform = ({ userActive }) => {
  const alert = useAlert();
  const [activeData, setActiveData] = useState({
    first_name: "",
    phone_no: "",
    email: "",
    last_name: "",
    password: "6",
    dob:"" ,
    address: "",
    pincode: "",
    pan_no: "",
    aadhar_no: "",
    state:"",
    city:"",
  });

  // console.log("response userdata static " + JSON.stringify(activeData));

  // function for dynamic input and type in input
  const handleInput = (e) => {
    let newData = activeData;
    newData[e.target.name] = e.target.value;
    setActiveData(newData);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const userId = userActive.id;
    const URL = `http://35.91.35.188/api/profile-update/${userId}`;

    const {
      first_name,
      phone_no,
      email,
      last_name,
      password,
      dob,
      address,
      pincode,
      pan_no,
      aadhar_no,
      state,
      city,
    } = activeData;
    const response = await axios.put(URL, {
      first_name,
      phone_no,
      email,
      last_name,
      password,
      dob,
      address,
      pincode,
      pan_no,
      aadhar_no,
      state,
      city,
    });
    // console.log("editable response " + JSON.stringify(response));
    try {
      if (response.data.success === true) {
        alert.success(response.data.message);
      } else {
        alert.error("Something Went Wrong!");
      }
    } catch {
      alert.error("User Not Updated");
    }
  };

  // const [fetch, setFetch] = useState({
  //   userId: 13,
  // });

  // fetch user by id
  // const fetchUser = async () => {
  //   const response = await axios.post(
  //     "http://35.91.35.188/api/user-detail-byid",
  //     fetch.userId
  //   );
  //   try {
  //     console.log(
  //       "fetch user response " + JSON.stringify(response.data.userDetails)
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <>
      {/* <form> */}
      <div className="per_form">
        <div className="row">
          <div className="form-group col-6">
            <label>First Name*</label>
            <input
              name="first_name"
              onChange={handleInput}
              
              className="form-control"
              type="text"
              id="fnameid"
            />
          </div>
          <div className="form-group col-6">
            <label>Last Name*</label>
            <input
              name="last_name"
              onChange={handleInput}
              className="form-control"
              type="text"
              id="lnameid"
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
                  id="phnid"
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
            id="addid"
          />
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label>PAN Number*</label>
            <input
              name="pan_no"
              onChange={handleInput}
              className="form-control"
              type="text"
              id="pnoid"
            />
          </div>
          <div className="form-group col-6">
            <label>Aadhar Number*</label>
            <input
              name="aadhar_no"
              onChange={handleInput}
              className="form-control"
              type="text"
              id="adnid"
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
            id="altnoid"
          />
        </div>
        <div className="persnl-detail-btns">
          <button className="btn" onClick={handleUpdate}>
            Save
          </button>
        </div>
      </div>
      {/* </form> */}
    </>
  );
};

export default Profileform;
