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
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import footerlogo from "../images/footerlogo.png";
import CommuterForm from "./BecomePartner";
import { useAuth } from "../Services/auth";
import ContactUsForm from "./ContactUsForm";
import ModalForm from "./ShipNow/ModalForm";
const Services = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const auth = useAuth();
  const { signout } = useAuth();
  return (
    <div>

      <section className="main_section">
        <div className="container">
          <div className="navbar_section">
            <section className="nav-sec">
              <div className="menu">
                <div className="desktop-menu">
                  <div className="nav-logo">
                    <NavLink to="/" className="nav-link">
                      <img src={Frame} alt="logo" />
                    </NavLink>
                  </div>
                  <div className="desktop-links">
                    <ul>
                      <li className="dropdown">
                        <NavLink to="/services">Services</NavLink>
                      </li>
                      <li>
                        <Link activeclass="active" smooth spy to="/">Daily Commuter</Link>
                      </li>
                      <li>
                        <Link activeclass="active" smooth spy to="/">Locations</Link>
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
                          <Link activeclass="active" onClick={() => setToggleMenu(false)} smooth spy to="/">Daily Commuter</Link>
                        </li>
                        <li>
                          <Link activeclass="active" onClick={() => setToggleMenu(false)} smooth spy to="/">Locations</Link>
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
          <div className="hero_section pb-5">
            <div className="hero_section-div">
              <div className="res_text txt_content">
                <h3>Services</h3>
                {/* <h4>What</h4> */}
                <h4>we provide </h4>
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


      <section className="homemainfooter">
        <div className="home_footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-6 mb-3">
                <ul>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li>
                    <Link className="loc_btn" smooth spy to="/">Locations</Link>
                  </li>
                  <li>
                    <CommuterForm />
                  </li>
                  <li>
                    <NavLink to="/login">Refer & Earn</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-3">
                <ul>
                  <li>
                    <h4>HELP & SUPPORT</h4>
                  </li>
                  <li>
                    <NavLink to="/Knowledgebase">Knowledge base</NavLink>
                  </li>
                  <li>
                    <ContactUsForm />
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-3">
                <ul>
                  <li>
                    <h4>USEFUL READS</h4>
                  </li>
                  <li>
                    <NavLink to="/privacypolicy">Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/termconditions">Terms & Conditions</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 mb-3 footer_logo">
                <img src={footerlogo} alt="footerlogo" />
              </div>
            </div>
          </div>
        </div>

        <div className="social_icons">
          <div>
            <p>Follow Us On</p>
            <div className="icon-group">
              <InstagramIcon className="mr-3 so_icn" />
              <FacebookIcon className="mr-3 so_icn" />
              <LinkedInIcon className="mr-3 so_icn" />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center copyright">
          <p>© Carrykar 2022 All Rights Reserved</p>
        </div>

      </section>

    </div>
  );
};

export default Services;
