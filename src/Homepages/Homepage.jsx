import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import footerlogo from "../images/footerlogo.png";
import CommuterForm from "./BecomePartner";
import homgbg from "../images/homebg.png";
import AddIcon from "@mui/icons-material/Add";
import step_carrykar1 from "../images/step_carrykar1.png";
import befikar1 from "../images/befikar1.png";
import befikar2 from "../images/befikar2.png";
import befikar3 from "../images/befikar3.png";
import abtimg from "../images/aboutimg.png";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import about3 from "../images/about3.png";
import about4 from "../images/about4.png";
import about5 from "../images/about5.png";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import commuter from "../images/commuter.png";
import commuter1 from "../images/commuter1.png";
import commuter2 from "../images/commuter2.png";
import commuter3 from "../images/commuter3.png";
import quetion from "../images/quetion.png";
import "./homepage.css";
import Tripsearch from "./Tripsearch";
import CommuterSignUp from "./CommuterSignUp";
import { Link } from "react-scroll";
import { useState } from "react";
import { useAuth } from "../Services/auth";
import ModalForm from "./ShipNow/ModalForm";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import Frame from "../images/Frame.png";
import ContactUsForm from "./ContactUsForm";
import LocationSlider from "./LocationSlider";
import Modal from 'react-bootstrap/Modal';
import { makeRequest } from "../Services/api";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

