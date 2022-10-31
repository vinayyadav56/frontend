import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom';
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
import { useAlert } from 'react-alert';
import QrButton from './QrButton';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
const RecenteOrder = ({ qr }) => {
    let alert = useAlert();
    const [hubData, setHubData] = useState([]);
    const { setLoading } = useAuth();
    const [newOrder, setNewOrder] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    useEffect(() => {
        fetchData();
        hubListData();
        hubListFetchForAssign();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        setLoading(true);
        makeRequest('GET', `fetchNewOrders`).then(result => {
            setNewOrder(result.data);
            console.log(result.data);
        })
            .finally(() => {
                setLoading(false);
            })
    };

    const handleId = (id) => {
    }
    const auth = useAuth();
    if (!auth.isAuthenticated()) {
        return <Redirect to="/admin" />
    }
    // HUB LIST FETCHED FOR DROPDOWN STARTS
    const hubListData = async () => {
        setLoading(true);
        makeRequest('GET', `hubsList`).then(result => {
            setHubData(result.data);
        })
            .finally(() => {
                setLoading(false);
            })
    };

    // UPDAT HUB API STARTS

    const handleInput = (fieldName, type, e, order_id) => {
        console.log(fieldName, type, order_id)
        if (
            order_id &&
            type &&
            fieldName &&
            e.target.value
        ){
            setLoading(true);
            makeRequest('POST', `updateHubForNewOrders`, {
                "order_id": order_id,
                "type": type,
                "fieldName": fieldName,
                "hubId": e.target.value
            }).then(result => {
                alert.success(result.message);
                result.success && console.log(result);
            }).catch(err => {
                alert.error(err.message);
            }).finally(() => {
                setLoading(false);
            })
        } else {
            alert.error("Invalid Inputs");
        }

    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    // PAGINATION ENDS

    // DATA GRID TABLE START
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#0747a9',
            color: theme.palette.common.white,
            width: 100
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 12,
            padding: '10px 14px',
            border: '1px solid #c8c8c8',
            width: 100
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }));


    const hubListFetchForAssign = async () => {
        setLoading(true);
        makeRequest('GET', `hubsList`).then(result => {
            setHubData(result.data);
        })
            .finally(() => {
                setLoading(false);
            })
    };
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
                                if (item.status === "NEW_CREATED") {
                                    if (item.source === "CO") {
                                        return (
                                            <>
                                                <span className="badge badge-danger">{item.source}</span>
                                                <div key={id} className='row table_box'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>Pincode : </p>
                                                                    <p>{item.receiver_pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
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

                                                            </div>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>Phone No : </p>
                                                                    <p>{item.sender_details.phone_no}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Pincode : </p>
                                                                    <p>{item.sender_details.pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
                                                                    <p>{item.sender_details.address}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>City : </p>
                                                                    <p>{item.sender_details.city}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>State : </p>
                                                                    <p>{item.sender_details.state} </p>
                                                                </span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-12 agent_verify_col mt-1'>
                                                        <div className='row'>
                                                            <div className='col-12 mb-2 d-flex justify-content-end'>
                                                                <button type="button" className="btn btn-success mr-2">
                                                                    Accept
                                                                </button>
                                                                <button type="button" className="btn btn-danger">
                                                                    Decline
                                                                </button>
                                                            </div>
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
                                                    </div>
                                                    <div className='col-12 from_hub'>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <label htmlFor="cars">From Hub:</label>
                                                                <select className='form-control' name="fromid" id="fromid" onChange={(e) => handleInput('from_hub_id', item.source, e, item.id)}>

                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.from_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}

                                                                </select>
                                                            </div>
                                                            <div className="col-6">
                                                                <label htmlFor="cars">To Hub:</label>
                                                                <select className='form-control' name="id" onChange={(e) => handleInput('to_hub_id', item.source, e, item.id)}>

                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.to_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal fade" id="partnerprintid" tabIndex="-1" role="dialog" aria-labelledby="partnerprintidLabel" aria-hidden="true">
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
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>Pincode : </p>
                                                                    <p>{item.receiver_pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
                                                                    <p>{item.receiver_locality}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>City : </p>
                                                                    <p>{item.receiver_city}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>State : </p>
                                                                    <p>{item.receiver_state} </p>
                                                                </span>

                                                            </div>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>{item.sender_contact_no}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Pincode : </p>
                                                                    <p>{item.sender_pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
                                                                    <p>{item.sender_locality}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>City : </p>
                                                                    <p>{item.sender_city}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>State : </p>
                                                                    <p>{item.sender_state} </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-12 agent_verify_col mt-1'>
                                                        <div className='row'>
                                                            <div className='col-12 mb-2 d-flex justify-content-end'>
                                                                <button type="button" className="btn btn-success mr-2">
                                                                    Accept
                                                                </button>
                                                                <button type="button" className="btn btn-danger">
                                                                    Decline
                                                                </button>
                                                            </div>
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
                                                    </div>
                                                    <div className='col-12 from_hub'>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <label htmlFor="cars">From Hub:</label>
                                                                <select className='form-control' name="fromid" id="fromid" onChange={(e) => handleInput('from_hub_id', item.source, e, item.id)}>

                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.from_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}

                                                                </select>
                                                            </div>
                                                            <div className="col-6">
                                                                <label htmlFor="cars">To Hub:</label>
                                                                <select className='form-control' name="id" onChange={(e) => handleInput('to_hub_id', item.source, e, item.id)}>
                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.to_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </select>
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
                                }
                                if (item.status === "CONFIRMED") {
                                    if (item.source === "CO") {
                                        return (
                                            <>
                                                <span className="badge badge-danger">{item.source}</span>
                                                <div key={id} className='row table_box'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>Pincode : </p>
                                                                    <p>{item.receiver_pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
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

                                                            </div>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>Phone No : </p>
                                                                    <p>{item.sender_details.phone_no}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Pincode : </p>
                                                                    <p>{item.sender_details.pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
                                                                    <p>{item.sender_details.address}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>City : </p>
                                                                    <p>{item.sender_details.city}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>State : </p>
                                                                    <p>{item.sender_details.state} </p>
                                                                </span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-12 agent_verify_col mt-1'>
                                                        <div className='row'>
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
                                                        <div className='row mt-2 d-flex align-items-center'>
                                                            <div className='col-md-12 mt-2 text-right'>
                                                                <QrMake path={item.qr_image_path} orderid={item.id} ordertype={item.source} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 from_hub'>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <label htmlFor="cars">From Hub:</label>
                                                                <select className='form-control' name="fromid" id="fromid" onChange={(e) => handleInput('from_hub_id', item.source, e, item.id)}>

                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.from_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}

                                                                </select>
                                                            </div>
                                                            <div className="col-6">
                                                                <label htmlFor="cars">To Hub:</label>
                                                                <select className='form-control' name="id" onChange={(e) => handleInput('to_hub_id', item.source, e, item.id)}>

                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.to_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 mt-2'>
                                                        <div className='status_track_col'>
                                                            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#hubAssignForCo">
                                                                Assign For Pickup
                                                            </button>
                                                            <button className='btn btn-secondary'>
                                                                Tracking
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="modal fade" id="hubAssignForCo" tabindex="-1" role="dialog" aria-labelledby="hubAssignForCoLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-xl add-partner" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="hubAssignForCoLabel">Hub List</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <TableContainer component={Paper}>
                                                                    <Table stickyHeader striped aria-label="sticky table">
                                                                        <TableHead>
                                                                            <StyledTableRow>
                                                                                <StyledTableCell>Id </StyledTableCell>
                                                                                <StyledTableCell>Hub Id </StyledTableCell>
                                                                                <StyledTableCell>Hub Code </StyledTableCell>
                                                                                <StyledTableCell>State</StyledTableCell>
                                                                                <StyledTableCell>City</StyledTableCell>
                                                                                <StyledTableCell>Pincode</StyledTableCell>
                                                                                <StyledTableCell>Contact No*</StyledTableCell>
                                                                                <StyledTableCell>Alternate No*</StyledTableCell>
                                                                                <StyledTableCell>Address</StyledTableCell>
                                                                                <StyledTableCell>Action</StyledTableCell>
                                                                            </StyledTableRow>
                                                                        </TableHead>
                                                                        <TableBody>
                                                                            {Object.values(hubData)
                                                                                // eslint-disable-next-line
                                                                                .map((item, id) => (
                                                                                    <StyledTableRow hover tabIndex={-1} key={id}>
                                                                                        <StyledTableCell>{item.id} </StyledTableCell>
                                                                                        <StyledTableCell>{item.hub_name}</StyledTableCell>
                                                                                        <StyledTableCell>{item.hub_code}</StyledTableCell>
                                                                                        <StyledTableCell>{item.state}</StyledTableCell>
                                                                                        <StyledTableCell>{item.city}</StyledTableCell>
                                                                                        <StyledTableCell>{item.pin}</StyledTableCell>
                                                                                        <StyledTableCell>{item.contact_number}</StyledTableCell>
                                                                                        <StyledTableCell>{item.alternate_contact_number}</StyledTableCell>
                                                                                        <StyledTableCell>{item.hub_full_address}</StyledTableCell>
                                                                                        <StyledTableCell>
                                                                                            <button
                                                                                                type="button"
                                                                                                className="btn btn-info"
                                                                                            >
                                                                                                Assign
                                                                                            </button>
                                                                                        </StyledTableCell>
                                                                                    </StyledTableRow>
                                                                                ))}

                                                                        </TableBody>
                                                                        <TableFooter>
                                                                            <TableRow>
                                                                                <TablePagination
                                                                                    page={page}
                                                                                    onPageChange={handleChangePage}
                                                                                    rowsPerPage={rowsPerPage}
                                                                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                                                                    rowsPerPageOptions={[10, 25, 100]}
                                                                                    // count={filterUser.length}
                                                                                    rows={10}
                                                                                />
                                                                            </TableRow>
                                                                        </TableFooter>
                                                                    </Table>
                                                                </TableContainer>
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
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>Pincode : </p>
                                                                    <p>{item.receiver_pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
                                                                    <p>{item.receiver_locality}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>City : </p>
                                                                    <p>{item.receiver_city}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>State : </p>
                                                                    <p>{item.receiver_state} </p>
                                                                </span>

                                                            </div>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>{item.sender_contact_no}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Pincode : </p>
                                                                    <p>{item.sender_pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
                                                                    <p>{item.sender_locality}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>City : </p>
                                                                    <p>{item.sender_city}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>State : </p>
                                                                    <p>{item.sender_state} </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-12 agent_verify_col mt-1'>
                                                        <div className='row'>
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
                                                        <div className='row mt-2 d-flex align-items-center'>
                                                            <div className='col-md-12 mt-3 text-right'>
                                                                <QrMake path={item.qr_image_path} orderid={item.id} ordertype={item.source} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 from_hub'>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <label htmlFor="cars">From Hub:</label>
                                                                <select className='form-control' name="fromid" id="fromid" onChange={(e) => handleInput('from_hub_id', item.source, e, item.id)}>

                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.from_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}

                                                                </select>
                                                            </div>
                                                            <div className="col-6">
                                                                <label htmlFor="cars">To Hub:</label>
                                                                <select className='form-control' name="id" onChange={(e) => handleInput('to_hub_id', item.source, e, item.id)}>
                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.to_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 mt-2'>
                                                        <div className='status_track_col'>
                                                            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#hubAssignForPo">
                                                                Assign For Pickup
                                                            </button>
                                                            <button className='btn btn-secondary'>
                                                                Tracking
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="modal fade" id="hubAssignForPo" tabindex="-1" role="dialog" aria-labelledby="hubAssignForPoLabel" aria-hidden="true">
                                                    <div class="modal-dialog modal-xl add-partner" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="hubAssignForPoLabel">Hub List</h5>
                                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <TableContainer component={Paper}>
                                                                    <Table stickyHeader striped aria-label="sticky table">
                                                                        <TableHead>
                                                                            <StyledTableRow>
                                                                                <StyledTableCell>Id </StyledTableCell>
                                                                                <StyledTableCell>Hub Id </StyledTableCell>
                                                                                <StyledTableCell>Hub Code </StyledTableCell>
                                                                                <StyledTableCell>State</StyledTableCell>
                                                                                <StyledTableCell>City</StyledTableCell>
                                                                                <StyledTableCell>Pincode</StyledTableCell>
                                                                                <StyledTableCell>Contact No*</StyledTableCell>
                                                                                <StyledTableCell>Alternate No*</StyledTableCell>
                                                                                <StyledTableCell>Address</StyledTableCell>
                                                                                <StyledTableCell>Action</StyledTableCell>
                                                                            </StyledTableRow>
                                                                        </TableHead>
                                                                        <TableBody>
                                                                            {Object.values(hubData)
                                                                                // eslint-disable-next-line
                                                                                .map((item, id) => (
                                                                                    <StyledTableRow hover tabIndex={-1} key={id}>
                                                                                        <StyledTableCell>{item.id} </StyledTableCell>
                                                                                        <StyledTableCell>{item.hub_name}</StyledTableCell>
                                                                                        <StyledTableCell>{item.hub_code}</StyledTableCell>
                                                                                        <StyledTableCell>{item.state}</StyledTableCell>
                                                                                        <StyledTableCell>{item.city}</StyledTableCell>
                                                                                        <StyledTableCell>{item.pin}</StyledTableCell>
                                                                                        <StyledTableCell>{item.contact_number}</StyledTableCell>
                                                                                        <StyledTableCell>{item.alternate_contact_number}</StyledTableCell>
                                                                                        <StyledTableCell>{item.hub_full_address}</StyledTableCell>
                                                                                        <StyledTableCell>
                                                                                            <button
                                                                                                type="button"
                                                                                                className="btn btn-info"
                                                                                            >
                                                                                                Assign
                                                                                            </button>
                                                                                        </StyledTableCell>
                                                                                    </StyledTableRow>
                                                                                ))}

                                                                        </TableBody>
                                                                        <TableFooter>
                                                                            <TableRow>
                                                                                <TablePagination
                                                                                    page={page}
                                                                                    onPageChange={handleChangePage}
                                                                                    rowsPerPage={rowsPerPage}
                                                                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                                                                    rowsPerPageOptions={[10, 25, 100]}
                                                                                    // count={filterUser.length}
                                                                                    rows={10}
                                                                                />
                                                                            </TableRow>
                                                                        </TableFooter>
                                                                    </Table>
                                                                </TableContainer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    }
                                }
                                if (item.status === "ASSIGNED_HUB_TO_PICK") {
                                    if (item.source === "CO") {
                                        return (
                                            <>
                                                <span className="badge badge-danger">{item.source}</span>
                                                <div key={id} className='row table_box'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>Pincode : </p>
                                                                    <p>{item.receiver_pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
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

                                                            </div>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>Phone No : </p>
                                                                    <p>{item.sender_details.phone_no}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Pincode : </p>
                                                                    <p>{item.sender_details.pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
                                                                    <p>{item.sender_details.address}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>City : </p>
                                                                    <p>{item.sender_details.city}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>State : </p>
                                                                    <p>{item.sender_details.state} </p>
                                                                </span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-12 agent_verify_col mt-1'>
                                                        <div className='row'>
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
                                                        <div className='row mt-2 d-flex align-items-center'>
                                                            <div className='col-md-12 mt-2 text-right'>
                                                                <QrMake path={item.qr_image_path} orderid={item.id} status={item.status} ordertype={item.source} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 from_hub'>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <label htmlFor="cars">From Hub:</label>
                                                                <select className='form-control' name="fromid" id="fromid" onChange={(e) => handleInput('from_hub_id', item.source, e, item.id)}>

                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.from_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}

                                                                </select>
                                                            </div>
                                                            <div className="col-6">
                                                                <label htmlFor="cars">To Hub:</label>
                                                                <select className='form-control' name="id" onChange={(e) => handleInput('to_hub_id', item.source, e, item.id)}>

                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.to_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 mt-2'>
                                                        <div className='status_track_col'>
                                                            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#partnerprintid" onClick={handleId(item.id)}>
                                                                Generate Invoice
                                                            </button>
                                                            <QrButton path={item.qr_image_path} status={item.status} orderid={item.id} ordertype={item.source} />
                                                            <button className='btn btn-secondary'>
                                                                Tracking
                                                            </button>
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
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>Pincode : </p>
                                                                    <p>{item.receiver_pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
                                                                    <p>{item.receiver_locality}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>City : </p>
                                                                    <p>{item.receiver_city}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>State : </p>
                                                                    <p>{item.receiver_state} </p>
                                                                </span>

                                                            </div>
                                                            <div className='col-md-6 agent_details_col  mt-1'>
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
                                                                    <p>{item.sender_contact_no}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Pincode : </p>
                                                                    <p>{item.sender_pincode}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>Address : </p>
                                                                    <p>{item.sender_locality}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>City : </p>
                                                                    <p>{item.sender_city}</p>
                                                                </span>
                                                                <span className='pl-0'>
                                                                    <p>State : </p>
                                                                    <p>{item.sender_state} </p>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-12 agent_verify_col mt-1'>
                                                        <div className='row'>
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
                                                        <div className='row mt-2 d-flex align-items-center'>
                                                            <div className='col-md-12 mt-3 text-right'>
                                                                <QrMake path={item.qr_image_path} orderid={item.id} ordertype={item.source} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 from_hub'>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <label htmlFor="cars">From Hub:</label>
                                                                <select className='form-control' name="fromid" id="fromid" onChange={(e) => handleInput('from_hub_id', item.source, e, item.id)}>

                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.from_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}

                                                                </select>
                                                            </div>
                                                            <div className="col-6">
                                                                <label htmlFor="cars">To Hub:</label>
                                                                <select className='form-control' name="id" onChange={(e) => handleInput('to_hub_id', item.source, e, item.id)}>
                                                                    {hubData.map((index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={index.id} selected={item.to_hub_id == index.id ? true : false}>{index.hub_name} </option>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 mt-2'>
                                                        <div className='status_track_col'>
                                                            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#partnerprintid" onClick={handleId(item.id)}>
                                                                Generate Invoice
                                                            </button>
                                                            <QrButton path={item.qr_image_path} orderid={item.id} ordertype={item.source} />
                                                            <button className='btn btn-secondary'>
                                                                Tracking
                                                            </button>
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
                                                                    <button type="button" className="btn btn-primary">Download PDF</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    }
                                }
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </Fragment >
    )
}

export default RecenteOrder
