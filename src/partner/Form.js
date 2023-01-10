import React, { Fragment, useEffect, useState } from "react";
import { postRequest } from "../Services/api";
import { useAuth } from "../Services/auth";
import { useAlert } from "react-alert";
// import { useHistory } from "react-router-dom";

const Form = () => {
    const {user, setLoading } = useAuth();
    let alert = useAlert();
    const [createorder, setCreateorder] = useState(
        {
            partner_id: user.id,
            delivery_pincode: 123401,
            pickup_pincode: 123435,
            delivery_type: "express",
            sender_details: {
                sender_name: '',
                sender_email: '',
                sender_contact_no: '',
                address: {
                    sender_house_number: '',
                    sender_locality: '',
                    sender_city: '',
                    sender_state: '',
                    sender_pincode: ''
                }
            },
            reciever_details: {
                receiver_name: '',
                receiver_email: '',
                receiver_contact_no: '',
                address: {
                    receiver_house_number: '',
                    receiver_locality: '',
                    receiver_city: '',
                    receiver_state: '',
                    receiver_pincode: ''
                }
            },
            package_details: {
                package_size: '',
                package_dimension: '',
                cateogory_id: '',
                sub_category_id: '',
                additional_details: 'test'
            }
        }
    );

    const handleCreateinput = (e, key=null, subkey=null) => {
        const { name, value } = e.target;
       
        if(key != null && subkey == null){
            setCreateorder({
                ...createorder,
                [key]:{
                    ...createorder[key],
                    [name]:value
                }
            })
        }else if(key != null && subkey != null){
            setCreateorder({
                ...createorder,
                [key]:{
                    ...createorder[key],
                    [subkey]:{
                        ...createorder[key][subkey],
                        [name]:value   
                    }
                }
            })
        }else{
            setCreateorder({
                ...createorder,
                [name]: value
            });
        }
    };

    useEffect(() => {
      console.log(createorder);
    }, [createorder])
    
    // PARTNER ORDER API FUNCTION
    const handleOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        postRequest('createNewOrderPartner', createorder).then(result => {
            alert.success(result.message);
        }).catch(error => {
            alert.error(error.message);
        }).finally(() => {
            setLoading(false);
        });
    };
    return (
        <Fragment>
            <div className="container order-cont">
                <div className="form-title">
                    <h2>Create Order</h2>
                </div>
                <div className="order-sum">
                    <form className="order-dis" onSubmit={handleOrder}>
                        <div className="form-group row">
                            <div className="col-md-6 pl-0">
                                <label htmlFor="inputcat">Category</label>
                                <input
                                    id="inputcat"
                                    className="form-control"
                                    name="cateogory_id"
                                    type="text"
                                    placeholder="Enter Category Id"
                                    value={createorder.cateogory_id}
                                    onChange={(e) =>handleCreateinput(e, 'package_details')}
                                />
                            </div>
                            <div className="col-md-6 pr-0">
                                <label htmlFor="inputsubcat">Sub Category</label>
                                <input
                                    id="inputsubcat"
                                    type="text"
                                    placeholder="Enter Sub Category"
                                    name="sub_category_id"
                                    value={createorder.sub_category_id}
                                    onChange={(e) =>handleCreateinput(e, 'package_details')}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-6 pl-0">
                                <label htmlFor="inputsize">Size</label>
                                <select id="inputsize" value={createorder.package_size} name="package_size" className="form-control"
                                    required type='Select' onChange={(e) =>handleCreateinput(e, 'package_details')}>
                                    <option>Select Size</option>
                                    <option value="Extra Small" >Extra</option>
                                    <option value="Small" >Small</option>
                                    <option value="Medium" >Medium</option>
                                    <option value="Large" >Large</option>
                                    <option value="Extra Large" >Extra Large</option>
                                </select>
                            </div>
                            <div className="col-md-6 pr-0">
                                <label htmlFor="inputquantity">Package Dimensions</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Select Quantity"
                                    name="package_dimension"
                                    onChange={(e) =>handleCreateinput(e, 'package_details')}
                                    value={createorder.package_dimension}
                                ></input>
                            </div>
                            <div className="col-md-6 pl-0">
                                <label htmlFor="deliverytype">Delivery Type</label>
                                <select id="deliverytype" value={createorder.delivery_type} name='delivery_type' className="form-control"
                                    required type='Select' onChange={(e) =>handleCreateinput(e)}>
                                    <option>Select Delivery Type</option>
                                    <option value="EXP" >Express</option>
                                    <option value="PLT" >Platinum</option>
                                </select>
                            </div>
                        </div>
                        <h2 className="sender-info">Sender Details :</h2>
                        <div className="form-group row">
                            <div className="col-md-4">
                                <label htmlFor="inputname">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="sender_name"
                                    placeholder="Enter Name"
                                    value={createorder.sender_name}
                                    onChange={(e) =>handleCreateinput(e, 'sender_details')}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputemail">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="sender_email"
                                    value={createorder.sender_email}
                                    onChange={(e) =>handleCreateinput(e, 'sender_details')}
                                    autoComplete="off"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputphone">Mobile No.</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="inputphone"
                                    onChange={(e) =>handleCreateinput(e, 'sender_details')}
                                    value={createorder.sender_contact_no}
                                    name="sender_contact_no"
                                    placeholder="Enter mobile number"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputhno">House No</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputhno"
                                    name="sender_house_number"
                                    value={createorder.sender_house_number}
                                    onChange={(e) =>handleCreateinput(e, 'sender_details','address')}
                                    placeholder="Enter House No"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputlocality">Locality</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputlocality"
                                    placeholder="Enter Locality"
                                    name="sender_locality"
                                    value={createorder.sender_locality}
                                    onChange={(e) =>handleCreateinput(e, 'sender_details','address')}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputpin">Pincode</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="inputpin"
                                    name="sender_pincode"
                                    value={createorder.sender_pincode}
                                    onChange={(e) =>handleCreateinput(e, 'sender_details','address')}
                                    placeholder="Enter PIN"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputCity">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputCity"
                                    name="sender_city"
                                    value={createorder.sender_city}
                                    onChange={(e) =>handleCreateinput(e, 'sender_details','address')}
                                    placeholder="Enter city"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputstate">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputstate"
                                    placeholder="Enter state"
                                    name="sender_state"
                                    value={createorder.sender_state}
                                    onChange={(e) =>handleCreateinput(e, 'sender_details','address')}
                                />
                            </div>
                        </div>
                        <h2 className="sender-info">Receiver Details :</h2>
                        <div className="form-group row">
                            <div className="col-md-4">
                                <label htmlFor="inputname">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="receiver_name"
                                    placeholder="Enter Name"
                                    value={createorder.receiver_name}
                                    onChange={(e) =>handleCreateinput(e, 'reciever_details')}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputemail">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="receiver_email"
                                    value={createorder.receiver_email}
                                    onChange={(e) =>handleCreateinput(e, 'reciever_details')}
                                    autoComplete="off"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputphone">Mobile No.</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="inputphone"
                                    onChange={(e) =>handleCreateinput(e, 'reciever_details')}
                                    value={createorder.receiver_contact_no}
                                    name="receiver_contact_no"
                                    placeholder="Enter mobile number"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputhno">House No</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputhno"
                                    name="receiver_house_number"
                                    value={createorder.receiver_house_number}
                                    onChange={(e) =>handleCreateinput(e, 'reciever_details', 'address', 'address')}
                                    placeholder="Enter House No"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputlocality">Locality</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputlocality"
                                    placeholder="Enter Locality"
                                    name="receiver_locality"
                                    value={createorder.receiver_locality}
                                    onChange={(e) =>handleCreateinput(e, 'reciever_details', 'address')}
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputpin">Pincode</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="inputpin"
                                    name="receiver_pincode"
                                    value={createorder.receiver_pincode}
                                    onChange={(e) =>handleCreateinput(e, 'reciever_details', 'address')}
                                    placeholder="Enter PIN"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputCity">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputCity"
                                    name="receiver_city"
                                    value={createorder.receiver_city}
                                    onChange={(e) =>handleCreateinput(e, 'reciever_details', 'address')}
                                    placeholder="Enter city"
                                />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputstate">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputstate"
                                    placeholder="Enter state"
                                    name="receiver_state"
                                    value={createorder.receiver_state}
                                    onChange={(e) =>handleCreateinput(e, 'reciever_details', 'address')}
                                />
                            </div>
                        </div>
                        <div className="d-flex jutify-content-center pb-3">
                            <button type="submit" className="btn btn-danger mx-auto">
                                Create Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Form;
