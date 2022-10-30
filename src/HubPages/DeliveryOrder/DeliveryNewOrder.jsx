import React, { useEffect, useState } from 'react'
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
import { Fragment } from 'react';
import OrderAssignForDelivery from './OrderAssignForDelivery';
import { makeRequest } from '../../Services/api';
import { useAlert } from 'react-alert';
import { useAuth } from '../../Services/auth';
const DeliveryNewOrder = () => {
    let alert = useAlert();
    const {user, setLoading } = useAuth();
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
    const [hubOrderData, sethubOrderData] = useState([]);
    const fetchData = async () => {
        const hubId = user.tokenable_id
        setLoading(true);
        makeRequest('GET', `fetchHubOrderByHubId/${hubId}?status=new`).then(result => {
            alert.success(result.message);
            sethubOrderData(result.data);
            console.log(result + JSON.stringify(result.data))
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
    return (
        <Fragment>
            <div className='pickup_table_section'>
                <p>Delivery Orders</p>
                <TableContainer component={Paper}>
                    <Table stickyHeader striped aria-label="sticky table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell>Ck Order Id</StyledTableCell>
                                <StyledTableCell>From Hub</StyledTableCell>
                                <StyledTableCell>To Hub</StyledTableCell>
                                <StyledTableCell>Package Weight</StyledTableCell>
                                <StyledTableCell>Item Total Weight</StyledTableCell>
                                <StyledTableCell>City</StyledTableCell>
                                <StyledTableCell>State</StyledTableCell>
                                <StyledTableCell>Address</StyledTableCell>
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
                                        <StyledTableCell>{row.ck_order_id}</StyledTableCell>
                                        <StyledTableCell>{row.from_hub_id}</StyledTableCell>
                                        <StyledTableCell>{row.to_hub_id}</StyledTableCell>
                                        <StyledTableCell>{row.package_weight}</StyledTableCell>
                                        <StyledTableCell>{row.item_total_weight}</StyledTableCell>
                                        <StyledTableCell>{row.sub_order_id}</StyledTableCell>
                                        <StyledTableCell>{row.sub_order_source}</StyledTableCell>
                                        <StyledTableCell>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-toggle="modal" data-target=".assign_order_to_delivery_boy"
                                            >
                                                Assign For Delivery
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
            </div>
            {/* ASSIGN DETAILS MODAL TO AGENT HUB TABLE */}
            <div className="modal fade assign_order_to_delivery_boy" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog  add-partner modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editPartnerTitle">
                                Avalaible Delivery Partner
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true" className="modal-off">
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <OrderAssignForDelivery />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default DeliveryNewOrder