import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./CustomerHeader";
import Sidebar from "./CustomerSidebar";
import "./Trackhistory.css";
import tableicon from "../images/tableicon.png";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import { useAuth } from "../Services/auth";
import { makeRequest } from "../Services/api";
import { useState } from "react";
const CustomerTrack = () => {
  const { user, setLoading } = useAuth();
  const [customerOrder, setCustomerOrder] = useState([{}]);
  const fetchData = async () => {
    const customerId = user.id;
    setLoading(true);
    makeRequest('GET', `customerOrderListById/1?status=new`).then(result => {
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
  // const auth = useAuth();
  // if (!auth.isUser()) {
  //   return <Redirect to="/login" />
  // }
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
            <div className="table-responsive payment-table">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">BOARDING</th>
                    <th scope="col">DESTINATION</th>
                    <th scope="col">DATE</th>
                    <th scope="col">TOTAL WEIGHT</th>
                    <th scope="col">ORDER TYPE</th>
                    <th scope="col">COST</th>
                    <th scope="col">FROM HUB ID</th>
                    <th scope="col">TO HUB ID</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    customerOrder.map((row, id) => {
                      return (
                        <>
                          <tr key={id}>
                            <td className="d-flex align-items-center" style={{width:'115px'}}>
                              {row.receiver_city}
                              <img src={tableicon} style={{width:'65px',marginLeft:'auto'}} alt="table-img" />
                            </td>
                            <td>
                              {row.receiver_city}
                            </td>
                            <td>
                              <DateRangeIcon className="table-row-icon" />
                              {row.pickup_timing}
                            </td>
                            <td>
                              <LuggageOutlinedIcon className="table-row-icon" />{row.package_volume_weight}
                            </td>
                            <td>
                              {row.delivery_type}
                            </td>
                            <td>
                              {row.package_value}
                            </td>
                            <td>
                              {row.from_hub_id}
                            </td>
                            <td>
                              {row.to_hub_id}
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
