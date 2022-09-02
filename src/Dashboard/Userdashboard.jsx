import React from 'react'
import "./commondashboard.css";
import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
const Userdashboard = ({ addUserLocal, userActive }) => {
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar userActive={userActive}/>
        <section className="main-content">
          <Header userActive={userActive} addUserLocal={addUserLocal}/> 
          {console.log("MY USER" + JSON.stringify(userActive))} 
        </section>
      </section>
    </div>
  )
}

export default Userdashboard;