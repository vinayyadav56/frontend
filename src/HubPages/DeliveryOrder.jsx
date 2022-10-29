import React from 'react'
import { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../Services/auth'
import DeliveryOrderTabs from './DeliveryOrder/OrderTabs'
import HubHeader from './HubHeader'
import HubSidebar from './HubSidebar'

const HubDeliveryOrder = () => {
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
                    <DeliveryOrderTabs />
                </section>
            </section>
        </Fragment>
    )
}

export default HubDeliveryOrder