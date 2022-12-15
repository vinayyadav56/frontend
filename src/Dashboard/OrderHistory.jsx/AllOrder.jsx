import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { Table } from 'react-bootstrap';
import { makeRequest } from '../../Services/api';
import { useAuth } from '../../Services/auth';

const AllOrder = () => {
    const { user, setLoading } = useAuth();

    const id = user.tokenable_id
    const alert = useAlert();
    const [filterUser, setFilterUser] = useState({});
    const fetchAvailbility = async () => {
        setLoading(true);
        makeRequest('GET', `CarrierAllOrder?carrierId=${id}`).then(result => {
            alert.success(result.message);
            setFilterUser(result.allData);
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
                    {Object.values(filterUser)
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

export default AllOrder