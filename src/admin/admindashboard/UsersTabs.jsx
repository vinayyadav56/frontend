import * as React from "react";
import PropTypes from "prop-types";
import "../../Homepages/styles.css";
import "../../Homepages/tabpanel.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "./AllTable/Table";
import UserData from "./AllTable/UserData";
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
export default function AllDetails() {
    const [chooseValue, setChooseValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setChooseValue(newValue);
    };


    return (
        <>

            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderColor: "divider" }}>
                    <Tabs
                        value={chooseValue}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab label="Partner Data" {...a11yProps(0)} />
                        <Tab label="Carrier" {...a11yProps(1)} />
                        <Tab label="Customer" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={chooseValue} index={0}>
                    <Table />
                </TabPanel>
                <TabPanel value={chooseValue} index={1}>
                    <UserData />
                </TabPanel>
                <TabPanel value={chooseValue} index={2}>
                    <UserData />
                </TabPanel>
            </Box>

        </>
    );
}