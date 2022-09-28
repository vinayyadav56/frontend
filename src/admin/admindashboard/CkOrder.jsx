import React, { Fragment, useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
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
import { DataGrid } from '@mui/x-data-grid';


// import MaterialCheckbox from '@mui/material/Checkbox';
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'To Location',
        width: 150,
        editable: true,
    },

    {
        field: 'To Location',
        headerName: 'To Location',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 'delhi' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 'delhi' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 'delhi' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 'delhi' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 'delhi' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 'delhi' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 'delhi' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 'delhi' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 'delhi' },
];
//   CKORDER TABLE END

// CKORDER JS START 

export default function CkOrder() {
    const [ckOrder, setCkOrder] = useState({
        from_location: "",
        to_location: "",
    });
    const handleLocation = (e) => {
        const { name, value } = e.target;
        setCkOrder({
            ...ckOrder,
            [name]: value,
        });
    };
    const [ setOrderData] = useState({});
    const handleApi = async (e) => {
        // e.preventDefault();
        const response = await axios.post("http://35.91.35.188/api/searchLocationbyFromto", { ckOrder });
        try {
            console.log("response" + JSON.stringify(response.data))
            setOrderData(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleApi();
        // eslint-disable-next-line
    }, []);
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
                            <NavLink to="/admindashboard" className="active">
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
                                <input type="number" className="form-control" id="colFormLabel2" />
                            </div>
                        </div>
                    </form>

                    {/* <TABLE START */}

                    <Box sx={{ height: 400, width: '100%', background: '#fff' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            sx={{ width: '100%' }}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                    </Box>

                    {/* Table ends */}
                </section>
            </main>
        </Fragment>
    );
}