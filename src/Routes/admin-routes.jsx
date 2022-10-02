import React from 'react';
import { Switch, Route } from "react-router-dom";

import PartnerDashboard from "../partner/PartnerDashboard";
import Partnerlogin from "../partner/Partnerlogin";
import Adminlogin from "../admin/Adminlogin";
import AdminDashboard from "../admin/admindashboard/AdminDashboard";
import Order from "../admin/admindashboard/Order";

export const AdminRoutes = () => {
    return (
        <Switch>
            <Route path="/partner/dashboard">
                <PartnerDashboard />
            </Route>
            <Route path="/partner">
                <Partnerlogin />
            </Route>
            <Route path="/admin">
                <Adminlogin />
            </Route>
            <Route path="/admindashboard">
                <AdminDashboard />
            </Route>
            <Route exact path="/admindashboardorder">
                <Order />
            </Route>
        </Switch>
    );
}
