import React from 'react';
import { Switch, Route } from "react-router-dom";

import Postavailablity from "../Dashboard/Postavailablity";
import UserProfile from "../Dashboard/UserProfile";
import Paymenthistory from "../Dashboard/Paymenthistory";
import Managereffrals from "../Dashboard/Managereffrals";
import Userdashboard from "../Dashboard/Userdashboard";
import Qrscanner from "../Dashboard/Qrscan";

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
            <Route path="/carrier/dashboard/qr-scan">
                <Qrscanner />
            </Route>
            <Route path="/carrier/dashboard">
                <Userdashboard />
            </Route>
        </Switch>
    );
}
