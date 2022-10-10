import { Box, MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'

const QrScanTrackDetailsForm = ({ props }) => {
  const detailsForm = {
    background: '#fff',
    width: '500px',
    borderRadius: '5px',
    boxShadow: '-4px 1px 29px -5px rgba(0,0,0,0.75)',
    padding: '10px 12px'
  }
  const [ statusType, setStatusType ] = useState({
    value: "Picked"
  })
  
  const userTypeValue = 'Carrier';

  const handleTrackingFormChange = (e) => {
    if (userTypeValue === 'Carrier') {
      setStatusType(e.target.value);
    }
  }
  return (
    <div>
      <Box style={detailsForm}>
        <div>
          <TextField size='small' label="Order ID" variant="outlined" value={props.text} fullWidth margin='normal' />
        </div>
        <div>
          <TextField size='small' label="From" variant="outlined" fullWidth margin='normal' />
        </div>
        <div>
          <TextField size='small' label="To" variant="outlined" fullWidth margin='normal' />
        </div>
        <div>
          <TextField
            id="outlined-select-currency"
            select
            fullWidth
            label="Status"
            margin='normal'
            onChange={handleTrackingFormChange}
            helperText="Please Select Order Status"
          >
            {Object.keys(statusType).map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <br />
        <button type="submit" className="btn btn-primary d-block w-100" >Submit</button>
      </Box>
    </div>
  )
}

export default QrScanTrackDetailsForm