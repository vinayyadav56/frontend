import React from 'react';
import { Button, FormGroup, TextField} from '@material-ui/core'
const Schedule = ({ values, handleFormData, nextStep, prevStep }) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleInputChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;

    handleFormData(name, val);
  }
  return (
    <div>
      <form onSubmit={submitFormData}>
        <FormGroup >
          <p className="package_text">Schedule Your Order Pickup Date</p>
          <TextField
              name="schedule_date"
              variant='outlined'
              size='small'
              type='date'
              required
              className="sechdule-date my-5"
              defaultValue={values.schedule_date}
              onChange={handleInputChange}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', pt: 2, flex: '1 auto' }}>
            <Button
                color="inherit"
                onClick={prevStep}
                className='address_btn'
            >
              Prev
            </Button>
            <Button
                color="primary"
                type="submit"
                className='address_btn'
            >
              Next
            </Button>
          </div>
          <p className="ship_text">Get a free pickup from the comfort of your home</p>
        </FormGroup>
      </form>

    </div>
  )
}

export default Schedule
