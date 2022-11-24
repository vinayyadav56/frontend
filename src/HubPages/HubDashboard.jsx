import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom';
import { useAuth } from '../Services/auth';
import HubHeader from './HubHeader';
import HubSidebar from './HubSidebar';
const HubDashboard = () => {
    const auth = useAuth();
    if (!auth.isHub()) {
      return <Redirect to="/hub" />
    }
    return (
        <Fragment>
            <section className="user-dashboard">
               <HubSidebar />
                <section className="main-content">
                    <HubHeader />
                </section>
            </section>
        </Fragment>
    )
}

export default HubDashboard