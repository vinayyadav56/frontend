import React, {useState} from 'react'
import { Fragment } from 'react'
import QrReader from 'react-qr-scanner'
import './DeliveryPartner.css'
import './QrScanner.css';
import {Button, Modal} from "react-bootstrap";
import {Box, MenuItem, TextField} from '@material-ui/core';
import {useAlert} from "react-alert";
import {useAuth} from "../Services/auth";
import {makeRequest} from "../Services/api";

const PickupQrScan = (props) => {
    const [state, setState] = useState({
        delay: 100,
        result: null,
        showModal: false,
        error: null,
        status: '',
        remark: '',
        isLoading: false
    });

    const alert = useAlert();
    const auth = useAuth();

    const handleScan = (data) => {
        if (data) {
            try {
                const text = JSON.parse(data.text);

                if(!text.carrykar_qr){
                    setState({
                        ...state,
                        error: "Invalid QR Code. Please try with a valid QR"
                    })
                }else{
                    setState({
                        ...state,
                        result: data
                    });

                    // if(props.orderDetails.order_id == text.order_id && props.orderDetails.order_type == text.order_type){
                    //     setState({
                    //         ...state,
                    //         result: data
                    //     });
                    // }else{
                    //     setState({
                    //         ...state,
                    //         error: "Invalid Order. Please try with a valid Order"
                    //     })
                    // }

                }
            }catch (err){
                setState({
                    ...state,
                    error: "Invalid QR Code. Please try with a valid QR"
                })
            }


        }

    };

    const handleError = (err) => {
        console.error(err);
    };

    const handleOpen = () => {
        setState({
            ...state,
            showModal: true
        })
    }

    const handleClose = () => {
        console.log("close");
        setState({
            ...state,
            showModal: false
        })
    }

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("btn clicked");

        setState({
            ...state, isLoading: true
        });

        makeRequest('PATCH', `orders/agent/pickup`, {
            id: props.orderDetails.id,
            status: state.status,
            remark: state.remark
        }).then(result => {
            if(result.success){
                alert.success(result.message)
                handleClose()
                props.fetchOrders();
            }else{
                alert.error(result.message);
            }
        }).catch(err => {
            alert.error(err.message);
        }).finally(() => {
            setState({
                ...state, isLoading: false
            });
        })
    }

    return (
            <Fragment>
                <div className='qr_scan_section'>
                    <Button onClick={handleOpen}>Scan QR</Button>

                    <Modal
                        show={state.showModal}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>QR Code Scanner</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-fex justify-content-center">
                                {!state.result &&
                                    <div className="text-center font-weight-bold">
                                        <div className="qr-box">
                                            <QrReader
                                                delay={state.delay}
                                                onError={handleError}
                                                onScan={handleScan}
                                            />
                                        </div>
                                        <span className="text-danger">{state.error}</span>
                                    </div>
                                }

                                { state.result && <form onSubmit={handleFormSubmit}>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        fullWidth
                                        label="Status"
                                        margin='normal'
                                        variant="outlined"
                                        helperText="Please Select Order Status"
                                        required
                                        name="status"
                                        onChange={handleInput}
                                        value={state.status}
                                    >
                                        <MenuItem key="PICKED_UP" value="ORDER_PICKED">
                                            ORDER PICKED
                                        </MenuItem>
                                    </TextField>
                                    <TextField
                                        label="Remark"
                                        variant="outlined"
                                        fullWidth
                                        margin='normal'
                                        name="remark"
                                        required
                                        value={state.remark}
                                        onChange={handleInput}/>

                                    <button type="submit" className="btn btn-primary d-block w-100"  disabled={state.isLoading}>Submit</button>
                                </form>
                                }
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} >
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Fragment>
        )
}

export default PickupQrScan
