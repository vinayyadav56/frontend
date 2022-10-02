import { DatePicker } from '@bcad1591/react-date-picker';
import { Button, FormGroup , Typography } from '@material-ui/core'
import React from 'react';
import { useState } from 'react';
import validator from "validator";

const Schedule = ({ values, handleFormData, nextStep, prevStep }) => {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.schedule_date)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <FormGroup onSubmit={submitFormData}>
      <p className="package_text">Schedule Your Order Pickup Date</p>
        {/* <DatePicker
          size="small"
          label="PickUp  Date"
          variant="standard"
          fullWidth
          disablePast
          margin="normal"
          type="datetime-local"
          onChange={handleFormData("schedule_date")}
          defaultValue={values.schedule_date}
        /> */}
        {error ? (
          <Typography style={{ color: "red" }}>
            This is a required field
          </Typography>
        ) : (
          ""
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', pt: 2, flex: '1 auto' }}>
          <Button
            color="inherit"
            onClick={prevStep}
            type="submit"
          >
            Prev
          </Button>
          <Button
            color="primary"
            onClick={nextStep}
            type="submit"
          >
            Next
          </Button>
        </div>
        <p className="ship_text">Get a free pickup from the comfort of your home</p>
      </FormGroup>
    </div>
  )
}

export default Schedule