import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ".././Adminmenu.css";
import { useState } from "react";
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
import AdminSidebar from "../AdminSidebar";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Addseehub from "./AddHub";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./Hub.css"
import HubDetails from "./HubTabs";
// HUB DATA START
const hubData = [
    {
        id: 1,
        hub_name: 'HUB1',
        hub_code: 'QR2DUV90',
        state: 'Haryana',
        city: 'Gurgaon',
        pin: 122002,
        contact_number: 876543212,
        alternate_contact_number: 876543212,
        hub_full_address: 'Saraswati Vihar, New-Delhi'
    },
    {
        id: 2,
        hub_name: 'HUB1',
        hub_code: 'QR2DUV90',
        state: 'Haryana',
        city: 'Gurgaon',
        pin: 122002,
        contact_number: 876543212,
        alternate_contact_number: 876543212,
        hub_full_address: 'Saraswati Vihar, New-Delhi'
    },
    {
        id: 3,
        hub_name: 'HUB1',
        hub_code: 'QR2DUV90',
        state: 'Haryana',
        city: 'Gurgaon',
        pin: 122002,
        contact_number: 876543212,
        alternate_contact_number: 876543212,
        hub_full_address: 'Saraswati Vihar, New-Delhi'
    },
    {
        id: 4,
        hub_name: 'HUB1',
        hub_code: 'QR2DUV90',
        state: 'Haryana',
        city: 'Gurgaon',
        pin: 122002,
        contact_number: 876543212,
        alternate_contact_number: 876543212,
        hub_full_address: 'Saraswati Vihar, New-Delhi'
    }
]
const AdminHub = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };
    // PAGINATION ENDS

    // DATA GRID TABLE START
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#0747a9',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 12,
            padding: '10px 14px',
            border: '1px solid #c8c8c8'
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }));
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
                    <AdminSidebar />
                </aside>
                <section className="right">
                    <div className="filter_partner">
                        <div className="form-row">
                            <div className="col-md-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search hub here..."
                                // onChange={handleSearch}
                                />
                            </div>
                            <div className="col-md-10">
                                <div className="d-flex justify-content-end">
                                    <Addseehub />
                                </div>
                            </div>
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table stickyHeader striped aria-label="sticky table">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Hub Name </StyledTableCell>
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
                                {hubData.map((item, id) => (
                                    <StyledTableRow hover tabIndex={-1} key={id}>
                                        <StyledTableCell>{item.hub_name}</StyledTableCell>
                                        <StyledTableCell>{item.hub_code}</StyledTableCell>
                                        <StyledTableCell>{item.state}</StyledTableCell>
                                        <StyledTableCell>{item.city}</StyledTableCell>
                                        <StyledTableCell>{item.pin}</StyledTableCell>
                                        <StyledTableCell>{item.contact_number}</StyledTableCell>
                                        <StyledTableCell>{item.alternate_contact_number}</StyledTableCell>
                                        <StyledTableCell>{item.hub_full_address}</StyledTableCell>
                                        <StyledTableCell>
                                            <div className="d-flex">
                                                <button
                                                    type="button"
                                                    className="btn hub_order"
                                                    data-toggle="modal" data-target=".see_hub-lg"
                                                >
                                                    <RemoveRedEyeIcon />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn hub_edit"
                                                    data-toggle="modal"
                                                    data-target="#edithub"
                                                >
                                                    <EditIcon />
                                                </button>
                                                <div
                                                    className="modal fade"
                                                    id="seehub"
                                                    role="dialog"
                                                    aria-labelledby="edithubTitle"
                                                    aria-hidden="true"
                                                >
                                                    <div
                                                        className="modal-dialog modal-dialog-centered add-partner"
                                                        role="document"
                                                    >
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="edithubTitle">
                                                                    Add Hub Details
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="close"
                                                                    data-dismiss="modal"
                                                                    aria-label="Delivery Close"
                                                                >
                                                                    <span aria-hidden="true" className="modal-off">
                                                                        &times;
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button"
                                                    className="btn hub_delete"
                                                    data-toggle="modal"
                                                    data-target="#deletehub"
                                                >
                                                    <DeleteIcon />
                                                </button>
                                                <div
                                                    className="modal fade"
                                                    id="deletehub"
                                                    role="dialog"
                                                    aria-labelledby="deletehubTitle"
                                                    aria-hidden="true">
                                                    <div
                                                        className="modal-dialog modal-dialog-centered add-partner"
                                                        role="document"
                                                    >
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="deletehubTitle">
                                                                    Are You Want To Delete This Hub
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="close"
                                                                    data-dismiss="modal"
                                                                    aria-label="Delivery Close"
                                                                >
                                                                    <span aria-hidden="true" className="modal-off">
                                                                        &times;
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                </section>
            </main>

            <div className="modal fade see_hub-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog  add-partner modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editPartnerTitle">
                                Order Details
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true" className="modal-off">
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <HubDetails/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminHub