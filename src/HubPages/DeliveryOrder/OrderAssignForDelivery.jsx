import React from 'react'
import { Fragment } from 'react'
import "../../admin/admindashboard/AllTable/Table.css";
import "../../admin/admindashboard/partnerorder.css";
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
const OrderAssignForDelivery = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
            border: '1px solid #c8c8c8',
            maxWidth: '160px'
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }));
    // const [hubOrderData] = useState([]);
    const hubOrderData = [
        {
            id: '1',
            deliver_name: 'Rupesh Jangid',
            deliver_phone: '04/11/2022',
            available_time: '12:30 AM',
            cost: '₹614'
        },
        {
            id: '2',
            deliver_name: 'Naveen Rohilla',
            deliver_phone: '04/11/2022',
            available_time: '12:30 AM',
            cost: '₹614'
        },
        {
            id: '3',
            deliver_name: 'Deepak Yadav',
            deliver_phone: '04/11/2022',
            available_time: '12:30 AM',
            cost: '₹614'
        },
        {
            id: '4',
            deliver_name: 'Ramesh Srivastav',
            deliver_phone: '04/11/2022',
            available_time: '12:30 AM',
            cost: '₹614'
        }
    ]
    return (
        <Fragment>
                <TableContainer component={Paper}>
                    <Table stickyHeader striped aria-label="sticky table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell>Delivery Boy Name</StyledTableCell>
                                <StyledTableCell>Phone Number</StyledTableCell>
                                <StyledTableCell>Availabiltiy Time</StyledTableCell>
                                <StyledTableCell>Cost</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {hubOrderData
                                // eslint-disable-next-line
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, id) => (
                                    <StyledTableRow hover tabIndex={-1} key={id}>
                                        <StyledTableCell>{row.id}</StyledTableCell>
                                        <StyledTableCell>{row.deliver_name}</StyledTableCell>
                                        <StyledTableCell>{row.deliver_phone}</StyledTableCell>
                                        <StyledTableCell>{row.available_time}</StyledTableCell>
                                        <StyledTableCell>{row.cost}</StyledTableCell>
                                        <StyledTableCell>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-toggle="modal" data-target=".assign_order_to_delivery_boy"
                                            >
                                                Assign
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
                                    count={hubOrderData.length}
                                    rows={10}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
        </Fragment>

    )
}

export default OrderAssignForDelivery