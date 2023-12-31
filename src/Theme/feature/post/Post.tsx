import React from 'react'
import { PostHome } from '../../query/post.query'
import PostLayout from './PostLayout'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { Ghost, Heart, MessageCircle } from 'lucide-react'
import LikeButton from './LikeButton'

type PostProps = {
   post: PostHome
}

const Post = ({ post }: PostProps) => {
   return (
      <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt} color={'#fff'}>
         <Link href={`/posts/${post.id}`} className="text-sm text-foreground">
            {post.content}
         </Link>
         <div className='flex gap-2 items-center'>
            <LikeButton postId={post.id} isLiked={post.Like.length > 0} />
          <Link className={buttonVariants({variant: "ghost", size:"icon"})} href={`/posts/${post.id}/reply`}>
            <MessageCircle size={20} />
         </Link>
         </div>
         <div>
            <Link className='text-mutted-foreground text-sm' href={`/posts/${post.id}`}>{post._count.Like}Likes</Link>
            {"."}
            <Link className='text-mutted-foreground text-sm' href={`/posts/${post.id}`}>{post._count.replies}Comments</Link>
         </div>
      </PostLayout>
   )
}

export default Post
