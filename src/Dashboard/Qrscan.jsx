import React from 'react'
import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import Qrmake from './Qrmake';
const Qrscanner = ({ addUserLocal, userActive }) => {
    return (
        <div>
            <section className="user-dashboard">
                <Sidebar userActive={userActive} />
                <section className="main-content">
                    <Header addUserLocal={addUserLocal} />
                    <div className='container-fluid'>
                        <Qrmake />
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Qrscanner