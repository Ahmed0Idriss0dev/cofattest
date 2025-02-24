import PrismaConnect from '@/Helper'
import React from 'react'
import User from '@/components/UI/User'

const page = async ({params}:{params:{id:string}}) => {
    const {id} = params
 const postapply = await PrismaConnect.jobApplication.findMany({
    where:{jobId:id} ,
    include:{
        user:true
    }
 })
  return (
    <div>
        {
            postapply?.map(({user,createdAt},index)=>(
                <User
                ImageURL={user.userImage}
                email={user.email} 
                joinDate={createdAt} 
                pdf_url={user.pdf_url} 
                username={user.username}
                key={index}
                />
            ) )
        }
    </div>
  )
}

export default page