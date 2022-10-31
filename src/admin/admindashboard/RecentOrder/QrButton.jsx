import React from 'react';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';
import { makeRequest } from '../../../Services/api';
import { useAuth } from '../../../Services/auth';
const QrButton = ({ path, orderid, ordertype, status }) => {
    const { setLoading } = useAuth();
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
            setQrdata(console.log(result))
            history.push("/admindashboardallorder");
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setLoading(false);
        })
    }
    if (status === "ASSIGNED_HUB_TO_PICK" && path === null) {
        return (
        <button type="button" className="btn btn-success" onClick={(orderid, ordertype) => handleGenrateQr((orderid, ordertype))}>
            Generate Qr Code
        </button>
        )
    }
}

export default QrButton