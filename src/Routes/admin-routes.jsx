import React from 'react';
import { Switch, Route } from "react-router-dom";

import PartnerDashboard from "../partner/PartnerDashboard";
import Partnerlogin from "../partner/Partnerlogin";
import Adminlogin from "../admin/Adminlogin";
import AdminDashboard from "../admin/admindashboard/AdminDashboard";
import UserAvailability from "../admin/admindashboard/UserAvailability";
import CkOrder from "../admin/admindashboard/CkOrder";
import DeliveryPartnerDetails from "../admin/admindashboard/DeliveryPartnerDetails";
import AdminHub from '../admin/admindashboard/HUB/AdminHub';
import RecentOrder from '../admin/admindashboard/RecentOrder/RecentOrder';
import PartnerOrderById from '../partner/partnerOrder/PartnerOrderById';
import CkOrderList from '../admin/admindashboard/CkOrderList';
import { useAuth } from '../Services/auth';

export const AdminRoutes = () => {
    const auth = useAuth();
    return (
        <Switch>
            <Route path="/partner">
                <Partnerlogin />
            </Route>
            <Route exact path="/admin">
                <Adminlogin />
            </Route>
            <Route path="/partner/dashboard">
                <PartnerDashboard />
            </Route>
            <Route path="/dashboard/order">
                <PartnerOrderById />
            </Route>
            {
                auth.isAdmin() && <>
                    <Route path="/admindashboard">
                        <AdminDashboard />
                    </Route>
                    <Route exact path="/admin/user-availability">
                        <UserAvailability />
                    </Route>
                    <Route exact path="/admin/all-order">
                        <RecentOrder />
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
                </>
            }


        </Switch>
    );
}
