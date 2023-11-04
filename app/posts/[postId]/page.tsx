import { getAuthSession } from '@/lib/auth'
import Post from '@/src/Theme/feature/post/Post'
import { getPostView } from '@/src/Theme/query/post.query'
import clsx from 'clsx'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ params }: { params: { postId: string } }) => {
  const session = await getAuthSession()
  const postId = params.postId;
  
  // Vérifie si session et session.user sont définis avant d'accéder à session.user.id
  const userId = session?.user?.id;
  
  if (!userId) {
    // Gérer le cas où userId est indéfini, par exemple, rediriger ou afficher un message d'erreur.
    return notFound();
  }

  const post = await getPostView(postId, userId);
  if (!post) {
    return notFound();
  }

  return <div className="divide-y divide-accent">
    {post.parent && <Post post={post.parent} key={post.parent.id} />}
    <div className={clsx({
      "ml-10": post.parent
    })}>
      <Post post={post} key={post.id}/>
      <div className="ml-10 divide-y divide-accent">
        {post.replies.map((reply) =>(
          <Post post={reply} key={reply.id} />
        ))}
      </div>
    </div>
  </div>
}

export default page
