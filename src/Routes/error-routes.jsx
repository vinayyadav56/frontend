import React from 'react';
import { Switch, Route } from "react-router-dom";
import PageNotFound from '../component/ErrorPages/PageNotFound';
export const ErrorRoutes = () => {
    return (
        <Switch>
            <Route path="/partner/dashboard">
                <PageNotFound />
            </Route>
        </Switch>
    );
}