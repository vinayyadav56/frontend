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
    const user = useAuth();
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
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <NavLink to="/latestjob">Daily Commuter</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/location">Locations</NavLink>
                                    </li>
                                    <li>
                                        <ContactUsForm />
                                    </li>
                                    <li>
                                        <ModalForm />
                                    </li>
                                    {
                                    !user.isAuthenticated() ?
                                        <>
                                            <li className="home_login">
                                                <NavLink to="/login" >Login</NavLink>
                                            </li>
                                            <li className="home_signup">
                                                <NavLink to="/signup" >SignUp</NavLink>
                                            </li>
                                        </>
                                        :
                                        <li className='home_login'>
                                            {!user.isCarrier() ?
                                                <NavLink
                                                    onClick={() => setToggleMenu(false)}
                                                    to="/customer/dashboard"
                                                >
                                                    Go To Dashboard
                                                </NavLink>
                                                :
                                                <NavLink
                                                    onClick={() => setToggleMenu(false)}
                                                    to="/carrier/dashboard"
                                                >
                                                    Go To Dashboard
                                                </NavLink>
                                            }

                                        </li>
                                    }
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
                                            <NavLink
                                                onClick={() => setToggleMenu(false)}
                                                to="/subscription"
                                            >
                                                Subscription
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                onClick={() => setToggleMenu(false)}
                                                to="/locations"
                                            >
                                                Location
                                            </NavLink>
                                        </li>
                                        <li>
                                            <ContactUsForm   onClick={() => setToggleMenu(false)} />
                                        </li>
                                        <li>
                                            <ModalForm onClick={() => setToggleMenu(false)} />
                                        </li>
                                        {!user.isAuthenticated() ?
                                            <>
                                                <li className="home_login">
                                                    <NavLink to="/login" >Login</NavLink>
                                                </li>
                                                <li className="home_signup">
                                                    <NavLink to="/signup" >SignUp</NavLink>
                                                </li>
                                            </>
                                            :
                                            <li className='home_login'>
                                                {!user.isUser() ?
                                                    <NavLink
                                                        onClick={() => setToggleMenu(false)}
                                                        to="/customer/dashboard"
                                                    >
                                                        Go To Dashboard
                                                    </NavLink>
                                                    :
                                                    <NavLink
                                                        onClick={() => setToggleMenu(false)}
                                                        to="/carrier/dashboard"
                                                    >
                                                        Go To Dashboard
                                                    </NavLink>
                                                }

                                            </li>
                                        }
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