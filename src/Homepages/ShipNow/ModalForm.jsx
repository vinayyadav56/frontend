import React from 'react'
import {
    Button,
    // Stepper,
    // Step,
    // StepLabel,
    Modal,
    Box

} from "@material-ui/core";
// import { useState } from 'react';
import ShipingOrder from './ShipingOrder';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ModalForm = (label) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const [activeStep] = useState(0);
    // const steps = [
    //     "PinCode",
    //     "Address",
    //     "Package",
    //     "Schedule Pickup",
    // ];
    return (
        <div>
            <Button onClick={handleOpen} className="home_shipnow">Ship Now</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}
                    style={{ width: '400px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', minHeight: '300px', borderRadius: '4px', border: 'none' }}>
                    {/* <Stepper alternativeLabel activeStep={activeStep}>
                        {steps.map((label) => {
                            // const labelProps = {};
                            // const stepProps = {};
                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper> */}

                
                        <ShipingOrder />

                    

                </Box>
            </Modal>
        </div>
    )
}

export default ModalForm