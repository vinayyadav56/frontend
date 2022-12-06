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
            {/* <button type="button" className="btn home_shipnow" onClick={handleOpen}>Ship Now</button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <button type="button" className="close ml-auto mr-3" onClose={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <ShipingOrder />
                </Box>
            </Modal> */}
            {/* <button type="button" className="btn home_shipnow" data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                Ship Now
            </button>
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                    <div className="modal-content">
                        <button type="button" className="close ml-auto mr-3" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body">
                            <ShipingOrder />
                        </div>
                    </div>
                </div>
            </div> */}
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
