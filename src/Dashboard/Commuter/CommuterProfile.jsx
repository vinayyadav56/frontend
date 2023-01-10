import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import ProfileAllDetails from '../Personalinfo/InfoTabs'
const CommuterProfile = () => {
    return (
        <Fragment>
            <section className="user-dashboard">
                <Sidebar />
                <section className="main-content">
                    <Header />
                    <div className="container-fluid personal-info-form">
                        <ProfileAllDetails />
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

export default CommuterProfile