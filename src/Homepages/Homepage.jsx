import React from "react";
import HomeFoooter from "./HomeFoooter";
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
import operation1 from "../images/operation1.png";
import operation2 from "../images/operation2.png";
import operation3 from "../images/operation3.png";
import commuter from "../images/commuter.png";
import commuter1 from "../images/commuter1.png";
import commuter2 from "../images/commuter2.png";
import commuter3 from "../images/commuter3.png";
import quetion from "../images/quetion.png";
import "./homepage.css";
import Tripsearch from "./Tripsearch";
import CommuterSignUp from "./CommuterSignUp";
import HomeHeader from "./HomeHeader";
const Homepage = (userActive) => {
  return (
    <>

      <section className="main_section">
        <div className="container">
           <HomeHeader />
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
              <div className="col-md-6">
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
                  <p>
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
        <div className="operational">
          <div className="container">
            <h2>We are Operational at</h2>
            <div className="location_card">
              <div className="card">
                <div className="card-body">
                  <img src={operation1} alt="operation1" />
                  <p>Delhi NCR</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img src={operation2} alt="operation2" />
                  <p>Mumbai</p>
                </div>
              </div>
              <div className="card">
                <span class="badge badge-warning">Coming Soon</span>
                <div className="card-body">
                  <img src={operation3} alt="operation2" />
                  <p>Kolkata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="carrykar_operations">
        <div className="commuter_section">
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
      <HomeFoooter />


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
