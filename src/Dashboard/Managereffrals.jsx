import React from "react";
import { Link } from "react-router-dom";
import Header from "./Dashboardheader";
import Sidebar from "./Dashboardsidebar";
import refral from '../images/referearn1.png';
import "./managerefer.css";
const Managereffrals = () => {
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header />
          <div className="refer_earn">
            <div className="container-fluid refer_content">
              <div className="row">
                <div className="col-6">
                  <h2>REFER & EARN!!!</h2>
                  <p className="refer_heading">Share and Save some cash!</p>
                  <span>
                    Share your carrier link with the world. When someone uses
                    it, you’ll be credited ₹500 off your next bill
                  </span>
                  <p className="refer_code">Refer Code</p>
                  <div className="card">
                    <div className="card-body">
                        <p>CDR2940KAJIM</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                    <img src={refral} alt="ref" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Managereffrals;
