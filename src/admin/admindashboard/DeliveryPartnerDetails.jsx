import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
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
import { useAuth } from "../../Services/auth";
import { useAlert } from "react-alert";
import { makeRequest } from "../../Services/api";
import { useEffect } from "react";
// import Loader from "../../Helpers/Loader";
const DeliveryPartnerDetails = () => {
    let alert = useAlert();
    const { setLoading } = useAuth();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
            padding: '5px 0px',
            minWidth: '60px',
            textAlign: 'center',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: '12px',
            padding: '5px 5px',
            border: '1px solid #c8c8c8'
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }));

    const [addAgent, setAddAgent] = useState([]);

    // ALL Delivery Agent  LIST START
    const fetchData = async () => {
        setLoading(true);
        makeRequest('GET', `deliveryAgentsList`).then(result => {
            setAddAgent(result.data);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const auth = useAuth();

    if (!auth.isAuthenticated()) {
        return <Redirect to="/admin" />
    }
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
                    <div className='table-heading'>
                        <h2 className='text-center'>Delivery Agents List</h2>
                    </div>
                    <TableContainer component={Paper}>
                        <Table stickyHeader striped aria-label="sticky table">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell>Id</StyledTableCell>
                                    <StyledTableCell>Hub Id</StyledTableCell>
                                    <StyledTableCell>First Name </StyledTableCell>
                                    <StyledTableCell>Last Name </StyledTableCell>
                                    <StyledTableCell>Email </StyledTableCell>
                                    <StyledTableCell>Phone No.</StyledTableCell>
                                    <StyledTableCell>Alt. Phone No.</StyledTableCell>
                                    <StyledTableCell>Dob</StyledTableCell>
                                    <StyledTableCell>City</StyledTableCell>
                                    <StyledTableCell>State</StyledTableCell>
                                    <StyledTableCell>Pincode</StyledTableCell>
                                    <StyledTableCell>Current Add.</StyledTableCell>
                                    <StyledTableCell>Permanent Add.</StyledTableCell>
                                    <StyledTableCell>Pan Card No.</StyledTableCell>
                                    <StyledTableCell>Driving Licence No.</StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    addAgent.map((item, id) => {
                                        return (
                                            <>
                                                <StyledTableRow hover tabIndex={-1} key={id} >
                                                    <StyledTableCell>{item.id}</StyledTableCell>
                                                    <StyledTableCell>{item.linked_hub_id}</StyledTableCell>
                                                    <StyledTableCell>{item.first_name}</StyledTableCell>
                                                    <StyledTableCell>{item.last_name}</StyledTableCell>
                                                    <StyledTableCell>{item.email_id}</StyledTableCell>
                                                    <StyledTableCell>{item.phone_no}</StyledTableCell>
                                                    <StyledTableCell>{item.alter_phone_no} </StyledTableCell>
                                                    <StyledTableCell>{item.dob}</StyledTableCell>
                                                    <StyledTableCell>{item.city}</StyledTableCell>
                                                    <StyledTableCell>{item.state}</StyledTableCell>
                                                    <StyledTableCell>{item.pin}</StyledTableCell>
                                                    <StyledTableCell>{item.current_address}</StyledTableCell>
                                                    <StyledTableCell>{item.permanent_address}</StyledTableCell>
                                                    <StyledTableCell>{item.pan_card_no}</StyledTableCell>
                                                    <StyledTableCell>{item.driving_licence_no} </StyledTableCell>
                                                </StyledTableRow>
                                            </>
                                        )
                                    })
                                }

                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        page={page}
                                        onPageChange={handleChangePage}
                                        rowsPerPage={rowsPerPage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        rowsPerPageOptions={[10, 25, 100]}
                                        count={addAgent.length}
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