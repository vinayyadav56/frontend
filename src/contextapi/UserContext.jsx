import React, { createContext, useState } from "react";

export const myUserContext = createContext();

const UserContext = (props) => {
  const [user, setUser] = useState({
    first_name: "",
    email: "",
    password: "",
    reEnterPass: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  return (
    <myUserContext.Provider value={[user, setUser]}>
      {props.children}
    </myUserContext.Provider>
  );
};

export default UserContext;
