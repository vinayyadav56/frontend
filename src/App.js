import React from "react";
import "./App.css";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle";
import Login from "./component/Login";
import Signup from "./component/Signup";
import About from "./component/About";
import Contact from "./component/Contact";
import Adminlogin from "./admin/Adminlogin";
import AdminDashboard from "./admin/admindashboard/AdminDashboard";
import PartnerDashboard from "./partner/PartnerDashboard";
import Partnerlogin from "./partner/Partnerlogin";
import Homepage from "./Homepages/Homepage";
import Forgetpassword from "./component/Forgetpassword";
import UserProfile from "./Dashboard/UserProfile";
import Userdashboard from "./Dashboard/Userdashboard";
import Paymenthistory from "./Dashboard/Paymenthistory";
import CustomerDashboard from "./CustomerDashboard/CustomerDashboard";
import CustomerProfile from "./CustomerDashboard/CustomerProfile";
import CustomerTrack from "./CustomerDashboard/CustomerTrack";
import CustomerPaymenthistory from "./CustomerDashboard/CustomerPaymenthistory";
import Managereffrals from "./Dashboard/Managereffrals";
import Postavailablity from "./Dashboard/Postavailablity";
import Order from "./admin/admindashboard/Order";
import { useEffect } from "react";
import { useState } from "react";
import Services from "./Homepages/Services";

const App = () => {
  const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT,
  };

  const [user, setLogin] = useState({});

  // console.log("user login data " + JSON.stringify(user));

  // GET USER FROM LOCAL STORAGE
  useEffect(() => {
    let user = localStorage.getItem("myUser");

    if (user) {
      return JSON.parse(localStorage.getItem("myUser"));
    } else {
      return [];
    }
    // setLogin(JSON.parse(localStorage.getItem("myUser")));
  }, []);

  // ADD USER IN LOCAL STORAGE
  const addUserLocal = (user) => {
    localStorage.setItem("myUser", JSON.stringify(user));
    setLogin(user);
  };

  return (
    <>
      <Provider template={AlertTemplate} {...options}>
        <Router>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Homepage} />
            <Route path="/services" component={Services} />
            <Route path="/forgetpassword" component={Forgetpassword} />
            <Route path="/login">
              <Login addUserLocal={addUserLocal} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* no show before login */}

            <Route path="/partner/dashboard">
              <PartnerDashboard />
            </Route>
            <Route path="/partner">
              <Partnerlogin />
            </Route>
            <Route path="/admin">
              {/* {user && user.id ? ( */}
              <Adminlogin />
            </Route>
            <Route path="/admindashboard">
              <AdminDashboard />
            </Route>
            <Route exact path="/admindashboardorder">
              <Order />
            </Route>

            <Route path="/carrier/dashboard/postavailabilty">
              {user && user.id ? (
                <Postavailablity
                  addUserLocal={addUserLocal}
                  userActive={user}
                />
              ) : (
                <Login addUserLocal={addUserLocal} />
              )}
            </Route>
            <Route path="/carrier/dashboard/profile">
              {user && user.id ? (
                <UserProfile addUserLocal={addUserLocal} userActive={user} />
              ) : (
                <Login addUserLocal={addUserLocal} />
              )}
            </Route>
            <Route path="/carrier/dashboard/paymenthistory">
              {user && user.id ? (
                <Paymenthistory addUserLocal={addUserLocal} userActive={user} />
              ) : (
                <Login addUserLocal={addUserLocal} />
              )}
            </Route>
            <Route path="/carrier/dashboard/managereferals">
              {user && user.id ? (
                <Managereffrals addUserLocal={addUserLocal} userActive={user} />
              ) : (
                <Login addUserLocal={addUserLocal} />
              )}
            </Route>
            <Route path="/carrier/dashboard">
              {user && user.id ? (
                <Userdashboard addUserLocal={addUserLocal} />
              ) : (
                <Login addUserLocal={addUserLocal} />
              )}
            </Route>
            <Route exact path="/customer/dashboard">
              {/* {user && user.id ? ( */}
              <CustomerDashboard />
              {/* ) : (
                <Login addUserLocal={addUserLocal} />
              )} */}
            </Route>
            <Route exact path="/customer/dashboard/profile">
              {/* {user && user.id ? ( */}
              <CustomerProfile />
              {/* ) : (
                <Login addUserLocal={addUserLocal} />
              )} */}
            </Route>
            <Route exact path="/customer/dashboard/trackhistory">
              {/* {user && user.id ? ( */}
              <CustomerTrack />
              {/* ) : (
                <Login addUserLocal={addUserLocal} />
              )} */}
            </Route>
            <Route exact path="/customer/dashboard/paymenthistory">
              {/* {user && user.id ? ( */}
              <CustomerPaymenthistory />
              {/* ) : (
                <Login addUserLocal={addUserLocal} />
              )} */}
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
