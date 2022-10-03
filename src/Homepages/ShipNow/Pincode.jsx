import { Button, FormGroup, TextField } from '@material-ui/core'
import React from 'react';
const Pincode = ({ values, handleFormData, nextStep }) => {
  const submitFormData = (e) => {
    e.preventDefault();
    console.log(submitFormData);

  };
  return (
    <div>
      <FormGroup onSubmit={submitFormData}>
        <p className='package_text'>Enter Pincode </p>
        <TextField
          size="small"
          label="PickUp  Pincode"
          variant="outlined"
          placeholder="Enter Pickup Pincode"
          fullWidth
          margin="normal"
          onChange={handleFormData("pickup_pincode")}
          defaultValue={values.pickup_pincode}
        />
        <TextField
          size="small"
          id="last-name"
          label="Delivery Pincode"
          variant="outlined"
          placeholder="Enter Delivery Pincode"
          fullWidth
          margin="normal"
          onChange={handleFormData("pickup_pincode")}
          defaultValue={values.delivery_pincode}
        />
        <Button
          className=' mt-4 address_btn'
          type="submit"
          onClick={nextStep}
        >
          Ship Now
        </Button>
        <p className="package_waring_text">Get a free pickup from the comfort of your home</p>
      </FormGroup>
    </div>
  )
}

export default Pincode
