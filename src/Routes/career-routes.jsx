import React from 'react';
import { Switch, Route } from "react-router-dom";
import Postavailablity from "../Dashboard/Postavailablity";
import UserProfile from "../Dashboard/UserProfile";
import Paymenthistory from "../Dashboard/Paymenthistory";
import Managereffrals from "../Dashboard/Managereffrals";
import Userdashboard from "../Dashboard/Userdashboard";
import Qrscanner from "../Dashboard/Qrscan";
import CarrierOrder from '../Dashboard/OrderHistory.jsx/CarrierOrder';

export const CareerRoutes = () => {
    return (
        <Switch>
            <Route path="/carrier/postavailabilty">
                    <Postavailablity />
            </Route>
            <Route path="/carrier/profile">
                <UserProfile />
            </Route>
            <Route path="/carrier/paymenthistory">
                <Paymenthistory />
            </Route>
            <Route path="/carrier/managereferals">
                <Managereffrals />
            </Route>
            <Route path="/carrier/qr-scan">
                <Qrscanner />
            </Route>
            <Route path="/carrier/order">
                <CarrierOrder />
            </Route>
            <Route path="/carrier/dashboard">
                <Userdashboard />
            </Route>
        </Switch>
    );
}
