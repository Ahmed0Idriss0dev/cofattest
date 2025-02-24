import JobPost from '@/components/UI/JobPost'
import FetchAll from '@/Helper/FetchAll'
import React from 'react'

const Job = async () => {
  const {getPublicPost} = await FetchAll()
  return (
    <div className='h-dvh section'>
      <div className=" w-full sm:w-[50%] py-2 flex flex-col gap-2 ">
        {
          getPublicPost.map(({Branch ,Location  ,created_at , content,title, id},index)=>(
            <JobPost 

               id={id}
               key={index}
               Location={Location}
               branch={Branch}
               time={created_at}
               description={content}
               title={title}
            />
          ))
        }

      </div>
    </div>
  )
}

export default Job