import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { makeRequest } from '../../Services/api';
import { useAuth } from '../../Services/auth';

const AllOrder = () => {
    const { user, setLoading } = useAuth();

    const id = user.id
    const alert = useAlert();
    const [filterUser, setFilterUser] = useState({});
    const fetchAvailbility = async () => {
        setLoading(true);
        makeRequest('GET', `CarrierAllOrder/${id}`).then(result => {
            // alert.success(result.message);
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
            <div className="table-responsive h-auto">
                <table className="table table-hover table table-bordered">
                    <thead className="table-primary">
                        <tr>
                            <th>Id</th>
                            <th>ALPHA ORDER ID</th>
                            <th>REMARKS</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.values(filterUser)
                                // eslint-disable-next-line
                                .map((row, id) => {
                                    return (
                                        <tr key={id}>
                                            <td className="pt-3 pb-3">{row.id}</td>
                                            <td className="pt-3 pb-3">{row.alpha_order_id}</td>
                                            <td className="pt-3 pb-3">{row.remarks}</td>
                                            <td className="pt-3 pb-3">{row.status}</td>
                                            <td className="pt-3 pb-3">
                                                <button type="button" className="btn btn-success">Accept</button>
                                                <button type="button" className="btn btn-danger ml-2">Reject</button>
                                            </td>
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

export default AllOrder