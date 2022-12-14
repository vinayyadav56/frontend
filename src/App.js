import React from "react";
import "./App.css";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter as Router} from "react-router-dom";
import { useAuth } from './Services/auth';
import {AdminRoutes, CareerRoutes, CustomerRoutes, HomeRoutes} from './Routes';
import {Loader} from "./component/Loader";
import {DeliveryDashboardRoutes} from "./Routes/delivery-dashborad-routes";
import { HubRoutes } from "./Routes/HubRoutes";
const App = () => {
  const auth = useAuth();
  const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT,
  };

  return (
        <Provider template={AlertTemplate} {...options}>
          { auth.loading && <Loader />}
          <Router>
            <HomeRoutes />
            <AdminRoutes />
            <CustomerRoutes />
            <CareerRoutes />
            <DeliveryDashboardRoutes />
            <HubRoutes />

            {/* <Redirect to="/" /> */}
          </Router>
        </Provider>
  );
};

export default App;
