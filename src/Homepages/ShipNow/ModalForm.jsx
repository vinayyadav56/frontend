import React from 'react'
import {
    Button,
    Modal,
    Box

} from "@material-ui/core";
import ShipingOrder from './ShipingOrder';
const modalStyle = {
    overflowY: 'scroll',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    border: 'none',
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    height: 'unset',
    borderRadius: '4px'
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
                sx={modalStyle}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}>
                    <ShipingOrder modalHandleClode={handleClose} />
                </Box>
            </Modal>
        </div>
    )
}

export default ModalForm
