import React from "react";
import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import "../Homepages/homepage.css";
import Tripsearch from "../Homepages/Tripsearch";
const Postavailablity = ({addUserLocal,  userActive }) => {
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar userActive={userActive}/>
        <section className="main-content">
          <Header addUserLocal={addUserLocal}/>
          <div className="mt-5 trip_form">
            <Tripsearch />
          </div>
         
        </section>
      </section>
    </div>
  );
};

export default Postavailablity;
