import React, { Fragment } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import "./Table.css";
import "../partnerorder.css";
import Addpartner from "../Addpartner";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup } from "@material-ui/core";
import { makeRequest } from "../../../Services/api";
import { useAuth } from "../../../Services/auth";

const Reactdatatable = () => {
  const [open, setopen] = React.useState(false);

  const handleClickOpen = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // PAGINATION ENDS

  // DATA GRID TABLE START
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#0747a9',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
      padding: '10px 14px',
      border: '1px solid #c8c8c8'
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    }
  }));
  let alert = useAlert();
  const { setLoading } = useAuth();
  const [setFilterVal] = useState([]);
  const [partnerData, setPartnerData] = useState([]);
  const [searchapiData, setSearchapiData] = useState([]);
  const [searchTerm] = useState("");
  const [partnerOrder, setPartnerOrder] = useState([]);
  const fetchOrderData = async (id) => {
    setLoading(true);
    makeRequest('GET', `partnerOrdersByPartnerId/${id}`).then(result => {
      setPartnerOrder(result.orders);
    })
      .finally(() => {
        setLoading(false);
      })
  };
  const fetchData = async () => {
    setLoading(true);
    makeRequest('GET', `partnersList`).then(result => {
      setPartnerData(result.partner_List);
      setSearchapiData(result.partner_List);
    }).catch(err => {
      alert.error(err.message);
    }).finally(() => {
      setLoading(false);
    })
  };
  const deleteData = async (id) => {
    setLoading(true);
    makeRequest('DELETE', `delete-user/${id}`).then(result => {
      alert.success(result.message) && fetchData();
      setopen(false);
    }).catch(err => {
      alert.error(err.message);
    })
  };
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
  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };
  const [editData, setEditData] = useState({});
  const handlePartner = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    makeRequest('PUT', `update-user/${id}`, editData).then(result => {
      alert.success(result.message) &&  fetchData();
    }).catch(err => {
      alert.error(err.message);
    }).finally(() => {
      setLoading(false);
    })

    return false;
  };
  const fetchID = async (id) => {
    setLoading(true);
    makeRequest('GET', `partnerDetailsByPartnerId/${id}`, editData).then(result => {
      setEditData(result.data);
    }).catch(err => {
      alert.error(err.message);
    }).finally(() => {
      setLoading(false);
    })
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <div className="filter_partner">
        <div className="form-row">
          <div className="col-md-2">
            <input
              className="form-control"
              type="text"
              placeholder="Search Partner"
              onChange={handleSearch}
            />
          </div>
          <div className="col-md-10">
            <div className="d-flex justify-content-end">
              <Addpartner />
            </div>
          </div>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table stickyHeader striped aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Pincode</StyledTableCell>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell>State</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
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
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, id) => (
                <StyledTableRow hover tabIndex={-1} key={id}>
                  <StyledTableCell>{row.id}</StyledTableCell>
                  <StyledTableCell>{row.partner_name}</StyledTableCell>
                  <StyledTableCell>{row.partner_email}</StyledTableCell>
                  <StyledTableCell>{row.partner_phone}</StyledTableCell>
                  <StyledTableCell>{row.partner_pincode}</StyledTableCell>
                  <StyledTableCell>{row.partner_city}</StyledTableCell>
                  <StyledTableCell>{row.partner_state}</StyledTableCell>
                  <StyledTableCell>{row.partner_address}</StyledTableCell>
                  <StyledTableCell>
                    <button
                      onClick={() => fetchID(row.id)}
                      className="btn edit_partner py-0 mr-1"
                      data-toggle="modal"
                      variant="contained"
                      data-target="#editPartner"
                    >
                      <ModeEditOutlineIcon />
                    </button>
                    <button
                      className="btn delete-btn mr-1"
                      onClick={() => handleClickOpen(row.id)}
                      variant="outlined" color="error"
                    >
                      <DeleteIcon />
                    </button>
                    <button
                      className="btn partner_order py-0 mr-1"
                      data-toggle="modal"
                      data-target="#orderPartner"
                      variant="contained"
                      onClick={() => fetchOrderData(row.id)}
                    >
                      <BookmarkBorderIcon />
                    </button>

                    {/* Delete POPUP START */}

                    {/* Delete POPUP ENDS */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 25, 100]}
                count={partnerData.length}
                rows={10}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
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
              <FormGroup
                className="partner_add"
              >
                <label htmlFor="#name">Name</label>
                <input
                  id='name'
                  className="form-control"
                  type="text"
                  name="partner_name"
                  onChange={handleInput}
                  value={editData.partner_name}
                />
                <label htmlFor="#email">Email</label>
                <input
                  id="email"
                  className="form-control"
                  type="text"
                  name="partner_email"
                  onChange={handleInput}
                  value={editData.partner_email}
                />
                <label htmlFor="#phone">Phone No</label>
                <input
                  className="form-control"
                  type="text"
                  id='phone'
                  name="partner_phone"
                  onChange={handleInput}
                  value={editData.partner_phone}
                />
                <label htmlFor="//#endregionpincode">Pincode</label>
                <input
                  id='pincode'
                  className="form-control"
                  type="text"
                  name="partner_pincode"
                  onChange={handleInput}
                  value={editData.partner_pincode}
                />
                <label htmlFor="#state">State</label>
                <input
                  id="state"
                  className="form-control"
                  type="text"
                  name="partner_state"
                  onChange={handleInput}
                  value={editData.partner_state}
                />
                <label htmlFor="#city">City</label>
                <input
                  id="city"
                  className="form-control"
                  type="text"
                  name="partner_city"
                  onChange={handleInput}
                  value={editData.partner_city}
                />
                <label htmlFor="#address">Address</label>
                <input
                  id="address"
                  className="form-control"
                  type="text"
                  name="partner_address"
                  onChange={handleInput}
                  value={editData.partner_address}
                />
                <div className="d-flex justify-content-between">
                  <button
                    onClick={(e) => handlePartner(e, editData.id)}
                    data-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Save Partner
                  </button>
                </div>
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
      {/* EDIT MODAL ENDS */}

      {/* ORDER DETAILS START */}
      <div
        className="modal bd-example-modal-xl fade"
        id="orderPartner"
        role="dialog"
        aria-labelledby="orderPartnerTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl add-partner" role="document">
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
                    {partnerOrder.map((item, id) => {
                      return (
                        <div>
                          <span className="badge badge-danger ml-3">{item.id}</span>
                          <div key={id} className='row table_row_data ml-3'>
                            <div className='col-6 mt-2'>
                              <div className='porder_formal_details'>
                                <ul>
                                  <li>
                                    <span>Package Value :</span>
                                    <span>{item.package_value}</span>
                                  </li>
                                  <li>
                                    <span>Package Size :</span>
                                    <span>{item.package_size}</span>
                                  </li>
                                  <li>
                                    <span>Package Weight :</span>
                                    <span>{item.package_volume_weight}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='col-6 mt-2'>
                              <div className='porder_formal_details'>
                                <ul>
                                  <li>
                                    <span>Order Dimension :</span>
                                    <span>{item.package_dimension}</span>
                                  </li>
                                  <li>
                                    <span>Delivery Type :</span>
                                    <span>{item.delivery_type}</span>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <span>Category :</span>
                                    <span>{item.cateogory_id}</span>
                                  </li>
                                  <li>
                                    <span>Sub Category :</span>
                                    <span>{item.sub_category_id}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='col-12'>
                              <div className='d-flex align-items-center'>
                                <a className='collpase_button_prt mr-2' data-toggle="collapse" href={`#senderCol-${item.id}`} role="button" aria-expanded="false" aria-controls="collapse1">
                                  Sender Details
                                </a>
                                <p>/</p>
                                <a className='collpase_button_prt ml-2' data-toggle="collapse" href={`#recieverCol-${item.id}`} role="button" aria-expanded="false" aria-controls="collapse2">
                                  Receiver Details
                                </a>
                              </div>
                              <div className="collapse" id={`senderCol-${item.id}`}>
                                <div className='porder_formal_details'>
                                  <ul>
                                    <li>
                                      <span>Sender Name :</span>
                                      <span>{item.sender_name}</span>
                                    </li>
                                    <li>
                                      <span>Sender Email :</span>
                                      <span>{item.sender_email}</span>
                                    </li>

                                    <li>
                                      <span>Sender Phone :</span>
                                      <span>{item.sender_phone}</span>
                                    </li>
                                    <li>
                                      <span>Sender Pincode :</span>
                                      <span>{item.sender_pin}</span>
                                    </li>
                                    <li>
                                      <span>Sender City :</span>
                                      <span>{item.sender_city}</span>
                                    </li>
                                    <li>
                                      <span>Sender State :</span>
                                      <span>{item.sender_state}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="collapse" id={`recieverCol-${item.id}`} >
                                <div className='porder_formal_details'>
                                  <ul>
                                    <li>
                                      <span>Receiver Name :</span>
                                      <span>{item.receiver_name}</span>
                                    </li>
                                    <li>
                                      <span>Receiver Email :</span>
                                      <span>{item.receiver_email}</span>
                                    </li>

                                    <li>
                                      <span>Receiver Phone :</span>
                                      <span>{item.receiver_phone}</span>
                                    </li>
                                    <li>
                                      <span>Receiver Pincode :</span>
                                      <span>{item.receiver_pin}</span>
                                    </li>
                                    <li>
                                      <span>Receiver City :</span>
                                      <span>{item.receiver_city}</span>
                                    </li>
                                    <li>
                                      <span>Receiver State :</span>
                                      <span>{item.receiver_state}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
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
      {/* Delete POPUP START */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you want to delete partner?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once You Delete it , never backup it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={() => deleteData()} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </DialogActions>
      </Dialog>
      {/* Delete POPUP ENDS */}
    </Fragment>
  );
};

export default Reactdatatable;
