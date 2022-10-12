import React from 'react';
import { Switch, Route } from "react-router-dom";
import DeliveryAgents from '../HubPages/DeliveryAgents';
import HubDashboard from '../HubPages/HubDashboard';
import HubPickupOrder from '../HubPages/HubPickupOrder';
export const HubRoutes = () => {
    return (
        <Switch>
            <Route exact path='/hub/dashboard'>
                <HubDashboard />
            </Route>
            <Route exact path='/hub/dashboard/pickuporder'>
                <HubPickupOrder />
            </Route>
            <Route exact path='/hub/dashboard/deliveryorder'>
                <HubPickupOrder />
            </Route>
            <Route exact path='/hub/dashboard/deliveryagents'>
                <DeliveryAgents />
            </Route>
        </Switch>
    );
}