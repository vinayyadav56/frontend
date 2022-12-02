import React, { useState } from "react";
import Header from "./Dashboardheader";
import Sidebar from "./Dashboardsidebar";
import refral from '../images/referearn1.png';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import "./managerefer.css";
// import { useAuth } from "../Services/auth";
// import { Redirect } from "react-router-dom";
const Managereffrals = ({addUserLocal, userActive }) => {
  const [copy, setCopy] = useState('CDR2940KAJIM');
  const [myStyle, setMyStyle] = useState({
    color:'black',
  });
  const handleCopy = () => {
    if(myStyle.color === 'white'){
      setMyStyle({
        color:'black',
        backgroundColor:'#fff',
        boxShadow:'none'
      })
    }else{
      setMyStyle({
        color:'white',
      })
    }
    var copy = document.getElementById("myCode");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    setCopy('CDR2940KAJIM');
  }
  // const auth = useAuth();
  // if (!auth.isAuthenticated()) {
  //   return <Redirect to="/login" />
  // }
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar userActive={userActive}/>
        <section className="main-content">
          <Header addUserLocal={addUserLocal}/>
          <div className="refer_earn">
            <div className="container-fluid refer_content">
              <div className="row">
                <div className="col-lg-6 col-md-12 ">
                  <h2>REFER & EARN!!!</h2>
                  <p className="refer_heading">Share and Save some cash!</p>
                  <span>
                    Share your carrier link with the world. When someone uses
                    it, you’ll be credited ₹500 off your next bill
                  </span>
                  <p className="refer_code">Refer Code</p>
                  <div className="card">
                    <div className="card-body d-flex justify-content-between">
                    <input type="text" id="myCode" name="country" value={copy} disabled style={myStyle} />
                        <OpenInNewIcon onClick={handleCopy}/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
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
