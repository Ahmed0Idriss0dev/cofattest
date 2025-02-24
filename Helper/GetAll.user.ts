import PrismaConnect from "."

const GetAll = async () => {
   const users = await PrismaConnect.user.findMany({ })
   return users
}

export default GetAll