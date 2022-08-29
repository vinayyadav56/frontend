import React from "react";
import { Link } from "react-router-dom";
import Header from "./CustomerHeader";
import Sidebar from "./CustomerSidebar";
import "./Trackhistory.css";
import tableicon from "../images/tableicon.png";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
const CustomerTrack = () => {
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header />
          {/* <div className="payment-cards">
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
          </div> */}
          <div className="payment-history">
            <div className="payment-heading">
              <h3>Track History</h3>
              <div className="filter">
                <p className="mb-0">Sort By :-</p>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Date
                  </a>
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
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">BOARDING</th>
                    <th scope="col">DESTINATION</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TOTAL WEIGHT</th>
                    <th scope="col">QUANTITY</th>
                    <th scope="col">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="d-flex align-items-center">
                      Assam
                      <img src={tableicon} alt="table-img" />
                    </th>
                    <td>New Delhi</td>
                    <td>
                      <DateRangeIcon className="table-row-icon" /> 01/08/2022
                    </td>
                    <td>
                      <LuggageOutlinedIcon className="table-row-icon" /> 10kg
                    </td>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      {/* <button className="disabled">Recieved</button> */}
                      <p>Recieved on 02/08/2022</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="d-flex align-items-center">
                      Assam
                      <img src={tableicon} alt="table-img" />
                    </th>
                    <td>New Delhi</td>
                    <td>
                      <DateRangeIcon className="table-row-icon" /> 01/08/2022
                    </td>
                    <td>
                      <LuggageOutlinedIcon className="table-row-icon" /> 10kg
                    </td>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      {/* <button className="disabled">Recieved</button> */}
                      <p>Out for delivery</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="d-flex align-items-center">
                      Assam
                      <img src={tableicon} alt="table-img" />
                    </th>
                    <td>New Delhi</td>
                    <td>
                      <DateRangeIcon className="table-row-icon" /> 01/08/2022
                    </td>
                    <td>
                      <LuggageOutlinedIcon className="table-row-icon" /> 10kg
                    </td>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      {/* <button className="disabled">Recieved</button> */}
                      <p>Pending</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="d-flex align-items-center">
                      Assam
                      <img src={tableicon} alt="table-img" />
                    </th>
                    <td>New Delhi</td>
                    <td>
                      <DateRangeIcon className="table-row-icon" /> 01/08/2022
                    </td>
                    <td>
                      <LuggageOutlinedIcon className="table-row-icon" /> 10kg
                    </td>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      {/* <button className="disabled">Recieved</button> */}
                      <p>On the Way</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="d-flex align-items-center">
                      Assam
                      <img src={tableicon} alt="table-img" />
                    </th>
                    <td>New Delhi</td>
                    <td>
                      <DateRangeIcon className="table-row-icon" /> 01/08/2022
                    </td>
                    <td>
                      <LuggageOutlinedIcon className="table-row-icon" /> 10kg
                    </td>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      {/* <button className="disabled">Recieved</button> */}
                      <p>With Carrier</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="d-flex align-items-center">
                      Assam
                      <img src={tableicon} alt="table-img" />
                    </th>
                    <td>New Delhi</td>
                    <td>
                      <DateRangeIcon className="table-row-icon" /> 01/08/2022
                    </td>
                    <td>
                      <LuggageOutlinedIcon className="table-row-icon" /> 10kg
                    </td>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      {/* <button className="disabled">Recieved</button> */}
                      <p>Pending</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="d-flex align-items-center">
                      Assam
                      <img src={tableicon} alt="table-img" />
                    </th>
                    <td>New Delhi</td>
                    <td>
                      <DateRangeIcon className="table-row-icon" /> 01/08/2022
                    </td>
                    <td>
                      <LuggageOutlinedIcon className="table-row-icon" /> 10kg
                    </td>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      {/* <button className="disabled">Recieved</button> */}
                      <p>Out for delivery</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="d-flex align-items-center">
                      Assam
                      <img src={tableicon} alt="table-img" />
                    </th>
                    <td>New Delhi</td>
                    <td>
                      <DateRangeIcon className="table-row-icon" /> 01/08/2022
                    </td>
                    <td>
                      <LuggageOutlinedIcon className="table-row-icon" /> 10kg
                    </td>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      {/* <button className="disabled">Recieved</button> */}
                      <p>On the way</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CustomerTrack;
