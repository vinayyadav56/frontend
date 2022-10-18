import React, { Fragment } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
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
import {makeRequest} from "../../../Services/api";
import {useAuth} from "../../../Services/auth";

const Reactdatatable = () => {
    const [open, setopen] = React.useState(false);

    const handleClickOpen = () => {
        setopen(true);
    };

    const handleClose = () => {
        setopen(false);
    };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };
    // PAGINATION ENDS

    // DATA GRID TABLE START
    const StyledTableCell = styled(TableCell)(({theme}) => ({
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

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        }
    }));
    let alert = useAlert();
    const {setLoading} = useAuth();

    const [setFilterVal] = useState([]);
    const [partnerData, setPartnerData] = useState([]);
    const [searchapiData, setSearchapiData] = useState([]);
    const [searchTerm] = useState("");

    // PARTNER ORDER LIST START
    const [partnerOrderData, setPartnerOrderData] = useState([]);

    const fetchOrderData = async (id) => {
        setLoading(true);

        makeRequest('GET', `partnerOrdersByPartnerId/${id}`).then(result => {
            alert.success(result.message);
            setPartnerOrderData(result.data[0]);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };
    // PARTNER ORDER LIST ENDS

    const fetchData = async () => {
        setLoading(true);

        makeRequest('GET', `partner-list`).then(result => {
            alert.success(result.message);
            setPartnerData(result.data[0]);
            setSearchapiData(result.data[0]);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };

    useEffect(() => {
        fetchData();
    }, []);

    // DELETE PARTNER START
    const deleteData = async (id) => {
        setLoading(true);

        makeRequest('DELETE', `delete-user/${id}`).then(result => {
            alert.success(result.message);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
            setopen(false);
        })
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
        const {name, value} = e.target;
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
        setLoading(true);

        makeRequest('PUT', `update-user/${id}`, editData).then(result => {
            alert.success(result.message);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
            setopen(false);
        })

        return false;
    };

    // FETCH PARTNER DETAILS
    const fetchID = async (id) => {
        setLoading(true);

        makeRequest('GET', `partner-fetch-single-record/${id}`, editData).then(result => {
            alert.success(result.message);
            result.success && setEditData(result.data.partner_single_data);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };

  // FETCH PARTNER DETAILS ENDS
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
                      onClick={handleClickOpen}
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
                                                <Button onClick={handleClose}>Disagree</Button>
                                                <Button onClick={() => deleteData(row.id)} autoFocus>
                                                    Agree
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
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
                    {partnerOrderData.map((item, id) => {
                      return (
                        <>

                        </>
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
