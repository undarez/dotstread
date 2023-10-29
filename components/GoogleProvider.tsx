'use client'
import React from 'react'
import {GoogleOAuthProvider}  from  '@react-oauth/google' ;

const GoogleProvider = ({children}:{children:React.ReactNode}) => {
  return (
   <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID??""}>
    {children}
   </GoogleOAuthProvider>
  )
}

export default GoogleProvider
