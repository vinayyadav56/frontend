import React, { Fragment, useEffect } from 'react'
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
import { useAuth } from '../../../Services/auth';
import { useAlert } from 'react-alert';
import { makeRequest } from '../../../Services/api';
const CkAssignAvailibility = () => {
    const { setLoading } = useAuth();
    const alert = useAlert();
    const [ckAssignUser, setCkAssignUser] = useState([]);
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

    const fetchAvailbility = async () => {
        setLoading(true);
        makeRequest('POST', `fetchUsersAvailability`).then(result => {
            alert.success(result.message);
            result.userAvailability && setCkAssignUser(result.userAvailability)
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
    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table stickyHeader striped aria-label="sticky table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>From Date</StyledTableCell>
                            <StyledTableCell>From City</StyledTableCell>
                            <StyledTableCell>From Airport Code</StyledTableCell>
                            <StyledTableCell>From St. Code</StyledTableCell>
                            <StyledTableCell>To City</StyledTableCell>
                            <StyledTableCell>To Airport Code</StyledTableCell>
                            <StyledTableCell>To St. Code</StyledTableCell>
                            <StyledTableCell>Journey Type</StyledTableCell>
                            <StyledTableCell>Available Space</StyledTableCell>
                            <StyledTableCell>Journey Medium</StyledTableCell>

                            <StyledTableCell>Action</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {ckAssignUser
                            // eslint-disable-next-line

                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((item, id) => (
                                <StyledTableRow hover key={id}>
                                    <StyledTableCell>{item.id}</StyledTableCell>
                                    <StyledTableCell>{item.first_name}{item.last_name}</StyledTableCell>
                                    <StyledTableCell>{item.from_date}</StyledTableCell>
                                    <StyledTableCell>{item.from_location_city}</StyledTableCell>
                                    <StyledTableCell>{item.from_location_airport_code}</StyledTableCell>
                                    <StyledTableCell>{item.from_location_station_code}</StyledTableCell>
                                    <StyledTableCell>{item.to_location_city}</StyledTableCell>
                                    <StyledTableCell>{item.to_location_airport_code}</StyledTableCell>
                                    <StyledTableCell>{item.to_location_station_code}</StyledTableCell>
                                    <StyledTableCell>{item.journey_type}</StyledTableCell>
                                    <StyledTableCell>{item.available_space}</StyledTableCell>
                                    <StyledTableCell>{item.journey_medium}</StyledTableCell>
                                    <StyledTableCell>
                                        <button
                                            type="button"
                                            className="btn hub_order"
                                            data-toggle="modal" data-target=".see_hub-lg"
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
                                count={ckAssignUser.length}
                                rows={10}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Fragment>
    )
}
export default CkAssignAvailibility;
