import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import HubHeader from './HubHeader'
import HubSidebar from './HubSidebar'
import agent1 from '../images/delivery.jpg';
import './HubAgent.css';
import AddDeliveryPartner from '../admin/admindashboard/AddDeliveryPartner';
import { makeRequest } from '../Services/api';
import { useAuth } from '../Services/auth';
import { useAlert } from 'react-alert';
const DeliveryAgents = () => {
    let alert = useAlert();
    const { user, setLoading } = useAuth();
    const [addAgent, setAddAgent] = useState([]);
    //  ALL Delivery Agent  LIST START
    const fetchData = async () => {
        setLoading(true);
        const hubId = user.id;
        makeRequest('GET', `deliveryAgentsListByHubId/${hubId}`).then(result => {
            alert.success(result.message);
            setAddAgent(result.data);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
                        {addAgent.map((item, id) => {
                            return (
                                <div className='container-fluid mb-4' key={id}>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 agent_details_col'>
                                            <div className='pt-3'>
                                                <img src={agent1} alt='agent1' />
                                            </div>
                                            <span>
                                                <p>Name : </p>
                                                <p>{item.first_name}</p>
                                            </span>
                                            <span>
                                                <p>DOB : </p>
                                                <p>{item.dob} </p>
                                            </span>
                                        </div>
                                        <div className='col-lg-3 col-md-6 agent_personal_col'>
                                            <h2>Contact Details :</h2>
                                            <span>
                                                <p>Email : </p>
                                                <p> {item.email_id}</p>
                                            </span>
                                            <span>
                                                <p>Phone No : </p>
                                                <p>{item.phone_no}</p>
                                            </span>
                                            <span>
                                                <p>Alternate No : </p>
                                                <p>{item.alter_phone_no}</p>
                                            </span>
                                        </div>
                                        <div className='col-lg-6 col-md-12 agent_verify_col'>
                                            <div className='row'>
                                                <div className='col address_detail_col'>
                                                    <h2>Address Details :</h2>
                                                    <div>
                                                        <span>
                                                            <p>Permanent Address -</p>
                                                            <p>
                                                                {item.permanent_address}
                                                            </p>
                                                        </span>
                                                        <span>
                                                            <p>Current  Address -</p>
                                                            <p>
                                                                {item.current_address}
                                                            </p>
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='row  mt-3'>
                                                <div className='col-md-4 pr-0 '>
                                                    <span><p>Aadhar no:</p><p>{item.aadhar_card_no}</p></span>
                                                    <button className='btn btn_unverify' type='button'>
                                                        Unverified
                                                    </button>
                                                </div>
                                                <div className='col-md-4 col-lg-px-0 '>
                                                    <span><p>License no:</p><p>{item.driving_licence_no}</p></span>
                                                    <button className='btn btn_verify' type='button'>
                                                        Verified
                                                    </button>
                                                </div>
                                                <div className='col-md-4 pr-0 '>
                                                    <span><p>RC no:</p><p>{item.pan_card_no}</p></span>
                                                    <button className='btn btn_unverify' type='button'>
                                                        Unverified
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

export default DeliveryAgents