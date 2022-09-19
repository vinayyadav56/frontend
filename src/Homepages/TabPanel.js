import * as React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";
import "./tabpanel.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import trip from "../images/triplocation.png";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";
import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
// import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function BasicTabs() {
  const [chooseValue, setChooseValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setChooseValue(newValue);
  };

  // from location search js starts
  const [inputValue, setInputValue] = useState({
    searchType: "",
    cityName: "",
  });


  // const handleRadio = (e) => {
  //   const { name, value } = e.target;

  //   setInputValue({
  //     [name]: value
  //   });
  // };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // fetch from and to locations
  const fetchLocation = async (e) => {
    const { searchType } = inputValue;
    if (searchType) {
      const res = await axios.post(
        "http://35.91.35.188/api/city-airport-train-search",
        inputValue
      );
      try {
        console.log(res.data.data);
        // setInputValue(res.data.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(`Please Select searchType`);
    }
  };
 
  return (
    <>
      <form className="form-inline trip_search_form"> 
        <div className="btn-group-toggle" data-toggle="buttons">
          <label className="btn top_select_btns">
            <input
              type="radio"
              name="searchType"
              value="flight"
              id="option1"
              onChange={onChange}
            />
            <AirplanemodeActiveSharpIcon className="btn_icn mr-2" />
            Flight
          </label>
          <label className="btn top_select_btns">
            <input
              type="radio"
              name="searchType"
              value="station"
              id="option2"
              onChange={onChange}
            />
            <DirectionsTransitFilledIcon className="btn_icn mr-2" />
            Train
          </label>
        </div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderColor: "divider" }}>
            <Tabs
              value={chooseValue}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="One Way" {...a11yProps(0)} />
              <Tab label="Round Trip" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={chooseValue} index={0}>
            <span className="row">
              <span className="form-group col-sm-12 col-md-5  mb-sm-4 px-2  col-lg-5">
                <p className="search-container">
                  <p className="search-inner">
                    <input
                      name="cityName"
                      type="text"
                      className="form-control mb-2 mr-sm-2"
                      placeholder="From"
                      id="from"
                      value={inputValue.cityName}
                      onClick={fetchLocation}
                    />

                    {console.log(
                      "city name " + JSON.stringify(inputValue.cityName)
                    )}
                  </p>
                 
                </p>
              </span>
              <span className="form-group col-sm-12 col-md-2  mb-sm-4 px-0  col-lg-2 d-flex justify-content-center">
                <img src={trip} alt="triploc" />
              </span>
              <span className="form-group col-sm-12 col-md-5  mb-sm-4 px-2  col-lg-5">
                <p className="search-container">
                  <p className="search-inner">
                    <input
                      name="cityName"
                      type="text"
                      className="form-control mb-2 mr-sm-2"
                      placeholder="To"
                      id="from"
                      value={inputValue.cityName}
                      onClick={fetchLocation}
                    />
                    {/* <button onClick={() => onSearchTo(value)}> Search </button> */}
                  </p>
                  {/* <p className="dropdown">
                {tabArray
                  .filter((item) => {
                    const searchTermTo = value.toLowerCase();
                    const fullName = item.full_name.toLowerCase();

                    return (
                      searchTermTo &&
                      fullName.startsWith(searchTermTo) &&
                      fullName !== searchTermTo
                    );
                  })
                  .slice(0, 3)
                  .map((item) => (
                    <p
                      onClick={() => onSearchTo(item.full_name)}
                      className="dropdown-row"
                      key={item.full_name}
                    >
                      {item.full_name}
                    </p>
                  ))}
              </p> */}
                </p>
              </span>
              <span className="form-group col-sm-6 col-md-6  mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#depdate">Journey Date</label>
                <input
                  type="date"
                  // placeholder="Date"
                  className="form-control"
                  id="depdate"
                  required
                />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <span className="input-box">
                  <label htmlFor="#lsp">Luggage Space</label>
                  <input
                    type="number"
                    max="2"
                    min="1"
                    id="lsp"
                    className="form-control"
                    required
                  />
                  <span className="unit">Kg</span>
                </span>
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#put">Pickup Time</label>
                <input type="time" id="put" className="form-control" required />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#tno">Ticket No.</label>
                <input type="text" id="tno" className="form-control" required />
              </span>
            </span>
          </TabPanel>
          <TabPanel value={chooseValue} index={1}>
            <span className="row">
              <span className="form-group col-sm-12 col-md-5  mb-sm-4 px-2  col-lg-5">
                <p className="search-container">
                  <p className="search-inner">
                    <input
                      name="cityName"
                      type="text"
                      className="form-control mb-2 mr-sm-2"
                      placeholder="From"
                      id="from"
                      value={inputValue.cityName}
                      onClick={fetchLocation}
                    />
                    {/* <button onClick={() => onSearchTo(value)}> Search </button> */}
                  </p>
                  {/* <p className="dropdown">
                {tabArray
                  .filter((item) => {
                    const searchTermTo = value.toLowerCase();
                    const fullName = item.full_name.toLowerCase();

                    return (
                      searchTermTo &&
                      fullName.startsWith(searchTermTo) &&
                      fullName !== searchTermTo
                    );
                  })
                  .slice(0, 3)
                  .map((item) => (
                    <p
                      onClick={() => onSearchTo(item.full_name)}
                      className="dropdown-row"
                      key={item.full_name}
                    >
                      {item.full_name}
                    </p>
                  ))}
              </p> */}
                </p>
              </span>
              <span className="form-group col-sm-12 col-md-2  mb-sm-4 px-0  col-lg-2 d-flex justify-content-center">
                <img src={trip} alt="triploc" />
              </span>
              <span className="form-group col-sm-12 col-md-5  mb-sm-4 px-2  col-lg-5">
                <p className="search-container">
                  <p className="search-inner">
                    <input
                      name="cityName"
                      type="text"
                      className="form-control mb-2 mr-sm-2"
                      placeholder="To"
                      id="from"
                      value={inputValue.cityName}
                      onClick={fetchLocation}
                    />
                    {/* <button onClick={() => onSearchTo(value)}> Search </button> */}
                  </p>
                  {/* <p className="dropdown">
                {tabArray
                  .filter((item) => {
                    const searchTermTo = value.toLowerCase();
                    const fullName = item.full_name.toLowerCase();

                    return (
                      searchTermTo &&
                      fullName.startsWith(searchTermTo) &&
                      fullName !== searchTermTo
                    );
                  })
                  .slice(0, 3)
                  .map((item) => (
                    <p
                      onClick={() => onSearchTo(item.full_name)}
                      className="dropdown-row"
                      key={item.full_name}
                    >
                      {item.full_name}
                    </p>
                  ))}
              </p> */}
                </p>
              </span>
              <span className="form-group col-sm-6 col-md-6  mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#depdate">Departure Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="depdate"
                  required
                />
              </span>
              
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <span className="input-box">
                  <label htmlFor="#lsp">Luggage Space</label>
                  <input
                    type="number"
                    max="2"
                    min="1"
                    id="lsp"
                    className="form-control"
                    required
                  />
                  <span className="unit">Kg</span>
                </span>
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#put">Pickup Time</label>
                <input
                  type="time"
                  id="put"
                  className="form-control"
                  // placeholder="Enter time"
                  required
                />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#tno">Ticket No.</label>
                <input
                  type="text"
                  id="tno"
                  className="form-control"
                  // placeholder="Enter number"
                  required
                />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#retdate">Return Date</label>
                <input
                  type="date"
                  id="retdate"
                  className="form-control"
                  required
                />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <span className="input-box">
                  <label htmlFor="#lsp">Luggage Space</label>
                  <input
                    type="number"
                    max="2"
                    min="1"
                    id="lsp"
                    className="form-control"
                    required
                  />
                  <span className="unit">Kg</span>
                </span>
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#put">Pickup Time</label>
                <input
                  type="time"
                  id="put"
                  className="form-control"
                  // placeholder="Enter time"
                  required
                />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#tno">Ticket No.</label>
                <input
                  type="text"
                  id="tno"
                  className="form-control"
                  // placeholder="Enter number"
                  required
                />
              </span>
            </span>
          </TabPanel>
        </Box>
        <div className="trp_form_submit">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
