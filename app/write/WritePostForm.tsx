'use client'

import { Button } from '@/components/ui/button'
import {
   Form,
   FormField,
   FormItem,
   FormMessage,
   useZodForm,
} from '@/components/ui/form'
import { ContentTextArea } from '@/src/Theme/feature/post/ContentTextArea'
import PostLayout from '@/src/Theme/feature/post/PostLayout'
import { User } from '@prisma/client'
import { promises } from 'dns'
import { useRouter } from 'next/navigation'
import React from 'react'
import { z } from 'zod'

const schema = z.object({
   content: z.string().min(1).max(500),
})

export type WritePostFormValues = z.infer<typeof schema>

type WritePostFormProps = {
   user: User
   onSubmit: (values: WritePostFormValues) => Promise<string>
}
const WritePostForm = ({ user, onSubmit }: WritePostFormProps) => {
   const form = useZodForm({
      schema: schema,
   })
   const router = useRouter()

   return (
      <PostLayout user={user} className="flex flex-col gap-2" color={'#fff'}>
         <Form form={form} onSubmit={async (values) => {
          const postId = await onSubmit(values);
          // console.log('Submit client side')
          // router.push('/')
          router.push(`/posts/${postId}`)
         }}>
            <FormField
               control={form.control}
               name="content"
               render={({ field }) => (
                  <FormItem>
                     <ContentTextArea {...field} />
                     <FormMessage />
                  </FormItem>
               )}
            />
            <div className="flex w-full justify-end">
               <Button size={'sm'}>Post</Button>
            </div>
         </Form>
      </PostLayout>
   )
}

export default WritePostForm
