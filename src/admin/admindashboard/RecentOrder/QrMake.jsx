import React from 'react';
import config from '../../../config.json';
const QrMake = ({ path, status }) => {
    if (status === "ASSIGNED_HUB_TO_PICK" && path) {
        return <img style={{ width: '80px', height: '80px' }} src={`${config.BASE_URL}${path}`} alt="qrcode" />
    } 
}
export default QrMake;