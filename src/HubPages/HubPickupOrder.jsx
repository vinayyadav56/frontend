import React from 'react'
import { Fragment } from 'react'
import HubHeader from './HubHeader'
import HubSidebar from './HubSidebar'
import HubOrderDetails from './PickupOrder/Order'

const HubPickupOrder = () => {
    return (
        <Fragment>
            <section className="user-dashboard">
                <HubSidebar />
                <section className="main-content">
                    <HubHeader />
                    <HubOrderDetails />
                </section>
            </section>
        </Fragment>
    )
}

export default HubPickupOrder