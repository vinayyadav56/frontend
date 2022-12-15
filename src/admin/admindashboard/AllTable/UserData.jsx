import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import "./Table.css";
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
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { makeRequest } from "../../../Services/api";
import { useAuth } from "../../../Services/auth";

const UserData = () => {
    const { setLoading } = useAuth();
    // const [searchUserData, setSearchUserData] = useState([]);
    // const [setFilterVal] = useState([]);
    const [userData, setUserData] = useState([]);
    const [searchapiData, setSearchapiData] = useState([]);
    const [searchTerm] = useState("");

    // searchfuntion
    const handleSearch = (e) => {
        e.preventDefault();
        if (e.target.value === "") {
            userData(searchapiData);
        } else {
            const filterResult = searchapiData.filter((item) =>
                item.first_name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setUserData(filterResult);
        }
        // eslint-disable-next-line
        // setFilterVal(e.target.value);
    };
    const fetchData = async () => {
        setLoading(true);
        makeRequest('GET', `usersList`).then(result => {
            setUserData(result.userList);
            setSearchapiData(result.userList);
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

    // delete function start
    const handleDelete = (id, e) => {
        e.preventDefault();
        // let newdata = userData;
        setLoading(true);

        makeRequest('DELETE', `delete-user/${id}`).then(result => {
            alert.success(result.message);
            result.success && userData.splice(id, 1) && setUserData(result.newdata);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };


    // PAGINATION ENDS

    const [userOpen, setUserOpen] = React.useState(false);

    const handleClickOpen = () => {
        setUserOpen(true);
    };

    const handleClose = () => {
        setUserOpen(false);
    };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        <div>
            <div className="filter_partner">

                <div className="table-heading">
                    <h2 className="text-center ">All User Data</h2>
                </div>
                <div className="form-row">
                    <div className="col-md-2 mt-5">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search Partner"
                            onChange={handleSearch}
                        />
                    </div>
                </div>

            </div>
            {/* <Paper sx={{ width: '100%', overflow: 'hidden' }}> */}
            <TableContainer component={Paper}>
                <Table stickyHeader striped aria-label="sticky table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>First Name</StyledTableCell>
                            <StyledTableCell>Last Name</StyledTableCell>
                            <StyledTableCell>Dob</StyledTableCell>
                            <StyledTableCell>Pincode</StyledTableCell>
                            <StyledTableCell>City</StyledTableCell>
                            <StyledTableCell>State</StyledTableCell>
                            <StyledTableCell>Address</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {userData
                            // eslint-disable-next-line
                            .filter((val) => {
                                if (searchTerm === "") {
                                    return val;
                                } else if (
                                    val.first_name
                                        .toLocaleLowerCase()
                                        .includes(searchTerm.toLocaleLowerCase())
                                ) {
                                    return val;
                                }
                            })
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, id) => (
                                <StyledTableRow hover tabIndex={-1} key={id}>
                                    <StyledTableCell>{row.id}</StyledTableCell>
                                    <StyledTableCell>{row.first_name}</StyledTableCell>
                                    <StyledTableCell>{row.last_name}</StyledTableCell>
                                    <StyledTableCell>{row.dob}</StyledTableCell>
                                    <StyledTableCell>{row.pincode}</StyledTableCell>
                                    <StyledTableCell>{row.city}</StyledTableCell>
                                    <StyledTableCell>{row.state}</StyledTableCell>
                                    <StyledTableCell>{row.address}</StyledTableCell>
                                    <StyledTableCell>

                                        <button
                                            className="btn delete-btn mr-1"
                                            onClick={handleClickOpen}
                                            variant="outlined" color="error"
                                        >
                                            <DeleteIcon />
                                        </button>
                                        {/* Delete POPUP START */}
                                        <Dialog
                                            open={userOpen}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {"Are you want to delete partner?"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    Once You Delete it , never backup it.
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose}>Disagree</Button>
                                                <Button onClick={() => handleDelete(row.id)} autoFocus>
                                                    Agree
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                        {/* Delete POPUP ENDS */}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={10}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                rowsPerPageOptions={[10, 25, 100]}
                                count={userData.length}
                                rows={10}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            {/* </Paper> */}
        </div>
    );
};

export default UserData;
