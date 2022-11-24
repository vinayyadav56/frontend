import React from "react";
import Sidebar from "./CustomerSidebar";
import Header from "./CustomerHeader";
import Profileform from "./CustomerProfileform";
// import { useAuth } from "../Services/auth";
// import { Redirect } from "react-router-dom";
const CustomerProfile = () => {
  // const auth = useAuth();
  // if (!auth.isUser()) {
  //   return <Redirect to="/login" />
  // }
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header />
          <div className="personal-info-form">
            <div className="d-flex justify-content-center">
              <div>
                <div className="headings">
                  <h3>Personal Info</h3>
                  <p>Update your personal detail here</p>
                </div>
                <Profileform />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CustomerProfile;
