import React, {useEffect} from 'react'
import { Fragment } from 'react'
import "../admin/admindashboard/AllTable/Table.css";
import "../admin/admindashboard/partnerorder.css";
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
import DeliveryHeader from './DeliveryHeader';
import DeliverySidebar from './DeliverySidebar';
import PickupQrScan from './PickupQrScan';
import {makeRequest} from "../Services/api";
import {useAlert} from "react-alert";
import {useAuth} from "../Services/auth";
import DeliveryQrScan from "./DeliveryQrScan";

const PickupOrder = ({ userActive, addUserLocal }) => {
    let alert = useAlert();
    const { user, setLoading } = useAuth();
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
    const [pickuoOrders, setPickupOrders] = useState([]);

    const fetchPickupOrders = async () => {
        setLoading(true);
        // const hubId = user.id;
        makeRequest('GET', `orders/agent/delivery`).then(result => {
            setPickupOrders(result.data);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };

    useEffect(() => {
        fetchPickupOrders();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <section className="user-dashboard">
                <DeliverySidebar userActive={userActive} />
                <section className="main-content">
                    <DeliveryHeader addUserLocal={addUserLocal} />
                    <div className='pickup_table_section mt-5'>
                        <p>Delivery Orders</p>
                        <TableContainer component={Paper}>
                            <Table stickyHeader striped aria-label="sticky table">
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell>Id</StyledTableCell>
                                        <StyledTableCell>Customer Name</StyledTableCell>
                                        <StyledTableCell>Phone</StyledTableCell>
                                        <StyledTableCell>Pincode</StyledTableCell>
                                        <StyledTableCell>City</StyledTableCell>
                                        <StyledTableCell>State</StyledTableCell>
                                        <StyledTableCell>Address</StyledTableCell>
                                        <StyledTableCell>Action</StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {pickuoOrders.map((order,i) => {
                                        return (
                                            <StyledTableRow hover tabIndex={-1}>
                                                <StyledTableCell>{i+1}</StyledTableCell>
                                                <StyledTableCell>
                                                    {order.co ?.sender.first_name} {order.co ?.sender.last_name}
                                                    {order.po ?.sender_name}
                                                    {order.alpha ?.sender.first_name} {order.alpha ?.sender.last_name}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {order.co ?.sender.phone_no}
                                                    {order.po ?.sender_contact_no}
                                                    {order.alpha ?.sender.first_name} {order.alpha ?.sender.last_name}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {order.co ?.sender.pincode}
                                                    {order.po ?.sender_pincode}
                                                    {order.alpha ?.sender.first_name} {order.alpha ?.sender.last_name}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {order.co ?.sender.city}
                                                    {order.po ?.sender_city}
                                                    {order.alpha ?.sender.first_name} {order.alpha ?.sender.last_name}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {order.co ?.sender.state}
                                                    {order.po ?.sender_state}
                                                    {order.alpha ?.sender.first_name} {order.alpha ?.sender.last_name}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    {order.co ?.sender.address}
                                                    {order.po ?.sender_house_number} {order.po ?.sender_locality}
                                                    {order.alpha ?.sender.first_name} {order.alpha ?.sender.last_name}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                    <DeliveryQrScan orderDetails={order}/>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        )
                                    })}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            page={page}
                                            onPageChange={handleChangePage}
                                            rowsPerPage={rowsPerPage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            rowsPerPageOptions={[10, 25, 100]}
                                            count={pickuoOrders.length}
                                            rows={10}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </div>
                </section>
            </section>

        </Fragment>
    )
}

export default PickupOrder
