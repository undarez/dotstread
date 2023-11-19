import { PostPlaceholder } from '@/src/Theme/feature/post/PostSkeleton'
import React from 'react'
export const loading = () => {
    

const loading = () => {
  return (
    <div className="divide-y divide-accent">
        {Array.from({ length: 20}).map((_, index) => {
            return <PostPlaceholder key={index}/>
        })}
      
    </div>
  )
}
}
export default loading
