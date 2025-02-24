import { currentUser } from "@clerk/nextjs/server"
import PrismaConnect from "."

const FetchUserDb = async () => {
  const user = await currentUser()
      if(user){
        const FindUser = await PrismaConnect.user.findUnique({
          where: { id: user?.id }
        })
  
        if (!FindUser) {
          await PrismaConnect.user.create({
            data: {
              email: user?.primaryEmailAddress?.emailAddress as string || "defaultemailadres@gamil.com",
              id: user?.id as string,
              username: user?.fullName,
              pdf_url: '',
              phone: 0,
              userImage:user.imageUrl
            }
          })
        }
      }
    
    
     
}

export default FetchUserDb