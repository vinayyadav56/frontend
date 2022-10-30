import React from 'react'
import { Fragment } from 'react'
import DeliveryOrderTabs from './DeliveryOrder/OrderTabs'
import HubHeader from './HubHeader'
import HubSidebar from './HubSidebar'

const HubDeliveryOrder = () => {
   
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