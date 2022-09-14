import React from "react";
import "./homepage.css";
import BasicTabs from "./TabPanel";


const Tripsearch = () => {
  return (
    <div>
      <div className="trip_search">
        <div className="card">
          <div className="card-body">
            <BasicTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tripsearch;
