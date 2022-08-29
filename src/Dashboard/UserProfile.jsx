import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import Profileform from "./Profileform";
import Paymentform from "./Paymentform";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const UserProfile = () => {
  const [stableUser, setstableUser] = useState([]);
  const fetch_Url = "http://127.0.0.1:8000/api/fetch-user/1";

  const fetchUser = async () => {
    const response = await axios.get(fetch_Url);
    try {
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser()
  }, [])
  

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
            <div className="d-flex justify-content-center mt-5">
              <div>
                <div className="headings">
                  <h3>Payment Details</h3>
                  <p>See your payment detail here</p>
                </div>
                <Paymentform />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default UserProfile;
