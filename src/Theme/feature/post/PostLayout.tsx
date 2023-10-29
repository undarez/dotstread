'use client'
import React, { Children, PropsWithChildren } from 'react'
import { PostHome } from '../../query/post.query'
import clsx from 'clsx'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Link from 'next/link'
import { formatDate } from '@/lib/date'
import { MoreHorizontal } from 'lucide-react'

type PostLayoutProps = PropsWithChildren<{
  user: PostHome["user"],
  createdAt?: Date,
  className?: string,
  postId?: string,
  color: '#fff',
  
}>

const PostLayout = ({className, user, postId, createdAt, children}: PostLayoutProps) => {

  return (
    <div className={clsx("flex w-full  flex-row items-start p-4",className)}>
      <Avatar className='w-11 h-auto'>
        {user.image ? <AvatarImage src={user.image} alt={user.username} /> : null}
        <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className='ml-4 flex w-full flex-col gap-2'>
        <Link href={`/user/${user.id}`}>
      <div className=' flex flex-row items-center gap-2'>
      <p className='text-sm text-card-foreground mr-auto'>{user.username}</p>
      {createdAt ? (
        <p className='text-sm text-muted-foreground'> {formatDate(createdAt)}</p>
      ) : null}
      <button>
        <MoreHorizontal size={20}/>
      </button>
    </div>
          </Link>
          {children}

      </div>
    </div>
  )
}

export default PostLayout
