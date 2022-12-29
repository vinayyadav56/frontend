import React from "react";
import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import "../Homepages/homepage.css";
import Tripsearch from "../Homepages/Tripsearch";
import { useAuth } from "../Services/auth";
import DailyCommuterAvailabilty from "./DailyCommuter/CommuterAvailTabs";
const Postavailablity = ({ addUserLocal, userActive }) => {
  const user = useAuth();
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar userActive={userActive} />
        <section className="main-content">
          <Header addUserLocal={addUserLocal} />
          <div className="mt-5 trip_form">
            {
              !user.isCommuter() ?
                <Tripsearch />
                :
                <DailyCommuterAvailabilty />

            }

          </div>
        </section>
      </section>
    </div>
  );
};

export default Postavailablity;
