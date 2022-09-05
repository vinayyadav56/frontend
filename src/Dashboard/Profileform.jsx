import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import emailicon from "../images/emailicon.png";
import axios from "axios";
const Profileform = ({ userActive }) => {
  const [user_id, setUser_id] = useState({
    userid : userActive.id,
    first_name:userActive.first_name ,
    phone_no:userActive.phone_no,
    email:userActive.email,
    last_name:userActive.last_name,
    password: userActive.password,
    reEnterPass: userActive.reEnterPass,
    dob:userActive.dob,
    address: userActive.address,
    city: userActive.city,
    state: userActive.state,
    pincode:userActive.pincode,
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      phone_no,
      email,
      address,
      pincode,
    } = user_id;
    if (
      first_name &&
      last_name &&
      phone_no &&
      email &&
      pincode &&
      address
    ) {
      axios.put(`http://35.91.35.188/api/profile-update/${user_id}`, user_id).then((result) => {
        if (result.data.success === true) {
          alert.success(result.data.message);
          history.push("/carrier/dashboard");
        } else if (result.data.success === false) {
          alert.success(result.data.message);
        }
      });
    } else {
      alert("Invalid inputs");
    }
  };



  const handleEdit = (e) => {
    const { name, value } = e.target;
    setUser_id({
      ...user_id,
      [name]: value,
    });
  };
  const history = useHistory();
  const fetchProfileuser = async () => {
    const response = await axios.post(
      'http://35.91.35.188/api/user-detail-byid',user_id
    );
    console.log(response);
    try {
      setUser_id(response.data);
    } catch (error){
      console.error(error);
    }

  };
  useEffect(() => {
    fetchProfileuser();
  }, []);
 
  return (
    <>
      <form>
        <div className="row">
          <div className="form-group col-6">
            <label>First Name*</label>
            <input
              className="form-control"
              type="text"
              id="fnameid"
              onChange={handleEdit}
              value={user_id.first_name}
            />
          </div>
          <div className="form-group col-6">
            <label>Last Name*</label>
            <input
              className="form-control"
              type="text"
              id="lnameid"
              onChange={handleEdit}
              value={user_id.last_name}
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
                  className="form-control"
                  value={user_id.phone_no}
                  onChange={handleEdit}
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
                type="text"
                value={user_id.email}
                onChange={handleEdit}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Address*</label>
          <input
            className="form-control"
            type="text"
            id="addid"
            value={user_id.address}
            onChange={handleEdit}
          />
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label>PAN Number*</label>
            <input
              className="form-control"
              type="text"
              id="pnoid"
              value={user_id.pincode}
              onChange={handleEdit}
            />
          </div>
          <div className="form-group col-6">
            <label>Aadhar Number*</label>
            <input
              className="form-control"
              type="text"
              id="adnid"
              value={user_id.pincode}
              onChange={handleEdit}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Alternate Number</label>
          <input
            className="form-control optional"
            placeholder="Optional"
            type="text"
            id="altnoid"
            value={user_id.phone_no}
            onChange={handleEdit}
          />
        </div>
        <div className="persnl-detail-btns">
          <button className="btn" onClick={handleUpdate}>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Profileform;
