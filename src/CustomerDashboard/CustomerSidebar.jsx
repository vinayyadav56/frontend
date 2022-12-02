import React, { useState} from 'react'
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import profilelogo from "../images/profilelogo.png";
import prlogo from "../images/pr-img.png";
import paymenticon from "../images/paymenthistory.png";
import dashboardlogo from "../images/Frame.png";
// import historyicon from "../images/refral.png";
import moblogo from "../images/moblogo1.png"
import vector from "../images/Vector.png";
import { useAuth } from '../Services/auth';

const CustomerSidebar = () => {
    const [toggleMenu, setToggleMenu] = useState();
    const { user } = useAuth();
  return (
    <div>
        <section className="user-sidebar">
          <div className="desktop-navbar">
            <nav className="user-dash-navbar">
              <NavLink to="/customer/dashboard" className="navbar-brand">
                <img src={dashboardlogo} alt="dashlogo" />
                <img src={moblogo} className="mob_img" alt="mobilelogo" />
              </NavLink>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="user-profile">
                    <img src={profilelogo} alt="profilelogo"/>
                    <p>
                      <span>Welcome Back!</span>
                      <span>Rahul Yadav</span>
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
                  <NavLink className="nav-link" to="/customer/dashboard/profile">
                    <img src={prlogo} alt="pr" />
                    <span>Profile</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/customer/dashboard/trackhistory">
                    <img src={paymenticon} alt="payment" />
                    <span>Track History</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/customer/dashboard/paymenthistory">
                  <img src={paymenticon} alt="payment" />
                    <span>Payment History</span>
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
          <div className="nav-mobile">
            <MenuIcon onClick={() => setToggleMenu(true)} />

            {toggleMenu && (
              <div className="nav-mobile-div slide-bottom">
                <CloseIcon
                  className="close_navlinks"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="nav-mobile-links">
                  <li>
                    {" "}
                    <NavLink exact onClick={() => setToggleMenu(false)} to="/">
                      Carrykar
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      onClick={() => setToggleMenu(false)}
                      to="/latestjob"
                    >
                      Carrier
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      onClick={() => setToggleMenu(false)}
                      to="/admitcard"
                    >
                      Recent Order
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink onClick={() => setToggleMenu(false)} to="/result">
                      Help Center
                    </NavLink>
                  </li>

                  <li>
                    {" "}
                    <NavLink
                      onClick={() => setToggleMenu(false)}
                      to="/syllabus"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink onClick={() => setToggleMenu(false)} to="/about">
                      Setting
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
    </div>
  )
}

export default CustomerSidebar