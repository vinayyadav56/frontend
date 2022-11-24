import React from 'react'
import { Fragment } from 'react'
import { NavLink } from "react-router-dom";
import profilelogo from "../images/profilelogo.png";
import Frame from "../images/Frame.png";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import vector from "../images/Vector.png";
import moblogo from "../images/moblogo1.png";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useAuth } from '../Services/auth';
const DeliverySidebar = ({ userActive }) => {
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
                        {user.first_name} {user.last_name}
                      </span>
                    ) : (
                      "Guest"
                    )}
                  </p>
                </div>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/delivery/dashboard/profile">
                  <PersonPinIcon className='mr-3' />
                  <span>Profile</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/delivery/dashboard/pickuporders">
                  <BorderColorIcon className='mr-3' />
                  <span>Pick up Orders</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/delivery/dashboard/deliveryorder">
                  <StarBorderIcon className='mr-3' />
                  <span>Delivery Orders</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/delivery/dashboard/paymenthistory"
                >
                  <AccountBalanceWalletIcon className='mr-3' />
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
        {/* <div className="nav-mobile">
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
                  <NavLink
                    exact
                    onClick={() => setToggleMenu(false)}
                    to="/carrykar"
                  >
                    Carrykar
                  </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink onClick={() => setToggleMenu(false)} to="/latestjob">
                    Carrier
                  </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink onClick={() => setToggleMenu(false)} to="/admitcard">
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
                  <NavLink onClick={() => setToggleMenu(false)} to="/syllabus">
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
        </div> */}
      </section>
    </Fragment>
  )
}

export default DeliverySidebar