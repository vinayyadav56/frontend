import React, { Component } from "react";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";
import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BasicTabs from "./TabPanel";
import "./homepage.css";
const { useState, Fragment } = React;
const WaySelect = () => {
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
    console.log("event.target.id " + event.target.id);
  };
  return (
    <form className="form-inline trip_search_form">
      <ul className="fswTabs">
        <Fragment>
          <button
            key={1}
            className={active === "1" ? "active" : undefined}
            id={"1"}
            onClick={handleClick}
          >
            <AirplanemodeActiveSharpIcon className="btn_icn mr-2" />
            Flight
          </button>

          <button
            key={2}
            className={active === "2" ? "active" : undefined}
            id={"2"}
            onClick={handleClick}
          >
            <DirectionsTransitFilledIcon className="btn_icn mr-2" />
            Train
          </button>

          <button
            key={3}
            className={active === "3" ? "active" : undefined}
            id={"3"}
            onClick={handleClick}
          >
            <DirectionsCarIcon className="btn_icn mr-2" />
            Car
          </button>
        </Fragment>
      </ul>
      <div>
        <BasicTabs />
      </div>
      <div className="trp_form_submit">
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default WaySelect;
