import React from 'react'
import { NavLink } from 'react-router-dom';
import Sidebar from "./CustomerSidebar";
import Header from "./CustomerHeader";
import gpay from "../images/Gpay.png"
import paytm from "../images/paytm.png"
import phonepay from "../images/phonepe.png"
import "./CustomerHistory.css";
const CustomerManagereffrals = () => {
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header />
          <div className='payments_method'>
            <p><strong>Choose a payment method</strong>(Click one of the option below)</p>
            <div className='card_method'>
              <div className='card'>
                <div className='card-body'>
                  <NavLink to="">Credit/Debit Card</NavLink>
                </div>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <NavLink to="">
                    <img src={gpay} alt="gapy" />
                  </NavLink>
                </div>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <NavLink to="">
                  <img src={paytm} alt="paytm" />
                  </NavLink>
                </div>
              </div>
              <div className='card'>
                <div className='card-body'>
                  <NavLink to="">
                  <img src={phonepay} alt="phoney" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default CustomerManagereffrals