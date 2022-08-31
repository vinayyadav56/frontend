import React, { useEffect, useState } from "react";
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
const App = () => {
  const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT,
  };

  const [user, setLoginUser] = useState({});

  // GET USER FROM LOCAL STORAGE
  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("myUser")));
  }, []);

  // ADD USER IN LOCAL STORAGE
  const addUserLocal = (user) => {
    localStorage.setItem("myUser", JSON.stringify(user));
    setLoginUser(user);
  };

  return (
    <>
      <Provider template={AlertTemplate} {...options}>
        <Router>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={Homepage} />
            <Route path="/forgetpassword" component={Forgetpassword} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/partner/dashboard" component={PartnerDashboard} />
            <Route path="/partner" component={Partnerlogin} />
            <Route path="/admin" component={Adminlogin} />
            <Route path="/admindashboard" component={AdminDashboard} />
            <Route path="/carrier/dashboard/profile" >
              <UserProfile  />
            </Route>
            <Route
              path="/carrier/dashboard/paymenthistory"
              component={Paymenthistory}
            />
            <Route
              path="/carrier/dashboard/managereferals"
              component={Managereffrals}
            />
            <Route path="/carrier/dashboard" >
              <Userdashboard  user={user} addUserLocal={addUserLocal} />
            </Route>
            <Route path="/customer/dashboard" component={CustomerDashboard} />
            <Route
              path="/customer/dashboard/profile"
              component={CustomerProfile}
            />
            <Route
              path="/customer/dashboard/trackhistory"
              component={CustomerTrack}
            />
            <Route
              path="/customer/dashboard/paymenthistory"
              component={CustomerPaymenthistory}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
