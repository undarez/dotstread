'use server'

import { getUser } from "@/src/Theme/query/user.query";

import { prisma } from "@/lib/prisma";
import { WritePostFormValues } from "@/app/write/WritePostForm";
import { revalidatePath } from "next/cache";

export const CreateReply = async (postId: string, values: WritePostFormValues) =>{
    // create d'un post form


    const user = await getUser();
    const post = await prisma.post.create({
        data: {
            content: values.content,
            userId: user.id,
            parentId: postId
        }
    })

    await new Promise((resolve)=> setTimeout(resolve, 1000))

    revalidatePath(`/posts/${postId}`)

    return postId
}