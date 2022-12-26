import React from 'react'
import { Fragment } from 'react'
import { NavLink } from "react-router-dom";
import profilelogo from "../images/profilelogo.png";
import Frame from "../images/Frame.png";
import vector from "../images/Vector.png";
import moblogo from "../images/moblogo1.png";
import { useAuth } from "../Services/auth";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const HubSidebar = () => {
    const { user } = useAuth();
    return (
        <Fragment>
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
                                                {user.hub_name}
                                            </span>
                                        ) : (
                                            "Guest"
                                        )}
                                    </p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/hub/dashboard/pickuporder">
                                    <BorderColorIcon className='mr-3' />
                                    <span>Pickup Order</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/hub/dashboard/deliveryorder">
                                    <StarBorderIcon className='mr-3' />
                                    <span>Delivery Order</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/hub/dashboard/deliveryagents">
                                    <StarBorderIcon className='mr-3' />
                                    <span>Delivery Agents</span>
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
        </Fragment>
    )
}

export default HubSidebar