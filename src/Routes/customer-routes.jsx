import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import CustomerDashboard from "../CustomerDashboard/CustomerDashboard";
import CustomerProfile from "../CustomerDashboard/CustomerProfile";
import CustomerTrack from "../CustomerDashboard/CustomerTrack";
import CustomerPaymenthistory from "../CustomerDashboard/CustomerPaymenthistory";
import { useAuth } from '../Services/auth';

export const CustomerRoutes = () => {
    const auth = useAuth();
    return (
        <Switch>
            {auth.isUser() && <>
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
            </>}
            <Redirect to="/" />
        </Switch>


    );
}
