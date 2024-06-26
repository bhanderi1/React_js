import React from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

const ReqiureAuth = ({children}) => {

    const auth = useAuth()
    if(!auth.user){
        return <Navigate to='/login'></Navigate>
    }
  return (
      children
  )
}

export default ReqiureAuth
