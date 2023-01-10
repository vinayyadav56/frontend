import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../CompanyPartner/Dashboard';
import CompanyLogin from '../CompanyPartner/CompanyLogin';
import Order from '../CompanyPartner/Order';
const CompanyRoutes = () => {
    return (
        <Switch>
            <>
                <Route exact path="/company/dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/company/order">
                    <Order />
                </Route>
                <Route exact path="/company" >
                    <CompanyLogin />
                </Route>
            </>

        </Switch>
    )
}

export default CompanyRoutes;