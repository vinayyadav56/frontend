import React, {  useState } from 'react'
import Address from './Address';
import Billing from './Billing';
import DeliveryOrder from './DeliveryOrder';
import Pincode from './Pincode';
import Schedule from './Schedule';

function ShipingOrder() {  

   //state for steps
   const [step, setstep] = useState(1);

   //state for form data
   const [formData, setFormData] = useState({
    delivery_pincode: "",
      pickup_pincode: "",
      address_details: {
        sender_addres: [
          {
            sender_name: "",
            sender_phone_no: "",
            sender_email_id: "",
            sender_house_no: "",
            sender_area: "",
            sender_pincode: "",
            sender_state: "",
            sender_city: ""
          }
        ],
        recive_addres: [
          {
            reciver_name: "",
            reciver_phone_no: "",
            reciver_email_id: "",
            reciver_house_no: "",
            reciver_area: "",
            reciver_pincode: "",
            reciver_state: "",
            reciver_city: ""
          }
        ]
      },
  
      delivery_cost: "",
      package_size: "",
      delivery_type: "",
      category: "",
      sub_category: "",
      schedule_date:""
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
   const handleInputData = input => e => {
     // input value from the form
     const {value } = e.target;
 
     //updating for data state taking previous state and then adding new value to create new object
     setFormData(prevState => ({
       ...prevState,
       [input]: value
   }));
   }
  //  javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm

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
          <Address
            label="string"
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData} 
            />
        )
      //Delivery Type Select
      case 3:
        return (
          <DeliveryOrder
          label="string"
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData} 
            />
        )
        // Pickup timminf form
        case 4:
        return (
          <Schedule
            label="string"
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
           />
        )
        case 5:
        return (
          <Billing
            nextStep={nextStep}
            prevStep={prevStep}
            values={formData} 
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
