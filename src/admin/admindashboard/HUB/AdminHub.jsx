import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ".././Adminmenu.css";
import { useState } from "react";
import AdminSidebar from "../AdminSidebar";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Addseehub from "./AddHub";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./Hub.css"
import HubDetails from "./HubTabs";
import { useEffect } from "react";
import { makeRequest } from '../../../Services/api';
import { useAuth } from "../../../Services/auth";
//  HUB DATA START

const AdminHub = () => {
    const [hubData, setHubData] = useState([]);
    // HUBLIST FROM GET API JS START
    const { setLoading } = useAuth();
    const hubListData = async () => {
        setLoading(true);
        makeRequest('GET', `hubsList`).then(result => {
            setHubData(result.data);
        })
            .finally(() => {
                setLoading(false);
            })
    };

    useEffect(() => {
        hubListData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // HUBLIST FROM GET API JS ENDS

    return (
        <Fragment>
            <nav className="sticky-top partnerdash-nav">
                <div className="partner-sidebar">
                    <Link to='/'>
                        <span className="top-name">Carry Kar</span>
                    </Link>
                    <div className="search-bar">
                        <SearchSharpIcon />
                        <input type="search" placeholder="Search" />
                    </div>
                    <div className="profile-area">
                        <div className="profile">
                            <div className="profile-photo">
                                <AccountCircleRoundedIcon />
                            </div>

                            <div className="dropdown show">
                                <Link
                                    className="btn dropdown-toggle"
                                    to="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span>User Name</span>
                                </Link>

                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <Link className="dropdown-item" to="/admin">
                                        Logout
                                    </Link>
                                    <Link className="dropdown-item" to="/">
                                        Change Profile
                                    </Link>
                                    <Link className="dropdown-item" to="/setting">
                                        Setting
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <button id="menu-btn">
                            <MenuRoundedIcon />
                        </button>
                    </div>
                </div>
            </nav>
            <main>
                <aside>
                    <AdminSidebar />
                </aside>
                <section className="right">
                    <div className="CkOrderTableData">
                        <div className="filter_partner py-4 mb-0 px-2">
                            <div className="form-row">
                                <div className="col-md-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search hub here..."
                                    // onChange={handleSearch}
                                    />
                                </div>
                                <div className="col-md-10">
                                    <div className="d-flex justify-content-end">
                                        <Addseehub />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {Object.values(hubData)
                            // eslint-disable-next-line
                            .map((item, id) => (

                                <div className="container-fluid">
                                    <div className="row mb-4" key={id}>
                                        <div className="hub_details">
                                            <div>
                                                <div className="hub_header">
                                                    <ul>
                                                        <li>
                                                            <p>Hub Code :</p>
                                                            <span>{item.hub_code}</span>
                                                        </li>
                                                        <li>
                                                            <p>Hub State :</p>
                                                            <span>{item.state}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="hub_header">
                                                    <ul>
                                                        <li>
                                                            <p>Hub Name :</p>
                                                            <span>{item.hub_name}</span>
                                                        </li>
                                                        <li>
                                                            <p>Hub City :</p>
                                                            <span>{item.city}</span>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <p>Hub Contact No :</p>
                                                            <span>{item.contact_number}</span>
                                                        </li>
                                                        <li>
                                                            <p>Hub Alternate No :</p>
                                                            <span>{item.alternate_contact_number}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="hub_header">
                                                    <ul>
                                                        <li>
                                                            <p>Address :</p>
                                                            <span>{item.hub_full_address} </span>
                                                        </li>
                                                        <li>
                                                            <p>Hub Pincode :</p>
                                                            <span>{item.pin}</span>
                                                        </li>
                                                    </ul >
                                                </div >
                                            </div>
                                            <div>
                                                <div className="hub_header">
                                                    <ul>
                                                        <div className="d-flex">
                                                            <button
                                                                type="button"
                                                                className="btn"
                                                                data-toggle="modal" data-target=".see_hub-lg"
                                                            >
                                                                <RemoveRedEyeIcon />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn hub_edit"
                                                                data-toggle="modal"
                                                                data-target="#edithub"
                                                            >
                                                                <EditIcon />
                                                            </button>
                                                            <div
                                                                className="modal fade"
                                                                id="seehub"
                                                                role="dialog"
                                                                aria-labelledby="edithubTitle"
                                                                aria-hidden="true"
                                                            >
                                                                <div
                                                                    className="modal-dialog modal-dialog-centered add-partner"
                                                                    role="document"
                                                                >
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title" id="edithubTitle">
                                                                                Add Hub Details
                                                                            </h5>
                                                                            <button
                                                                                type="button"
                                                                                className="close"
                                                                                data-dismiss="modal"
                                                                                aria-label="Delivery Close"
                                                                            >
                                                                                <span aria-hidden="true" className="modal-off">
                                                                                    &times;
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button"
                                                                className="btn hub_delete"
                                                                data-toggle="modal"
                                                                data-target="#deletehub"
                                                            >
                                                                <DeleteIcon />
                                                            </button>
                                                            <div
                                                                className="modal fade"
                                                                id="deletehub"
                                                                role="dialog"
                                                                aria-labelledby="deletehubTitle"
                                                                aria-hidden="true">
                                                                <div
                                                                    className="modal-dialog modal-dialog-centered add-partner"
                                                                    role="document"
                                                                >
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title" id="deletehubTitle">
                                                                                Are You Want To Delete This Hub
                                                                            </h5>
                                                                            <button
                                                                                type="button"
                                                                                className="close"
                                                                                data-dismiss="modal"
                                                                                aria-label="Delivery Close"
                                                                            >
                                                                                <span aria-hidden="true" className="modal-off">
                                                                                    &times;
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ul >
                                                </div >
                                            </div >
                                        </div >
                                    </div >
                                </div >
                            ))}
                    </div>
                </section >
            </main >

            <div className="modal fade see_hub-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog  add-partner modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editPartnerTitle">
                                Order Details
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
                            <HubDetails />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default AdminHub