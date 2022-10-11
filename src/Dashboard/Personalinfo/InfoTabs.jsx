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
import DocVerification from "./DocVerification";
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
            <Box sx={{ width: "100%"  }}>
                <Box sx={{ padding:'0px' }}>
                    <Tabs
                        value={chooseValue}
                        onChange={handleChange}
                        sx={{display:'felx',borderBottom:'1px solid #0747a9', justifyContent:'space-between'}}
                        aria-label="basic tabs example"
                    >
                        <Tab sx={{
                            padding:'0px',
                            marginRight:'2rem',
                            fontWeight:'bold'
                        }} 
                        label="Personal Information" {...a11yProps(0)} />
                        <Tab sx={{
                            padding:'0px',
                            marginRight:'2rem',
                            fontWeight:'bold'
                        }}
                        label="Payment Information" {...a11yProps(1)} />
                        <Tab sx={{
                            padding:'0px',
                            fontWeight:'bold'
                        }}
                        label="Documents Information" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={chooseValue} index={0}>
                    <Profileform />
                </TabPanel>
                <TabPanel value={chooseValue} index={1}>
                    <PaymentInfo />
                </TabPanel>
                <TabPanel value={chooseValue} index={2}>
                    <DocVerification />
                </TabPanel>
            </Box>
        </>
    );
}