import React, { createContext, useState } from 'react'

export const activeUser = createContext()
const UserContext = (props) => {

  const [user, setUser] = useState([])

  return (
    <activeUser.Provider value={[user, setUser]}>
      {props.children}
    </activeUser.Provider>
  )
}

export default UserContext