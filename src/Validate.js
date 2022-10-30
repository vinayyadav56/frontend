 const Validate = (values) => {
     let errors= {};

     if(!values.firstname){
         errors.firstname="First Name is required."
     }
     if(!values.lastname){
        errors.lastname="Last Name is required."
    }
    if(!values.fullname){
        errors.fullname="Full Name is required."
    }
     if(!values.email){
        errors.email="Email is required."
    }else if(!/\S+@\S+/.test(values.email)){
        errors.email="Email is invalid, please enter valid email."
    }
  
  return errors
};

export default Validate