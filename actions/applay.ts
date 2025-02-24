 "use server"
import PrismaConnect from "@/Helper"
import { currentUser } from "@clerk/nextjs/server"

export type UpdateProfileState={
    sucess?:string
    error?:string
}
async function Applay(state:UpdateProfileState,from:FormData) {
      const postid = from.get('postid') 
      const user = await currentUser()
      try {
        await PrismaConnect.jobApplication.create({
          data:{
              job:{connect:{id:postid as string}} ,
              user:{connect:{id:user?.id as string}}
          }
        })
        return {sucess:"thank you "}
      } catch (error) {
        return {
          error:error
        }
      }
      
}
export default Applay