import React from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import "../AllTable/Table.css";
import "../ckorder.css";
import qrImage from '../../../images/qrimageadmin.jpg'
import { makeRequest } from "../../../Services/api";
import { useAuth } from "../../../Services/auth";
import { Fragment } from "react";
import AlQrGenrate from "./AlQrGenrate";
import CkAssignAvailibility from "./CkAssignCarrier";
const CkNewOrder = () => {
    const { setLoading } = useAuth();
    const [userData, setUserData] = useState([]);
    const fetchData = async () => {
        setLoading(true);
        makeRequest('GET', `fetchAlphaOrders`).then(result => {
            setUserData(result.data);
            console.log(result.data)
        })
            .finally(() => {
                setLoading(false);
            })
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // // DATA GRID TABLES ENDS

    return (
        <Fragment>
            <div className="container-fluid">
                {userData.map((row, id) => {
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
                                                    <span>Delivered on :</span><span>{row.delivered_on}</span>
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
                                                    <span>Sub Order Id :</span><span>{row.sub_order_source}</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <span>Assigned Carrier Id :</span><span>{row.assigned_carrier_id}</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-2">
                                <div className="ck_Order_footer">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn btn-primary" data-toggle="collapse" href={`#collapsable-${row.id}`} role="button" aria-expanded="false" aria-controls="collapseTable">
                                            See Order Details
                                        </a>
                                        <AlQrGenrate path={row.qr_image_alpha} orderid={row.ck_order_id} />
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            data-toggle="modal" data-target=".assign_order_to_delivery_boy"
                                        >
                                            Assign Carrier
                                        </button>
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
                        </div>
                    )
                })}
            </div>

            {/* ASSIGN DETAILS MODAL TO AGENT HUB TABLE */}
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
                            <CkAssignAvailibility />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default CkNewOrder;