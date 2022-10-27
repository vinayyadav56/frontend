import React from 'react'
import { Fragment } from 'react'
import HubHeader from './HubHeader'
import HubSidebar from './HubSidebar'
import agent1 from '../images/expressimg.png';
import './HubAgent.css';
import AddDeliveryPartner from '../admin/admindashboard/AddDeliveryPartner';
const DeliveryAgents = () => {
    return (
        <Fragment>
            <section className="user-dashboard">
                <HubSidebar />
                <section className="main-content">
                    <HubHeader />
                    <div className='d-flex justify-content-end mt-4'>
                        <AddDeliveryPartner />
                    </div>
                    <div className='agent_details'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6 agent_details_col'>
                                    <img src={agent1} alt='agent1' />
                                    <span>
                                        <p>Name : </p>
                                        <p> Rahul</p>
                                    </span>
                                    <span>
                                        <p>DOB : </p>
                                        <p> 04-06-2001</p>
                                    </span>
                                </div>
                                <div className='col-lg-3 col-md-6 agent_personal_col'>
                                    <h2>Contact Details :</h2>
                                    <span>
                                        <p>Email : </p>
                                        <p> rahul@gmail.com</p>
                                    </span>
                                    <span>
                                        <p>Phone No : </p>
                                        <p>9804062001</p>
                                    </span>
                                    <span>
                                        <p>Alternate No : </p>
                                        <p>9804062001</p>
                                    </span>
                                </div>
                                <div className='col-lg-6 col-md-12 agent_verify_col'>
                                    <div className='row'>
                                        <div className='col-md-4 pr-0 '>
                                            <span><p>Aadhar no:</p><p>375791818496</p></span>
                                            <button className='btn btn_unverify' type='button'>
                                                Unverified
                                            </button>
                                        </div>
                                        <div className='col-md-4 col-lg-px-0 '>
                                            <span><p>License no:</p><p>3757918186</p></span>
                                            <button className='btn btn_verify' type='button'>
                                                Verified
                                            </button>
                                        </div>
                                        <div className='col-md-4 pr-0 '>
                                            <span><p>RC no:</p><p>31818496</p></span>
                                            <button className='btn btn_unverify' type='button'>
                                                Unverified
                                            </button>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col address_detail_col'>
                                            <h2>Address Details :</h2>
                                            <div>
                                                <span>
                                                    <p>Permanent Address -</p>
                                                    <p>
                                                        87, Block A, Mayur Vihar Extension,122192, Delhi, New-Delhi
                                                    </p>
                                                </span>
                                                <span>
                                                    <p>Current  Address -</p>
                                                    <p>
                                                        87, Block A, Mayur Vihar Extension,122192, Delhi, New-Delhi
                                                    </p>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

export default DeliveryAgents