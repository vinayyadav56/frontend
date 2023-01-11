import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../CompanyPartner/Dashboard';
import CompanyLogin from '../CompanyPartner/CompanyLogin';
import Order from '../CompanyPartner/Order';
import { useAuth } from '../Services/auth';
const CompanyRoutes = () => {
    const auth = useAuth();
    return (
        <Switch>
            <Route exact path="/company" >
                <CompanyLogin />
            </Route>
            {
                auth.isCompanyPartner() &&
                <>
                    <Route exact path="/company/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/company/order">
                        <Order />
                    </Route>

                </>
            }

        </Switch>
    )
}

export default CompanyRoutes;