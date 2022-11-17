import React from 'react';
import { Switch, Route } from "react-router-dom";

import Signup from "../component/Signup";
import Homepage from "../Homepages/Homepage";
import Services from "../Homepages/Services";
import Forgetpassword from "../component/Forgetpassword";
import Login from "../component/Login";
import About from "../component/About";

export const HomeRoutes = () => {
    return (
        <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route path="/services" component={Services} />
            <Route exact path="/" component={Homepage} />
            <Route path="/forgetpassword" component={Forgetpassword} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
        </Switch>
    );
}
