import { Link } from "react-router-dom";
import Header from "./Dashboardheader";
import Sidebar from "./Dashboardsidebar";
import "./Paymenthistory.css";
import paymentimg1 from "../images/paymentcard1.png";
import paymentimg2 from "../images/paymentimg2.png";
import paymentimg3 from "../images/paymentimg3.png";
import paymentimg4 from "../images/paymentimg4.png";
import { useAuth } from "../Services/auth";
import { useState } from "react";
import { makeRequest } from "../Services/api";
import { useEffect } from "react";
import { useAlert } from "react-alert";
// import Loader from "../Helpers/Loader";
import Tripsearch from "../Homepages/Tripsearch";
import CommuterTabs from "./DailyCommuter/CommuterAvailability";
const Paymenthistory = () => {
  const { user, setLoading } = useAuth();
  const [userHistory, setUserHistory] = useState({});
  const alert = useAlert();
  const fetchHistory = async () => {
    setLoading(true);
    const id = user.id
    makeRequest('GET', `availabiltyHistoryByCarrierId/${id}`).then(result => {
      setUserHistory(result.data);
    }).catch(err => {
      alert.error(err.message);
    }).finally(() => {
      setLoading(false);
    })
  };
  useEffect(() => {
    fetchHistory();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header />
          <div className="payment-cards">
            <div className="card">
              <div className="card-body">
                <div>
                  <h4>$500</h4>
                  <p>Total Earnings</p>
                </div>
                <img src={paymentimg1} alt="img1" />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div>
                  <h4>24</h4>
                  <p>Total Bookings</p>
                </div>
                <img src={paymentimg2} alt="img2" />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div>
                  <h4>19kgs</h4>
                  <p>Total Weight</p>
                </div>
                <img src={paymentimg3} alt="img3" />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div>
                  <h4>4</h4>
                  <p>Upcoming Bookings</p>
                </div>
                <img src={paymentimg4} alt="img4" />
              </div>
            </div>
          </div>
          <div className="payment-history">
            <div className="payment-heading">
              <h3>Availability History</h3>
              <div className="filter">
                <p className="mb-0">Sort By :-</p>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Date
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="/rating">
                      Rating
                    </Link>
                    <Link className="dropdown-item" to="/reviews">
                      Reviews
                    </Link>
                    <Link className="dropdown-item" to="/price">
                      Price
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive payment-table">
              <table className="table table-hover table table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>Id</th>
                    <th>JOURNEY TYPE</th>
                    <th>AVAILABLE SPACE</th>
                    <th>JOURNEY MEDIUM</th>
                    <th>TICKET NUMBER</th>
                    <th>FROM LOCATION</th>
                    <th>TO LOCATION</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.values(userHistory).map((row, id) => {
                      return (
                        <tr key={id}>
                          <td className="pt-3 pb-3">{row.id}</td>
                          <td className="pt-3 pb-3">{row.journey_type}</td>
                          <td className="pt-3 pb-3">{row.available_space}</td>
                          <td className="pt-3 pb-3">{row.journey_medium}</td>
                          <td className="pt-3 pb-3">{row.ticket_number}</td>
                          <td className="pt-3 pb-3">{row.from_location_city?.from_location_city ?? row.from_location_airport_code}</td>
                          <td className="pt-3 pb-3">{row.to_location_city?.to_location_city ?? row.to_location_airport_code}</td>
                          <td className="pt-3 pb-3">{row.status}</td>
                          <td className="pt-3 pb-3">
                            <button type="button" className="btn btn-info" data-toggle="modal" data-target={`#call-${row.id}`} >Reschedule</button>
                            <div className="modal fade" tabIndex="-1" id={`call-${row.id}`} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                              <div className="modal-dialog  add-partner modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="assigncarrierfromAdminTitle">
                                      Availability Reschedule
                                    </h5>
                                    <button
                                      type="button"
                                      className="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <span aria-hidden="true" className="modal-off">
                                        &times;
                                      </span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                        <Tripsearch />
                                        :
                                        <CommuterTabs />
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default Paymenthistory;
