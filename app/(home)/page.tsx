import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Post from '@/src/Theme/feature/post/Post'
import { getLatestPosts } from '@/src/Theme/query/post.query'

export default async function Home() {
   const session = await getAuthSession()

   const posts = await getLatestPosts()
   return (
      <div className='divide-y divide-muted'> 
         {posts.map((p) => (
            <Post post={p} key={p.id} />
         ))}
      </div>
   )
}
