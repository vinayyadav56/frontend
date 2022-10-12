import React from 'react';
import { Switch, Route } from "react-router-dom";
import CustomerDashboard from "../CustomerDashboard/CustomerDashboard";
import CustomerProfile from "../CustomerDashboard/CustomerProfile";
import CustomerTrack from "../CustomerDashboard/CustomerTrack";
import CustomerPaymenthistory from "../CustomerDashboard/CustomerPaymenthistory";

export const CustomerRoutes = () => {
    return (
        <Switch>
            <Route exact path="/customer/dashboard">
                <CustomerDashboard />
            </Route>
            <Route exact path="/customer/dashboard/profile">
                <CustomerProfile />
            </Route>
            <Route exact path="/customer/dashboard/trackhistory">
                <CustomerTrack />
            </Route>
            <Route exact path="/customer/dashboard/paymenthistory">
                <CustomerPaymenthistory />
            </Route>
        </Switch>
    );
}
