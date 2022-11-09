import React from 'react'
import { Fragment } from 'react'
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
const hubPickupData = [
    {
        id: 1,
        from_location: 'Kanpur',
        to_location: 'Gurgaon',
        weight: '90',
        state: 'Haryana',
        city: 'Gurgaon',
        pin: 122002,
        contact_number: 876543212,
        alternate_contact_number: 876543212,
        address: 'Saraswati Vihar, New-Kanpur'
    },
    {
        id: 2,
        from_location: 'Kanpur',
        to_location: 'Gurgaon',
        weight: '90',
        state: 'Haryana',
        city: 'Gurgaon',
        pin: 122002,
        contact_number: 876543212,
        alternate_contact_number: 876543212,
        address: 'Saraswati Vihar, New-Kanpur'
    },
    {
        id: 3,
        from_location: 'Kanpur',
        to_location: 'Gurgaon',
        weight: '90',
        state: 'Haryana',
        city: 'Gurgaon',
        pin: 122002,
        contact_number: 876543212,
        alternate_contact_number: 876543212,
        address: 'Saraswati Vihar, New-Kanpur'
    },
    {
        id: 4,
        from_location: 'Kanpur',
        to_location: 'Gurgaon',
        weight: '90',
        state: 'Haryana',
        city: 'Gurgaon',
        pin: 122002,
        contact_number: 876543212,
        alternate_contact_number: 876543212,
        address: 'Saraswati Vihar, New-Kanpur'
    }
]
const DeliveryOrderDetail = () => {
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
                            <StyledTableCell>From Location</StyledTableCell>
                            <StyledTableCell>To Location</StyledTableCell>
                            <StyledTableCell>Weight</StyledTableCell>
                            <StyledTableCell>State</StyledTableCell>
                            <StyledTableCell>City</StyledTableCell>
                            <StyledTableCell>Pincode</StyledTableCell>
                            <StyledTableCell>Contact No*</StyledTableCell>
                            <StyledTableCell>Alternate No*</StyledTableCell>
                            <StyledTableCell>Address</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {hubPickupData.map((item, id) => (
                            <StyledTableRow hover tabIndex={-1} key={id}>
                                <StyledTableCell>{item.id}</StyledTableCell>
                                <StyledTableCell>{item.from_location}</StyledTableCell>
                                <StyledTableCell>{item.to_location}</StyledTableCell>
                                <StyledTableCell>{item.weight}</StyledTableCell>
                                <StyledTableCell>{item.state}</StyledTableCell>
                                <StyledTableCell>{item.city}</StyledTableCell>
                                <StyledTableCell>{item.pin}</StyledTableCell>
                                <StyledTableCell>{item.contact_number}</StyledTableCell>
                                <StyledTableCell>{item.alternate_contact_number}</StyledTableCell>
                                <StyledTableCell>{item.address}</StyledTableCell>
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
        </Fragment>
    )
}

export default DeliveryOrderDetail