import React from 'react'
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
import { useState } from 'react';
import { Fragment } from 'react';

const NewOrder = () => {
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
            border: '1px solid #c8c8c8'
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }));
    const [hubOrderData] = useState([]);
    return (
        <Fragment>
            <div className='pickup_table_section'>
                <p>Pickup Orders</p>
                <TableContainer component={Paper}>
                    <Table stickyHeader striped aria-label="sticky table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell>Customer Name</StyledTableCell>
                                <StyledTableCell>Pickup Date</StyledTableCell>
                                <StyledTableCell>Pickup Time</StyledTableCell>
                                <StyledTableCell>Cost</StyledTableCell>
                                <StyledTableCell>Pincode</StyledTableCell>
                                <StyledTableCell>City</StyledTableCell>
                                <StyledTableCell>State</StyledTableCell>
                                <StyledTableCell>Address</StyledTableCell>
                                <StyledTableCell>Details</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {hubOrderData
                                // eslint-disable-next-line
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, id) => (
                                    <StyledTableRow hover tabIndex={-1} key={id}>
                                        <StyledTableCell>{row.id}</StyledTableCell>
                                        <StyledTableCell>{row.partner_name}</StyledTableCell>
                                        <StyledTableCell>{row.partner_email}</StyledTableCell>
                                        <StyledTableCell>{row.partner_phone}</StyledTableCell>
                                        <StyledTableCell>{row.partner_pincode}</StyledTableCell>
                                        <StyledTableCell>{row.partner_city}</StyledTableCell>
                                        <StyledTableCell>{row.partner_state}</StyledTableCell>
                                        <StyledTableCell>{row.partner_address}</StyledTableCell>

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
            </div>
        </Fragment>
    )
}

export default NewOrder