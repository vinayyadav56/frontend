import React, {useState} from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import axios from "axios";
const EditPartner = () => {
  let alert = useAlert();
  let history = useHistory();
  const [partnerregister, setPartnerregister] = useState({
    partner_name: "",
    partner_email: "",
    partner_password: "",
    partner_phone: "",
    partner_pincode: "",
    partner_state: "",
    partner_city: "",
    partner_address: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPartnerregister({
      ...partnerregister,
      [name]: value,
    });
  };
  const handlePartner = (e) => {
    e.preventDefault();
    const {
      partner_name,
      partner_email,
      partner_password,
      partner_phone,
      partner_pincode,
      partner_state,
      partner_city,
      partner_address,
    } = partnerregister;
    if (
      partner_name &&
      partner_email &&
      partner_password &&
      partner_phone &&
      partner_pincode &&
      partner_state &&
      partner_city &&
      partner_address
    ) {
      axios
        .post("http://35.91.35.188/api/partners", partnerregister)
        .then((response) => {
          if (response.data.success === true) {
            alert.success(response.data.message);
            console.log(response.data);
            history.push("/admindashboard");
          } else if (response.data.success === false) {
            alert.error(response.data.message);
          }
        });
    } else {
      alert.error("Invalid Inputs");
    }
  };
  const fetchEditData = async() => {
    const edit = await axios.put("http://35.91.35.188/api/update-user/1")
    console.log(edit)
  };
  return (
    <div>
      <button
        className="btn btn-primary py-0 mr-1"
        data-toggle="modal"
        data-target="#editPartner"
        onClick={fetchEditData}
      >
        EDIT
      </button>
      <div
        className="modal fade"
        id="editPartner"
        role="dialog"
        aria-labelledby="editPartnerTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered add-partner"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editPartnerTitle">
                Partner Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="modal-off">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <form className="partner_add" onSubmit={(e) => handlePartner(e)}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="partner_name"
                  onChange={handleInput}
                  value={partnerregister.partner_name}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_email"
                  placeholder="Email"
                  onChange={handleInput}
                  value={partnerregister.partner_email}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_password"
                  onChange={handleInput}
                  placeholder="Password"
                  value={partnerregister.partner_password}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_phone"
                  onChange={handleInput}
                  placeholder="Phone"
                  value={partnerregister.partner_phone}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_pincode"
                  onChange={handleInput}
                  placeholder="Pincode"
                  value={partnerregister.partner_pincode}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_state"
                  onChange={handleInput}
                  placeholder="State"
                  value={partnerregister.partner_state}
                ></input>
                <input
                  type="text"
                  name="partner_city"
                  className="form-control"
                  onChange={handleInput}
                  placeholder="City"
                  value={partnerregister.partner_city}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_address"
                  onChange={handleInput}
                  placeholder="Address"
                  value={partnerregister.partner_address}
                ></input>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary">Save Partner</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPartner;
