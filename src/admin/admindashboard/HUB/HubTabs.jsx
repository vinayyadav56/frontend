import * as React from "react";
import PropTypes from "prop-types";
import "../../../Homepages/styles.css";
import "../../../Homepages/tabpanel.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PickupOrderTable from "./PickupOrderTable";
import DeliveryOrderDetail from "./DeliveryOrderDetail";
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
export default function HubDetails() {
    const [chooseValue, setChooseValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setChooseValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: "100%", padding: '0px' }}>
                <Box sx={{ borderColor: "divider" }}>
                    <Tabs
                        sx={{ padding: '0px' }}
                        value={chooseValue}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab sx={{ padding: '0px', marginRight:'1rem' }} label="Pickup Order" {...a11yProps(0)} />
                        <Tab sx={{ padding: '0px' }} label="Delivery Order" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel sx={{ padding: '0px' }} value={chooseValue} index={0}>
                    <PickupOrderTable/>
                </TabPanel>
                <TabPanel sx={{ padding: '0px' }} value={chooseValue} index={1}>
                    <DeliveryOrderDetail />
                </TabPanel>
                
            </Box>
        </>
    );
}