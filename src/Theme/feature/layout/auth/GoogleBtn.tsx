'use client'
import { Button } from '@/components/ui/button'
import { Loader, LogIn } from 'lucide-react'
import React, { useTransition } from 'react'
import { signIn } from 'next-auth/react'
import { GoogleLogin } from '@react-oauth/google'
const GoogleBtn = () => {
   const [isPending, startTransition] = useTransition()
   return (

         <GoogleLogin
            onSuccess={(credentialResponse) => {
               console.log(credentialResponse)
            }}
            onError={() => {
               console.log('Login Failed')
            }}
         />

   )
}

export default GoogleBtn
