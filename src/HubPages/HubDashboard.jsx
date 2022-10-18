import React, { Fragment } from 'react'
import HubHeader from './HubHeader';
import HubSidebar from './HubSidebar';
const HubDashboard = () => {
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