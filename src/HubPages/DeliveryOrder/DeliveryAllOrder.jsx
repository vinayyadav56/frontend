import React, { useEffect, useRef, useState } from 'react'
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
import { makeRequest } from '../../Services/api';
import { useAlert } from 'react-alert';
import { useAuth } from '../../Services/auth';
const DeliveryAllOrder = () => {
    let alert = useAlert();
    const { user, setLoading } = useAuth();
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
    const [hubOrderData, sethubOrderData] = useState([]);
    const [hubAgent, setHubAgents] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const modalCloseBtn = useRef();

    const fetchData = async () => {
        const hubId = user.id
        setLoading(true);
        makeRequest('GET', `fetchHubOrderByHubId/${hubId}?status=new`).then(result => {
            // alert.success(result.message);
            sethubOrderData(result.data);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };

    const fetchAgents = async () => {
        setLoading(true);
        const hubId = user.id;
        makeRequest('GET', `deliveryAgentsListByHubId/${hubId}`).then(result => {
            // alert.success(result.message);
            setHubAgents(result.data);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };


    const initOrderAssign = (order) => {
        setSelectedOrder(order);
    }

    const handleOrderAssign = (agent, transitType) => {
        setLoading(true);
        const requestBody = {
            agent_id: agent.id,
            order_id: selectedOrder.id,
            order_type: selectedOrder.source,
            transit_type: transitType,
        }
        makeRequest('POST', 'orders/assign-agent', requestBody).then(res => {
            alert.success(res.message)
            modalCloseBtn.current.click();
            res.success && fetchData();
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchData();
        fetchAgents();
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
                                <StyledTableCell>Sub Order Id</StyledTableCell>
                                <StyledTableCell>Sub Order Source</StyledTableCell>
                                <StyledTableCell>Action</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {hubOrderData
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
                                                data-toggle="modal"
                                                data-target=".assign_order_to_delivery_boy"
                                                onClick={() => initOrderAssign(row)}
                                            >
                                                Assign For Pickup
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
            <div className="modal fade assign_order_to_delivery_boy" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
                <div className="modal-dialog  add-partner modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="assigncarrierfromAdminTitle">
                                Available Delivery Agents
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                ref={modalCloseBtn}
                            >
                                <span aria-hidden="true" className="modal-off">
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <TableContainer component={Paper}>
                                <Table stickyHeader striped aria-label="sticky table">
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell>Id</StyledTableCell>
                                            <StyledTableCell>Name</StyledTableCell>
                                            <StyledTableCell>Email</StyledTableCell>
                                            <StyledTableCell>Phone</StyledTableCell>
                                            <StyledTableCell>Alt Phone</StyledTableCell>
                                            <StyledTableCell>Action</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {hubAgent
                                            .map((row, id) => (
                                                <StyledTableRow hover tabIndex={-1} key={id}>
                                                    <StyledTableCell>{row.id}</StyledTableCell>
                                                    <StyledTableCell>{row.first_name} {row.last_name}</StyledTableCell>
                                                    <StyledTableCell>{row.email_id}</StyledTableCell>
                                                    <StyledTableCell>{row.phone_no}</StyledTableCell>
                                                    <StyledTableCell>{row.alter_phone_no}</StyledTableCell>
                                                    <StyledTableCell>
                                                        <button
                                                            type="button"
                                                            className="btn btn-success"
                                                            data-toggle="modal"
                                                            onClick={() => handleOrderAssign(row, 'PICKUP')}
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
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default DeliveryAllOrder