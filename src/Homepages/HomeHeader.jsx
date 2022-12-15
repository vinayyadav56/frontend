import React, { useState } from 'react'
import ModalForm from "./ShipNow/ModalForm";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, Link } from "react-router-dom";
import Frame from "../images/Frame.png";
import ContactUsForm from "./ContactUsForm";
import { useAuth } from '../Services/auth';
const HomeHeader = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { signout } = useAuth();
    const auth = useAuth();
    return (
        <>
            <div className="navbar_section">
                <section className="nav-sec">
                    <div className="menu">
                        <div className="desktop-menu">
                            <div className="nav-logo">
                                <NavLink to="/carrykar" className="nav-link">
                                    <img src={Frame} alt="logo" />
                                </NavLink>
                            </div>
                            <div className="desktop-links">
                                <ul>
                                    <li className="dropdown">
                                        <NavLink to="/services">Services</NavLink>
                                    </li>
                                    <li>
                                        <Link activeclass="active" smooth spy to="commuter">Daily Commuter</Link>
                                    </li>
                                    <li>
                                        <Link activeclass="active" smooth spy to="location">Locations</Link>
                                    </li>
                                    <li>
                                        <ContactUsForm />
                                    </li>
                                    <li>
                                        <ModalForm />
                                    </li>
                                    <li className="home_login">
                                        {
                                            !auth.isAuthenticated()
                                                ?
                                                <NavLink to="/login" >Login</NavLink>
                                                :
                                                <NavLink to={auth.isUser() ? '/customer/dashboard' : 'carrier/dashboard'}>Go To Dashboard</NavLink>
                                        }
                                    </li>
                                    <li className="home_signup">
                                        {
                                            !auth.isAuthenticated()
                                                ?
                                                <NavLink to="/login" >Sign Up</NavLink>
                                                :
                                                <button className="log_out" onClick={signout}>Logout</button>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-mobile">
                            <button
                                className="open_nav"
                                onClick={() => setToggleMenu(true)}
                            >
                                <MenuIcon />
                            </button>
                            {toggleMenu && (
                                <div className="nav-mobile-div slide-bottom">
                                    <button
                                        className="close_navlinks"
                                        onClick={() => setToggleMenu(false)}
                                    >
                                        <CloseIcon />
                                    </button>
                                    <ul className="nav-mobile-links">
                                        <li>
                                            <NavLink
                                                exact
                                                onClick={() => setToggleMenu(false)}
                                                to="/services"
                                            >
                                                Services
                                            </NavLink>
                                        </li>
                                        <li>
                                            <Link activeclass="active" onClick={() => setToggleMenu(false)} smooth spy to="commuter">Daily Commuter</Link>
                                        </li>
                                        <li>
                                            <Link activeclass="active" onClick={() => setToggleMenu(false)} smooth spy to="location">Locations</Link>
                                        </li>
                                        <li>
                                            <ContactUsForm />
                                        </li>
                                        <li>
                                            <ModalForm onClick={() => setToggleMenu(false)} />
                                        </li>
                                        <li>
                                            {
                                                !auth.isAuthenticated()
                                                    ?
                                                    <NavLink to="/login" onClick={() => setToggleMenu(false)} >Login</NavLink>
                                                    :
                                                    <NavLink onClick={() => setToggleMenu(false)} to={auth.isUser() ? '/customer/dashboard' : 'carrier/dashboard'}>Go To Dashboard</NavLink>
                                            }
                                        </li>
                                        <li>
                                            {
                                                !auth.isAuthenticated()
                                                    ?
                                                    <NavLink to="/signup" onClick={() => setToggleMenu(false)} >Sign Up</NavLink>
                                                    :
                                                    <button className="log_out" onClick={signout}>Logout</button>
                                            }
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomeHeader