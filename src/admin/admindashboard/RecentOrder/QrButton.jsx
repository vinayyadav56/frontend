import React from 'react';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import { makeRequest } from '../../../Services/api';
import { useAuth } from '../../../Services/auth';
const QrButton = ({ path, orderid, ordertype, updateOrder, status }) => {
    const { loading, setLoading } = useAuth();
    const history = useHistory();
    const alert = useAlert();
    const [qrdata, setQrdata] = useState({
        order_id: orderid,
        order_type: ordertype
    })
    const handleGenrateQr = async () => {
        setLoading(true);
        makeRequest('POST', `generateQrCode`, qrdata).then(result => {
            alert.success(result.message);
            result.success && updateOrder();
            // setQrdata(console.log(result))
            // history.push("/admin/all-order");
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    }
    if (path === null) {
        return (
        <button type="button" className="btn btn-success mr-2 " onClick={(orderid, ordertype) => handleGenrateQr((orderid, ordertype))} disabled={loading}>
            Generate Qr Code
        </button>
        )
    }
}

export default QrButton
