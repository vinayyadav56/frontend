import React from 'react';
import { Fragment } from 'react';
import QrReader from 'react-qr-scanner'
import QrScanTrackDetailsForm from './QrScanTrackDetailsForm';
import {useAlert} from "react-alert";

class Qrmake extends React.Component {

    state = {
        delay: 100,
        result: "No result",
        showQr: true,
        showForm: false
    };

    handleScan = (data) => {

        if(data){
            this.setState({
                result: data,
                showQr: false,
                showForm: true
            });
        }

    };

    handleError = (err) => {
        alert = useAlert();
        alert.error(err);
    };

    render() {
        const camera = {
            height: '85vh',
            width: '100%',
            opacity:'0.8',
            background:'#e1e1e1',
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center'
        }
        const qrReader = {
            width:'300px',
            borderRadius:'2px',
            border:'3px solid #75bf8e'
        }
        const previewStyle = {
            height:'100%',
            width:'100%',

        }
        return (
            <Fragment>
                <div style={camera}>
                    {this.state.showQr && <div style={qrReader}>
                        <QrReader
                            delay={this.state.delay}
                            style={previewStyle}
                            onError={this.handleError}
                            onScan={this.handleScan}
                        />
                    </div>}

                    {this.state.showForm && <div className='tracking_form text-center'>
                        <QrScanTrackDetailsForm props={this.state.result}/>
                        <button class="btn btn-lg btn-info mt-4" onClick={() => this.setState({
                            result: '',
                            showQr: true,
                            showForm: false
                        })}>
                            Rescan
                        </button>
                    </div>}
                </div>
            </Fragment>
        );
    }
}

export default Qrmake
