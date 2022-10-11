import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Adminmenu.css";
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
import AdminSidebar from "./AdminSidebar";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AddDeliveryPartner from "./AddDeliveryPartner";
const DeliveryPartnerDetails = () => {
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
                                    placeholder="Search Delivery Partner"
                                    // onChange={handleSearch}
                                />
                            </div>
                            <div className="col-md-10">
                                <div className="d-flex justify-content-end">
                                    <AddDeliveryPartner />
                                </div>
                            </div>
                        </div>
                    </div>
                    <TableContainer component={Paper}>
                        <Table stickyHeader striped aria-label="sticky table">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Name </StyledTableCell>
                                    <StyledTableCell>Email </StyledTableCell>
                                    <StyledTableCell>Phone No.</StyledTableCell>
                                    <StyledTableCell>City</StyledTableCell>
                                    <StyledTableCell>State</StyledTableCell>
                                    <StyledTableCell>Pincode</StyledTableCell>
                                    <StyledTableCell>Address</StyledTableCell>
                                    <StyledTableCell>Actions</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>

                                <StyledTableRow hover tabIndex={-1}>
                                    <StyledTableCell>Delhi</StyledTableCell>
                                    <StyledTableCell>Delhi</StyledTableCell>
                                    <StyledTableCell>Delhi</StyledTableCell>
                                    <StyledTableCell>Delhi</StyledTableCell>
                                    <StyledTableCell>Delhi</StyledTableCell>
                                    <StyledTableCell>Delhi</StyledTableCell>
                                    <StyledTableCell>Delhi</StyledTableCell>
                                    
                                    <StyledTableCell>
                                        <button className="btn btn-success py-0">
                                            See Details
                                        </button>
                                    </StyledTableCell>
                                </StyledTableRow>
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


        </Fragment>


    )
}

export default DeliveryPartnerDetails