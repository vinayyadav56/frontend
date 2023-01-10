import React from 'react';
import { Switch, Route } from "react-router-dom";

import PartnerDashboard from "../partner/PartnerDashboard";
import AdminDashboard from "../admin/admindashboard/AdminDashboard";
import UserAvailability from "../admin/admindashboard/UserAvailability";
import CkOrder from "../admin/admindashboard/CkOrder";
import DeliveryPartnerDetails from "../admin/admindashboard/DeliveryPartnerDetails";
import AdminHub from '../admin/admindashboard/HUB/AdminHub';
import RecentOrder from '../admin/admindashboard/RecentOrder/RecentOrder';
import PartnerOrderById from '../partner/partnerOrder/PartnerOrderById';
import CkOrderList from '../admin/admindashboard/CkOrderList';
import { useAuth } from '../Services/auth';
import Partnerlogin from "../partner/Partnerlogin";
import Adminlogin from "../admin/Adminlogin";
import ListCompany from '../admin/admindashboard/Company/ListCompany';
export const AdminRoutes = () => {
    const auth = useAuth();
    return (
        <Switch>
            <Route path="/partner" component={Partnerlogin} />
            <Route path="/admin" component={Adminlogin} />
            {
                auth.isPartner() && <>
                    <Route path="/partnerdashboard">
                        <PartnerDashboard />
                    </Route>
                    <Route path="/dashboard/order">
                        <PartnerOrderById />
                    </Route>
                </>
            }
            {
                auth.isAdmin() && <>
                    <Route path="/admindashboard">
                        <AdminDashboard />
                    </Route>
                    <Route exact path="/user-availability">
                        <UserAvailability />
                    </Route>
                    <Route exact path="/all-order">
                        <RecentOrder />
                    </Route>

                    <Route exact path="/ckordercreate">
                        <CkOrder />
                    </Route>
                    <Route exact path="/ckorder">
                        <CkOrderList />
                    </Route>
                    <Route exact path="/delivery/partnerdetails">
                        <DeliveryPartnerDetails />
                    </Route>
                    <Route exact path="/hubOrder">
                        <AdminHub />
                    </Route>
                    <Route exact path="/companyUsers">
                        <ListCompany />
                    </Route>
                </>
            }

        </Switch>
    );
}
