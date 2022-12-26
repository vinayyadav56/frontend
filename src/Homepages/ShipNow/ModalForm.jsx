import React from 'react'
import ShipingOrder from './ShipingOrder';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};
const ModalForm = () => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <button type="button" className="btn home_shipnow" onClick={handleShow}>
                Ship Now
            </button>

            <Modal show={show} sx={style} centered>
                <Modal.Header style={{padding:"0px", borderBottom:"0px"}}>
                    <button type="button" className="close ml-auto mr-0" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <ShipingOrder />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalForm
