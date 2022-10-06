import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const UserAvalibiltyCheck = () => {
  const [searchUser, setSearchUser] = useState({
    from_location: "",
    to_location: "",
    weight: "",
    quantity: "",
  });
  const [filterUser, setFilterUser] = useState({});

  const fetchAvailbility = async () => {
    const avail = await axios.post(
      "http://35.91.35.188/api/user-availability-fetch",
      { searchUser }
    );
    try {
      // console.log("avail " + JSON.stringify(avail.data.userAvailability));
      setFilterUser(avail.data.userAvailability);
    } catch (error) {
      console.log(error);
    }
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
      <div className="form-title mt-5">
        <h2>Check Availbility</h2>
      </div>
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
      <div className="table-responsive">
          <table id="dtBasicExample" className="table table-striped table-hover table-bordered table-sm" cellspacing="0" width="100%">
            <thead className="thead-dark sticky-top">
            <tr>
              <th>Id</th>
              <th>Order Id</th>
              <th>User Id</th>
              <th>From Location</th>
              <th>To Location</th>
              <th>Journey Type</th>
              <th>Available Space</th>
              <th>Journey Medium</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {Object.values(filterUser).map((item, id) => {
            return (
              <tr key={id} style={{ margin: "10px 0 10px 0" }}>
                <td>{item.id}</td>
                <td>{item.order_id}</td>
                <td>{item.user_id}</td>
                <td>{item.fromlocation}</td>
                <td>{item.tolocation}</td>
                <td>{item.journey_type}</td>
                <td>{item.available_space}</td>
                <td>{item.journey_medium}</td>
                <td>{item.from_date}</td>
                <td>{item.to_date}</td>
                <td>
                  <button className="btn btn-success py-0">
                    ASSIGN ORDER
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAvalibiltyCheck;
