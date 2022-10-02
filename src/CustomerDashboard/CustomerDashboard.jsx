import React from 'react'
// import "./commondashboard.css";
import Sidebar from "./CustomerSidebar";
import Header from "./CustomerHeader";
// import ShipNow from "../Homepages/ShipNow"
const CustomerDashboard = () => {
  return (
    <div>
       <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header />  
          {/* <ShipNow /> */}
        </section>
      </section>
    </div>
  )
}

export default CustomerDashboard