import React, { Fragment } from 'react'
import DeliverySidebar from './DeliverySidebar'
import DeliveryHeader from './DeliveryHeader'
const DeliveryDashboard = ({userActive, addUserLocal}) => {
  return (
    <Fragment>
      <section className="user-dashboard">
        <DeliverySidebar userActive={userActive} />
        <section className="main-content">
          <DeliveryHeader addUserLocal={addUserLocal} />
          {/* {console.log("MY USER" + JSON.stringify(userActive))}  */}
        </section>
      </section>
    </Fragment>
  )
}

export default DeliveryDashboard