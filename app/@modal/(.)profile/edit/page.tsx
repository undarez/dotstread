import React from 'react'
import { getUserEdit } from '@/src/Theme/query/user.query'
import { notFound } from 'next/navigation'
// import { ProfileForm } from '@/app/profile/edit/ProfileForm'
import { editProfile } from '@/app/profile/edit/edit.profile.action'
import EditProfileModal from './EditProfileModal'
const page = async () => {
    const user = await getUserEdit()
  return (
<EditProfileModal user={user} editProfile={editProfile}/>
  )
}

export default page
