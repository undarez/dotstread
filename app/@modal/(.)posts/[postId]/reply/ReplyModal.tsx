'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { usePathname, useRouter } from 'next/navigation'
import { User } from '@prisma/client'
import React from 'react'



import { CreatePost } from '@/app/write/Write-post.action'
// import { createPost } from '@/app/write/Write-post-action'
import WritePostForm, { WritePostFormValues } from '@/app/write/WritePostForm'
import path from 'path'

const ReplyModal = ({ user, CreateReply } : { user: User, CreateReply: (values: WritePostFormValues) => Promise<string>; }) => {
   const router = useRouter()
   const pathname = usePathname()
   return (

      
      <Dialog 

      open={pathname?.includes("reply")}
      onOpenChange={() => {
         router.back()
      }} 
      >
         <DialogContent >
            <WritePostForm user={user} onSubmit={CreateReply} />
         </DialogContent>
      </Dialog>
   )
}

export default ReplyModal
