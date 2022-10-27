import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import './recentOrder.css';
import { useState } from 'react';
import { makeRequest } from "../../../Services/api";
import { useAuth } from '../../../Services/auth';
import { useEffect } from 'react';
import QrMake from './QrMake';

const RecenteOrder = ({ qr }) => {
    const { setLoading } = useAuth();
    const [newOrder, setNewOrder] = useState([]);
    const fetchData = async () => {
        setLoading(true);
        makeRequest('GET', `fetchNewOrders`).then(result => {
            // alert.success(result.message);
            // result.success && 
            setNewOrder(result.data);
        })
            // .catch(err => {
            //     alert.error(err.message);
            // })
            .finally(() => {
                setLoading(false);
            })
    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleId = (id) => {
        console.log(id);
    }
    return (
        <Fragment>
            <nav className="sticky-top partnerdash-nav">
                <div className="partner-sidebar">
                    <span className="top-name">Carry Kar</span>
                    <div className="search-bar">
                        <SearchSharpIcon />
                        <input type="search" placeholder="Search" />
                    </div>
                    <div className="profile-area">
                        <div className="profile">
                            <div className="profile-photo">
                                <AccountCircleRoundedIcon />
                            </div>

                            <div className="dropdown show">
                                <Link
                                    className="btn dropdown-toggle"
                                    to="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span className='pl-0'>User Name</span>
                                </Link>

                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <Link className="dropdown-item" to="/admin">
                                        Logout
                                    </Link>
                                    <Link className="dropdown-item" to="/">
                                        Change Profile
                                    </Link>
                                    <Link className="dropdown-item" to="/setting">
                                        Setting
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <button id="menu-btn">
                            <MenuRoundedIcon />
                        </button>
                    </div>
                </div>
            </nav>
            <main>
                <aside>
                    <AdminSidebar />
                </aside>
                <section className="right">
                    <div className="table-heading">
                        <h2 className="text-center ">All Order Data</h2>
                    </div>
                    <div className='all_order_table'>
                        <div className="container-fluid">
                            {newOrder.map((item, id) => {
                                if (item.source === "CO") {
                                    return (
                                        <>
                                            <span className="badge badge-danger">{item.source}</span>
                                            <div key={id} className='row table_box'>
                                                <div className='col-lg-3 col-md-6 agent_details_col  mt-1'>
                                                    <h2>Receiver Details :</h2>
                                                    <span className='pl-0'>
                                                        <p>Name : </p>
                                                        <p>{item.receiver_name}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Email : </p>
                                                        <p>{item.receiver_email}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Phone No : </p>
                                                        <p>{item.receiver_contact_no}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>House No : </p>
                                                        <p>{item.receiver_house_number}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p> Locality: </p>
                                                        <p>{item.receiver_locality} </p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>City : </p>
                                                        <p>{item.receiver_city}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>State : </p>
                                                        <p>{item.receiver_state} </p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Pincode : </p>
                                                        <p>{item.receiver_pincode}</p>
                                                    </span>
                                                </div>
                                                <div className='col-lg-3 col-md-6 agent_details_col  mt-1'>
                                                    <h2>Sender Details :</h2>
                                                    <span className='pl-0'>
                                                        <p>Name : </p>
                                                        <p>{item.sender_details.first_name}{item.sender_details.last_name} </p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Email : </p>
                                                        <p>{item.sender_details.email}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Pincode : </p>
                                                        <p>{item.sender_details.pincode}</p>
                                                    </span>

                                                    <span className='pl-0'>
                                                        <p>City : </p>
                                                        <p>{item.sender_details.city}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>State : </p>
                                                        <p>{item.sender_details.state} </p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Address : </p>
                                                        <p>{item.sender_details.address}</p>
                                                    </span>
                                                </div>
                                                <div className='col-lg-6 col-md-12 agent_verify_col mt-1'>
                                                    <div className='row '>
                                                        <div className='col address_detail_col'>
                                                            <h2>Shipping Details :</h2>
                                                            <div>
                                                                <span className='pl-0'>
                                                                    <p>Permanent Address:</p>
                                                                    <p>
                                                                        87, Block A, Mayur Vihar Extension,122192, Delhi, New-Delhi
                                                                    </p>
                                                                </span>
                                                                <span className='pl-0'>

                                                                    <p>Current  Address:</p>
                                                                    <p>
                                                                        87, Block A, Mayur Vihar Extension,122192, Delhi, New-Delhi
                                                                    </p>
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className='row mt-5'>
                                                        <div className='col-md-6 pr-0 '>
                                                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#partnerprintid" onClick={handleId(item.id)}>
                                                                Generate Invoice
                                                            </button>
                                                        </div>
                                                        <div className='col-md-6 text-right'>
                                                            <QrMake path={item.qr_image_path} orderid={item.id} ordertype={item.source} />
                                                        </div>
                                                    </div>
                                                    <div className='row mt-5'>
                                                        <div className='col status_track_col'>
                                                            <ul className='d-flex align-items-center pl-3'>
                                                                <li className='dot1'>

                                                                </li>
                                                                <li className='dot2'>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="modal fade" id="partnerprintid" tabindex="-1" role="dialog" aria-labelledby="partnerprintidLabel" aria-hidden="true">
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal_header pt-2 pr-3">
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span className='pl-0' aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="invoice_header">
                                                                    <h2>Carrykar Pvt. Lmt.</h2>
                                                                    <div className="d-flex justify-content-between">

                                                                    </div>
                                                                </div>
                                                                <div className="invoice_body">
                                                                    <ul>
                                                                        <h4>Sender Details</h4>
                                                                        <li><span>Name :</span><p>{item.sender_details.first_name}</p></li>
                                                                        <li><span>Email :</span><p>{item.sender_details.email}</p></li>
                                                                        <li><span>City :</span><p>{item.sender_details.city}</p></li>
                                                                        <li><span>Address :</span><p>{item.sender_details.address}</p></li>
                                                                    </ul>
                                                                    <ul>
                                                                        <h4>Reciever Details</h4>
                                                                        <li><span>Name :</span><p>{item.receiver_name}</p></li>
                                                                        <li><span>Email :</span><p>{item.receiver_email}</p></li>
                                                                        <li><span>Phone no :</span><p>{item.receiver_contact_no}</p></li>
                                                                        <li><span>Address :</span><p>{item.receiver_state}</p></li>
                                                                    </ul>
                                                                    <ul>
                                                                        <h4>Order Details</h4>
                                                                        <li><span>Name :</span><p>{item.receiver_name}</p></li>
                                                                        <li><span>Email :</span><p>{item.receiver_email}</p></li>
                                                                        <li><span>Phone no :</span><p>{item.receiver_phone}</p></li>
                                                                        <li><span>Address :</span><p>{item.receiver_address}</p></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                } else {
                                    return (
                                        <>
                                            <span className="badge badge-danger">{item.source}</span>
                                            <div key={id} className='row table_box'>
                                                <div className='col-lg-3 col-md-6 agent_details_col  mt-1'>
                                                    <h2>Receiver Details :</h2>
                                                    <span className='pl-0'>
                                                        <p>Name : </p>
                                                        <p>{item.receiver_name}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Email : </p>
                                                        <p>{item.receiver_email}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Phone No : </p>
                                                        <p>{item.receiver_phone}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>City : </p>
                                                        <p>{item.receiver_city}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>State : </p>
                                                        <p>{item.receiver_state} </p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Pincode : </p>
                                                        <p>{item.receiver_pincode}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Pincode : </p>
                                                        <p>{item.receiver_address}</p>
                                                    </span>
                                                </div>
                                                <div className='col-lg-3 col-md-6 agent_details_col  mt-1'>
                                                    <h2>Sender Details :</h2>
                                                    <span className='pl-0'>
                                                        <p>Name : </p>
                                                        <p>{item.sender_name}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Email : </p>
                                                        <p>{item.sender_email}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Pincode : </p>
                                                        <p>{item.sender_pincode}</p>
                                                    </span>

                                                    <span className='pl-0'>
                                                        <p>City : </p>
                                                        <p>{item.sender_city}</p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>State : </p>
                                                        <p>{item.sender_state} </p>
                                                    </span>
                                                    <span className='pl-0'>
                                                        <p>Address : </p>
                                                        <p>{item.sender_address}</p>
                                                    </span>
                                                </div>
                                                <div className='col-lg-6 col-md-12 agent_verify_col mt-1'>
                                                    <div className='row '>
                                                        <div className='col address_detail_col'>
                                                            <h2>Shipping Details :</h2>
                                                            <div>
                                                                <span className='pl-0'>
                                                                    <p>Permanent Address: </p>
                                                                    <p>
                                                                        87, Block A, Mayur Vihar Extension,122192, Delhi, New-Delhi
                                                                    </p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Current  Address: </p>
                                                                    <p>
                                                                        87, Block A, Mayur Vihar Extension,122192, Delhi, New-Delhi
                                                                    </p>
                                                                </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className='row mt-5'>
                                                        <div className='col-md-6 pr-0 '>
                                                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#partnerprintid">
                                                                Generate Invoice
                                                            </button>
                                                        </div>
                                                        <div className='col-md-6 text-right'>
                                                            <QrMake path={item.qr_image_path} orderid={item.id} ordertype={item.source} />
                                                        </div>
                                                    </div>
                                                    <div className='row mt-5'>
                                                        <div className='col status_track_col'>
                                                            <ul className='d-flex align-items-center pl-3'>
                                                                <li className='dot1'>

                                                                </li>
                                                                <li className='dot2'>

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal fade" id="partnerprintid" tabindex="-1" role="dialog" aria-labelledby="partnerprintidLabel" aria-hidden="true">
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal_header pt-2 pr-3">
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span className='pl-0' aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="invoice_header">
                                                                    <h2>Carrykar Pvt. Lmt.</h2>
                                                                    <div className="d-flex justify-content-between">

                                                                    </div>
                                                                </div>
                                                                <div className="invoice_body">
                                                                    <ul>
                                                                        {item.id}
                                                                        <h4>Sender Details</h4>
                                                                        <li><span>Name :</span><p>{item.sender_name}</p></li>
                                                                        <li><span>Email :</span><p>{item.sender_email}</p></li>
                                                                        <li><span>Phone no :</span><p>{item.sender_phone}</p></li>
                                                                        <li><span>Address :</span><p>{item.sender_address}</p></li>
                                                                    </ul>
                                                                    <ul>
                                                                        <h4>Reciever Details</h4>
                                                                        <li><span>Name :</span><p>{item.receiver_name}</p></li>
                                                                        <li><span>Email :</span><p>{item.receiver_email}</p></li>
                                                                        <li><span>Phone no :</span><p>{item.receiver_phone}</p></li>
                                                                        <li><span>Address :</span><p>{item.receiver_address}</p></li>
                                                                    </ul>
                                                                    <ul>
                                                                        <h4>Order Details</h4>
                                                                        <li><span>Name :</span><p>{item.receiver_name}</p></li>
                                                                        <li><span>Email :</span><p>{item.receiver_email}</p></li>
                                                                        <li><span>Phone no :</span><p>{item.receiver_phone}</p></li>
                                                                        <li><span>Address :</span><p>{item.receiver_address}</p></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default RecenteOrder
