import WritePostForm from '@/app/write/WritePostForm'
import { getUser } from '@/src/Theme/query/user.query'
import React from 'react'
import WriteModal from './WriteModal'
import { CreatePost } from '@/app/write/Write-post.action'

const page = async () => {
   const user = await getUser()
   return <WriteModal user={user} CreatePost={CreatePost} />
}

export default page
