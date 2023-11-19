"use client"

import { CreateReply } from '@/app/posts/[postId]/reply/write-reply.action'
import { ProfileForm, ProfileFormType } from '@/app/profile/edit/ProfileForm'
import WritePostForm from '@/app/write/WritePostForm'
import { UserEdit } from '@/src/Theme/query/user.query'
import { Dialog, DialogContent } from '@radix-ui/react-dialog'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

const EditProfileModal = ({user, editProfile}: {
    user: UserEdit,
    editProfile: (values: ProfileFormType) => Promise<string>
}) => {
    const router = useRouter()
   const pathname = usePathname()
   return (

      
      <Dialog 

      open={pathname?.includes("/profile/edit")}
      onOpenChange={() => {
         router.back()
      }} 
      >
         <DialogContent >
            <ProfileForm user={user} onSubmit={editProfile}/>
         </DialogContent>
      </Dialog>
   )
}

export default EditProfileModal
