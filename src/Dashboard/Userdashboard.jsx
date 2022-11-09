import React from "react";
import "./commondashboard.css";
import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import { useAuth } from "../Services/auth";
import { Redirect } from "react-router-dom";
const Userdashboard = ({ addUserLocal, userActive }) => {
  const auth = useAuth();
  if (!auth.isAuthenticated()) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar userActive={userActive}/>
        <section className="main-content">
          <Header addUserLocal={addUserLocal} />
          {/* {console.log("MY USER" + JSON.stringify(userActive))}  */}
        </section>
      </section>
    </div>
  );
};

export default Userdashboard;
