import { useEffect } from "react";
import { useState } from "react";
import { makeRequest } from "../../../Services/api";
import { useAuth } from "../../../Services/auth";
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
              name="quantity"
              onChange={handleSearchinput}
              value={searchUser.quantity}
            />
          </div>
        </div>
      </div>

      {Object.values(filterUser).length >0 ?
        Object.values(filterUser)
          // eslint-disable-next-line
          .map((row, id) => {
            return (
              <div className="row ck_order_table" key={id}>
                <div className="col-12 my-2">
                  <div className="ck_Order_footer">
                    <ul className="d-flex justify-content-between">
                      <li>
                        <p className="badge badge-info">
                          <span>Journey Type :</span><span className="badge text-dark">{row.journey_type}</span>
                        </p>
                      </li>
                      <li>
                        <p className="badge badge-info">
                          <span>Available Space :</span><span className="badge text-dark">{row.available_space}</span>
                        </p>
                      </li>
                      <li>
                        <p className="badge badge-info">
                          <span>Journey Medium :</span><span className="badge text-dark">{row.journey_medium}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="ck_Order_header">
                    <ul>
                      <li>
                        <p>
                          <span>User Id :</span><span className="text-info">{row.user_id}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Name :</span><span className="text-info">{row.first_name} {row.last_name}</span>
                        </p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <p>
                          <span>From Date :</span><span className="text-info">{row.from_date}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Journey Id :</span><span className="text-info">{row.journey_unique_id}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12  my-2">
                  <div className="ck_Order_body">
                    <div className="body_list">
                      <ul>
                        <li>
                          <p>
                            <span>From City :</span><span className="text-info">{row.from_location_city}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>From Airport Code :</span><span className="text-info">{row.from_location_airport_code}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>From Pincode :</span><span className="text-info">{row.from_location_pin_code}</span>
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <p>
                            <span>From St. Code :</span><span className="text-info">{row.from_location_station_code}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>To St. Code :</span><span className="text-info">{row.to_location_station_code}</span>
                          </p>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <p>
                            <span>To City :</span><span className="text-info">{row.to_location_city}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>To Airport Code :</span><span className="text-info">{row.to_location_airport_code}</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>To Pincode :</span><span className="text-info">{row.to_location_pin_code}</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        :
        <Loader />
      }
    </div >
  );
};

export default UserAvalibiltyCheck;
