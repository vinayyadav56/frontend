import React from 'react';
import {
  TextField,
  Button,
  FormGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

const DeliveryOrder = ({ values, handleFormData, nextStep, prevStep }) => {
  // const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2

  };
  return (
    <div>
      <FormGroup onSubmit={submitFormData}>
        <p className="package_text">Choose Package Size</p>
        <div className="btn-group-toggle my-4 d-flex" data-toggle="buttons">
          <label className="btn ship_select_btns">
            <input
              type="radio"
              name="searchType"
              defaultValue={values.package_size}
              id="option1"
              onChange={handleFormData("package_size")}
            />
            Extra Small
          </label>
          <label className="btn ship_select_btns">
            <input
              type="radio"
              name="searchType"
              defaultValue={values.package_size}
              id="option2"
              onChange={handleFormData("package_size")}
            />
            Small
          </label>
          <label className="btn ship_select_btns">
            <input
              type="radio"
              name="searchType"
              defaultValue={values.package_size}
              id="option1"
              onChange={handleFormData("package_size")}
            />
            Medium
          </label>
          <label className="btn ship_select_btns">
            <input
              type="radio"
              name="searchType"
              defaultValue={values.package_size}
              id="option2"
              onChange={handleFormData("package_size")}
            />
            Large
          </label>
        </div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" variant="outlined">
          <InputLabel id="delivery-type">Delivery Type</InputLabel>
          <Select
            labelId="delivery-type"
            id="delivery-type"
            label='Delivery Type'
            value={values.delivery_type}
            onChange={handleFormData("delivery_type")}
          >
            <MenuItem value='express'>Express Delivery</MenuItem>
            <MenuItem value='premium'>Premium Delivery</MenuItem>
          </Select>
        </FormControl>
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
        <TextField
          className=" mt-4 mb-4"
          size="small"
          id="standard-helperText"
          label="Package Value"
          placeholder="Enter Package Value"
          margin="normal"
          onChange={handleFormData("delivery_cost")}
          variant="outlined"
          defaultValue={values.delivery_cost}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', pt: 2, marginTop: 2, flex: '1 auto' }}>
          <Button
            onClick={prevStep}
            type="submit"
            className='address_btn'

          >
            Prev
          </Button>
          <Button
            type="submit"
            sx={{ mt: 5 }}
            className='address_btn'
            onClick={nextStep}
          >
            Next
          </Button>
        </div>
      </FormGroup>
    </div>
  )
}

export default DeliveryOrder