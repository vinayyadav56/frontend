import React, { Fragment } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import "./Table.css";
import "../partnerorder.css";
import Addpartner from "../Addpartner";
// import { 
//   Paper, 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableContainer, 
//   TableHead, 
//   TablePagination, 
//   TableRow 
// }from "@material-ui/core";

// interface Column {
//   id: 'name' | 'code' | 'population' | 'size' | 'density';
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }
// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toFixed(2),
//   },
// ];
// interface Data {
//   name: string;
//   code: string;
//   population: number;
//   size: number;
//   density: number;
// }

// function createData(
//   name: string,
//   code: string,
//   population: number,
//   size: number,
// ): Data {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

const Reactdatatable = () => {

  // React Table Js START
  
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  // REACT TABLE JS ENDS


  let alert = useAlert();
  const [setFilterVal] = useState([]);
  const [partnerData, setPartnerData] = useState([]);
  const [searchapiData, setSearchapiData] = useState([]);
  const [searchTerm] = useState("");

  // PARTNER ORDER LIST START
  const [partnerOrderData, setPartnerOrderData] = useState([]);
  const fetchOrderData = async (id) => {
    const response = await axios.get(`http://35.91.35.188/api/partnerOrdersByPartnerId/${id}`);
    const partnerList = Object.values(response.data);
    const list = partnerList[0];
    try {
      setPartnerOrderData(list);
    } catch (error) {
      console.log(error);
    }
  };
  // PARTNER ORDER LIST ENDS

  const fetchData = async () => {
    const response = await axios.get("http://35.91.35.188/api/partner-list");
    const partnerList = Object.values(response.data);
    const list = partnerList[0];
    try {
      setPartnerData(list);
      setSearchapiData(list);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // DELETE PARTNER START
  const deleteData = async (id) => {
    //http://35.91.35.188/api/delete-user/2
    const res = await axios.delete(`http://35.91.35.188/api/delete-user/${id}`)
    try {
      console.log(res)
      if (res.data.success === true) {
        alert.success(res.data.message);
      } else if (res.data.success === false) {
        alert.success(res.data.message);
      }
    } catch (error) {
      alert.error("Invalid inputs");
    }
  };
  // DELETE PARTNER ENDS

  // searchfuntion
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      partnerData(searchapiData);
    } else {
      const filterResult = searchapiData.filter((item) =>
        item.partner_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setPartnerData(filterResult);
    }
    // eslint-disable-next-line
    setFilterVal(e.target.value);
  };
  // searchfuntion ends
  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  // UPDATE PARTNER DATA
  const [editData, setEditData] = useState({});
  const {
    partner_name,
    partner_email,
    partner_password,
    partner_phone,
    partner_pincode,
    partner_state,
    partner_city,
    partner_address,
  } = editData;
  const handlePartner = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const response = await axios.put(
      "http://35.91.35.188/api/update-user/" + id,
      {
        partner_name,
        partner_email,
        partner_password,
        partner_phone,
        partner_pincode,
        partner_state,
        partner_city,
        partner_address,
      }
    );
    try {
      alert.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  // FETCH PARTNER DETAILS
  const fetchID = async (id) => {
    const response = await axios.get(
      `http://35.91.35.188/api/partner-fetch-single-record/${id}`
    );
    try {
      // console.log(
      //   "response " + JSON.stringify(response.data.partner_single_data)
      // );
      setEditData(response.data.partner_single_data);
    } catch (error) {
      console.log(error);
    }
  };
  // FETCH PARTNER DETAILS ENDS
  return (
    <Fragment>
      <div>
        <div className="filter_partner">
          <div className="form-row">
            <div className="col">
              <label>Search Partner :-</label>
              <input
                type="text"
                className="form-control"
                placeholder="Filter"
                onChange={handleSearch}
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
          <table>
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
              {partnerData
                // eslint-disable-next-line
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
                    <tr
                      partner-id={item.id}
                      key={id}
                      style={{ margin: "10px 0 10px 0" }}
                    >
                      <td>{id + 1}</td>
                      <td>{item.partner_name}</td>
                      <td>{item.partner_email}</td>
                      <td>{item.partner_phone}</td>
                      <td>{item.partner_pincode}</td>
                      <td>{item.partner_state} </td>
                      <td>{item.partner_city} </td>
                      <td>{item.partner_address} </td>
                      <td className="d-flex">
                        <button
                          onClick={() => fetchID(item.id)}
                          className="btn add_partner py-0 mr-1"
                          data-toggle="modal"
                          data-target="#editPartner"
                        >
                          EDIT
                        </button>

                        <button
                          className="btn delete-btn mr-1"
                          onClick={() => deleteData(item.id)}
                        >
                          DELETE
                        </button>
                        <button
                          className="btn partner_order py-0 mr-1"
                          data-toggle="modal"
                          data-target="#orderPartner"
                          onClick={() => fetchOrderData(item.id)}
                        >
                          ORDER
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>


      {/* React Table start */}
      {/* <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 220 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {partnerData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row,id) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={partnerData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper> */}
      {/* React Table ends */}

      {/* EDIT MODAL START */}
      <div
        className="modal fade"
        id="editPartner"
        role="dialog"
        aria-labelledby="editPartnerTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered add-partner"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editPartnerTitle">
                Partner Details
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
              <form
                className="partner_add"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="partner_name"
                  onChange={handleInput}
                  value={editData.partner_name}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_email"
                  placeholder="Email"
                  onChange={handleInput}
                  value={editData.partner_email}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_phone"
                  onChange={handleInput}
                  placeholder="Phone"
                  value={editData.partner_phone}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_pincode"
                  onChange={handleInput}
                  placeholder="Pincode"
                  value={editData.partner_pincode}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_state"
                  onChange={handleInput}
                  placeholder="State"
                  value={editData.partner_state}
                ></input>
                <input
                  type="text"
                  name="partner_city"
                  className="form-control"
                  onChange={handleInput}
                  placeholder="City"
                  value={editData.partner_city}
                ></input>
                <input
                  type="text"
                  className="form-control"
                  name="partner_address"
                  onChange={handleInput}
                  placeholder="Address"
                  value={editData.partner_address}
                ></input>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={(e) => handlePartner(e, editData.id)}
                    className="btn btn-primary"
                  >
                    Save Partner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* EDIT MODAL ENDS */}

      {/* ORDER DETAILS START */}
      <div
        className="modal bd-example-modal-md fade"
        id="orderPartner"
        role="dialog"
        aria-labelledby="orderPartnerTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-md add-partner"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="orderPartnerTitle">
                Order Details
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
            <div className="modal-body p-0">
              <div className="table-responsive-lg partner_order_list">
                <table className="table table-striped">
                  
                  <tbody>
                    {partnerOrderData.map((item, id) => {
                      return (
                        <tr key={id} style={{ margin: "10px 0 10px 0" }}>
                          <td className="table_data">
                            <th className="d-block">Sender Info</th>

                            <td>{id + 1}</td>
                            <td className="d-block">{item.sender_name} </td>
                            <td className="d-block">{item.sender_email}</td>
                            <td className="d-block">{item.sender_phone}</td>
                            {/* <td className="d-block">{item.sender_pincode}</td> */}
                            <td className="d-block">{item.sender_state} </td>
                            <td className="d-block">{item.sender_city} </td>
                            <td className="d-block">{item.sender_address}</td>
                          </td>
                          <td className="table_data">
                            <th className="d-block">Receiver Info</th>

                            <td>{id + 1}</td>
                            <td className="d-block">{item.receiver_name} </td>
                            <td className="d-block">{item.receiver_email}</td>
                            <td className="d-block">{item.receiver_phone}</td>
                            {/* <td className="d-block">{item.receiver_pincode}</td> */}
                            <td className="d-block">{item.receiver_state}</td>
                            <td className="d-block">{item.receiver_city} </td>
                            <td className="d-block">{item.receiver_address}</td>
                          </td>
                          <td className="table_data">
                            <th className="d-block">Order Summary</th>
                            <td>{id + 1}</td>
                            <td className="d-block">{item.receiver_name} </td>
                            <td className="d-block">{item.receiver_email}</td>
                            <td className="d-block">{item.receiver_phone}</td>
                            {/* <td className="d-block">{item.receiver_pincode}</td> */}
                            <td className="d-block">{item.receiver_state}</td>
                            <td className="d-block">{item.receiver_city} </td>
                            <td className="d-block">{item.receiver_address}</td>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ORDER DETAILS ENDS */}
    </Fragment>
  );
};

export default Reactdatatable;
