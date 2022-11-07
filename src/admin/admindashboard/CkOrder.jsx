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
    console.log(ckOrder.from_hub_id)
    //console.log(selectedRows[0] ? selectedRows[0].package_volume_weight :selectedRows);
    const { setLoading } = useAuth();
    const [newOrder, setNewOrder] = useState([]);
    const [hubData, setHubData] = useState([]);

    const handleLocation = (e) => {
        const { name, value } = e.target;
        setCkOrder({
            ...ckOrder,
            [name]: value,
        });
    };
    // Data Fetch Api start
    const fetchData = async (e) => {
        e.preventDefault();
        setLoading(true);
        makeRequest('GET', `fetchNewOrders?fromHubId=${ckOrder.from_hub_id}&toHubId=${ckOrder.to_hub_id}`).then(result => {
            let tempData = [];
            result.data.forEach(data => {
                tempData.push({
                    ...data,
                    'id': data.source + '-' + data.id
                })
            })
            setNewOrder(tempData);
            console.log(tempData)
        })
            .finally(() => {
                setLoading(false);
            })
    };

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
        hubListData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRows])
    // Data Fetch Api ends

    const handleOrder = async (e) => {
        postRequest('createAlphaOrder', ckOrder).then(result => {
            alert.success(result.message);
            setCkOrder(result);
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
            width: 60,
        },
        {
            field: `${newOrder.partner_details?.partner_name}`,
            headerName: 'Partner Name',
            width: 150
        },
        {
            field: 'sender_name',
            headerName: 'Customer Name',
            width: 150
        },
        {
            field: 'from_hub_id',
            headerName: 'From Hub Id'
        },

        {
            field: 'to_hub_id',
            headerName: 'To Hub Id'
        },
        {
            field: 'package_volume_weight',
            headerName: 'Weight'
        },
        {
            field: 'delivery_type',
            headerName: 'Delivery Type'
        },
        {
            field: 'source',
            headerName: 'Order Type',
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
    const hubListData = async () => {
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
                    <Link to='/'>
                        <span className="top-name">Carry Kar</span>
                    </Link>
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
                                    <Link className="dropdown-index" to="/admin">
                                        Logout
                                    </Link>
                                    <Link className="dropdown-index" to="/">
                                        Change Profile
                                    </Link>
                                    <Link className="dropdown-index" to="/setting">
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
                    <form className='ck_order_form' onSubmit={fetchData}>
                        <h2 className='text-center'>Create Ck Order</h2>
                        <div className="form-row">
                            <div className="col-4">
                                <select id="selectuser" value={ckOrder.from_hub_id} name='from_hub_id' className="form-control"
                                    required onChange={handleLocation}>
                                    <option>From Hub</option>
                                    {hubData.map((index) => {
                                        return (
                                            <>
                                                <option value={index.id}>{index.hub_name}</option>
                                            </>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-4">
                                <select id="selectuser" value={ckOrder.to_hub_id} name='to_hub_id' className="form-control"
                                    required onChange={handleLocation}>
                                    <option>To Hub</option>
                                    {hubData.map((index) => {
                                        return (
                                            <>
                                                <option value={index.id}>{index.hub_name}</option>
                                            </>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="col-sm-4 col-12">
                                <button className='btn ordergenrate' type='submit'>
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
                            backgroundColor: '#e0cd62',
                            color: '#fff',
                            border: '1px solid #fff',
                            display: 'flex',
                            justifyContent: 'center',
                            fontWeight: '600',
                        },
                        '& .super-app.positive': {
                            backgroundColor: '#fe5eaa9e',
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
