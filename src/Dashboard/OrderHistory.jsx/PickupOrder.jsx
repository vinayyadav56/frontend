import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Fragment } from 'react'
import { useAlert } from 'react-alert';
import { Table } from 'react-bootstrap'
import { makeRequest } from '../../Services/api';
import { useAuth } from '../../Services/auth';

const PickupOrder = () => {
    const { setLoading , user} = useAuth();
    const alert = useAlert();
    const [pickupOrder, setPickupOrder] = useState({});
    const fetchAvailbility = async () => {
        const id = user.tokenable_id
        setLoading(true);
        makeRequest('GET', `CarrierPickupOrder/${id}`).then(result => {
            alert.success(result.message);
            setPickupOrder(result.pickupOrder);
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
            <Table responsive="md" striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Alpha Order Id</th>
                        <th>Remarks</th>
                        <th>Assigned By</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {pickupOrder
                        // eslint-disable-next-line
                        .map((row, id) => {
                            return (
                                <tr key={id}>
                                    <td>{row.id}</td>
                                    <td>{row.alpha_order_id}</td>
                                    <td>{row.alpha_order_id}</td>
                                    <td>{row.alpha_order_id}</td>
                                    <td>{row.alpha_order_id}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>

        </Fragment>
    )
}

export default PickupOrder