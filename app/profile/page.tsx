import { getAuthSession } from '@/lib/auth'
import { getUserProfile } from '@/src/Theme/query/user.query'
import React from 'react'
import Profile from '../users/[userId]/Profile'
import { Button, buttonVariants } from '@/components/ui/button'
import { followUser } from '../users/[userId]/follow.action'
import Post from '@/src/Theme/feature/post/Post'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const page = async () => {
  const session = await getAuthSession()
  if(! session?.user.id) {
    notFound()
  }
  const user = await getUserProfile(session.user.id)

  if(!user) {
    notFound()
  }

  return (
    <div>
        <Profile user={user}> 
        <form>

        <Link className={buttonVariants({
          variant:'outline'
        })} href="/profile/edit" >
            edit Profile
        </Link>
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

export default page
