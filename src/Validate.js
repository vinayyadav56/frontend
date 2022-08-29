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
    if(!values.password){
        errors.password="password is required."
    }else if(values.password.length < 5){
        errors.password="Password must be more than five characters."
    }
  return errors
};

export default Validate