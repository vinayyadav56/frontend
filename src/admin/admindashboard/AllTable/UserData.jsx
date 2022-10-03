import React from "react";
// import { Table, thead, tbody, tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
const UserData = () => {
  const [ setFilterVal] = useState([]);
  const [userData, setUserData] = useState([]);
  const [searchUserData, setSearchUserData] = useState([]);
  const [searchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get("http://35.91.35.188/api/user-all-list");
    const partnerList = Object.values(response.data);
    const list = partnerList[0];
    try {
      setUserData(list);
      setSearchUserData(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // delete function start
  const handleDelete = (id, e) => {
    e.preventDefault();
    // let newdata = userData;
    axios
      .delete(`http://35.91.35.188/api/delete-user/${id}`)
      .then((response) => {
        userData.splice(id, 1);
        setUserData(response.newdata);
      })
      .catch((err) => console.log(err));
  };

  // searchfuntion
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      userData(searchUserData);
    } else {
      const filterResult = searchUserData.filter((item) =>
        item.first_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setUserData(filterResult);
    }
    setFilterVal(e.target.value);
  };
  return (
    <div>
      <div className="filter_partner">
        <div className="table-heading">
          <h2 className="text-center my-3">All User Data</h2>
        </div>
        <div className="form-row">
          <div className="col mt-4">
            <label htmlFor="#pname">Search Carrier:-</label>
            <input
              type="text"
              className="form-control"
              placeholder="Filter"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="table-responsive-lg">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Pincode</th>
              <th>State</th>
              <th>City</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData
            // eslint-disable-next-line
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.first_name
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) ||
                  val.city
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
          
              })
              .map((item, id) => {
                return (
                  <tr key={id} style={{ margin: "10px 0 10px 0" }}>
                    <td>{id + 1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.pincode}</td>
                    <td>{item.state} </td>
                    <td>{item.city} </td>
                    <td>{item.address} </td>
                    <td>
                      <button
                        className="btn delete-btn"
                        onClick={(e) => handleDelete(item.id, e)}
                      >
                        DELETE
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

export default UserData;