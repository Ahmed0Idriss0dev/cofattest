import { Book } from 'lucide-react'
import React from 'react'
import moment from 'moment'
import Image from 'next/image'
const User = ({username , ImageURL , email , joinDate  , pdf_url}) => {
  const join = moment(joinDate).fromNow()
  return (
        <div className="gird p-4 duration-100 cursor-pointer last:border-b-0  border-b  flex justify-between items-center h-14 bg-white">
      <Image className='w-11 cursor-pointer h-11 rounded-full ' src={ImageURL as string}  width={55} height={55} alt='user profile'/>
      <p>{username} </p>
                <p>{email } </p>
                <p>{join} </p>
                <a href={pdf_url} target="_blank" rel="noopener noreferrer">
                    <button><Book/></button>
                </a>
            </div>  )
}

export default User