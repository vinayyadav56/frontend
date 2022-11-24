import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, Link } from "react-router-dom";
import Frame from "../images/Frame.png";
import servicebanner from "../images/serviceban.png";
import pltserimg from "../images/pltserimg.png";
import expressimg from "../images/expressimg.png";
import "./homepage.css";
import "./Service.css";
import HomeFoooter from "./HomeFoooter";
import ContactUsForm from "./ContactUsForm";
import ModalForm from "./ShipNow/ModalForm";
import { useAuth } from "../Services/auth";
const Services = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const user = useAuth();
  return (
    <div>
      <section className="main_section">
        <div className="container">
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
                          <ContactUsForm onClick={() => setToggleMenu(false)} />
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
          <div className="hero_section">
            <div className="hero_section-div">
              <div className="res_text txt_content">
                <h3>Services</h3>
                <h4>we provided</h4>
              </div>
              <div className="img_content">
                <img src={servicebanner} alt="homgpagebanner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services_section">
        <div className="premium_section">
          <div className="container">
            <h3 className="mb-0">Platinum Express</h3>
            <h3 className="mb-4">Delivery</h3>
            <div className="plt_text">
              <div>
                <p>
                  Carrykar understand that time-bound deliveries are the need of
                  the hour. Platinum Express as air express service is not just
                  fast but cost-efficient too.
                </p>
                <p>
                  The unique feature of Premium Express is that it ships smaller
                  parcels for an all in – freight rate. Moreover, Carrykar's
                  unmatched multimodal network, offers seamless connectivity to
                  take your shipment down to the last mile.
                </p>
                <p>
                  Whether it is door-to-door delivery of your time-bound
                  documents and packages or the need to send time sensitive
                  cargo across India, this service offers delivery within 24
                  hours.
                </p>
              </div>
              <div className="ser-img-plt">
                <img src={pltserimg} alt="perimium" />
              </div>
            </div>
          </div>
        </div>
        <div className="express_section">
          <div className="container">
            <div className="plt_text">
              <div>
                <h3 className="mb-4">Express Delivery</h3>
                <p>
                  Express is designed for shipments that require urgency
                  in delivery with an advantage of being cost effective.
                  The service assures delivery within 24 hours, 48 hours
                  and more than 48 hours (Multimodal) to all the metro &
                  non metro locations.
                </p>
              </div>
              <div className="ser-img-plt">
                <img src={expressimg} alt="perimium" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeFoooter />
    </div>
  );
};

export default Services;
