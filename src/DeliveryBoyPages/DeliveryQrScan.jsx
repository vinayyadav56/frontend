import React from 'react'
import { Fragment } from 'react'
import QrReader from 'react-qr-scanner'
import DeliveryHeader from './DeliveryHeader'
import DeliverySidebar from './DeliverySidebar'
import './DeliveryPartner.css'
// import DeliveryScanDetails from './DeliveryScanDetails'
class DeliveryQrScan extends React.Component {
    state = {
        delay: 100,
        result: "No result"
    };
    handleScan = (data) => {
        if (data) {
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
            height: 'auto',
            width: 'auto',
            opacity: '0.8',
        }
        const qrReader = {
            height: '200px',
            borderRadius: '4px',
            border: '3px solid green'
        }
        const previewStyle = {
            height: '100%',
            width: '100%',

        }
        return (
            <Fragment>
                <section className="user-dashboard">
                    <DeliverySidebar />
                    <section className="main-content">
                        <DeliveryHeader />
                        <div className='qr_scan_section'>
                            <button
                                type="button"
                                className="btn add_partner"
                                data-toggle="modal"
                                data-target="#scanQrDelivery"
                            >

                                Scan Qr
                            </button>
                            <div
                                className="modal fade"
                                id="scanQrDelivery"
                                role="dialog"
                                aria-labelledby="scanQrDeliveryTitle"
                                aria-hidden="true"
                            >
                                <div
                                    className="modal-dialog modal-dialog-centered add-partner"
                                    role="document"
                                >
                                    
                                    <div className="modal-content d-flex justify-content-center">
                                    <div className="modal-header">
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true" className="modal-off">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                        <div style={camera}>
                                            <div style={qrReader}>
                                                <QrReader
                                                    delay={this.state.delay}
                                                    style={previewStyle}
                                                    onError={this.handleError}
                                                    onScan={this.handleScan}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <DeliveryScanDetails props={this.state.result}/> */}
                        </div>
                    </section>
                </section>
            </Fragment>
        )
    }
}

export default DeliveryQrScan