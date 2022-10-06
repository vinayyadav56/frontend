import * as React from "react";
import PropTypes from "prop-types";
import "../../Homepages/styles.css";
import "../../Homepages/tabpanel.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PaymentInfo from "./PaymentInfo";
import Profileform from "./Profileform";
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
export default function ProfileAllDetails() {
    const [chooseValue, setChooseValue] = React.useState(0);
    const handleChange = (event,newValue) => {
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
                        <Tab label="Personal Information" {...a11yProps(0)} />
                        <Tab label="Payment Information" {...a11yProps(1)} />
                        <Tab label="Profile Information" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={chooseValue} index={0}>
                    <Profileform />
                </TabPanel>
                <TabPanel value={chooseValue} index={1}>
                    <PaymentInfo />
                </TabPanel>
                <TabPanel value={chooseValue} index={2}>
                    <Profileform />
                </TabPanel>
            </Box>

        </>
    );
}