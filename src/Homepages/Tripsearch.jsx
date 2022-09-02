import React, { useState } from "react";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";
import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import "./homepage.css";
import WaySelect from "./WaySelect"


const Tripsearch = () => {
  // const [srchform, setSrchform] = useState();
  return (
    <div>
      <div className="trip_search">
        <div className="card">
          <div className="card-body">
            <WaySelect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tripsearch;
