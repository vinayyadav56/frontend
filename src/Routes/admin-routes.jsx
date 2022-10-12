import React from 'react';
import { Switch, Route } from "react-router-dom";

import PartnerDashboard from "../partner/PartnerDashboard";
import Partnerlogin from "../partner/Partnerlogin";
import Adminlogin from "../admin/Adminlogin";
import AdminDashboard from "../admin/admindashboard/AdminDashboard";
import Order from "../admin/admindashboard/Order";
import CkOrder from "../admin/admindashboard/CkOrder";
import DeliveryPartnerDetails from "../admin/admindashboard/DeliveryPartnerDetails";
import AdminHub from '../admin/admindashboard/HUB/AdminHub';

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
            <Route exact path="/admindashboardckorder">
                <CkOrder />
            </Route>
            <Route exact path="/admindashboarddeliverypartnerdetails">
                <DeliveryPartnerDetails />
            </Route>
            <Route exact path="/admindashboardhub">
                <AdminHub />
            </Route>
        </Switch>
    );
}
