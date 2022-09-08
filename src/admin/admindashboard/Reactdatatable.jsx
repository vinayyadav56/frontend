import React from "react";
// import { Table, thead, tbody, tr, th, td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
import Addpartner from "./Addpartner";
const Reactdatatable = () => {
  const [filterVal, setFilterVal] = useState([]);
  const [tdata, settdata] = useState([]);
  const [searchapiData, setSearchapiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get("http://35.91.35.188/api/partner-list");
    const partnerList = Object.values(response.data);
    const list = partnerList[0];
    console.log(list);
    try {
      settdata(list);
      setSearchapiData(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   delet function
  const deleteData = (id) => {
    let newdata = tdata;
    tdata.splice(id, 1);
    settdata([...newdata]);
  };
  // searchfuntion
  const handleSearch = (e) => {
    // e.preventdefault();
    if (e.target.value === "") {
      tdata(searchapiData);
    } else {
      const filterResult = searchapiData.filter((item) =>
        item.partner_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      settdata(filterResult);
    }
    setFilterVal(e.target.value);
  };
  return (
    <div>
      <div className="filter_partner">
        <div className="form-row">
          <div className="col">
            <label>Search Partner :-</label>
            <input
              type="text"
              className="form-control"
              placeholder="Filter"
              onInput={handleSearch}
            />
          </div>
          <div className="col">
            <div>
              <Addpartner />
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive-lg">
        <table striped hovered>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
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
            {tdata
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.partner_name
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
                    <td>{item.partner_name}</td>
                    <td>{item.partner_email}</td>
                    <td>{item.partner_phone}</td>
                    <td>{item.partner_pincode}</td>
                    <td>{item.partner_state} </td>
                    <td>{item.partner_city} </td>
                    <td>{item.partner_address} </td>
                    <td>
                      <button
                        className="btn delete-btn"
                        onClick={(id) => deleteData(id)}
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

      {/* <div className="mt-4">
        <Newpartner />
      </div> */}
    </div>
  );
};

export default Reactdatatable;
