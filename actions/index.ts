"use server"
import PrismaConnect from "@/Helper"
import Upload from "@/Helper/Upload"
import { currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
export type UpdateProfileState={
    sucess?:string
    error?:string
}
const MAX_FILE_SIZE = 1048576; // 1MB in bytes
export default async function UpdateProfile(state:UpdateProfileState ,Data:FormData){
    try {
        const username = Data.get('name')  as string ;
        const phone = Data.get('phone')  as number | null ;
        const pdf = Data.get('doc') as File ;
        const user = await currentUser()
        if(!pdf) return {
           error:'please add your cv'
        }
        if (!pdf.size  || pdf.size > MAX_FILE_SIZE) return { error: "Your CV must be less than 1MB." };

      
       const result = await Upload(pdf)
       console.log(phone)
        await  PrismaConnect.user.update({
            where:{id:user?.id} ,
            data:{
               username:username ,
               pdf_url:result as string ,
               isComplet:true ,
               phone:phone?? ''
            }
        })
      return {sucess:'Thak you :)'}
        
    } catch (error:unknown) {
       return {error:(error as Error).message && "you have error"}
    } finally{
        revalidatePath('/Profile')
    }

}