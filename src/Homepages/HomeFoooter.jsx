import React from 'react'
import {NavLink} from "react-router-dom";
// import {InstagramIcon,FacebookIcon,LinkedInIcon} from '@mui/icons-material';
import footerlogo from "../images/footerlogo.png";
const HomeFoooter = () => {
  return(
    <>
    <section className='homemainfooter'>
      <div className='home_footer'>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-lg-2 col-6 mb-3">
            <ul>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/subscription">Subscription</NavLink>
              </li>
              <li>
                <NavLink to="/location">Locations</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 mb-3">
            <ul>
              <li>
                <h4>HELP & SUPPORT</h4>
              </li>
              <li>
                <NavLink to="/support">Support</NavLink>
              </li>
              <li>
                <NavLink to="/Knowledgebase">Knowledge base</NavLink>
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
          <div className="col-lg-3 col-6 mb-3">
            <ul>
              <li>
                <h4>BECOME A PARTNER</h4>
              </li>
              <li>
                <NavLink to="/refer">Refer & Earn</NavLink>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-6 mb-3 footer_logo'>
            <img src={footerlogo} alt="footerlogo" />
          </div>
        </div>
        
      </div>
      </div>
      <div className='social_icons'>
        <div>
        <p>Follow Us On</p>
        <div className='icon-group'>
          {/* <InstagramIcon className='mr-3'/> */}
          {/* <FacebookIcon className='mr-3'/>
          <LinkedInIcon className='mr-3'/> */}
        </div>
        </div>
      </div>
      <div className='d-flex justify-content-center copyright'>
          <p>© Carrykar 2022  All Rights Reserved</p>
      </div>
      </section>
    </>
  )
}

export default HomeFoooter