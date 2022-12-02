import React from 'react'
import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import Qrmake from './Qrmake';
// import { useAuth } from '../Services/auth';
// import { Redirect } from 'react-router-dom';

const Qrscanner = () => {
//     const auth = useAuth();
//   if (!auth.isAuthenticated()) {
//     return <Redirect to="/login" />
//   }
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
