import React from 'react';
import { Fragment } from 'react';
import QrReader from 'react-qr-scanner'
import QrScanTrackDetailsForm from './QrScanTrackDetailsForm';
class Qrmake extends React.Component {
    state = {
        delay: 100,
        result: "No result"
    };
    handleScan = (data) => {
        if(data){
            this.setState({
                result: data
            });
        }
        
    };

    handleError = (err) => {
        console.error(err);
    };

    render() {
        const camera = {
            height: '90vh',
            width: '100%',
            opacity:'0.8',
            background:'#333',
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center'
        }
        const qrReader = {
            height:'200px',
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
                    <div style={qrReader}>
                    <QrReader
                        delay={this.state.delay}
                        style={previewStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                    </div>
                    <div className='tracking_form'>
                        <QrScanTrackDetailsForm props={this.state.result}/>
                    </div>
                </div>
                <p>{this.state.result.text}</p>
            </Fragment>
        );
    }
}

export default Qrmake