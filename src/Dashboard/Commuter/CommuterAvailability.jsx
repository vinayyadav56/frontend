import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import CommuterTabs from '../DailyCommuter/CommuterAvailability'
const CommuterAvailability = () => {
  return (
    <Fragment>
      <section className="user-dashboard">
        <Sidebar />
        <section className="main-content">
          <Header />
          <div className="mt-5 trip_form">
            <CommuterTabs />
          </div>
        </section>
      </section>
    </Fragment>
  )
}

export default CommuterAvailability