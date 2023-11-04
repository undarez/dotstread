import { CreateReply } from "@/app/posts/[postId]/reply/write-reply.action";
import { getUser } from "@/src/Theme/query/user.query";
import ReplyModal from "./ReplyModal";
export default async function page({
    params,

}:{
    params: {
        postId: string
    }
}){
    const user = await getUser();
    return(
        <ReplyModal
        user={user}
        CreateReply={async (values)=>{
            'use server'

            const reply = await CreateReply(params.postId, values)
            return reply
        }}
        />
    )
}