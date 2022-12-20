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
import { makeRequest } from '../../../Services/api';

const HubAssignOrder = () => {

    const { setLoading } = useAuth();
    // const [setFilterVal] = useState([]);

    const [hubList, setHubList] = useState([]);
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

    const fetchData = async () => {
        setLoading(true);
        makeRequest('GET', `hubsList`).then(result => {
            // alert.success(result.message);
            // result.success && 
            setHubList(result.data);
        })
            // .catch(err => {
            //     alert.error(err.message);
            // })
            .finally(() => {
                setLoading(false);
            })
    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Fragment>
                <TableContainer component={Paper}>
                    <Table stickyHeader striped aria-label="sticky table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell>Hub Name</StyledTableCell>
                                <StyledTableCell>Hub Code</StyledTableCell>
                                <StyledTableCell>City</StyledTableCell>
                                <StyledTableCell>State</StyledTableCell>
                                <StyledTableCell>Pincode</StyledTableCell>
                                <StyledTableCell>Contact Number</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {hubList
                                // eslint-disable-next-line

                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item, id) => (
                                    <StyledTableRow hover tabIndex={-1} key={id}>
                                        <StyledTableCell>{item.id}</StyledTableCell>
                                        <StyledTableCell>{item.hub_name}</StyledTableCell>
                                        <StyledTableCell>{item.hub_code}</StyledTableCell>
                                        <StyledTableCell>{item.city}</StyledTableCell>
                                        <StyledTableCell>{item.state}</StyledTableCell>
                                        <StyledTableCell>{item.pin}</StyledTableCell>
                                        <StyledTableCell>{item.contact_number}</StyledTableCell>
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
                                    count={hubList.length}
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