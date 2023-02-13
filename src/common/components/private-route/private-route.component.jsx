import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute= ({children}) => {
  const jwt = localStorage.getItem('jwt')

  if(!jwt){
    return <Navigate to="/login"/>
  }

  return children 
}

