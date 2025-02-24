import { JsonValue } from '@prisma/client/runtime/library'
import { Book } from 'lucide-react'
import React from 'react'

const Card = ({name , pathId , email}:{name:string ,pathId?:string ,email:JsonValue}) => {
  return (
    <div className="w-full bg-Cofat-50 p-2 motion-translate-y-in-100 border  cursor-pointer duration-200  h-52  flex flex-col rounded-md">
      <div className="h-[50%] rounded flex justify-center items-center w-full ">
        <Book/>
      </div>
      <div className="h-[50%] flex justify-start items-center w-full ">
        <div className="">
       <h3 className='text-[20px] '>{name} </h3>
       <p className='text-sm'>{email} </p>
       <a href={pathId}>View cv</a>
        </div>
      </div>

    </div>
)
}

export default Card