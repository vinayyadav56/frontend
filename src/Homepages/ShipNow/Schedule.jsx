import React from 'react';
import { Button, FormGroup, TextField} from '@material-ui/core'
const Schedule = ({ values, handleFormData, nextStep, prevStep }) => {
  const submitFormData = (e) => {
    e.preventDefault();

  };
  return (
    <div>
      <FormGroup onSubmit={submitFormData}>
        <p className="package_text">Schedule Your Order Pickup Date</p>
        <TextField variant='outlined' label="Schedule Pickup" size='small' type='date' className="sechdule-date my-5" defaultValue={values.Schedule_date} onChange={handleFormData("schedule_date")}/>
        <div style={{ display: 'flex', justifyContent: 'space-between', pt: 2, flex: '1 auto' }}>
          <Button
            color="inherit"
            onClick={prevStep}
            type="button"
            className='address_btn'
          >
            Prev
          </Button>
          <Button
            color="primary"
            onClick={nextStep}
            type="submit"
            className='address_btn'
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