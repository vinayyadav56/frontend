import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import trip from "../images/triplocation.png";

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

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
          <div className="form-group col-sm-6 col-md-5  mb-sm-4 px-2  col-lg-2">
            <label for="#from">From</label>
            <input
              name="input1"
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Enter City"
              id="from"
            />
          </div>
          <input type="radio" name="pankaj" id="pankaj" />
          <div className="form-group col-sm-6 col-md-2  mb-sm-4 px-0  col-lg-1">
            <img src={trip} alt="triploc" />
          </div>
          <div className="form-group col-sm-6 col-md-5  mb-sm-4 px-2  col-lg-2">
            <label for="#to">To</label>
            <input
              type="text"
              id="to"
              className="form-control"
              placeholder="Enter City"
            />
          </div>
          <div className="form-group col-sm-6 col-md-6  mb-sm-4 px-2  col-lg-2">
            <label for="#depdate">Departure Date</label>
            <input
              type="date"
              // placeholder="Date"
              className="form-control"
              id="depdate"
              required
            />
          </div>
          {/* <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-2">
            <label for="#retdate">Return Date</label>
            <input type="date" id="retdate" className="form-control" required />
          </div> */}
          <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-2">
            <label for="#tno">Ticket No.</label>
            <input
              type="text"
              id="tno"
              className="form-control"
              placeholder="Enter number"
              required
            />
          </div>
          <div className="col-lg-1 px-0">
            <button type="submit" className="btn search_submit mb-2">
              Search
            </button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="row">
          <div className="form-group col-sm-6 col-md-5  mb-sm-4 px-2  col-lg-2">
            <label for="#from">From</label>
            <input
              name="input1"
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Enter City"
              id="from"
            />
          </div>
          <input type="radio" name="pankaj" id="pankaj" />
          <div className="form-group col-sm-6 col-md-2  mb-sm-4 px-0  col-lg-1">
            <img src={trip} alt="triploc" />
          </div>
          <div className="form-group col-sm-6 col-md-5  mb-sm-4 px-2  col-lg-2">
            <label for="#to">To</label>
            <input
              type="text"
              id="to"
              className="form-control"
              placeholder="Enter City"
            />
          </div>
          <div className="form-group col-sm-6 col-md-6  mb-sm-4 px-2  col-lg-2">
            <label for="#depdate">Departure Date</label>
            <input
              type="date"
              // placeholder="Date"
              className="form-control"
              id="depdate"
              required
            />
          </div>
          <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-2">
            <label for="#retdate">Return Date</label>
            <input type="date" id="retdate" className="form-control" required />
          </div>
          <div className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-2">
            <label for="#tno">Ticket No.</label>
            <input
              type="text"
              id="tno"
              className="form-control"
              placeholder="Enter number"
              required
            />
          </div>
          <div className="col-lg-1 px-0">
            <button type="submit" className="btn search_submit mb-2">
              Search
            </button>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
