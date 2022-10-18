import React, {Fragment, useState} from 'react'
import {Link, NavLink} from "react-router-dom";
import axios from 'axios';
import "./Adminmenu.css";
import "./ckorder.css";
import navArray from "./navArray";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {makeRequest} from "../../Services/api";
import {useAuth} from "../../Services/auth";
// import {
//     Paper,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow
// } from "@material-ui/core";
// import { useEffect } from 'react';


export default function CkOrder() {
    const {setLoading} = useAuth();

    const [ckOrder, setCkOrder] = useState({
        from_location: "",
        to_location: "",
    });
    const [orderData, setOrderData] = useState();

    const handleLocation = (e) => {
        const {name, value} = e.target;
        setCkOrder({
            ...ckOrder,
            [name]: value,
        });
    };

    const handleApi = async (e) => {
        setLoading(true);

        makeRequest('POST', `searchLocationbyFromto`, ckOrder).then(result => {
            alert.success(result.message);
            result.success && setOrderData(result.fetchOrdersList)
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };

    // useEffect(() => {
    //     handleApi();
    //     // eslint-disable-next-line
    // }, []);

    // import MaterialCheckbox from '@mui/material/Checkbox';
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
            editable: true,
        },
    ];

    const rows = [];
    //   CKORDER TABLE END
    orderData && orderData.forEach((item, id) => {
        rows.push({
                id: id + 1,
                partner_order_id: item.partner_order_id,
                customer_id: item.customer_id,
                to_location: item.to_location,
                from_location: item.from_location,
                weight: item.weight,
            }
        )
    });

    return (
        <Fragment>
            <nav className="sticky-top partnerdash-nav">
                <div className="partner-sidebar">
                    <span className="top-name">Carry Kar</span>
                    <div className="search-bar">
                        <SearchSharpIcon/>
                        <input type="search" placeholder="Search"/>
                    </div>
                    <div className="profile-area">
                        <div className="profile">
                            <div className="profile-photo">
                                <AccountCircleRoundedIcon/>
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
                            <MenuRoundedIcon/>
                        </button>
                    </div>
                </div>
            </nav>
            <main>
                <aside>
                    <div className="sidebar">
                        <button id="close-btn">
                            <CloseRoundedIcon/>
                        </button>
                        <div className="responsive-sidebar">
                            <NavLink to="/admindashboard">
                                <span className="icon">
                                    <GridViewRoundedIcon/>
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
                                <button type='button' className='btn locasrchbtn' onClick={handleApi}>Search</button>
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
                                <input type="number" className="form-control" id="colFormLabel2"/>
                            </div>
                        </div>
                    </form>
                    {/* <TABLE START */}

                    <Box sx={{height: 400, width: '100%', background: '#fff'}}>

                        <DataGrid
                            rows={rows}
                            // getRowId={(row) => row.internalId}
                            columns={columns}
                            pageSize={5}
                            sx={{width: '100%'}}
                            rowsPerPageOptions={[5]}
                            // getRowId={(row) => row.no}
                            checkboxSelection
                            disableSelectionOnClick
                            experimentalFeatures={{newEditingApi: true}}
                        />
                    </Box>


                    {/* <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Order Id</TableCell>
                                    <TableCell>Partner Id</TableCell>
                                    <TableCell>From Location</TableCell>
                                    <TableCell>To Location</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Weight</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    orderData.map((item, id) => {
                                        return (
                                            <TableRow
                                                pageSize={5}
                                                rowsPerPageOptions={[5]}
                                                checkboxSelection
                                                disableSelectionOnClick
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } ,width: '100%'}}
                                            >
                                                <TableCell>
                                                    {item.partner_order_id}
                                                </TableCell>
                                                <TableCell>
                                                    {item.customer_id}
                                                </TableCell>
                                                <TableCell>{item.from_location}</TableCell>
                                                <TableCell>{item.to_location}</TableCell>
                                                <TableCell>{item.date}</TableCell>
                                                <TableCell>
                                                    {item.order_weight}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>  */}
                    {/* Table ends */}
                </section>
            </main>
        </Fragment>
    );
}
