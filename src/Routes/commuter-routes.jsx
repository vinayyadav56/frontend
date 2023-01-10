import React from 'react'
import { useAuth } from '../Services/auth';
import { Switch, Route } from "react-router-dom";
import CommuterAvailability from '../Dashboard/Commuter/CommuterAvailability';
import CommuterProfile from '../Dashboard/Commuter/CommuterProfile';
import CommuterHistory from '../Dashboard/Commuter/CommuterHistory';
import CommuterOrder from '../Dashboard/Commuter/CommuterOrder';
export const CommuterRoutes = () => {
    const auth = useAuth();
    return (
        <Switch>
            {auth.isCommuter() &&
                <>
                    <Route  path="/commuter/postavailabilty">
                        <CommuterAvailability />
                    </Route>
                    <Route path="/commuter/profile">
                        <CommuterProfile />
                    </Route>
                    <Route path="/commuter/availablehistory">
                        <CommuterHistory />
                    </Route>
                    <Route path="/commuter/order">
                        <CommuterOrder />
                    </Route>
                </>
            }
        </Switch>
    )
}