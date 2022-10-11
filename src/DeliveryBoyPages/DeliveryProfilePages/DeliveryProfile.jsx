import React from 'react'
import DeliveryHeader from '../DeliveryHeader'
import DeliverySidebar from '../DeliverySidebar'
import DeliveryAllDetails from './DeliveryInfo';
const DeliveryProfile = ({ userActive, addUserLocal }) => {

    return (
        <div>
            <section className="user-dashboard">
                <DeliverySidebar userActive={userActive} />
                <section className="main-content">
                    <DeliveryHeader addUserLocal={addUserLocal} />
                    <div className="container-fluid personal-info-form px-0">
                       <DeliveryAllDetails/>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default DeliveryProfile