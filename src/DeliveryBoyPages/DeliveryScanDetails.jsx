import { Box, TextField } from '@material-ui/core';
import React from 'react'
import { Fragment } from 'react';

const DeliveryScanDetails = ({ props }) => {
    const detailsForm = {
        background: '#fff',
        width: '500px',
        borderRadius: '5px',
        boxShadow: '-4px 1px 29px -5px rgba(0,0,0,0.75)',
        padding: '10px 12px'
}
    return (
        <Fragment>
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
                <br />
                <button type="submit" className="btn btn-primary d-block w-100" >Submit</button>
            </Box>
        </Fragment>
    )
}

export default DeliveryScanDetails