import WritePostForm from '@/app/write/WritePostForm'
import Post from '@/src/Theme/feature/post/Post'
import { getPost } from '@/src/Theme/query/post.query'
import { getUser } from '@/src/Theme/query/user.query'
import { notFound } from 'next/navigation'
import React from 'react'
import { CreateReply } from './write-reply.action'

const page = async ({params}:{
    params:{
        postId: string
    }
}) => {
    const user = await getUser()
    const post = await getPost(params.postId, user.id)
    if(!post){

        return notFound()
    } 
  return (
    <div>
      <Post post={post}/>
      <WritePostForm
      user={user}
      onSubmit={async (values)=>{
        "use server"
        return CreateReply(post.id, values)
      }}/>
    </div>
  )
}

export default page
