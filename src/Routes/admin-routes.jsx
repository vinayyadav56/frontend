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
import RecenteOrder from '../admin/admindashboard/RecentOrder/RecentOrder';
import PartnerOrderById from '../partner/partnerOrder/PartnerOrderById';
import CkOrderList from '../admin/admindashboard/CkOrderList';

export const AdminRoutes = () => {
    return (
        <Switch>
            <Route path="/partner/dashboard">
                <PartnerDashboard />
            </Route>
            <Route path="/dashboard/order">
                <PartnerOrderById />
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
            <Route exact path="/admindashboardallorder">
                <RecenteOrder />
            </Route>
            <Route exact path="/admindashboardckordercreate">
                <CkOrder />
            </Route>
            <Route exact path="/admindashboardckorder">
                <CkOrderList />
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
