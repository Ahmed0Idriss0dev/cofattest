"use server"

import PrismaConnect from "@/Helper"
import { currentUser } from "@clerk/nextjs/server"

export type UpdateProfileState={
    sucess?:string
    error?:string | undefined
}
const addPost = async (state:UpdateProfileState,From:FormData) => {
  const user = await currentUser()
    const title = From.get('title') as string
    const Branch = From.get('Branch') as string
    const Location = From.get('Location') as string
    const description = From.get('description') as string

    
    if(!title && !description) return {error:"you have error"}
    await PrismaConnect.post.create({
      data:{
        title ,
        content:description ,
        publisher:{connect:{id:user?.id}},
        Branch ,
        Location 
      }
    })
    return {
      sucess:"sucess"
    }
 
}

export default addPost