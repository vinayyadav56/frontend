import * as React from "react";
import PropTypes from "prop-types";
import "./tabpanel.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import trip from "../images/triplocation.png";
import FromSuggestion from "./FromSuggestion";
import ToSugestion from "./ToSugestion";

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
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [filteredData, setFiltereddata] = useState([]);
  // const handleSrchfilter = (e) => {
  //   const srchWord = e.target.value;
  //   const newFilter = tabArray.filter((value) => {
  //     return value.name.toLowerCase().includes(srchWord.toLowerCase());
  //   });
  //   setFiltereddata(newFilter);
  // };

  //AutoSuggestion
  // const [searchVal, setSearchVal] = useState("");

  // const handleSuggestion = (e) => {
  //   setSearchVal(e.target.value);
  // };

  // const [arrayFilter, setarrayFilter] = useState(tabArray);
  // console.log("arrayFilter " + JSON.stringify(arrayFilter));

  // const onSearch = (searchTerm) => {
  //   setSearchVal(searchTerm);
  //   alert("test");
  //   console.log("search ", searchTerm);
  // };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="One Way" {...a11yProps(0)} />
          <Tab label="Round Trip" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="row">
          {/* <div className="form-group col-sm-6 col-md-5  mb-sm-4 px-2  col-lg-5">
            <input
              name="input1"
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="From"
              id="from"
              value={filteredData.newFilter}
              onChange={handleSrchfilter}
            />
            {filteredData.Lenght !== 0 && (
              <div className="srcDataresult">
                {filteredData.map((value, key) => {
                  return (
                    <p className="dataItem" onClick={() => handleSrchfilter()}>
                      {value.name}
                    </p>
                  );
                })}
              </div>
            )}
          </div> */}
          <div className="form-group col-sm-6 col-md-5  mb-sm-4 px-2  col-lg-5">
            <FromSuggestion />
          </div>
          <div className="form-group col-sm-6 col-md-2  mb-sm-4 px-0  col-lg-2 d-flex justify-content-center">
            <img src={trip} alt="triploc" />
          </div>
          <div className="form-group col-sm-6 col-md-5  mb-sm-4 px-2  col-lg-5">
            <ToSugestion />
          </div>
          <div className="form-group col-sm-6 col-md-6  mb-sm-4 px-2  col-lg-3">
            <label for="#depdate">Journey Date</label>
            <input
              type="date"
              // placeholder="Date"
              className="form-control"
              id="depdate"
              required
            />
          </div>
          <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
            <div className="input-box">
              <label for="#lsp">Luggage Space</label>
              <input
                type="number"
                max="2"
                min="1"
                id="lsp"
                className="form-control"
                required
              />
              <span class="unit">Kg</span>
            </div>
          </div>
          <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
            <label for="#put">Pickup Time</label>
            <input type="time" id="put" className="form-control" required />
          </div>
          <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
            <label for="#tno">Ticket No.</label>
            <input
              type="text"
              id="tno"
              className="form-control"
              // placeholder="Ticket number"
              required
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="row">
          <div className="form-group col-sm-6 col-md-5  mb-sm-4 px-2  col-lg-5">
            <FromSuggestion />
          </div>
          <div className="form-group col-sm-6 col-md-2  mb-sm-4 px-0  col-lg-2 d-flex justify-content-center">
            <img src={trip} alt="triploc" />
          </div>
          <div className="form-group col-sm-6 col-md-5  mb-sm-4 px-2  col-lg-5">
            <ToSugestion />
          </div>
          <div className="form-group col-sm-6 col-md-6  mb-sm-4 px-2  col-lg-3">
            <label for="#depdate">Departure Date</label>
            <input type="date" className="form-control" id="depdate" required />
          </div>
          <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
            <label for="#retdate">Return Date</label>
            <input type="date" id="retdate" className="form-control" required />
          </div>
          <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-2">
            <label for="#lsp">Luggage Space</label>
            <input type="text" id="lsp" className="form-control" required />
          </div>
          <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-2">
            <label for="#put">Pickup Time</label>
            <input
              type="datetime-local"
              id="put"
              className="form-control"
              // placeholder="Enter time"
              required
            />
          </div>
          <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-2">
            <label for="#tno">Ticket No.</label>
            <input
              type="text"
              id="tno"
              className="form-control"
              // placeholder="Enter number"
              required
            />
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
