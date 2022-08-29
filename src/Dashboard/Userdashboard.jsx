import React from 'react'
import "./commondashboard.css";
import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
const Userdashboard = ({ addUserLocal, user }) => {
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header user={user} addUserLocal={addUserLocal}/> 
          {console.log("MY USER" + JSON.stringify(user))} 
        </section>
      </section>
    </div>
  )
}

export default Userdashboard;