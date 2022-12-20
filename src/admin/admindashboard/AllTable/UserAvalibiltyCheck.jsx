import { useEffect } from "react";
import { useState } from "react";
import { makeRequest } from "../../../Services/api";
import { useAuth } from "../../../Services/auth";
import HubAssignOrder from "./HubAssignOrder";
import { useAlert } from "react-alert";
import Loader from "../../../Helpers/Loader";
const UserAvalibiltyCheck = () => {
  const { setLoading } = useAuth();
  const alert = useAlert();

  const [searchUser, setSearchUser] = useState({
    from_location: "",
    to_location: "",
    weight: "",
    quantity: "",
  });
  const [filterUser, setFilterUser] = useState({});

  const fetchAvailbility = async () => {
    setLoading(true);

    makeRequest('POST', `fetchUsersAvailability`, searchUser).then(result => {
      alert.success(result.message);
      result.userAvailability
        &&
        setFilterUser(result.userAvailability);
    }).catch(err => {
      alert.error(err.message);
    }).finally(() => {
      setLoading(false);
    })

  }
  useEffect(() => {
    fetchAvailbility();
    // eslint-disable-next-line
  }, []);

  const handleSearchinput = (e) => {
    setSearchUser(e.target.value)
  };
  return (
    <div>
      <div className="form-title">
        <h2>Check Availbility</h2>
      </div>
      <div className="container-fluid">
        <div className="form-group row">
          <div className="col-md-6">
            <label htmlFor="inputAddress">From :</label>
            <input
              id="inputfrom"
              className="form-control"
              name="from_location"
              placeholder="Enter Location"
              autoComplete="off"
              type="text"
              value={searchUser.from_location}
              onChange={handleSearchinput}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputto">To :</label>
            <input
              id="inputto"
              type="text"
              autoComplete="off"
              placeholder="Enter Location"
              name="to_location"
              value={searchUser.to_location}
              onChange={handleSearchinput}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputquantity">Weight</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter weight"
              min="0"
              name="weight"
              onChange={handleSearchinput}
              value={searchUser.weight}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputquantity">Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter Date"
              min="0"
              name="date"
              onChange={handleSearchinput}
              value={searchUser.quantity}
            />
          </div>
        </div>
      </div>

      {Object.values(filterUser).length ?
        Object.values(filterUser)
          // eslint-disable-next-line
          .map((row, id) => {
            return (
              <div className="row ck_order_table" key={id}>
                <div className="col-12 my-2">
                  <button
                    type="button"
                    className="btn hub_order ml-auto mb-2 d-flex"
                    data-toggle="modal" data-target=".see_hub-lg"
                  >
                    Assign Hub
                  </button>
                  <div className="ck_Order_header">
                    <ul>
                      <li>
                        <p>
                          <span>User Id :</span><span>{row.user_id}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Name :</span><span>{row.first_name} {row.last_name}</span>
                        </p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <p>
                          <span>From Date :</span><span>{row.from_date}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Journey Id :</span><span>{row.journey_unique_id}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="ck_Order_body">
                    <div className="body_list">
                      <ul>
                        <li>
                          <p>
                            <span>From City :</span><span>{row.from_location_city}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>From Airport Code :</span><span>{row.from_location_airport_code}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>From Pincode :</span><span>{row.from_location_pin_code}</span>
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <p>
                            <span>From St. Code :</span><span>{row.from_location_station_code}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>To St. Code :</span><span>{row.to_location_station_code}</span>
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <p>
                            <span>To City :</span><span>{row.to_location_city}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>To Airport Code :</span><span>{row.to_location_airport_code}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>To Pincode :</span><span>{row.to_location_pin_code}</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 my-2">
                  <div className="ck_Order_footer">
                    <ul className="d-flex justify-content-between">
                      <li>
                        <p>
                          <span>Journey Type :</span><span>{row.journey_type}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Available Space :</span><span>{row.available_space}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Journey Medium :</span><span>{row.journey_medium}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })
        :
        <Loader />
      }
      {/* ASSIGN DETAILS MODAL TO AGENT HUB TABLE */}
      <div className="modal fade see_hub-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog  add-partner modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editPartnerTitle">
                Available Hub
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
              <HubAssignOrder />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default UserAvalibiltyCheck;
