import React from "react";
import { NavLink } from "react-router-dom";
import profilelogo from "../../images/profilelogo.png";
import Frame from "../../images/Frame.png";
import vector from "../../images/Vector.png";
import moblogo from "../../images/moblogo1.png";
import ApprovalIcon from '@mui/icons-material/Approval';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useAuth } from "../../Services/auth";

const Sidebar = () => {
    const { user } = useAuth();
    return (
        <div>
            <section className="user-sidebar">
                <div className="desktop-navbar">
                    <nav className="user-dash-navbar">
                        <NavLink to="/" className="navbar-brand">
                            <img src={Frame} alt="dashlogo" className="dashlogo" />
                            <img src={moblogo} alt="mobilelogo" className="moblogo" />
                        </NavLink>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="user-profile">
                                    <img src={profilelogo} alt="profilelogo" />
                                    <p>
                                        <span>Welcome Back!</span>
                                        {user && user.id ? (
                                            <span>
                                                {user.first_name} {user.last_name}
                                            </span>
                                        ) : (
                                            "Guest"
                                        )}
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/commuter/postavailabilty">
                                    <ApprovalIcon className='mr-3' />
                                    <span>Post Avalaiblity</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/commuter/profile">
                                    <PersonPinIcon className='mr-3' />
                                    <span>Profile</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/commuter/order"
                                >
                                    <BorderColorIcon className='mr-3' />
                                    <span>Order</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/commuter/availablehistory"
                                >
                                    <AccountBalanceWalletIcon className='mr-3' />
                                    <span>Avalaible History</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/carrier/managereferals"
                                >
                                    <SupervisorAccountIcon className='mr-3' />
                                    <span> Manage Referals</span>
                                </NavLink>
                            </li>

                            <li className="nav-item nav-footer-link mt-auto">
                                <NavLink className="nav-link" to="/helpandsupport">
                                    <img src={vector} alt="setting" />
                                    <span>Help & Support</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            </section>
        </div>
    );
};

export default Sidebar;
