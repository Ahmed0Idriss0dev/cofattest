//@ts-nocheck
import Post from '@/components/UI/Post'
import FetchAll from '@/Helper/FetchAll'
import React from 'react'

const page = async () => {
   const {getPost} = await FetchAll()
   console.log(getPost)

  return (
    <div className='grid p-4 grid-cols-4 gap-2 '>
      
        {getPost.map(({id ,title  , created_at ,_count} ,index)=>(
           <Post
            Path={id}
            key={index} 
            title={title}
            created_at={created_at}
            count={_count.JobApplication}
           />
        ))}
    </div>
  )
}

export default page