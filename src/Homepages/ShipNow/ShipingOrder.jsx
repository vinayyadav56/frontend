import React, {useEffect, useState} from 'react'
import SenderAddress from './SenderAddress';
import Billing from './Billing';
import DeliveryOrder from './DeliveryOrder';
import Pincode from './Pincode';
import Schedule from './Schedule';
import ReceiverAddress from './ReceiverAddress';

const ShipingOrder = (props) => {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    delivery_pincode: "",
    pickup_pincode: "",
    sender_address: {
        sender_name: "",
        sender_phone_no: "",
        sender_email_id: "",
        sender_house_no: "",
        sender_area: "",
        sender_pincode: "",
        sender_state: "",
        sender_city: ""
    },
    receiver_address: {
        receiver_name: "",
        receiver_phone_no: "",
        receiver_email_id: "",
        receiver_house_no: "",
        receiver_area: "",
        receiver_pincode: "",
        receiver_state: "",
        receiver_city: ""
    },
    delivery_cost: "",
    package_size: "",
    delivery_type: "",
    category: "",
    sub_category: "",
    schedule_date: ""
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };


  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input, val) => {
    console.log(input, val);

    setFormData(prevState => ({
      ...prevState,
      [input]: val
    }));
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  //  javascript switch case to show different form in each step
  switch (step) {
    case 1:
      return (
        <Pincode
          label="string"
          nextStep={nextStep}
          handleFormData={handleInputData}
          values={formData}
        />
      )
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <SenderAddress
          label="string"
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleInputData}
          values={formData}
        />
      )
    case 3:
      return (
        <ReceiverAddress
          label="string"
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleInputData}
          values={formData}
        />
      )
    //Delivery Type Select
    case 4:
      return (
        <DeliveryOrder
          label="string"
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleInputData}
          values={formData}
        />
      )
    case 5:
      return (
        <Schedule
          label="string"
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleInputData}
          values={formData}
        />
      )
    // Pickup timminf form
    case 6:
      return (
        <Billing
          label="string"
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleInputData}
          values={formData}
          handleModalClose={props.modalHandleClode}
        />
      )



    // default case to show nothing
    default:
      return (
        <div className="App">
        </div>
      );
  }
}

export default ShipingOrder;
