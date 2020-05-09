import React, {useState, useEffect} from 'react'
import AuthContext from './AuthContext'
import axios from 'axios';
import Cookie from 'js-cookie';

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null)

  const updateToken = () => setToken(localStorage.getItem('customerToken'))

  const signOut = () => {
    localStorage.removeItem('customerToken')
    axios.defaults.headers.common.Authorization = '';
    Cookie.remove('family_portrait_access_token');
    setToken('')
  }

  useEffect(() => {
    const token = localStorage.getItem('customerToken')
    setToken(token)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        token,
        updateToken,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
