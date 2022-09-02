import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import emailicon from "../images/emailicon.png";
import axios from "axios"
const Profileform = ({userActive}) => {
  const [userEdit, setUserEdit] = useState({
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
  const history = useHistory();
  const id = userActive.id
  // console.log("userId"+ id);
  const fetchProfileuser = async () => {
    const response = await axios.get(`http://35.91.35.188/api/fetch-user/${id}`);
    try {
      console.log("response"+response);
    } catch (error) {
      console.error(error);
    }
    // const res = await reqdata.json();
    // .then((result) =>{
    //     setUser(result.user)
    // })
    // setUserEdit(await res);
  };
  useEffect(() => {
    fetchProfileuser();
  }, []);
  return (
    <>
      <form>
        <div className="row">
          <div className="form-group col-6">
            <label>First Name</label>
            <input className="form-control" type="text" id="fnameid" value={userEdit.first_name}/>
          </div>
          <div className="form-group col-6">
            <label>Last Name</label>
            <input className="form-control" type="text" id="lnameid" value={userEdit.last_name}/>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-5 pr-2">
            <label>Phone No:</label>
            <div className="row">
              <div className="col-4 pr-0">
                <select className="form-control">
                  <option>+91</option>
                  <option>+91</option>
                  <option>+91</option>
                </select>
              </div>
              <div className="col-8 pl-1">
                <input className="form-control" value={userEdit.phone_no} type="text" id="phnid" />
              </div>
            </div>
          </div>
          <div className="form-group col-7">
            <label>Email</label>
            <div className="input-group">
              <div className="input-group-append">
                <span className="input-group-text">
                  <img src={emailicon} alt="emailicons" />
                </span>
              </div>
              <input type="text" value={userEdit.email} className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input className="form-control" type="text" id="addid" value={userEdit.address} />
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label>PAN No:</label>
            <input className="form-control" type="text" id="pnoid" value={userEdit.pincode} />
          </div>
          <div className="form-group col-6">
            <label>Aadhar No:</label>
            <input className="form-control" type="text" id="adnid" value={userEdit.pincode} />
          </div>
        </div>
        <div className="form-group">
          <label>Alternate No:</label>
          <input
            className="form-control optional"
            placeholder="Optional"
            type="text"
            id="altnoid"
            value={userEdit.phone_no}
          />
        </div>
        <div className="persnl-detail-btns">
          <button className="btn" onClick={fetchProfileuser}>Save</button>
          <Link to="/resetpassword">Reset Password?</Link>
        </div>
      </form>
    </>
  );
};

export default Profileform;
