import React from 'react'
import "./commondashboard.css";
import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
const Userdashboard = ({ addUserLocal, userActive }) => {
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header /> 
          {/* {console.log("MY USER" + JSON.stringify(userActive))}  */}
        </section>
      </section>
    </div>
  )
}

export default Userdashboard;