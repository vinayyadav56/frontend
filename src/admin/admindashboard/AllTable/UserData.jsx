import React from "react";
// import { Table, thead, tbody, tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
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
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

const UserData = () => {
  // const [setFilterVal] = useState([]);

  const [userData, setUserData] = useState([]);
  // const [searchUserData, setSearchUserData] = useState([]);
  // const [searchTerm] = useState("");

  const fetchData = async () => {
    const response = await axios.get("http://35.91.35.188/api/user-all-list");
    const partnerList = Object.values(response.data);
    const list = partnerList[0];
    try {
      setUserData(list);
      // setSearchUserData(list);
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
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (e.target.value === "") {
  //     userData(searchUserData);
  //   } else {
  //     const filterResult = searchUserData.filter((item) =>
  //       item.first_name.toLowerCase().includes(e.target.value.toLowerCase())
  //     );
  //     setUserData(filterResult);
  //   }
  //   setFilterVal(e.target.value);
  // };


  // PAGINATION ENDS

  const [userOpen, setUserOpen] = React.useState(false);

  const handleClickOpen = () => {
    setUserOpen(true);
  };

  const handleClose = () => {
    setUserOpen(false);
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



  const rows = [];
  //   CKORDER TABLE END
  userData && userData.forEach((item, id) => {
    rows.push({
      id: id + 1,
      first_name: item.first_name,
      last_name: item.last_name,
      dob: item.dob,
      pincode: item.pincode,
      city: item.city,
      state: item.state,
      address: item.address,
    }
    )
  });
  // DATA GRID TABLES ENDS

  return (
    <div>
      <div className="filter_partner">
        <div className="table-heading">
          <h2 className="text-center my-3">All User Data</h2>
        </div>
      </div>
      {/* <div className="table-responsive">
          <table id="dtBasicExample" className="table table-striped table-hover table-bordered table-sm" cellspacing="0" width="100%">
            <thead className="thead-dark sticky-top">
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
      </div> */}
      {/* <Paper sx={{ width: '100%', overflow: 'hidden' }}> */}
      <TableContainer component={Paper}>
        <Table stickyHeader striped aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Dob</StyledTableCell>
              <StyledTableCell>Pincode</StyledTableCell>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell>State</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, id) => (
                <StyledTableRow hover tabIndex={-1} key={id}>
                  <StyledTableCell>{row.id}</StyledTableCell>
                  <StyledTableCell>{row.first_name}</StyledTableCell>
                  <StyledTableCell>{row.last_name}</StyledTableCell>
                  <StyledTableCell>{row.dob}</StyledTableCell>
                  <StyledTableCell>{row.pincode}</StyledTableCell>
                  <StyledTableCell>{row.city}</StyledTableCell>
                  <StyledTableCell>{row.state}</StyledTableCell>
                  <StyledTableCell>{row.address}</StyledTableCell>
                  <StyledTableCell>
                    <button
                      className="btn delete-btn mr-1"
                      onClick={handleClickOpen}
                      variant="outlined" color="error"
                    >
                      DELETE
                    </button>

                    {/* Delete POPUP START */}
                    <Dialog
                      open={userOpen}
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
                        <Button onClick={() => handleDelete(row.id)} autoFocus>
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
                count={rows.length}
                rows={10}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      {/* </Paper> */}

    </div>
  );
};

export default UserData;
