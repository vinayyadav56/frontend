import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import OrderTabs from '../OrderHistory.jsx/OrderTabs'
const CommuterOrder = () => {
    return (
        <Fragment>
            <section className="user-dashboard">
                <Sidebar />
                <section className="main-content">
                    <Header />
                    <div className="container-fluid personal-info-form">
                        <OrderTabs />
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

export default CommuterOrder