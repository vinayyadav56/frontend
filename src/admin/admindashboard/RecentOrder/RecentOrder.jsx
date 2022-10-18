import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import './recentOrder.css';
import qrGen from '../../../images/qrimageadmin.jpg'
const partnerOrderData = [
    {
        id: 1,
        receiver_name: 'Rahul',
        receiver_email: 'rahul@gmail.com',
        receiver_phone: '8753747473',
        receiver_city: 'Kanina',
        receiver_state: 'Haryana',
        receiver_address: 'Gurgaon',
        sender_name: 'Vinay',
        sender_email: 'rahul@gmail.com',
        sender_phone: '8753747473',
        sender_city: 'Kanina',
        sender_state: 'Haryana',
        sender_address: 'Gurgaon',
    },
    {
        id: 2,
        receiver_name: 'Rahul',
        receiver_email: 'rahul@gmail.com',
        receiver_phone: '8753747473',
        receiver_city: 'Kanina',
        receiver_state: 'Haryana',
        receiver_address: 'Gurgaon',
        sender_name: 'Vinay',
        sender_email: 'rahul@gmail.com',
        sender_phone: '8753747473',
        sender_city: 'Kanina',
        sender_state: 'Haryana',
        sender_address: 'Gurgaon',
    },
    {
        id: 3,
        receiver_name: 'Rahul',
        receiver_email: 'rahul@gmail.com',
        receiver_phone: '8753747473',
        receiver_city: 'Kanina',
        receiver_state: 'Haryana',
        receiver_address: 'Gurgaon',
        sender_name: 'Vinay',
        sender_email: 'rahul@gmail.com',
        sender_phone: '8753747473',
        sender_city: 'Kanina',
        sender_state: 'Haryana',
        sender_address: 'Gurgaon',
    },
    {
        id: 4,
        receiver_name: 'Rahul',
        receiver_email: 'rahul@gmail.com',
        receiver_phone: '8753747473',
        receiver_city: 'Kanina',
        receiver_state: 'Haryana',
        receiver_address: 'Gurgaon',
        sender_name: 'Vinay',
        sender_email: 'rahul@gmail.com',
        sender_phone: '8753747473',
        sender_city: 'Kanina',
        sender_state: 'Haryana',
        sender_address: 'Gurgaon',
    },
]
const RecenteOrder = ({ qr }) => {
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
                            {partnerOrderData.map((item, id) => {
                                return (
                                    <>
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
                                                    <p>Address : </p>
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
                                                    <p>Phone No : </p>
                                                    <p>{item.sender_phone}</p>
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
                                                                <p>Permanent Address -</p>
                                                                <p>
                                                                    87, Block A, Mayur Vihar Extension,122192, Delhi, New-Delhi
                                                                </p>
                                                            </span>
                                                            <span className='pl-0'>
                                                                <p>Current  Address -</p>
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
                                                        {/* <button type="button" className="btn btn-warning">
                                                            Generate Qr Code
                                                        </button> */}
                                                        <img src={qrGen} style={{ width: '100px', height: '100px' }} alt='qrGen' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* DOWNLOAD PDF MODAL */}
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
                                                                <img src={qrGen} style={{ width: '100px', height: '100px' }} alt='qrGen' />
                                                            </div>
                                                        </div>
                                                        <div className="invoice_body">
                                                            <ul>
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
                                        {/* DOWNLOAD PDF MODAL ENDS */}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}
export default RecenteOrder
