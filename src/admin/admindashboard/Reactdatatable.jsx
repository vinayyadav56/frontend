import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
import Addpartner from "./Addpartner";
import { useAlert } from "react-alert";
const Reactdatatable = () => {
  const [filterVal, setFilterVal] = useState([]);
  const [tdata, setTdata] = useState([]);
  const [searchapiData, setSearchapiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get("http://35.91.35.188/api/partner-list");
    const partnerList = Object.values(response.data);
    const list = partnerList[0];
    console.log(list);
    try {
      setTdata(list);
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
    setTdata([...newdata]);
  };
  // searchfuntion
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      tdata(searchapiData);
    } else {
      const filterResult = searchapiData.filter((item) =>
        item.partner_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setTdata(filterResult);
    }
    setFilterVal(e.target.value);
  };
  return (
    <div>
      <div className="filter_partner">
        <div className="form-row">
          <div className="col">
            <label for="#pname">Search Partner :-</label>
            <input
              type="text"
              className="form-control"
              placeholder="Filter"
              onInput={handleSearch}
            />
          </div>
          {/* <div className="col">
            <label for="#pname">By City :-</label>
            <input
              type="text"
              className="form-control"
              placeholder="Filter by city"
              onInput={(e) => setSearchCity(e.target.value)}
            />
          </div> */}
          <div className="col">
            <div>
              <Addpartner />
            </div>
          </div>
        </div>
      </div>

      <Table striped hovered>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Pincode</Th>
            <Th>State</Th>
            <Th>City</Th>
            <Th>Address</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tdata
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.partner_name
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase()) ||
                val.partner_city
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((item, id) => {
              return (
                <Tr key={id} style={{ margin: "10px 0 10px 0" }}>
                  <Td>{id + 1}</Td>
                  <Td>{item.partner_name}</Td>
                  <Td>{item.partner_email}</Td>
                  <Td>{item.partner_phone}</Td>
                  <Td>{item.partner_pincode}</Td>
                  <Td>{item.partner_state} </Td>
                  <Td>{item.partner_city} </Td>
                  <Td>{item.partner_address} </Td>
                  <Td>
                    <button
                      className="btn delete-btn"
                      onClick={(id) => deleteData(id)}
                    >
                      DELETE
                    </button>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
      {/* <div className="mt-4">
        <Newpartner />
      </div> */}
    </div>
  );
};

export default Reactdatatable;
