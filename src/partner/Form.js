import axios from "axios";
import React, { useState } from "react";
import { useAlert } from "react-alert";
// import Additem from "./Additem";
import { useHistory } from "react-router-dom";
const Form = () => {
  
  let alert = useAlert();
  let history = useHistory();
  const [createorder, setCreateorder] = useState({
    order_description: "",
    quantity: "",
    order_dimension: "",
    from_location: "",
    to_location: "",
    file:"",
    sender_name: "",
    sender_email: "",
    sender_phone: "",
    sender_city: "",
    sender_state: "",
    sender_pin: "",
    sender_address: "",
    receiver_name: "",
    receiver_email: " ",
    receiver_phone: "",
    receiver_city: "",
    receiver_state: "",
    receiver_pin: "",
    receiver_address: "",
  });
  const handlalert = (createorder) =>{
    alert.success("Submit")
    console.log(createorder.quantity);
  }
  const handleCreateinput = (e) => {
    const { name, value } = e.target;
    setCreateorder({
      ...createorder,
      [name]: value,
    });
  };
  const handleOrder = (e) => {
    e.preventDefault();
    const {
      order_description,
      quantity,
      order_dimension,
      from_location,
      to_location,
      file,
      sender_name,
      sender_email,
      sender_phone,
      sender_city,
      sender_state,
      sender_pin,
      sender_address,
      receiver_name,
      receiver_email,
      receiver_phone,
      receiver_city,
      receiver_state,
      receiver_pin,
      receiver_address,
    } = createorder;
    if (
      order_description &&
      quantity &&
      order_dimension &&
      from_location &&
      to_location &&
      file&&
      sender_name &&
      sender_email &&
      sender_phone &&
      sender_city &&
      sender_state &&
      sender_pin &&
      sender_address &&
      receiver_name &&
      receiver_email &&
      receiver_phone &&
      receiver_city &&
      receiver_state &&
      receiver_pin &&
      receiver_address
    ) {
      axios
        .post("http://35.91.35.188/api/partner-order", createorder)
        .then(() => {
          alert.success("Order succesfully");
          history.push("/partner/dashboard");
        });
    } else {
      alert.error("Please fill all fields");
    }
  };
  return (
    <div>
      <div className="container order-cont">
        <div className="form-title">
          <h2>Create Order</h2>
        </div>
        <div className="order-sum" onSubmit={handleOrder}>
          <form className="order-dis" >
            <div className="form-group mt-2">
              <label for="Textarea1">
                Order Description :
              </label>
              <textarea
                className="form-control"
                placeholder="Enter Description"
                id="Textarea1"
                rows="3"
                name="order_description"
                value={createorder.order_description}
                onChange={handleCreateinput}
              ></textarea>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label for="inputsize">Size</label>
                <input
                  size="dimension"
                  className="form-control"
                  id="inputsize"
                  placeholder="WW/HH/LL"
                  name="order_dimension"
                  value={createorder.order_dimension}
                  onChange={handleCreateinput}
                />
              </div>
              <div className="col-md-6">
                <label for="inputquantity">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Select Quantity"
                  min="0"
                  name="quantity"
                  onChange={handleCreateinput}
                  value={createorder.quantity}
                ></input>
              </div>

              <div className="col-md-6">
                <label for="inputAddress">From :</label>
                <select
                  id="inputfrom"
                  className="form-control"
                  name="from_location"
                  value={createorder.from_location}
                  onChange={handleCreateinput}
                >
                  <option select>Select Location</option>
                  <option>Delhi</option>
                  <option>Goa</option>
                  <option>Mumbai</option>
                </select>
              </div>
              <div className="col-md-6">
                <label for="inputto">To :</label>
                <select
                  id="inputto"
                  name="to_location"
                  value={createorder.to_location}
                  onChange={handleCreateinput}
                  className="form-control"
                >
                  <option selected>Select Location</option>
                  <option>Delhi</option>
                  <option>Goa</option>
                  <option>Mumbai</option>
                </select>
              </div>
              <div className="col-md-6 img-upload">
                <label for="inputimage">Upload Order Packing Image</label>
                <input type="file" value={createorder.file} className="form-control" />
              </div>
            </div>
            <h2 className="sender-info">Sender Details :</h2>
            <div className="form-group row">
              <div className="col-md-4">
                <label for="inputname">Sender Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="sender_name"
                  placeholder="Enter Name"
                  value={createorder.sender_name}
                  onChange={handleCreateinput}
                  autoComplete="off"
                />
              </div>
              <div className="col-md-4">
                <label for="inputemail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="sender_email"
                  value={createorder.sender_email}
                  onChange={handleCreateinput}
                  autoComplete="off"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-md-4">
                <label for="inputphone">Mobile No.</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputphone"
                  onChange={handleCreateinput}
                  value={createorder.sender_phone}
                  name="sender_phone"
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="col-md-4">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="sender_city"
                  value={createorder.sender_city}
                  onChange={handleCreateinput}
                  placeholder="Enter city"
                />
              </div>
              <div className="col-md-4">
                <label for="inputCity">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputstate"
                  placeholder="Enter state"
                  name="sender_state"
                  value={createorder.sender_state}
                  onChange={handleCreateinput}
                />
              </div>
              <div className="col-md-4">
                <label for="inputpin">PIN</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputpin"
                  name="sender_pin"
                  value={createorder.sender_pin}
                  onChange={handleCreateinput}
                  placeholder="Enter PIN"
                />
              </div>
              <div className="col-md-12">
                <label for="inputaddress" className="mt-2">
                  Full Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputaddress"
                  placeholder="Enter full address"
                  name="sender_address"
                  value={createorder.sender_address}
                  onChange={handleCreateinput}
                />
              </div>
            </div>
            <h2 className="sender-info">Receiver Details :</h2>
            <div className="form-group row">
              <div className="col-md-4">
                <label for="inputname">Reciever Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  name="receiver_name"
                  value={createorder.receiver_name}
                  placeholder="Enter name"
                  onChange={handleCreateinput}
                />
              </div>
              <div className="col-md-4">
                <label for="inputemail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail"
                  name="receiver_email"
                  value={createorder.receiver_email}
                  onChange={handleCreateinput}
                  placeholder="Enter email"
                />
              </div>
              <div className="col-md-4">
                <label for="inputphone">Mobile No.</label>
                <input
                  type="phone"
                  className="form-control"
                  id="inputphone"
                  name="receiver_phone"
                  value={createorder.receiver_phone}
                  onChange={handleCreateinput}
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="col-md-4">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="receiver_city"
                  value={createorder.receiver_city}
                  onChange={handleCreateinput}
                  placeholder="Enter city"
                />
              </div>
              <div className="col-md-4">
                <label for="inputCity">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputstate"
                  name="receiver_state"
                  value={createorder.receiver_state}
                  onChange={handleCreateinput}
                  placeholder="Enter state"
                />
              </div>
              <div className="col-md-4">
                <label for="inputpin">PIN</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputpin"
                  name="receiver_pin"
                  value={createorder.receiver_pin}
                  onChange={handleCreateinput}
                  placeholder="Enter PIN"
                />
              </div>
              <div className="col-md-12">
                <label for="inputaddress" className="mt-2">
                  Full Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputaddress"
                  name="receiver_address"
                  value={createorder.receiver_address}
                  onChange={handleCreateinput}
                  placeholder="Enter full address"
                />
              </div>
            </div>
            <div className="partner-order">
              
            </div>
          </form>
          <button type="click"  className="btn btn-danger mx-auto" onClick={handlalert}>
                Create Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
