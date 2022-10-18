import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import {makeRequest} from "../../../Services/api";
import {useAuth} from "../../../Services/auth";

const UserAvalibiltyCheck = () => {
    const {setLoading} = useAuth();

    const [searchUser, setSearchUser] = useState({
        from_location: "",
        to_location: "",
        weight: "",
        quantity: "",
    });
    const [filterUser, setFilterUser] = useState({});

    const fetchAvailbility = async () => {
        setLoading(true);

        makeRequest('POST', `user-availability-fetch`, searchUser).then(result => {
            alert.success(result.message);
            result.success && setFilterUser(result.userAvailability);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })

    }
    useEffect(() => {
        fetchAvailbility();
        // eslint-disable-next-line
    }, []);

    const handleSearchinput = (e) => {
        setSearchUser(e.target.value)
    };
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
    const StyledTableCell = styled(TableCell)(({theme}) => ({
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

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }));
    return (
        <div>
            <div className="form-title mt-5">
                <h2>Check Availbility</h2>
            </div>
            <div className="form-group row">
                <div className="col-md-6">
                    <label htmlFor="inputAddress">From :</label>
                    <input
                        id="inputfrom"
                        className="form-control"
                        name="from_location"
                        placeholder="Enter Location"
                        autoComplete="off"
                        type="text"
                        value={searchUser.from_location}
                        onChange={handleSearchinput}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputto">To :</label>
                    <input
                        id="inputto"
                        type="text"
                        autoComplete="off"
                        placeholder="Enter Location"
                        name="to_location"
                        value={searchUser.to_location}
                        onChange={handleSearchinput}
                        className="form-control"
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputquantity">Weight</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter weight"
                        min="0"
                        name="weight"
                        onChange={handleSearchinput}
                        value={searchUser.weight}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputquantity">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Enter Date"
                        min="0"
                        name="date"
                        onChange={handleSearchinput}
                        value={searchUser.quantity}
                    />
                </div>
            </div>

            <TableContainer component={Paper}>
                <Table stickyHeader striped aria-label="sticky table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Order Id</StyledTableCell>
                            <StyledTableCell>User Id</StyledTableCell>
                            <StyledTableCell>From Location</StyledTableCell>
                            <StyledTableCell>To Location</StyledTableCell>
                            <StyledTableCell>Journey Type</StyledTableCell>
                            <StyledTableCell>Available Space</StyledTableCell>
                            <StyledTableCell>Journey Medium</StyledTableCell>
                            <StyledTableCell>From Date</StyledTableCell>
                            <StyledTableCell>To Date</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {Object.values(filterUser)
                            // eslint-disable-next-line

                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((item, id) => (
                                <StyledTableRow hover tabIndex={-1} key={id}>
                                    <StyledTableCell>{item.id}</StyledTableCell>
                                    <StyledTableCell>{item.order_id}</StyledTableCell>
                                    <StyledTableCell>{item.user_id}</StyledTableCell>
                                    <StyledTableCell>{item.fromlocation}</StyledTableCell>
                                    <StyledTableCell>{item.tolocation}</StyledTableCell>
                                    <StyledTableCell>{item.journey_type}</StyledTableCell>
                                    <StyledTableCell>{item.available_space}</StyledTableCell>
                                    <StyledTableCell>{item.journey_medium}</StyledTableCell>
                                    <StyledTableCell>{item.from_date}</StyledTableCell>
                                    <StyledTableCell>{item.to_date}</StyledTableCell>
                                    <StyledTableCell>
                                        <button className="btn btn-success py-0">
                                            ASSIGN ORDER
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
                                count={filterUser.length}
                                rows={10}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserAvalibiltyCheck;
