'use client'

import { Dialog } from '@/components/ui/dialog'
import { usePathname, useRouter } from 'next/navigation'
import { User } from '@prisma/client'
import React from 'react'
import { DialogContent } from '@radix-ui/react-dialog'


import { CreatePost } from '@/app/write/Write-post.action'
// import { createPost } from '@/app/write/Write-post-action'
import WritePostForm, { WritePostFormValues } from '@/app/write/WritePostForm'

const WriteModal = ({ user, CreatePost } : { user: User, CreatePost: (values: WritePostFormValues) => Promise<string>; }) => {
   const router = useRouter()
   const pathname = usePathname()
   return (
      <Dialog
         open={pathname === '/write'}
         onOpenChange={() => {
            router.back()
         }}
      >
         <DialogContent>
            <WritePostForm user={user} onSubmit={CreatePost} />
         </DialogContent>
      </Dialog>
   )
}

export default WriteModal
