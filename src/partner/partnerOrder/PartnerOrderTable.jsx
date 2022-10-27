import React from 'react'
import { Fragment } from 'react'
import "../Partnerdash.css";
import "./pOrderTable.css";
import { useAuth } from '../../Services/auth';
import { useState } from 'react';
import { makeRequest, postRequest } from '../../Services/api';
import { useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
const PartnerOrderTable = () => {
    const { user, setLoading } = useAuth();
    const [open, setopen] = React.useState(false);

    const handleClickOpen = () => {
        setopen(true);
    };

    const handleClose = () => {
        setopen(false);
    };
    const [partnerOrder, setPartnerOrder] = useState([]);

    const fetchData = async () => {
        const partnerId = user.id;
        setLoading(true);
        makeRequest('GET', `partnerOrdersByPartnerId/${partnerId}`).then(result => {
            setPartnerOrder(result.orders);
        })
            .finally(() => {
                setLoading(false);
            })
    };
    console.log(partnerOrder);
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // FETCH ORDER DETAILS BY ORDER ID START 
    const [createorder, setCreateorder] = useState({});
    const handleCreateinput = (e) => {
        const { name, value } = e.target;
        setCreateorder({
            ...createorder,
            [name]: value,
        });
    };

    // PARTNER ORDER API FUNCTION
    const handleOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        postRequest('createNewOrderPartner', createorder).then(result => {
            alert.success(result.message);
            console.log(result.createorder);
        }).catch(error => {
            alert.error(error.message);
        }).finally(() => {
            setLoading(false);
        });
    };
    return (
        <Fragment>
            <div className='container-fluid partnerOr'>
                <h2 className="text-center">All  Order Data</h2>
                <div className='table_partner_data'>
                    {partnerOrder.map((item, id) => (
                        <div>
                            <span className="badge badge-danger">{item.id}</span>
                            <div key={id} className='row table_row_data'>
                                <div className='col-12 mb-3'>
                                    <div className='d-flex justify-content-end'>
                                        <button type="button" className="btn btn-primary mr-2" data-toggle="modal" data-target="#partnerOrderEdit">
                                            Edit Order
                                        </button>
                                        <button
                                            className="btn btn-danger mr-1"
                                            onClick={handleClickOpen}
                                        >
                                            Delete Order
                                        </button>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='porder_formal_details'>
                                        <ul>
                                            <li>
                                                <span>Delivery Type :</span>
                                                <span>{item.delivery_type}</span>
                                            </li>
                                            <li>
                                                <span>Order Dimension :</span>
                                                <span>{item.package_dimension}</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <span>Package Size :</span>
                                                <span>{item.package_size}</span>
                                            </li>
                                            <li>
                                                <span>Package Value :</span>
                                                <span>{item.package_value}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='porder_formal_details'>
                                        <ul>
                                            <li>
                                                <span>Category Id :</span>
                                                <span>{item.cateogory_id}</span>
                                            </li>
                                            <li>
                                                <span>Sub Category Id :</span>
                                                <span>{item.sub_cateogory_id}</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <span>From Hub :</span>
                                                <span>{item.from_hub_id}</span>
                                            </li>
                                            <li>
                                                <span>To Hub :</span>
                                                <span>{item.to_hub_id}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='porder_formal_details my-2'>
                                        <p className='collpase_button_prt'>Sender Details :</p>
                                        <ul>
                                            <li>
                                                <span>Name :</span>
                                                <span>{item.sender_name}</span>
                                            </li>
                                            <li>
                                                <span>Email :</span>
                                                <span>{item.sender_email}</span>
                                            </li>

                                            <li>
                                                <span>Phone :</span>
                                                <span>{item.sender_contact_no}</span>
                                            </li>
                                            <li>
                                                <span>House No  :</span>
                                                <span>{item.sender_house_number}</span>
                                            </li>
                                            <li>
                                                <span>Locality :</span>
                                                <span>{item.sender_locality}</span>
                                            </li>
                                            <li>
                                                <span>Pincode :</span>
                                                <span>{item.sender_pincode}</span>
                                            </li>
                                            <li>
                                                <span>City :</span>
                                                <span>{item.sender_city}</span>
                                            </li>
                                            <li>
                                                <span>State :</span>
                                                <span>{item.sender_state}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='porder_formal_details mb-2'>
                                        <p className='collpase_button_prt'>Receiver Details</p>
                                        <ul>
                                            <li>
                                                <span>Name :</span>
                                                <span>{item.receiver_name}</span>
                                            </li>
                                            <li>
                                                <span>Email :</span>
                                                <span>{item.receiver_email}</span>
                                            </li>

                                            <li>
                                                <span>Phone :</span>
                                                <span>{item.receiver_contact_no}</span>
                                            </li>
                                            <li>
                                                <span>House No :</span>
                                                <span>{item.receiver_house_number}</span>
                                            </li>
                                            <li>
                                                <span>Locality :</span>
                                                <span>{item.receiver_locality}</span>
                                            </li>
                                            <li>
                                                <span>Pincode :</span>
                                                <span>{item.receiver_pincode}</span>
                                            </li>
                                            <li>
                                                <span>City :</span>
                                                <span>{item.receiver_city}</span>
                                            </li>
                                            <li>
                                                <span>State :</span>
                                                <span>{item.receiver_state}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* PARTNER ORDER DETAILS EDIT START */}
            <div className="modal fade" id="partnerOrderEdit" tabindex="-1" role="dialog" aria-labelledby="partnerOrderEditTitle" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
                    <div className="modal-content partner_order_details">
                        <div className="modal-header form-title">
                            <h2 className="modal-title" id="partnerOrderEditTitle">Order Details</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body order-cont">
                            <div className="order-sum">
                                <form className="order-dis" onSubmit={handleOrder}>
                                    <div className="form-group row">
                                        <div className="col-md-6 pl-0">
                                            <label htmlFor="inputcat">Category</label>
                                            <input
                                                id="inputcat"
                                                className="form-control"
                                                name="category_id"
                                                type="text"
                                                placeholder="Enter Category Id"
                                                value={createorder.category_id}
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-6 pl-0">
                                            <label htmlFor="inputsize">Size</label>
                                            <select id="inputsize" value={createorder.package_size} name="package_size" className="form-control"
                                                required type='Select' onChange={handleCreateinput}>
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
                                                onChange={handleCreateinput}
                                                value={createorder.package_dimension}
                                            ></input>
                                        </div>
                                        <div className="col-md-6 pl-0">
                                            <label htmlFor="deliverytype">Delivery Type</label>
                                            <select id="deliverytype" value={createorder.delivery_type} name='delivery_type' className="form-control"
                                                required type='Select' onChange={handleCreateinput}>
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
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
                                                onChange={handleCreateinput}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* PARTNER ORDER DETAILS EDIT ENDS */}
            {/* Delete POPUP START */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you want to delete order?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Once You Delete it , never backup it.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Delete POPUP ENDS */}
        </Fragment>
    )
}

export default PartnerOrderTable