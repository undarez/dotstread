import React from 'react'
import WritePostForm from './WritePostForm'
import { getUser } from '@/src/Theme/query/user.query'
import { CreatePost } from './Write-post.action'

const page = async () => {
   const user = await getUser()
   return <WritePostForm user={user} onSubmit={CreatePost} />
}

export default page
