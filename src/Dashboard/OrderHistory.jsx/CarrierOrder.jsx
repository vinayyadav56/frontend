import React from 'react'
import Header from '../Dashboardheader'
import Sidebar from '../Dashboardsidebar'
import OrderTabs from './OrderTabs'

const CarrierOrder = () => {
    return (
        <div>
            <section className="user-dashboard">
                <Sidebar />
                <section className="main-content">
                    <Header />
                    <div className="container-fluid personal-info-form">
                        <OrderTabs />
                    </div>
                </section>
            </section>
        </div>
    )
}

export default CarrierOrder