const Homepage = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    order_id: "",
    order_type: ""
  })
  const [newOrder, setNewOrder] = useState([]);
 
  const handleShow = () => setShow(true);
  const { signout, setLoading } = useAuth();

  const auth = useAuth();
  const handleRefresh = () => {
    window.location.reload(false)
  }
  const handleClose = () => {
    setShow(false);
    handleRefresh();
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const orderStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    makeRequest('POST', `tracking/orderTrackingStatus`, data).then(result => {
      setNewOrder(result.orderTraking);
      // console.log(result);
    })
      .finally(() => {
        setLoading(false);
      })
  }

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const AdjustIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .AdjustIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .AdjustIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));

  function AdjustIcon(props) {
    const { active, completed, className } = props;

    return (
      <AdjustIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <CheckCircleIcon className="AdjustIcon-completedIcon" />
        ) : (
          <div className="AdjustIcon-circle" />
        )}
      </AdjustIconRoot>
    );
  }

  AdjustIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
  };

  return (
    <>
      <section className="main_section">
        <div className="container">
          {/* <HomeHeader /> */}
          <div className="navbar_section">
            <section className="nav-sec">
              <div className="menu">
                <div className="desktop-menu">
                  <div className="nav-logo">
                    <NavLink to="/" onClick={handleRefresh} className="nav-link">
                      <img src={Frame} alt="logo" />
                    </NavLink>
                  </div>
                  <div className="desktop-links">
                    <ul>
                      <li className="dropdown">
                        <NavLink to="/services">Services</NavLink>
                      </li>
                      <li>
                        <Link activeclassname="active" smooth spy to="commuter">Daily Commuter</Link>
                      </li>
                      <li>
                        <Link activeclassname="active" smooth spy to="location">Locations</Link>
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
                            <NavLink to={
                              auth.isUser() ? '/customer/dashboard'
                                :
                                auth.isAdmin() ? '/admindashboard'
                                  :
                                  auth.isCarrier() ? '/carrier/dashboard'
                                    :
                                    auth.isHub() ? '/hub/dashboard'
                                      :
                                      auth.isPartner() ? '/partnerdashboard'
                                        :
                                        ''
                            }>Dashboard</NavLink>
                        }
                      </li>
                      <li className="home_signup">
                        {
                          !auth.isAuthenticated()
                            ?
                            <NavLink to="/signup" >Sign Up</NavLink>
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
                          <Link activeclassname="active" onClick={() => setToggleMenu(false)} smooth spy to="commuter">Daily Commuter</Link>
                        </li>
                        <li>
                          <Link activeclassname="active" onClick={() => setToggleMenu(false)} smooth spy to="location">Locations</Link>
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
                              <NavLink to={
                                auth.isUser() ? '/customer/dashboard'
                                  :
                                  auth.isAdmin() ? '/admindashboard'
                                    :
                                    auth.isCarrier() ? '/carrier/dashboard'
                                      :
                                      auth.isHub() ? '/hub/dashboard'
                                        :
                                        auth.isPartner() ? '/partnerdashboard'
                                          :
                                          ''
                              }>Dashboard</NavLink>
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
          <div className="hero_section">
            <div className="hero_section-div">
              <div className="txt_content">
                <h3>Befikar</h3>
                <h4>Carrykar!</h4>
              </div>
              <div className="img_content">
                <img src={homgbg} alt="homgpagebanner" />
              </div>
            </div>
          </div>
        </div >
      </section >
      <section className="trip_section">
        <div className="trip_section-bgc">
          <div className="container">
            <Tripsearch />
          </div>
        </div>
      </section>

      <section className="carrier_about_services">
        <div className="carrier_section">
          <div className="container">
            <h2>Why you should become a carrier?</h2>
            <div className="card-deck m-auto">
              <div className="card">
                <div className="card-body text-center">
                  <img src={befikar1} alt="befikar1" />
                  <p className="card-text">
                    You can save on your Travelling expenses!
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body text-center">
                  <img src={befikar2} alt="befikar2" />
                  <p className="card-text">Travel more by saving more! </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body text-center">
                  <img src={befikar3} alt="befikar3" />
                  <p className="card-text">
                    Chance to meet new people while travelling{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_section">
          <div className="container">
            <h2>About CarryKar</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-5 about_card">
                <div className="d-flex align-items-center">
                  <img src={about1} alt="about1" />
                  <h3>Efficient services</h3>
                </div>
                <p>
                  We use technology to ensure that the parcel is delivered to
                  your door step efficiently.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 about_card">
                <div className="d-flex align-items-center">
                  <img src={about2} alt="about2" />
                  <h3>More than just Delivery!</h3>
                </div>
                <p>
                  CarryKar is beyond just a normal delivery platform. Instead,
                  our platform is also concerned with making a hub of carriers.
                  We are here to bring change and also help travellers at the
                  same time.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 about_card">
                <div className="d-flex align-items-center">
                  <img src={about3} alt="about3" />
                  <h3>24hrs delivery</h3>
                </div>
                <p>
                  Our platform is a beacon for everyone wishing to send their
                  stuff to the desired location with 24hrs delivery.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 about_card">
                <div className="d-flex align-items-center">
                  <img src={about4} alt="about4" />
                  <h3>Quick service</h3>
                </div>
                <p>
                  We offer faster delivery services by through our entirely
                  different model of delivery network.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 about_card">
                <div className="d-flex align-items-center">
                  <img src={about5} alt="about5" />
                  <h3>High Safety</h3>
                </div>
                <p>
                  We make efforts to package packages in accordance with the
                  established industry norms to maintain Higher-safety
                  standards.
                </p>
              </div>
            </div>
            <div className="abt_img">
              <img src={abtimg} alt="abimg" />
            </div>
          </div>
        </div>
        <div className="service_section">
          <div className="container">
            <h2>Service</h2>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="img_ser d-flex align-items-center">
                  <img src={service1} alt="service1 " />
                  <p>
                    We ensure that the sender's courier or package arrives on
                    time and in good condition by offering courier delivery
                    services.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img_ser d-flex align-items-center">
                  <img src={service2} alt="service2" />
                  <p className="pl-1">
                    We are making people carriers too. By doing this, they can
                    reduce their travel expenses and save money, while also
                    turning it into a full-time profession.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="step_section">
        <div className="carrykar_steps">
          <div className="container">
            <p>steps of</p>
            <p>Befikar Carrykar</p>
          </div>
          <img src={step_carrykar1} alt="step-carrykar" />
        </div>
        <div className="operational" id="location">
          <h2>We are Operational at</h2>
          <LocationSlider />
        </div>
      </section>

      <section className="carrykar_operations">
        <div className="commuter_section" id="commuter">
          <div className="container">
            <h2>Daily Commuter</h2>
            <div className="row">
              <div className="col-lg-6 commuter_banner">
                <img src={commuter} alt="commuter" />
              </div>
              <div className="col-lg-6">
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="card-t">
                      <img src={commuter1} alt="commuter1" />
                      <p>
                        With Carrykar, you can make use of the extra space in
                        your car by working as a carrier and save your travel
                        costs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-t">
                      <img src={commuter2} alt="commuter2" />
                      <p>
                        Carry Kar provides a subscription-based platform
                        enabling people to travel on a monthly subscription
                        basis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-t">
                      <img src={commuter3} alt="commuter3" />
                      <p>
                        You can subscribe to Carrykar and commute on a daily
                        basis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              {/* <button className="btn become-btn">Become a Commuter</button> */}
              <CommuterSignUp />
            </div>
          </div>
        </div>
        <div className="quetion-section">
          <div className="container">
            <div className="quetion-heading">
              <div>
                <h3>Freuquently Asked Quetions</h3>
                <p>If you have any further quetions please contact us.</p>
              </div>
              <img className="que-mark" src={quetion} alt="que-img" />
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div id="accordion">
                      <div id="headingOne" className="que-heading">
                        <p
                          className="que-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Why doesn't my tracking number work?
                          <AddIcon className="que-add" />
                        </p>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <p className="mb-0">
                          Please double-check that you used the right format and
                          tracking number. Please get in touch with our customer
                          care staff if your tracking ID isn't functioning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div id="accordion2">
                      <div id="heading2" className="que-heading">
                        <p
                          className="que-link btn-link"
                          data-toggle="collapse"
                          data-target="#collapse2"
                          aria-expanded="true"
                          aria-controls="collapse2"
                        >
                          On Sundays, do you offer pick-up and delivery?
                          <AddIcon className="que-add" />
                        </p>
                      </div>

                      <div
                        id="collapse2"
                        className="collapse"
                        aria-labelledby="heading2"
                        data-parent="#accordion2"
                      >
                        <p className="mb-0">
                          Yes, we deliver on Sundays as well.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div id="accordion3">
                      <div id="heading3" className="que-heading">
                        <p
                          className="que-link btn-link"
                          data-toggle="collapse"
                          data-target="#collapse3"
                          aria-expanded="true"
                          aria-controls="collapse3"
                        >
                          Where did I will get the luggage??
                          <AddIcon className="que-add" />
                        </p>
                      </div>

                      <div
                        id="collapse3"
                        className="collapse"
                        aria-labelledby="heading3"
                        data-parent="#accordion3"
                      >
                        <p className="mb-0">
                          The luggage will be available to you at the airport
                          before the scheduled departure time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div id="accordion5">
                      <div id="heading5" className="que-heading">
                        <p
                          className="que-link btn-link"
                          data-toggle="collapse"
                          data-target="#collapse5"
                          aria-expanded="true"
                          aria-controls="collapse5"
                        >
                          Who should I contact if I have any problems?
                          <AddIcon className="que-add" />
                        </p>
                      </div>
                      <div
                        id="collapse5"
                        className="collapse"
                        aria-labelledby="heading5"
                        data-parent="#accordion5"
                      >
                        <p className="mb-0">
                          You can email us at carrykar@gmail.com or speak with a
                          member of our dedicated customer care staff, who will
                          respond to your questions as soon as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div id="accordion">
                      <div id="heading5" className="que-heading">
                        <p
                          className="que-link btn-link"
                          data-toggle="collapse"
                          data-target="#collapse4"
                          aria-expanded="true"
                          aria-controls="collapse4"
                        >
                          How do I start shipping with CarryKar?
                          <AddIcon className="que-add" />
                        </p>
                      </div>

                      <div
                        id="collapse4"
                        className="collapse"
                        aria-labelledby="heading5"
                        data-parent="#accordion"
                      >
                        <p className="mb-0">
                          Simply register your email, sign up, and start placing
                          orders right away. Go to our website select the cities
                          where you want to travel select the slot and timing
                          for the package.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div id="accordion6">
                      <div id="heading6" className="que-heading">
                        <p
                          className="que-link btn-link"
                          data-toggle="collapse"
                          data-target="#collapse6"
                          aria-expanded="true"
                          aria-controls="collapse6"
                        >
                          Are there any additional pick-up fees?
                          <AddIcon className="que-add" />
                        </p>
                      </div>
                      <div
                        id="collapse6"
                        className="collapse"
                        aria-labelledby="heading6"
                        data-parent="#accordion6"
                      >
                        <p className="mb-0">
                          No, the price that was disclosed to you covers
                          delivery to and pick up from your doorstep.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <Link className="loc_btn" smooth spy to="location">Locations</Link>
                  </li>
                  <li>
                    <CommuterForm />
                  </li>
                  <li>
                    <button type="button" className="btn home_track" onClick={handleShow}>
                      Track Order
                    </button>
                    <Modal show={show} sx={style} centered>
                      <Modal.Header style={{ padding: "0px", borderBottom: "0px" }}>
                        <button type="button" className="close ml-auto mr-0" onClick={handleClose}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </Modal.Header>
                      <Modal.Body>
                        <form onSubmit={orderStatus}>
                          <p className="package_text mb-3">Track Your Order Here</p>
                          <div className="form-group">
                            <label htmlFor="#ordeR_id" >Order Id</label>
                            <input
                              name="order_id"
                              size='small'
                              type="text"
                              placeholder="Enter Order Id"
                              required
                              value={data.order_id}
                              onChange={handleInput}
                              className="form-control"
                            />
                            {/* <p className="ship_text">Get a free pickup from the comfort of your home</p> */}
                          </div>
                          <div className="form-group">
                            <label htmlFor="#selectuser" >Order Type</label>
                            <select id="selectuser" value={data.order_type} name='order_type' className="form-control"
                              required type='Select' onChange={handleInput}>
                              <option>Select Type</option>
                              <option value="CO" >Customer Order</option>
                              <option value="PO" >Partner Order</option>
                              <option value="ALPHA" >Alpha Order</option>
                            </select>
                          </div>
                          <div className="d-block w-100">
                            <button className="track_btn" type="submit"><span>Track Order </span></button>
                          </div>
                        </form>

                        {
                          newOrder.length > 0 ?
                            <>
                              <p className="order_status_text">Your Order Status </p>
                              <Stack sx={{ width: '100%', marginTop: '1rem' }} spacing={3}>
                                <Stepper alternativeLabel activeStep={10} style={{ width: '100%', margin: 'auto' }} connector={<QontoConnector />}>
                                  {newOrder.map((label, id) => (
                                    <Step style={{ width: '30px' }} key={id}>
                                      <StepLabel style={{ fontSize: '0.7rem' }} StepIconComponent={AdjustIcon}>{label.status}</StepLabel>
                                    </Step>
                                  ))}
                                </Stepper>
                              </Stack>
                            </>
                            :
                            <>
                              <h4 className='text-center mt-3'>No Order History</h4>
                            </>

                        }

                      </Modal.Body>
                    </Modal>
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
      {/* Contact Us Query */}
      <div className="modal fade" id="contactUsModal" tabIndex="-1" role="dialog" aria-labelledby="contactUsModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactUsModalTitle">Please Fill the Required Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="cname">Full Name</label>
                  <input type="text" className="form-control" id="cname" placeholder="Enter Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="pnname">Phone No.</label>
                  <input type="number" className="form-control" id="pnname" placeholder="Enter Your Contact" />
                </div>
                <div className="form-group">
                  <label htmlFor="ename">Email address</label>
                  <input type="email" className="form-control" id="ename" placeholder="name@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="contecttextarea">How Can We Help You</label>
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

export default Homepage;
