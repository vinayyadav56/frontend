import { Link } from "react-router-dom";
import Header from "./Dashboardheader";
import Sidebar from "./Dashboardsidebar";
import "./Paymenthistory.css";
import paymentimg1 from "../images/paymentcard1.png";
import paymentimg2 from "../images/paymentimg2.png";
import paymentimg3 from "../images/paymentimg3.png";
import paymentimg4 from "../images/paymentimg4.png";
import tableicon from "../images/tableicon.png";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
const Paymenthistory = () => {
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
              <h3>Payment History</h3>
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
                    <th scope="col">TOTAL MONEY</th>
                    <th scope="col">QUALITY</th>
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
                    <td>₹ 2000/-</td>
                    <td>
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                    </td>
                    <td>
                      <button className="disabled">Recieved</button>
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
                    <td>₹ 2000/-</td>
                    <td>
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                    </td>
                    <td>
                      <button className="abled">Pending</button>
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
                    <td>₹ 2000/-</td>
                    <td>
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                    </td>
                    <td>
                      <button className="disabled">Recieved</button>
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
                    <td>₹ 2000/-</td>
                    <td>
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                    </td>
                    <td>
                      <button className="abled">Pending</button>
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
                    <td>₹ 2000/-</td>
                    <td>
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                    </td>
                    <td>
                      <button className="disabled">Recieved</button>
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
                    <td>₹ 2000/-</td>
                    <td>
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                    </td>
                    <td>
                      <button className="disabled">Recieved</button>
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
                    <td>₹ 2000/-</td>
                    <td>
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                      <StarOutlinedIcon className="table-rating-icon" />
                    </td>
                    <td>
                      <button className="disabled">Recieved</button>
                    </td>
                  </tr>
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
