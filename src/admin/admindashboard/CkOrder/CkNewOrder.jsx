import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import "../AllTable/Table.css";
import { makeRequest } from "../../../Services/api";
import { useAuth } from "../../../Services/auth";
import { Fragment } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import config from '../../../config.json'
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Loader from "../../../Helpers/Loader";
import { TrackingStatus } from "../../../config/contants";
import { useAlert } from "react-alert";
import { useRef } from "react";
const CkNewOrder = () => {
    const { setLoading } = useAuth();
    const alert = useAlert();
    const [userData, setUserData] = useState([]);
    const [ckAssignUser, setCkAssignUser] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const modalCloseBtn = useRef();
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
        makeRequest('GET', `fetchNewAlphaOrder`).then(result => {
            setUserData(result.data);
        })
            .finally(() => {
                setLoading(false);
            })
    };

    const fetchAvailbility = async () => {
        setLoading(true);
        makeRequest('POST', `fetchUsersAvailability`).then(result => {
            result.userAvailability && setCkAssignUser(result.userAvailability);
            // console.log(result.userAvailability);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    }

    // ALPHA ORDER ASSIGN FUNCTION TO CARRIER START
    const handleAssign = (user_id, id, ckOrderId) => {
        setLoading(true);
        makeRequest('POST', `assignAlphaOrderToCarrier`, {
            "ckOrderId": ckOrderId,
            "carrierId": user_id,
            "availability_id": id
        }).then(result => {
            alert.success(result.message) 
            modalCloseBtn.current.click();
            fetchAvailbility() && fetchData();

        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })

    };
    // ALPHA ORDER ASSIGN FUNCTION TO CARRIER ENDS

    // QR GENRATE FUNCTION START
    const handleGenrateQr = async (ck_order_id) => {
        setLoading(true);
        makeRequest('POST', `generateQrCode`, {
            order_id: ck_order_id,
            order_type: "ALPHA"
        }).then(result => {
            alert.success(result.message);
            result.success && fetchData();
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    }
    // QR GENRATE FUNCTION ENDS

    useEffect(() => {
        fetchData();
        fetchAvailbility();
        // eslint-disable-next-line
    }, []);

    // // DATA GRID TABLES ENDS

    return (
        <Fragment>
            <div className="container-fluid pb-2">
                {userData.length > 0 ?
                    userData.map((row, id) => {
                        return (

                            <div className="row ck_order_table" key={id}>
                                <div className="col-12 my-2">
                                    <div className="ck_Order_header">
                                        <ul>
                                            <li>
                                                <p>
                                                    <span>From Hub :</span><span>{row.fromHubDetails?.hub_code} , {row.fromHubDetails?.city} , {row.fromHubDetails?.state}</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <span>To Hub :</span><span>{row.toHubDetails?.hub_code} , {row.toHubDetails?.city} , {row.toHubDetails?.state}</span>
                                                </p>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <p>
                                                    <span>Date :</span><span>{row.created_at}</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="ck_Order_body">
                                        <div className="body_list">
                                            <ul>
                                                <li>
                                                    <p>
                                                        <span>Ck Order Id :</span><span>{row.ck_order_id}</span>
                                                    </p>
                                                </li>


                                            </ul>
                                            <ul>
                                                {
                                                    row.delivered_on ?
                                                        <><span>Delivered on :</span><span>{row.delivered_on}</span></>
                                                        :
                                                        ""

                                                }
                                            </ul>
                                            <ul>
                                                <li>
                                                    <p>
                                                        <span>Total Weight :</span><span>{row.items_total_weight}</span>
                                                    </p>
                                                </li>
                                                <p>
                                                    {
                                                        row.assigned_carrier_id ?
                                                            <>
                                                                <span>Assigned Carrier Id :</span><span>{row.assigned_carrier_id}</span>
                                                            </>
                                                            :
                                                            ""
                                                    }
                                                </p>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 my-2">
                                    <div className="ck_Order_footer">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <a className="btn btn-info py-1" data-toggle="collapse" href={`#collapsable-${row.id}`} role="button" aria-expanded="false" aria-controls="collapseTable">
                                                See Order Details
                                            </a>
                                            {
                                                (row.qr_image_alpha == null) ?
                                                    <button type="button" className="btn btn-warning" onClick={((e) => handleGenrateQr(row.ck_order_id))}>
                                                        Generate Qr Code
                                                    </button>
                                                    :
                                                    <img style={{ width: '100px', height: '100px' }} src={`${config.BASE_URL}${row.qr_image_alpha}`} alt="qrcode" />
                                            }
                                            {
                                                (row.status !== TrackingStatus.carrier_assigned & row.qr_image_alpha !== null) ?
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        data-toggle="modal" data-target={`#call-${row.id}`}
                                                        
                                                    >
                                                        Assign Carrier
                                                    </button>
                                                    :
                                                    ""
                                            }

                                        </div>
                                        <div className="collapse" id={`collapsable-${row.id}`}>
                                            {
                                                row.sub_order && row.sub_order.map((i) => {
                                                    return (
                                                        <div>
                                                            <div className="collapse_sub_order">
                                                                <ul className="d-flex w-100 justify-content-between">
                                                                    <li>
                                                                        <p>
                                                                            <span>Sub Order ID :</span>
                                                                            <span>{i.sub_order_id}</span>
                                                                        </p>
                                                                        <p>
                                                                            <span>Sub Order Source :</span>
                                                                            <span>{i.sub_order_source}</span>
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            <span>Delivery Pincode:</span>
                                                                            <span>{i.subOrderDetails.delivery_pincode}</span>
                                                                        </p>
                                                                        <p>
                                                                            <span>Pickup Pincode:</span>
                                                                            <span>{i.subOrderDetails.pickup_pincode}</span>
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                                {
                                                                    i.sub_order_source === "PO" ?
                                                                        <>
                                                                            <div className="collapse_sub_order_details">
                                                                                <ul className="d-flex justify-content-between">
                                                                                    <li>
                                                                                        <p>
                                                                                            <span>Sender Name :</span>
                                                                                            <span>{i.subOrderDetails ? i.subOrderDetails.sender_name : ""}</span>
                                                                                        </p>
                                                                                    </li>
                                                                                    <li>
                                                                                        <p>
                                                                                            <span>Sender Email :</span>
                                                                                            <span>{i.subOrderDetails ? i.subOrderDetails.sender_email : ""}</span>
                                                                                        </p>
                                                                                    </li>
                                                                                    <li>
                                                                                        <p>
                                                                                            <span>Sender Contact :</span>
                                                                                            <span>{i.subOrderDetails ? i.subOrderDetails.sender_contact_no : ""}</span>
                                                                                        </p>
                                                                                    </li>
                                                                                    <li>
                                                                                        <p>
                                                                                            <span>Sender City :</span>
                                                                                            <span>{i.subOrderDetails ? i.subOrderDetails.sender_city : ""}</span>
                                                                                        </p>
                                                                                    </li>
                                                                                    <li>
                                                                                        <p>
                                                                                            <span>Sender State :</span>
                                                                                            <span>{i.subOrderDetails ? i.subOrderDetails.sender_state : ""}</span>
                                                                                        </p>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="collapse_sub_order_details">
                                                                                <ul className="d-flex justify-content-between">
                                                                                    <li>
                                                                                        <p>
                                                                                            <span>Receiver Name :</span>
                                                                                            <span>{i.subOrderDetails ? i.subOrderDetails.receiver_name : ""}</span>
                                                                                        </p>
                                                                                    </li>
                                                                                    <li>
                                                                                        <p>
                                                                                            <span>Receiver Email :</span>
                                                                                            <span>{i.subOrderDetails ? i.subOrderDetails.receiver_email : ""}</span>
                                                                                        </p>
                                                                                    </li>
                                                                                    <li>
                                                                                        <p>
                                                                                            <span>Receiver Contact :</span>
                                                                                            <span>{i.subOrderDetails ? i.subOrderDetails.receiver_contact_no : ""}</span>
                                                                                        </p>
                                                                                    </li>
                                                                                    <li>
                                                                                        <p>
                                                                                            <span>Receiver City :</span>
                                                                                            <span>{i.subOrderDetails ? i.subOrderDetails.receiver_city : ""}</span>
                                                                                        </p>
                                                                                    </li>
                                                                                    <li>
                                                                                        <p>
                                                                                            <span>Receiver State :</span>
                                                                                            <span>{i.subOrderDetails ? i.subOrderDetails.receiver_state : ""}</span>
                                                                                        </p>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </>
                                                                        :
                                                                        <div className="collapse_sub_order_details">
                                                                            <ul className="d-flex justify-content-between">
                                                                                <li>
                                                                                    <p>
                                                                                        <span>Receiver Name :</span>
                                                                                        <span>{i.subOrderDetails ? i.subOrderDetails.receiver_name : ""}</span>
                                                                                    </p>
                                                                                </li>
                                                                                <li>
                                                                                    <p>
                                                                                        <span>Receiver Email :</span>
                                                                                        <span>{i.subOrderDetails ? i.subOrderDetails.receiver_email : ""}</span>
                                                                                    </p>
                                                                                </li>
                                                                                <li>
                                                                                    <p>
                                                                                        <span>Receiver Contact :</span>
                                                                                        <span>{i.subOrderDetails ? i.subOrderDetails.receiver_contact_no : ""}</span>
                                                                                    </p>
                                                                                </li>
                                                                                <li>
                                                                                    <p>
                                                                                        <span>Receiver City :</span>
                                                                                        <span>{i.subOrderDetails ? i.subOrderDetails.receiver_city : ""}</span>
                                                                                    </p>
                                                                                </li>
                                                                                <li>
                                                                                    <p>
                                                                                        <span>Receiver State :</span>
                                                                                        <span>{i.subOrderDetails ? i.subOrderDetails.receiver_state : ""}</span>
                                                                                    </p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* ASSIGNING CARRIER DETAILS MODAL  */}
                                <div className="modal fade" tabIndex="-1" id={`call-${row.id}`} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div className="modal-dialog  add-partner modal-xl">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="assigncarrierfromAdminTitle">
                                                    Avalaible Carrier List
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
                                                                        <StyledTableCell>{item.user?.first_name}{item.user?.last_name}</StyledTableCell>
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
                                                                                // className="btn hub_order"
                                                                                data-toggle="modal" data-target=".see_hub-lg"
                                                                                onClick={((e) => handleAssign(item.user_id, item.id, row.ck_order_id))}
                                                                                className="btn hub_order"
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <Loader />}

            </div>
        </Fragment>
    );
};

export default CkNewOrder;