import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
const UserData = () => {
  const [filterVal, setFilterVal] = useState([]);
  const [tdata, setTdata] = useState([]);
  const [searchapiData, setSearchapiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get("http://35.91.35.188/api/user-all-list");
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

  // delete function start
  const handleDelete = (id, e) => {
    e.preventDefault();
    let newdata = tdata;

axios.delete(`http://35.91.35.188/api/delete-user/${id}`)
.then(response => {
  console.log("deleted", response);
  tdata.splice(id, 1);
  setTdata([...newdata])
})
.catch(err => console.log(err))
  }
  // delete function ends
  // searchfuntion
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      tdata(searchapiData);
    } else {
      const filterResult = searchapiData.filter((item) =>
        item.first_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setTdata(filterResult);
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
          <div className="col">
            <label for="#pname">Search User :-</label>
            <input
              type="text"
              className="form-control"
              placeholder="Filter"
              onInput={handleSearch}
            />
          </div>
         
        </div>
      </div>

      <Table striped hovered>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>FirstName</Th>
            <Th>Last Name</Th>
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
                <Tr key={id} style={{ margin: "10px 0 10px 0" }}>
                  <Td>{id + 1}</Td>
                  <Td>{item.first_name}</Td>
                  <Td>{item.last_name}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.phone}</Td>
                  <Td>{item.pincode}</Td>
                  <Td>{item.state} </Td>
                  <Td>{item.city} </Td>
                  <Td>{item.address} </Td>
                  <Td>
                    <button
                      className="btn delete-btn"
                      onClick={(e) => handleDelete(item.id, e)}
                    >
                      DELETE
                    </button>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </div>
  );
};

export default UserData;
