import React from 'react'
import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import Qrmake from './Qrmake';

const Qrscanner = () => {
    return (
        <div>
            <section className="user-dashboard">
                <Sidebar />
                <section className="main-content">
                    <Header />
                    <div className='container-fluid'>
                        <Qrmake />
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Qrscanner
