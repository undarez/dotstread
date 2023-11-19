'use client'
import { UserProfile } from '@/src/Theme/query/user.query'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { Button } from '@/components/ui/button'
import { PencilLine } from 'lucide-react'

const removeHttp = (url: string) => {
   return url.replace(/(^\w+:|^)\/\//, '')
}

const Profile = ({ user }: PropsWithChildren<{ user: UserProfile }>) => {
   return (
      <div className="mt-4 container">
         <div className="flex   gap-2 items-center justify-between">
            <div className="flex flex-col gap-0.5">
               <h3 className="text-2xl font-bold">{user.name}</h3>
               <p>{user.username}</p>
            </div>
               <Avatar >
                  {user.image ? (
                     <AvatarImage className="h-10 w-10 rounded-full" src={user.image} alt={user.username} />
                  ) : null}
                  <AvatarFallback>
                     {user.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
               </Avatar>
            </div>
            <div>
            {user.bio? (
                <p>{user.bio}</p>
            ):(
                <p className="text-muted-foreground text-center">no Bio</p>
            )}
            <div className="flex items-center gap-2 mt-4 justify-end ">
                <div className="flex -space-x-2">
                    {user.followeds.map(f => (
                        <Avatar className='border-2 border-background' key={f.follower.id}
                        >
                            {f.follower.image ? (
                                <AvatarImage src={f.follower.image} alt={f.follower.id}/>) : null}
                                <AvatarFallback>
                                    {(f.follower.username.slice(0,2)).toUpperCase()}
                                </AvatarFallback>
                        </Avatar>
                    ))}
                                <Link href="/profile/edit" >
                                 <div className="flex gap-2 items-center w-full ">
                                    <Button  size="icon" variant="ghost">
                                    <PencilLine size={20} />
                                    </Button>
                                 </div>
                              
                                </Link>

                </div>
            </div>
         </div>
      </div>
   )
}

export default Profile
