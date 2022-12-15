import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useAlert } from 'react-alert';
import { TextField } from '@material-ui/core';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 340,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '20px',
    pt: 2,
    px: 2,
    pb: 3,
};
export default function ContactUsForm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const alert = useAlert();
    const handleClose = () => {
        setOpen(false);
        alert.success("We will contact Us you soon");
    };
    return (
        <React.Fragment>
            <button onClick={handleOpen} type="button" className="contact_footer">Contact Us</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 340 }}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2 id="parent-modal-title" style={{
                            fontWeight: 'bold',
                            fontSize: '18px',
                            marginBottom: '0px',
                            color: '#0747A9'
                        }}>Please fill the query form</h2>
                        <span aria-hidden="true" className='popup_close' onClick={handleClose}>&times;</span>
                    </div>

                    <div id="parent-modal-description">
                        <div className="modal-body p-0">
                            <form>
                                <TextField
                                    size="small"
                                    name="name"
                                    label="Full Name"
                                    variant="outlined"
                                    placeholder="Enter Name"
                                    fullWidth
                                    required
                                    margin="dense"
                                />
                                <TextField
                                    size="small"
                                    name="phone_no"
                                    label="Phone"
                                    type='number'
                                    variant="outlined"
                                    placeholder="Enter Phone Number"
                                    fullWidth
                                    required
                                    margin="dense"
                                />
                                <TextField
                                    size="small"
                                    name="email_id"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    placeholder="Enter Email"
                                    fullWidth
                                    required
                                    margin="dense"
                                />
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="How Can We Help You" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button onClick={handleClose} className='signup-btn'>Submit Query</button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}


