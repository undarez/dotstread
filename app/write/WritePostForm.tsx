'use client'

import { User } from '@prisma/client'
import React from 'react'
import {z} from "zod"

const schema = z.object({
    content: z.string().min(1).max(500)
})

export type WritePostFormValues = z.infer<typeof schema>

type  WritePostFormProps ={
    user: User;
    onSubmit: (values: WritePostFormValues) => void;
}
const WritePostForm = () => {
  return (
    <div>
      
    </div>
  )
}

export default WritePostForm
