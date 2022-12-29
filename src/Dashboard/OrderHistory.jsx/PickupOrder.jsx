import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Fragment } from 'react'
import { useAlert } from 'react-alert';
import { makeRequest } from '../../Services/api';
import { useAuth } from '../../Services/auth';

const PickupOrder = () => {
    const { setLoading, user } = useAuth();
    const alert = useAlert();
    const [pickupOrder, setPickupOrder] = useState([]);
    const fetchAvailbility = async () => {
        const carrierId = user.id
        setLoading(true);
        makeRequest('GET', `CarrierPickupOrder/${carrierId}`).then(result => {
            alert.success(result.message);
            setPickupOrder(result.pickupData);
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })

    }
    useEffect(() => {
        fetchAvailbility();
        // eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <div className="table-responsive h-auto">
                <table className="table table-hover table table-bordered">
                    <thead className="table-primary">
                        <tr>
                            <th>Id</th>
                            <th>ALPHA ORDER ID</th>
                            <th>REMARKS</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.values(pickupOrder)
                                // eslint-disable-next-line
                                .map((row, id) => {
                                    return (
                                        <tr key={id}>
                                            <td className="pt-3 pb-3">{row.id}</td>
                                            <td className="pt-3 pb-3">{row.alpha_order_id}</td>
                                            <td className="pt-3 pb-3">{row.remarks}</td>
                                            <td className="pt-3 pb-3">{row.status}</td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>

            </div>
        </Fragment>
    )
}

export default PickupOrder