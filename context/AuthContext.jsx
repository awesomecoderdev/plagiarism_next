import React, { useState } from 'react'
import { token } from '../lib/api';

const AuthContext = React.createContext("Ibrahim")
export const AuthContextProvider = ({children}) => {
  const [name, setName] = useState( "ibrahim")

  return (
    <AuthContext.Provider value={{ token, name ,setName }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;

// export default {
//   AuthContextProvider,
//   AuthContext
// };

