import React from 'react'
import Sidebar from "./CustomerSidebar";
import Header from "./CustomerHeader";
import ShipingOrder from "../Homepages/ShipNow/ShipingOrder"
import { Box } from '@material-ui/core';
import { useAuth } from '../Services/auth';
import { Redirect } from 'react-router-dom';
const CustomerDashboard = () => {
  const style = {
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    overflow: 'scroll',
    borderRadius: '4px'
  };
  const auth = useAuth();
  if (!auth.isUser()) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header />
          {/* <ShipNow /> */}
          <div className='d-flex mt-4 justify-content-center'>
            <Box sx={style}>
              <ShipingOrder />
            </Box>
          </div>

        </section>
      </section>
    </div>
  )
}

export default CustomerDashboard