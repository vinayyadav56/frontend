import { Button, FormGroup, TextField, Typography } from '@material-ui/core'
import React from 'react';
import { useState } from 'react';
import validator from "validator";
const Pincode = ({ values, handleFormData, nextStep }) => {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    console.log(submitFormData);

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.pickup_pincode) ||
      validator.isEmpty(values.delivery_pincode)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <FormGroup onSubmit={submitFormData}>
        <p className='package_sub_text'>Enter Pincode To Continue...</p>
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
        {error ? (
          <Typography style={{ color: "red" }}>
            This is a required field
          </Typography>
        ) : (
          ""
        )}
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
        {error ? (
          <Typography style={{ color: "red" }}>
            This is a required field
          </Typography>
        ) : (
          ""
        )}
        <Button
          className="btn next_btn"
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 5 }}
          onClick={nextStep}
        >
          Ship Now
        </Button>
        <p className="ship_text">Get a free pickup from the comfort of your home</p>
      </FormGroup>
    </div>
  )
}

export default Pincode
