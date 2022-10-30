import * as React from "react";
import {useEffect, useRef, useState} from "react";
import "./styles.css";
import PropTypes from "prop-types";
import "./tabpanel.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import trip from "../images/triplocation.png";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";
import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
import {AutoComplete, DatePicker, Input, TimePicker} from "antd";
import moment from "moment";
import 'antd/dist/antd.css';
import {useAlert} from "react-alert";
import {makeRequest} from "../Services/api";
import {useAuth} from "../Services/auth";
// import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
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
    const {user, loading, setLoading} = useAuth();
    const alert = useAlert();
    const [activeTab, setActiveTab] = React.useState(0);
    const formRef = useRef();

    const [suggestions, setSuggestion] = useState([]);

    const handleChange = (e, newValue) => {
        setActiveTab(newValue);
    };

    const handleTabClick = (e, type) => {
        handleFormChange('journey_type', type)
    };

    const FormDataType = {
        location_from: '',
        location_to: '',
        transport_type: 'station',
        journey_type: 'one_way',
        dept_date: '',
        dept_time: '',
        return_date: '',
        return_time: '',
        dept_luggage: '',
        return_luggage: '',
        dept_ticket: '',
        return_ticket: ''
    };

    const [formData, setFormData] = useState(FormDataType);

    useEffect(() => {
        console.log(formData);
    }, [formData])

    const callCitySearchApi = (reqObj) => {
        setLoading(true);

        try {
            return makeRequest('POST', 'city-airport-train-search', reqObj)
                .then(res => {
                    return res.data;
                })
                .catch(err => {
                    alert.error(err.message)
                    return [];
                }).finally(() => setLoading(false));
        } catch (e) {
            alert.error(e);
            setLoading(false);
        }

    }

    const handleLocationSearch = (value) => {

        if (value.length > 2) {
            callCitySearchApi({
                cityName: value,
                searchType: formData.transport_type
            }).then(res => {
                setSuggestion(res.map(loc => {
                    console.log(loc);
                    return {
                        value: formData.transport_type === 'station' ? loc.station_name : loc.name,
                        code: loc.code,
                        city: loc.city
                    }
                }))
            })
        }
    }

    const handleFormChange = (name, value) => {
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            const payload = getPayload(formData.journey_type === 'round_trip');
            makeRequest('POST', 'createUserAvailability', payload).then(res => {
                if(res.success) {
                    alert.success(res.message)
                    setFormData(FormDataType);
                    formRef.current.reset();
                }else{
                    alert.error(res.message);
                }
            }).catch(err => {
                console.log(err);
                alert.error(err.message);
            }).finally(() => setLoading(false));
        }catch(e){
            alert.error("Please fill all the details")
            setLoading(false);
            console.log(e)
        }


        return false;
    }

    const getPayload = (twoWay = false) => {
        return {
            user_id: user.id,
            from_location: {
                city: formData.location_from.value,
                airport_code: formData.location_from.code,
                station_code: formData.location_from.code,
                pin_code: ''
            },
            to_location: {
                city: formData.location_to.value,
                airport_code: formData.location_to.code,
                station_code: formData.location_to.code,
                pin_code: ''
            },
            journey_type: formData.journey_type,
            journey_schedule: {
                first_way: {
                    from_date: formData.dept_date.format('DD-MM-YYYY'),
                    to_date: formData.dept_date.format('DD-MM-YYYY'),
                    item_receive_timing: formData.dept_time.format('DD-MM-YYYY H:mm:ss'),
                    ticket_number: formData.dept_ticket,
                    available_space_first_way: formData.dept_luggage,
                    journey_medium: formData.transport_type,
                    journey_way: 'single'
                },
                second_way: twoWay ? {
                    from_date: formData.return_date.format('DD-MM-YYYY'),
                    to_date: formData.return_date.format('DD-MM-YYYY'),
                    item_receive_timing: formData.return_time.format('DD-MM-YYYY H:mm:ss'),
                    ticket_number: formData.return_ticket,
                    available_space_second_way: formData.return_luggage,
                    journey_medium: formData.transport_type,
                    journey_way: "single"
                } : {}
            }
        }
    }

    return (
        <>
            <form className="form-inline trip_search_form" onSubmit={handleFormSubmit} ref={formRef} noValidate>
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn top_select_btns">
                        <input
                            type="radio"
                            name="transport_type"
                            value="flight"
                            id="option1"
                            checked={formData.transport_type === 'flight'}
                            onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                        />
                        <AirplanemodeActiveSharpIcon className="btn_icn mr-2"/>
                        Flight
                    </label>
                    <label className="btn top_select_btns">
                        <input
                            type="radio"
                            name="transport_type"
                            value="station"
                            id="option2"
                            checked={formData.transport_type === 'station'}
                            onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                        />
                        <DirectionsTransitFilledIcon className="btn_icn mr-2"/>
                        Train
                    </label>
                </div>
                <Box sx={{width: "100%"}}>
                    <Box sx={{borderColor: "divider"}}>
                        <Tabs
                            value={activeTab}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab label="One Way" {...a11yProps(0)} onClick={e => handleTabClick(e, 'one_way')}/>
                            <Tab label="Round Trip" {...a11yProps(1)} onClick={e => handleTabClick(e, 'round_trip')}/>
                        </Tabs>
                    </Box>
                    <TabPanel value={activeTab} index={0}>
            <span className="row">
              <span className="form-group col-sm-12 col-md-5  mb-sm-4 px-2  col-lg-5">
                <span className="search-container">
                  <span className="search-inner">
                    <AutoComplete
                        dropdownMatchSelectWidth={252}
                        style={{width: "100%"}}
                        options={suggestions}
                        onSelect={(value, opt) => handleFormChange('location_from', opt)}
                        onSearch={handleLocationSearch}
                        placeholder="From"
                    >
                      <Input className="form-control mb-2 mr-sm-2"/>
                    </AutoComplete>
                  </span>
                </span>
              </span>
              <span className="form-group col-sm-12 col-md-2  mb-sm-4 px-0  col-lg-2 d-flex justify-content-center">
                <img src={trip} alt="triploc"/>
              </span>
              <span className="form-group col-sm-12 col-md-5  mb-sm-4 px-2  col-lg-5">
                <span className="search-container">
                  <span className="search-inner">
                    <AutoComplete
                        dropdownMatchSelectWidth={252}
                        style={{width: "100%"}}
                        options={suggestions}
                        onSelect={(value, opt) => handleFormChange('location_to', opt)}
                        onSearch={handleLocationSearch}
                        placeholder="To"
                    >
                      <Input className="form-control mb-2 mr-sm-2"/>
                    </AutoComplete>
                  </span>
                </span>
              </span>
              <span className="form-group col-sm-6 col-md-6  mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#depdate">Journey Date</label>
                <DatePicker
                    name="dept_date"
                    selected={() => (new Date())}
                    disabledDate={(current) => current && current < moment().endOf('day')}
                    onChange={(date) => handleFormChange('dept_date', date)}
                    className="form-control"
                    format="DD/MM/YYYY"
                />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <span className="input-box">
                  <label htmlFor="#lsp">Luggage Space</label>
                  <input
                      type="text"
                      max="2"
                      min="1"
                      id="lsp"
                      name="dept_luggage"
                      className="form-control"
                      placeholder="only number"
                      onInput={e => {  e.target.value = e.target.value.replace(/[\D]/g, '')}}
                      onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                  />
                  <span className="unit">Kg</span>
                </span>
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#put">Pickup Time</label>
                <TimePicker
                    onChange={(time) => handleFormChange('dept_time', time)}
                    use12Hours
                    format="h:mm a"
                    className="form-control"
                />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#tno">Ticket No.</label>
                <input
                    type="text"
                    id="tno"
                    className="form-control"
                    required
                    name="dept_ticket"
                    placeholder="Enter ticket number"
                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                />
              </span>
            </span>
                    </TabPanel>
                    <TabPanel value={activeTab} index={1}>
            <span className="row">
              <span className="form-group col-sm-12 col-md-5  mb-sm-4 px-2  col-lg-5">
                <span className="search-container">
                  <span className="search-inner">
                    <AutoComplete
                        dropdownMatchSelectWidth={252}
                        style={{width: "100%"}}
                        options={suggestions}
                        onSelect={(value, opt) => handleFormChange('location_from', opt)}
                        onSearch={handleLocationSearch}
                        placeholder="From"
                        required
                    >
                      <Input className="form-control mb-2 mr-sm-2"/>
                    </AutoComplete>
                      {/* <button onClick={() => onSearchTo(value)}> Search </button> */}
                  </span>

                </span>
              </span>
              <span className="form-group col-sm-12 col-md-2  mb-sm-4 px-0  col-lg-2 d-flex justify-content-center">
                <img src={trip} alt="triploc"/>
              </span>
              <span className="form-group col-sm-12 col-md-5  mb-sm-4 px-2  col-lg-5">
                <span className="search-container">
                  <span className="search-inner">
                    <AutoComplete
                        dropdownMatchSelectWidth={252}
                        style={{width: "100%"}}
                        options={suggestions}
                        onSelect={(value, opt) => handleFormChange('location_to', opt)}
                        onSearch={handleLocationSearch}
                        placeholder="To"
                    >
                      <Input className="form-control mb-2 mr-sm-2"/>
                    </AutoComplete>
                      {/* <button onClick={() => onSearchTo(value)}> Search </button> */}
                  </span>

                </span>
              </span>
              <span className="form-group col-sm-6 col-md-6  mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#depdate">Departure Date</label>
                <DatePicker
                    name="dept_date"
                    selected={() => (new Date())}
                    disabledDate={(current) => current && current < moment().endOf('day')}
                    onChange={(date) => handleFormChange('dept_date', date)}
                    className="form-control"
                    format="DD/MM/YYYY"
                />
              </span>

              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <span className="input-box">
                  <label htmlFor="#lsp">Luggage Space</label>
                  <input
                      type="text"
                      max="2"
                      min="1"
                      id="lsp"
                      name="dept_luggage"
                      className="form-control"
                      onInput={e => {  e.target.value = e.target.value.replace(/[\D]/g, '')}}
                      onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                  />
                  <span className="unit">Kg</span>
                </span>
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#put">Pickup Time</label>
                <TimePicker
                    onChange={(time) => handleFormChange('dept_time', time)}
                    use12Hours
                    format="h:mm a"
                    className="form-control"
                />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#tno">Ticket No.</label>
               <input
                   type="text"
                   id="tno"
                   className="form-control"
                   required
                   name="dept_ticket"
                   placeholder="Enter ticket number"
                   onChange={(e) => handleFormChange(e.target.name, e.target.value)}
               />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#retdate">Return Date</label>
                <DatePicker
                    name="return_date"
                    selected={() => (new Date())}
                    disabledDate={(current) => current && current < (formData.dept_date || moment().endOf('day'))}
                    onChange={(date) => handleFormChange('return_date', date)}
                    className="form-control"
                    format="DD/MM/YYYY"
                />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <span className="input-box">
                  <label htmlFor="#lsp">Luggage Space</label>
                  <input
                      type="text"
                      max="2"
                      min="1"
                      id="lsp"
                      name="return_luggage"
                      className="form-control"
                      onInput={e => {  e.target.value = e.target.value.replace(/[\D]/g, '')}}
                      onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                  />
                  <span className="unit">Kg</span>
                </span>
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#put">Pickup Time</label>
                <TimePicker
                    onChange={(time) => handleFormChange('return_time', time)}
                    use12Hours
                    format="h:mm a"
                    className="form-control"
                />
              </span>
              <span className="form-group col-sm-6 col-md-6 mb-sm-4 px-2  col-lg-3">
                <label htmlFor="#tno">Ticket No.</label>
               <input
                   type="text"
                   id="tno"
                   className="form-control"
                   required
                   name="return_ticket"
                   placeholder="Enter ticket number"
                   onChange={(e) => handleFormChange(e.target.name, e.target.value)}
               />
              </span>
            </span>
                    </TabPanel>
                </Box>
                <div className="w-100">
                    <button type="submit" className="btn btn-lg btn-primary w-100" disabled={loading}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}
