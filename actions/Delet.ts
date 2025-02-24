"use server";

import PrismaConnect from "@/Helper"
import { revalidatePath } from "next/cache"
 async function Remove(FormData:FormData){
    try {
        const id = FormData.get('postId') as string
        if(!id) return 
        await PrismaConnect.post.delete({
            where:{id:id}
        })
    } catch (error) {
        console.log(error)
    } finally {
        revalidatePath('/Post')
    }
}
export default Remove