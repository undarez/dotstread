import React from 'react'
import { getUserEdit } from '@/src/Theme/query/user.query'
import { notFound } from 'next/navigation'
import { ProfileForm } from './ProfileForm'
import { editProfile } from './edit.profile.action'
const page = async () => {
    const user = await getUserEdit()
  return (
    <div className=" h-full container flex items-center">
        <div className="bg-card border rounded-md border-border p-4 flex-1">
            <ProfileForm user={user}  onSubmit={editProfile}/>

        </div>
      
    </div>
  )
}

export default page
