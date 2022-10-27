import React, { Fragment, useEffect, useState } from 'react'
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
import { makeRequest, postRequest } from "../../Services/api";
import { useAuth } from '../../Services/auth';
export default function CkOrder() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [ckOrder, setCkOrder] = useState({
        from_hub_id: "",
        to_hub_id: "",
        package_weight: 0,
        items_total_weight: 0,
        subOrders: []
    });
    //console.log(selectedRows[0] ? selectedRows[0].package_volume_weight :selectedRows);
    const { setLoading } = useAuth();
    const [newOrder, setNewOrder] = useState([]);

    const handleLocation = (e) => {
        const { name, value } = e.target;
        setCkOrder({
            ...ckOrder,
            [name]: value,
        });
    };
    // Data Fetch Api start
    const fetchData = async () => {
        setLoading(true);
        makeRequest('GET', `fetchNewOrders`).then(result => {
            let tempData = [];
            result.data.forEach(data => {
                tempData.push({
                    ...data,
                    'id': data.source + '-' + data.id
                })
            })
            console.log(result)
            setNewOrder(tempData);
        })
            .finally(() => {
                setLoading(false);
            })
    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const totalWeight = (selectedRows) => {
        let weight = 0;

        selectedRows.forEach(row => {
            weight += +row.package_volume_weight
        })

        setCkOrder({
            ...ckOrder,
            package_weight: weight
        })
    }
    useEffect(() => {
        totalWeight(selectedRows);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRows])
    // Data Fetch Api ends
    const handleOrder = async (e) => {
        e.preventDefault();
        postRequest('createAlphaOrder', ckOrder).then(result => {
            console.log(result);
            alert.success(result.message);
        }).catch(error => {
            alert.error(error.message);
        }).finally(() => {
            setLoading(false);
        });
    }
    const auth = useAuth();
    if (!auth.isAuthenticated()) {
        return <Redirect to="/admin" />
    };
    
    const columns = [
        {
            field: 'id',
            headerName: ' Id',
            width: 80,
        },
        {
            field: 'partner_id',
            headerName: 'Partner Id',
            width: 150,
        },
        {
            field: 'customer_id',
            headerName: 'Customer Id',
            width: 150,
        },
        {
            field: 'from_hub_id',
            headerName: 'From Hub Id',
            width: 150,
        },

        {
            field: 'to_hub_id',
            headerName: 'To Hub Id',
            width: 150,
        },
        {
            field: 'package_volume_weight',
            headerName: 'Weight',
            width: 150,
        },
        {
            field: 'source',
            headerName: 'Order Type',
            width: 150,
            cellClassName: (params) => {
                if (params.value == null) {
                    return '';
                }

                return clsx('super-app', {
                    negative: params.value === "CO",
                    positive: params.value === "PO",
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
                        <h2 className='text-center'>Create Ck Order</h2>
                        <div className="form-row">
                            <div className="col-sm-4">
                                <input
                                    type="text"
                                    name="from_hub_id"
                                    value={ckOrder.from_hub_id}
                                    onChange={handleLocation}
                                    className="form-control"
                                    placeholder="From Hub Id"
                                />
                            </div>
                            <div className="col-sm-4">
                                <input
                                    type="text"
                                    name='to_hub_id'
                                    value={ckOrder.to_hub_id}
                                    onChange={handleLocation}
                                    className="form-control"
                                    placeholder="To Hub Id"
                                />
                            </div>
                            <div className="col-sm-4 col-12">
                                <button className='btn ordergenrate'>
                                    Search Hub
                                </button>
                            </div>
                        </div>
                        <div className="form-row weight_section">
                            <div>
                                <label
                                    htmlFor="colFormLabelSm"
                                    className="col-form-label-sm"
                                >
                                    Total Weight
                                </label>
                                <input
                                    type="number"
                                    name='package_volume_weight'
                                    onChange={handleLocation}
                                    value={ckOrder.package_weight}
                                    className="form-control"
                                    id="colFormLabelSm"
                                />
                            </div>

                        </div>
                    </form>
                    <Box sx={{
                        height: 267,
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
                            rows={newOrder}
                            columns={columns}
                            pageSize={3}
                            sx={{ width: '100%' }}
                            onSelectionModelChange={(ids) => {
                                const selectedIDs = new Set(ids);
                                const selectedRows = Object.values(newOrder).filter((row) =>
                                    selectedIDs.has(row.id.toString()),
                                );
                                setCkOrder({
                                    ...ckOrder,
                                    subOrders: ids
                                })
                                setSelectedRows(selectedRows);
                            }}
                            rowsPerPageOptions={[3]}
                            checkboxSelection
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                        <div className='d-flex justify-content-center mt-4'>
                            <button className='btn ordergenrate' onClick={handleOrder}>
                                Make Order
                            </button>
                        </div>
                    </Box>
                </section>
            </main>
        </Fragment >
    );
}
