import React from 'react'
import { PostHome } from '../../query/post.query'
import PostLayout from './PostLayout'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Ghost, Heart, MessageCircle } from 'lucide-react'

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
         <Button size="icon" variant="ghost">
            <Heart size={20} />
         </Button>
         <Button size="icon" variant="ghost">
            <MessageCircle size={20} />
         </Button>
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
