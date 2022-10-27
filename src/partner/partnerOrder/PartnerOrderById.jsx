import React from 'react'
import { Fragment } from 'react'
import { Link } from "react-router-dom";
import "../Partnerdash.css";
import partnerArray from "../partnerArray";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import PartnerOrderTable from './PartnerOrderTable';
const PartnerOrderById = () => {
    return (
        <Fragment>
            <nav className="sticky-top partnerdash-nav ">
                <div className="partner-sidebar">
                    <span className="top-name">Carry Kar</span>
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
                                    to="/partner/profile"
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
                                    <Link className="dropdown-item" to="/partner">
                                        Logout
                                    </Link>
                                    <Link className="dropdown-item" to="/carrykar">
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
                    <div className="sidebar">
                        <button id="close-btn">
                            <CloseRoundedIcon />
                        </button>
                        <div className="responsive-sidebar">
                            <Link to="/partner/dashboard">
                                <span className="icon">
                                    <GridViewRoundedIcon />
                                </span>
                                <h4 className="title">Dashboard</h4>
                            </Link>

                            {partnerArray.map((data, id) => {
                                return (
                                    <li key={id}>
                                        <Link to={data.link}>
                                            <span className="icon">{data.icon}</span>
                                            <h4 className="title">{data.navitem}</h4>
                                        </Link>
                                    </li>
                                );
                            })}
                        </div>
                    </div>
                </aside>
                <section className="right mt-3">
                    <PartnerOrderTable />
                </section>
            </main>
        </Fragment>
    )
}

export default PartnerOrderById