import React from 'react';
import config from '../../../config.json';
const QrMake = ({ path }) => {
    if (path){
        return <img style={{ width: '80px', height: '80px' }} src={`${config.BASE_URL}${path}`} alt="qrcode" />
    }
}
export default QrMake;
