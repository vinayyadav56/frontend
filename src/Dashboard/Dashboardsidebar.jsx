import React, { useState} from 'react'
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import profilelogo from "../images/profilelogo.png";
import prlogo from "../images/pr-img.png";
import paymenticon from "../images/paymenthistory.png";
import dashboardlogo from "../images/Frame.png";
import historyicon from "../images/refral.png";
import vector from "../images/Vector.png";

const Sidebar = () => {
    const [toggleMenu, setToggleMenu] = useState();
    return (
    <div>
        <section className="user-sidebar">
          <div className="desktop-navbar">
            <nav className="user-dash-navbar">
              <NavLink to="/carrierdashboard/dashboard" className="navbar-brand">
                <img src={dashboardlogo} alt="dashlogo" />
                {/* <img src={moblogo} alt="mobilelogo" /> */}
              </NavLink>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="user-profile">
                    <img src={profilelogo} alt="profilelogo"/>
                    <p>
                      <span>Welcome Back!</span>
                      <span>Rahul Yadav</span>
                      {/* {name.map((name,id) => {
                        return(
                          <span key={id}>
                            <span>{name.id}</span>
                            <span>{name.first_name}</span>
                            <span>{name.last_name}</span>
                          </span>
                        )
                      })} */}
                       
                    </p>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/carrierdashboard/profile">
                    <img src={prlogo} alt="pr" />
                    <span>Profile</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/carrierdashboard/paymenthistory">
                    <img src={paymenticon} alt="payment" />
                    <span>Payment History</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/carrierdashboard/managereffrals">
                    <img src={historyicon} alt="manage" />
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

export default Sidebar