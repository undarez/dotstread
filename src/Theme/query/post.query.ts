import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client";

export const getLatestPosts = (userId?: string) =>  prisma.post.findMany({
    where: {
       parentId: null,
    },
    take: 20,
    orderBy: { 
        createdAt: 'desc' 
    },
    select: {
       id: true,
       content: true,
       createdAt: true,
       user: {
          select: {
             image: true,
             username: true,
             id: true,
             name: true,
          },
       },
       Like: {
          select: {
             userId: true,
          },
          where: {
             userId: userId?? 'error',
          },
       },
       _count:{
          select: {
              Like:true,
              replies:true,
          
          }
       }
    },
 });
 export type PostHome = Prisma.PromiseReturnType<typeof getLatestPosts>[number];

