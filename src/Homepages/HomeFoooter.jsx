import React from "react";
import { NavLink } from "react-router-dom";
// import {InstagramIcon,FacebookIcon,LinkedInIcon} from '@mui/icons-material';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import footerlogo from "../images/footerlogo.png";
import CommuterForm from "./BecomePartner";
import "./homepage.css";
const HomeFoooter = () => {
  return (
    <>

      <section className="homemainfooter">
        <div className="home_footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-6 mb-3">
                <ul>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/location">Locations</NavLink>
                  </li>
                  <li>
                    <p data-toggle="modal" className="become-part_btn" data-target="#commuterform">
                      Become a Partner
                    </p>
                    <div
                      className="modal fade become-partner-modal"
                      id="commuterform"
                      role="dialog"
                      aria-labelledby="commuterform"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>

                          <CommuterForm />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <NavLink to="/login">Refer & Earn</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 mb-3">
                <ul>
                  <li>
                    <h4>HELP & SUPPORT</h4>
                  </li>
                  <li>
                    <NavLink to="/Knowledgebase">Knowledge base</NavLink>
                  </li>
                  <li>
                  <button type="button" className="contact_footer" data-toggle="modal" data-target="#contact">Contact Us</button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 mb-3">
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
              <div className="col-lg-3 col-6 mb-3"></div>
              <div className="col-lg-3 col-6 mb-3 footer_logo">
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


      <div className="modal fade" id="contact" tabIndex="-1" role="dialog" aria-labelledby="contactTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactTitle">Please Fill the Required Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="cname">Full Name</label>
                  <input type="text" className="form-control" id="cname" placeholder="Enter Your Name" />
                </div>
                <div className="form-group">
                  <label for="pnname">Phone No.</label>
                  <input type="number" className="form-control" id="pnname" placeholder="Enter Your Contact" />
                </div>
                <div className="form-group">
                  <label for="ename">Email address</label>
                  <input type="email" className="form-control" id="ename" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                  <label for="contecttextarea">How Can We Help You</label>
                  <textarea className="form-control" placeholder="Write Your Query" id="contecttextarea" rows="3"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button type="button" className="btn btn-primary">Submit Query</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HomeFoooter;
