import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { buttonVariants } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <Alert className='my-8'>
    <AlertTriangle/>
    <AlertTitle>
      Not logged
    </AlertTitle>
    <AlertDescription>
     Post not found
    </AlertDescription>
    <Link href='/' className={buttonVariants({ variant: 'link'})}>
      Home
    </Link>
   </Alert>
    </div>
  )
}

export default NotFound