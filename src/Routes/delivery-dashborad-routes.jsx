import React from 'react';
import { Switch, Route } from "react-router-dom";
import DeliveryDashboard from "../DeliveryBoyPages/DeliveryDashboard";
import DeliveryProfile from "../DeliveryBoyPages/DeliveryProfilePages/DeliveryProfile";
import PickupOrder from "../DeliveryBoyPages/PickupOrder";
import DeliveryOrder from "../DeliveryBoyPages/DeliveryOrder";

export const DeliveryDashboardRoutes = () => {
    return (
        <Switch>
            <Route exact path="/delivery/dashboard">
                <DeliveryDashboard />
            </Route>
            <Route exact path='/delivery/dashboard/profile'>
                <DeliveryProfile />
            </Route>
            <Route exact path='/delivery/dashboard/pickuporders'>
                <PickupOrder />
            </Route>
            <Route exact path='/delivery/dashboard/deliveryorder'>
                <DeliveryOrder />
            </Route>
            <Route exact path='/delivery/dashboard/paymenthistory'>
                <DeliveryProfile />
            </Route>
        </Switch>
    )
}
