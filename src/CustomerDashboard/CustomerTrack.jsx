import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./CustomerHeader";
import Sidebar from "./CustomerSidebar";
import "./Trackhistory.css";
// import tableicon from "../images/tableicon.png";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import { useAuth } from "../Services/auth";
import { makeRequest } from "../Services/api";
import { useState } from "react";
const CustomerTrack = () => {
  const { user, setLoading } = useAuth();
  const [ setCustomerOrder] = useState([{}]);
  const customerOrders = [
    {
      id: 1,
      receiver_city: 'New Delhi',
      sender_city: 'Gurgaon',
      pickup_timing: '12:27 PM',
      package_volume_weight: 300,
      delivery_type: 'PREMIUM',
      package_value: '$1000'
    },
    {
      id: 2,
      receiver_city: 'New Delhi',
      sender_city: 'Gurgaon',
      pickup_timing: '12:27 PM',
      package_volume_weight: 300,
      delivery_type: 'PREMIUM',
      package_value: '$1000'
    },
    {
      id: 3,
      receiver_city: 'New Delhi',
      sender_city: 'Gurgaon',
      pickup_timing: '12:27 PM',
      package_volume_weight: 300,
      delivery_type: 'PREMIUM',
      package_value: '$1000'
    },
    {
      id: 4,
      receiver_city: 'New Delhi',
      sender_city: 'Gurgaon',
      pickup_timing: '12:27 PM',
      package_volume_weight: 300,
      delivery_type: 'PREMIUM',
      package_value: '$1000'
    }
  ]

  const fetchData = async () => {
    const customerId = user.id;
    setLoading(true);
    makeRequest('GET', `customerOrderListById/${customerId}?status=new`).then(result => {
      setCustomerOrder(result.data);
    })
      .finally(() => {
        setLoading(false);
      })
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header />

          <div className="payment-history">
            <div className="payment-heading">
              <h3>Track History</h3>
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
            <div className="table-responsive h-auto">
              <table className="table table-hover table table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>Id</th>
                    <th>BOARDING</th>
                    <th>DESTINATION</th>
                    <th>DATE</th>
                    <th>TOTAL WEIGHT</th>
                    <th>DELIVERY TYPE</th>
                    <th>COST</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    customerOrders.map((row, id) => {
                      return (
                        <>
                          <tr key={id}>
                            <td className="pt-3 pb-3">
                              {row.id}
                            </td>
                            <td className="pt-3 pb-3 ">
                              {row.sender_city}
                              {/* <img src={tableicon} alt="table-img" /> */}
                            </td>
                            <td className="pt-3 pb-3">
                              {row.receiver_city}
                            </td>
                            <td className="pt-3 pb-3 ">
                              <DateRangeIcon className="table-row-icon" />
                              {row.pickup_timing}
                            </td>
                            <td className="pt-3 pb-3">
                              <LuggageOutlinedIcon className="table-row-icon" />{row.package_volume_weight}
                            </td>
                            <td className="pt-3 pb-3">
                              {row.delivery_type}
                            </td>
                            <td className="pt-3 pb-3">
                              {row.package_value}
                            </td>
                            <td className="pt-3 pb-3">
                              <button type="button" className="btn btn-info" data-toggle="modal" data-target={`#call-${row.id}`} >Reschedule</button>
                              <div className="modal fade" tabIndex="-1" id={`call-${row.id}`} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div className="modal-dialog  add-partner modal-dialog-centered">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title" id="assigncarrierfromAdminTitle">
                                        Order Reschedule
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
                                      <form>
                                        <p className="package_text mb-4">Schedule Your Order Pickup Date</p>
                                        <label htmlFor="#dob">Date</label>
                                        <input
                                          type="text"
                                          placeholder="DD/MM/YYYY"
                                          onFocus={(e) => (e.target.type = "date")}
                                          onBlur={(e) => (e.target.type = "text")}
                                          autoComplete="off"
                                          name="schedule_date"
                                          required
                                          className="form-control sechdule-date mb-5"
                                        // defaultValue={values.schedule_date}
                                        // onChange={handleInputChange}
                                        />
                                        <div style={{ display: 'block',width:'100%', justifyContent: 'center', pt: 2, flex: '1 auto' }}>

                                          <button
                                            color="primary"
                                            type="submit"
                                            className='btn w-100 address_btn'
                                          >
                                            Schedule
                                          </button>
                                        </div>
                                        <p className="ship_text">Get a free pickup from the comfort of your home</p>

                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  }
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
