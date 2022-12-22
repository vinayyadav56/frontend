import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import "../AllTable/Table.css";
import "../ckorder.css";
import qrImage from '../../../images/qrimageadmin.jpg'
import { makeRequest } from "../../../Services/api";
import { useAuth } from "../../../Services/auth";
import { Fragment } from "react";
import config from '../../../config.json'
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
import { useAlert } from "react-alert";
import Loader from "../../../Helpers/Loader";
import { TrackingStatus } from "../../../config/contants";
const CkAllOrder = () => {
    const { setLoading } = useAuth();
    const alert = useAlert();
    const [userData, setUserData] = useState([]);
    const [ckAssignUser, setCkAssignUser] = useState([]);
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
        makeRequest('GET', `fetchAlphaOrders`).then(result => {
            setUserData(result.data);
            console.log(result.data);
        })
            .finally(() => {
                setLoading(false);
            })
    };

    const fetchAvailbility = async () => {
        setLoading(true);
        makeRequest('POST', `fetchUsersAvailability`).then(result => {
            // alert.success(result.message);
            result.userAvailability && setCkAssignUser(result.userAvailability);
            // console.log(result.userAvailability);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    }

    const handleAssign = (user_id,id, ckOrderId) => {
        // console.log(sub_order_id, user_id);
        setLoading(true);
        makeRequest('POST', `assignAlphaOrderToCarrier`, {
            "ckOrderId": ckOrderId,
            "carrierId": user_id,
            "availability_id":id
        }).then(result => {
            alert.success(result.message);
            result.success && fetchAvailbility();
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })

    };

    // GENRATE QR FUNCTION START
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
    // GENRATE QR FUNCTION ENDS

    useEffect(() => {
        fetchData();
        fetchAvailbility();
        // eslint-disable-next-line
    }, []);

    // // DATA GRID TABLES ENDS

    return (
        <Fragment>
            <div className="container-fluid">
                {userData.length ?
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
                                                <li>
                                                    <p>
                                                        <span>Package Weight :</span><span>{row.package_weight}</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <span>Total Weight :</span><span>{row.items_total_weight}</span>
                                                    </p>
                                                </li>

                                            </ul>
                                            <ul>
                                                <li>
                                                    <p>
                                                        {
                                                            row.delivered_on ?
                                                                <><span>Delivered on :</span><span>{row.delivered_on}</span></>
                                                                :
                                                                ""

                                                        }

                                                    </p>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <p>
                                                        <span>Sub Order Id :</span><span>{row.sub_order_id}</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <span>Sub Order Type :</span><span>{row.sub_order_source}</span>
                                                    </p>
                                                </li>
                                                <li>
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
                                                </li>
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
                                                (row.status !== TrackingStatus.carrier_assigned) ?
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        data-toggle="modal" data-target=".assign_order_to_delivery_boy"
                                                    >
                                                        Assign Carrier
                                                    </button>
                                                    :
                                                    ""
                                            }
                                            {
                                                (row.status === TrackingStatus.carrier_assigned) ?
                                                    <span
                                                        className="badge badge-info p-2" >
                                                        Carrier Assigned
                                                    </span>
                                                    :
                                                    ""
                                            }

                                        </div>
                                        <div className="collapse" id={`collapsable-${row.id}`}>
                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Partner Id</th>
                                                        <th scope="col">Delivered</th>
                                                        <th scope="col">Order Dimension</th>
                                                        <th scope="col">From Hub</th>
                                                        <th scope="col">To Hub</th>
                                                        <th scope="col">Total Weight</th>
                                                        <th scope="col">Qr Code</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{row.subOrderDetails.partner_id}</td>
                                                        <td>{row.delivered_on} </td>
                                                        <td>{row.dimension} </td>
                                                        <td>{row.from_hub_id} </td>
                                                        <td>{row.to_hub_id} </td>
                                                        <td>{row.items_total_weight} </td>
                                                        <td>
                                                            <img className="" src={qrImage} alt="qr_src" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <div className='d-flex align-items-center'>
                                                            <a className='collpase_button_prt mr-2' data-toggle="collapse" href={`#collapsable1-${row.id}`} role="button" aria-expanded="false" aria-controls="collapse1">
                                                                Sender Details
                                                            </a>
                                                            <p>/</p>
                                                            <a className='collpase_button_prt ml-2' data-toggle="collapse" href={`#collapsable2-${row.id}`} role="button" aria-expanded="false" aria-controls="collapse2">
                                                                Receiver Details
                                                            </a>
                                                        </div>
                                                    </tr>

                                                </tfoot>
                                            </table>
                                            <div className="collapse" id={`collapsable1-${row.id}`}>
                                                <div className="ck_order_footer_sub_details">
                                                    <ul>
                                                        <li>
                                                            <p>
                                                                <span>Sender Name :</span>
                                                                <span>{row.subOrderDetails.sender_name}</span>
                                                            </p>

                                                        </li>
                                                        <li>
                                                            <p>
                                                                <span>Sender Email :</span>
                                                                <span>{row.subOrderDetails.sender_email}</span>
                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p>
                                                                <span>Sender Phone :</span>
                                                                <span>{row.subOrderDetails.sender_contact_no}</span>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p>
                                                                <span>Sender Pincode :</span>
                                                                <span>{row.subOrderDetails.sender_pincode}</span>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p>
                                                                <span>Sender City :</span>
                                                                <span>{row.subOrderDetails.sender_city}</span>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p>
                                                                <span>Sender State :</span>
                                                                <span>{row.subOrderDetails.sender_state}</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="collapse" id={`collapsable2-${row.id}`}>
                                                <div className="ck_order_footer_sub_details">
                                                    <ul>
                                                        <li>
                                                            <p>
                                                                <span>Receiver Name :</span>
                                                                <span>{row.subOrderDetails.receiver_name}</span>
                                                            </p>

                                                        </li>
                                                        <li>
                                                            <p>
                                                                <span>Receiver Email :</span>
                                                                <span>{row.subOrderDetails.receiver_email}</span>
                                                            </p>
                                                        </li>

                                                        <li>
                                                            <p>
                                                                <span>Receiver Phone :</span>
                                                                <span>{row.subOrderDetails.receiver_contact_no}</span>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p>
                                                                <span>Receiver Pincode :</span>
                                                                <span>{row.subOrderDetails.receiver_pincode}</span>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p>
                                                                <span>Receiver City :</span>
                                                                <span>{row.subOrderDetails.receiver_city}</span>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p>
                                                                <span>Receiver State :</span>
                                                                <span>{row.subOrderDetails.receiver_state}</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ASSIGNING CARRIER DETAILS MODAL  */}
                                <div className="modal fade assign_order_to_delivery_boy" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
                                                                                // className="btn hub_order"
                                                                                data-toggle="modal" data-target=".see_hub-lg"
                                                                                onClick={((e) => handleAssign(item.user_id, row.id, row.ck_order_id))}
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
export default CkAllOrder;