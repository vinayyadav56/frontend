import React, { Fragment, useState } from 'react'
import { Link, NavLink, Redirect } from "react-router-dom";
import "./Adminmenu.css";
import clsx from 'clsx';
import "./ckorder.css";
import navArray from "./navArray";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useAuth } from '../../Services/auth';
export default function CkOrder() {
    const [ckOrder, setCkOrder] = useState({
        from_location: "",
        to_location: "",
    });
    const tableData = [
        {
            id: '1',
            partner_order_id: '12',
            customer_id: '21',
            to_location: 'Delhi',
            from_location: 'Kanpur',
            weight: '20kg',
            ordertype: 'PO'
        },
        {
            id: '2',
            partner_order_id: '12',
            customer_id: '21',
            to_location: 'Delhi',
            from_location: 'Kanpur',
            weight: '20kg',
            ordertype: 'PO'

        },
        {
            id: '3',
            partner_order_id: '12',
            customer_id: '21',
            to_location: 'Delhi',
            from_location: 'Kolkata',
            weight: '20kg',
            ordertype: 'CO'

        },
        {
            id: '4',
            partner_order_id: '12',
            customer_id: '21',
            to_location: 'Mumbai',
            from_location: 'Kanpur',
            weight: '20kg',
            ordertype: 'CO'

        },
    ];
    const [orderData] = useState(tableData);
    console.log(orderData)
    const handleLocation = (e) => {
        const { name, value } = e.target;
        setCkOrder({
            ...ckOrder,
            [name]: value,
        });
    };
    const auth = useAuth();
    if (!auth.isAuthenticated()) {
        return <Redirect to="/admin" />
    };
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'partner_order_id',
            headerName: 'Partner Order Id',
            width: 150,
        },
        {
            field: 'customer_id',
            headerName: 'Customer Id',
            width: 150,
            // editable: true,
        },
        {
            field: 'to_location',
            headerName: 'To Location',
            width: 150,
        },

        {
            field: 'from_location',
            headerName: 'From Location',
            width: 150,
        },
        {
            field: 'weight',
            headerName: 'Weight',
            width: 150,
        },
        {
            field: 'ordertype',
            headerName: 'Order Type',
            width: 150,
            cellClassName: (params) => {
                if (params.value == null) {
                    return '';
                }

                return clsx('super-app', {
                    negative: params.value === "PO",
                    positive: params.value === "CO",
                });
            },
        },
    ];


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
                                    <span>User Name</span>
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
                    <div className="sidebar">
                        <button id="close-btn">
                            <CloseRoundedIcon />
                        </button>
                        <div className="responsive-sidebar">
                            <NavLink to="/admindashboard">
                                <span className="icon">
                                    <GridViewRoundedIcon />
                                </span>
                                <h4 className="title">Dashboard</h4>
                            </NavLink>

                            {navArray.map((data, id) => {
                                return (
                                    <li key={id}>
                                        <NavLink to={data.link}>
                                            <span className="icon">{data.icon}</span>
                                            <h4 className="title">{data.nav}</h4>
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </div>
                    </div>
                </aside>
                <section className="right">
                    <form className='ck_order_form'>
                        <div className="form-row">
                            <div className="col-sm-5 pl-0">
                                <input
                                    type="text"
                                    name="from_location"
                                    onChange={handleLocation}
                                    value={ckOrder.from_location}
                                    className="form-control"
                                    placeholder="From Location"
                                />
                            </div>
                            <div className="col-sm-5">
                                <input
                                    type="text"
                                    name='to_location'
                                    onChange={handleLocation}
                                    value={ckOrder.to_location}
                                    className="form-control"
                                    placeholder="To Location"
                                />
                            </div>
                            <div className='col-sm-2 pr-0'>
                                <button type='button' className='btn locasrchbtn'>Search</button>
                            </div>
                        </div>
                        <div className="form-row weight_section">
                            <div>
                                <label
                                    htmlFor="colFormLabelSm"
                                    className=" col-form-label-sm"
                                >
                                    Total Weight
                                </label>
                                <input
                                    type="number"
                                    disabled
                                    className="form-control"
                                    id="colFormLabelSm"
                                />
                            </div>
                            <div>
                                <label htmlFor="colFormLabel2" className="col-form-label-sm">SuitCase Weight</label>
                                <input type="number" className="form-control" id="colFormLabel2" />
                            </div>
                        </div>
                    </form>
                    {/* <TABLE START */}
                    <Box sx={{
                        height: 400,
                        width: '100%',
                        background: '#fff',
                        '& .super-app.negative': {
                            backgroundColor: 'green',
                            color: '#fff',
                            border: '1px solid #fff',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: '600',
                        },
                        '& .super-app.positive': {
                            backgroundColor: 'red',
                            color: '#fff',
                            display: 'flex',
                            border: '1px solid #fff',
                            justifyContent: 'center',
                            fontWeight: '600',
                        },
                    }}>
                        <DataGrid
                            rows={tableData}
                            columns={columns}
                            pageSize={5}
                            sx={{ width: '100%' }}
                            onSelectionModelChange={(orderData) => {
                                console.log(orderData)
                            }}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                    </Box>
                </section>
            </main>
        </Fragment>
    );
}