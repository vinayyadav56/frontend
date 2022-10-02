import { RadioGroup, FormControlLabel, Radio, TextField, Button, FormGroup, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import validator from 'validator';
const DeliveryOrder = ({ values, handleFormData, nextStep, prevStep }) => {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.category) ||
      validator.isEmpty(values.sub_category) ||
      validator.isEmpty(values.package_size)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <FormGroup onSubmit={submitFormData}>
        <p className="package_sub_text">Choose Package Size</p>
        <RadioGroup
          row
          horizontal
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Extra Small"
          className="justify-content-between mt-2"
          name="row-radio-buttons-group"
        >
          <FormControlLabel defaultValue={values.package_size} control={<Radio />} onChange={handleFormData("package_size")} label="Extra Small" />
          <FormControlLabel control={<Radio />} label="Small" />
          <FormControlLabel control={<Radio />} label="Medium" />
          <FormControlLabel control={<Radio />} label="Large" />
          {error ? (
            <Typography style={{ color: "red" }}>
              This is a required field
            </Typography>
          ) : (
            ""
          )}
        </RadioGroup>
        <p className="package_sub_text">Package Details</p>
        <TextField
          size="small"
          id="category"
          label="Category"
          variant="outlined"
          placeholder="Enter Category"
          fullWidth
          margin="normal"
          defaultValue={values.category}
          onChange={handleFormData("category")}
        />
        {error ? (
          <Typography style={{ color: "red" }}>
            This is a required field
          </Typography>
        ) : (
          ""
        )}
        <p className="package_sub_text mt-2">Sub Category</p>
        <TextField
          size="small"
          id="category"
          label="Sub Category"
          variant="outlined"
          placeholder="Enter Sub Category"
          fullWidth
          margin="normal"
          defaultValue={values.sub_category}
          onChange={handleFormData("sub_category")}
        />
        {error ? (
          <Typography style={{ color: "red" }}>
            This is a required field
          </Typography>
        ) : (
          ""
        )}
        <TextField
          className=" mt-4 mb-4"
          size="small"
          id="standard-helperText"
          label="Package Value"
          placeholder="Enter Package Value"
          margin="normal"
          onChange={handleFormData("package_value")}
          variant="outlined"
          defaultValue={values.package_value}
        />
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
      </FormGroup>
    </div>
  )
}

export default DeliveryOrder