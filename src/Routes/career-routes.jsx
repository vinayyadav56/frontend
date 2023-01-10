import React from 'react';
import { Switch, Route } from "react-router-dom";
import Postavailablity from "../Dashboard/Postavailablity";
import UserProfile from "../Dashboard/UserProfile";
import Paymenthistory from "../Dashboard/Paymenthistory";
import Managereffrals from "../Dashboard/Managereffrals";
import Userdashboard from "../Dashboard/Userdashboard";
import Qrscanner from "../Dashboard/Qrscan";
import CarrierOrder from '../Dashboard/OrderHistory.jsx/CarrierOrder';
import { useAuth } from '../Services/auth';
import CommuterAvailability from '../Dashboard/Commuter/CommuterAvailability';
import CommuterProfile from '../Dashboard/Commuter/CommuterProfile';
import CommuterHistory from '../Dashboard/Commuter/CommuterHistory';
import CommuterOrder from '../Dashboard/Commuter/CommuterOrder';

export const CareerRoutes = () => {
    const auth = useAuth();
    return (
        <Switch>
            {auth.isCarrier() &&
                <>
                    <Route path="/carrier/postavailabilty">
                        <Postavailablity />
                    </Route>
                    <Route path="/carrier/profile">
                        <UserProfile />
                    </Route>
                    <Route path="/carrier/availablehistory">
                        <Paymenthistory />
                    </Route>
                    <Route path="/carrier/managereferrals">
                        <Managereffrals />
                    </Route>
                    <Route path="/carrier/qr-scan">
                        <Qrscanner />
                    </Route>
                    <Route path="/carrier/order">
                        <CarrierOrder />
                    </Route>
                    <Route path="/carrier/dashboard">
                        <Userdashboard />
                    </Route>
                </>
            }
            {auth.isCommuter() && auth.isCarrier() &&
                <>
                    <Route path="/commuter/postavailabilty">
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
    );
}
