import React from 'react';
import { Switch, Route } from "react-router-dom";

import Signup from "../component/Signup";
import Homepage from "../Homepages/Homepage";
import Services from "../Homepages/Services";
import Forgetpassword from "../component/Forgetpassword";
import Login from "../component/Login";
import About from "../component/About";
import Contact from "../component/Contact";
import Postavailablity from "../Dashboard/Postavailablity";
import UserProfile from "../Dashboard/UserProfile";
import Paymenthistory from "../Dashboard/Paymenthistory";
import Managereffrals from "../Dashboard/Managereffrals";
import Userdashboard from "../Dashboard/Userdashboard";

export const CareerRoutes = () => {
    return (
        <Switch>
            <Route path="/carrier/dashboard/postavailabilty">
                    <Postavailablity />
            </Route>
            <Route path="/carrier/dashboard/profile">
                <UserProfile />
            </Route>
            <Route path="/carrier/dashboard/paymenthistory">
                <Paymenthistory />
            </Route>
            <Route path="/carrier/dashboard/managereferals">
                <Managereffrals />
            </Route>
            <Route path="/carrier/dashboard">
                <Userdashboard />
            </Route>
        </Switch>
    );
}
