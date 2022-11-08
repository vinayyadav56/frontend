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
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '20px',
  pt: 2,
  px: 2,
  pb: 3,
};
export default function CommuterForm() {
  const alert = useAlert();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    alert.success("Thanks for giving interest")
  };
  return (
    <div>
      <button onClick={handleOpen} type="button" className="become-part_btn">Become a Partner</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <div className='d-flex justify-content-between'>
            <h2 id="parent-modal-title" className="text-uppercase" style={{
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: '0px',
              color: '#0747A9'
            }}>Become a partner</h2>
            <span aria-hidden="true" className='popup_close' onClick={handleClose}>&times;</span>
          </div>
          <div id="parent-modal-description">
            <div className="modal-body">
              <form>
                <TextField
                  size="small"
                  name="name"
                  label="Full Name"
                  variant="outlined"
                  placeholder="xyz"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  size="small"
                  name="phone_no"
                  label="Phone"
                  type='number'
                  variant="outlined"
                  placeholder="XXXX-XX-XXXX"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  size="small"
                  name="email_id"
                  label="Email"
                  type="email"
                  variant="outlined"
                  placeholder="xyz@gmail.com"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  size="small"
                  name="email_id"
                  label="Work Status"
                  type="email"
                  variant="outlined"
                  placeholder="Employee"
                  fullWidth
                  required
                  margin="normal"
                />
              </form>
            </div>
          </div>
          <button onClick={handleClose} className='signup-btn'>Submit</button>
        </Box>
      </Modal>
    </div >
  );
}