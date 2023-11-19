import { getAuthSession } from '@/lib/auth'
import { getUserProfile } from '@/src/Theme/query/user.query'
import React from 'react'
import Profile from './Profile'
import { notFound, redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { followUser } from './follow.action'
import Post from '@/src/Theme/feature/post/Post'
import { Metadata } from 'next'

export const generateMetadata = async ({params}: PageParams): Promise<Metadata>  => {

    const user = await getUserProfile(params.userId)

    if(!user){
        throw new Error("User not found")
    }
    return({
        title: `${user.name} (${user.username})`
    })
}

type PageParams = {
    params: {
        userId: string
    }
}

const UserPage = async ({params,}: NewType)=>{
    

    const session = await getAuthSession()
    const user = await getUserProfile(params.userId)

    if(!user) {
        notFound()
    }

    const isFollowing = session?.user.id ? await prisma.follow.findFirst({ 
        where:{
            followerId: session?.user.id,
            followingId: user.id,
        },
       
    }):false

    const isCurrentUser = params.userId === session?.user.id
    if (!isCurrentUser){
        redirect("/profile")
    }

  return (
    <div>
        <Profile user={user}> 
        <form>

        <Button variant={'outline'} formAction={async ()=> {
           "use server"
           if (!session?.user.id){
            followUser(params.userId)
           } 
        }}>
            {isFollowing ? "Unfollow": "Follow"}
        </Button>
        </form>
        </Profile>
        <div className='divide-y divide-accent border-t border-accent mt-4'>
            {user.post.map((post)=>(
                <Post key={post.id} post={post}/>
            ))}
        </div>
    </div>
  )
}

export default UserPage
