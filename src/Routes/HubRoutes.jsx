import React from 'react';
import { Switch, Route } from "react-router-dom";
import HubLogin from '../component/HubLogin';
import DeliveryAgents from '../HubPages/DeliveryAgents';
import HubDeliveryOrder from '../HubPages/DeliveryOrder';
import HubDashboard from '../HubPages/HubDashboard';
import HubPickupOrder from '../HubPages/HubPickupOrder';
import { useAuth } from '../Services/auth';
export const HubRoutes = () => {
    const auth = useAuth();
    return (
        <Switch>
            <Route exact path='/hub'>
                <HubLogin />
            </Route>
            {
                auth.isHub() && <>
                    <Route exact path='/hub/dashboard'>
                        <HubDashboard />
                    </Route>
                    <Route exact path='/hub/dashboard/pickuporder'>
                        <HubPickupOrder />
                    </Route>
                    <Route exact path='/hub/dashboard/deliveryorder'>
                        <HubDeliveryOrder />
                    </Route>
                    <Route exact path='/hub/dashboard/deliveryagents'>
                        <DeliveryAgents />
                    </Route>
                </>
            }

        </Switch>
    );
}