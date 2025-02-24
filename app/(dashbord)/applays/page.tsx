import User from '@/components/UI/User'
import FetchAll from '@/Helper/FetchAll'
import React from 'react'

const page = async () => {
    const {getapplays} = await FetchAll()
  return (
    <div>
        {getapplays.map(({username , email , joinDate ,pdf_url},index)=>(
           <User
           email={email} 
           joinDate={joinDate} 
           pdf_url={pdf_url} 
           username={username}
           key={index}
           />
        ))}
    </div>
  )
}

export default page