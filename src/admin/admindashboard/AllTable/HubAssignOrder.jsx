import React, { Fragment } from 'react'
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

const HubDetails = [
    {
        id: 1,
        ck_order_id: 'CK001',
        from_location: 'Delhi',
        to_location: 'Mumbai',
        to_date: '04/12/2022',
        from_date: '9/12/2022',
    }
]
const HubAssignOrder = () => {
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
                <TableContainer component={Paper}>
                    <Table stickyHeader striped aria-label="sticky table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell>CK Order Id</StyledTableCell>
                                <StyledTableCell>From Location</StyledTableCell>
                                <StyledTableCell>To Location</StyledTableCell>
                                <StyledTableCell>From Date</StyledTableCell>
                                <StyledTableCell>To Date</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {HubDetails
                                // eslint-disable-next-line

                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item, id) => (
                                    <StyledTableRow hover tabIndex={-1} key={id}>
                                        <StyledTableCell>{item.id}</StyledTableCell>
                                        <StyledTableCell>{item.ck_order_id}</StyledTableCell>
                                        <StyledTableCell>{item.from_location}</StyledTableCell>
                                        <StyledTableCell>{item.to_location}</StyledTableCell>
                                        <StyledTableCell>{item.from_date}</StyledTableCell>
                                        <StyledTableCell>{item.to_date}</StyledTableCell>
                                        <StyledTableCell>
                                            <button
                                                type="button"
                                                className="btn hub_order"
                                                data-toggle="modal" data-target=".see_hub-lg"
                                            >
                                                Assign Order
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
                                    count={HubDetails.length}
                                    rows={10}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
        </Fragment>
    )
}

export default HubAssignOrder