import { currentUser } from "@clerk/nextjs/server"
import PrismaConnect from "."

const FetchAll = async () => {
    const users = await currentUser()
    const getPost = await PrismaConnect.post.findMany({
        where:{publisher_is:{equals:users?.id}},
        include:{
            _count:{
                select:{JobApplication:true}
            }
        }
    })
    const getPublicPost = await PrismaConnect.post.findMany({
        orderBy:{created_at:"desc"}
     })
    const getapplays = await PrismaConnect.user.findMany({})

    return {
        getPost ,
        getapplays ,
        getPublicPost
    }
}

export default FetchAll