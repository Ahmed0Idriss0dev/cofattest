import Image from 'next/image'
import React from 'react'
import CreatButton from '../UI/CreatButton'
import { currentUser } from '@clerk/nextjs/server'
const Navbar = async () => {
 
  const user = await currentUser()
  return (
    <div className='flex py-2 border-b bg-white  px-3 justify-between gap-4 items-center '>
      <h1>welcome {user?.firstName} </h1>
      <div className="flex justify-center gap-3">
      
      <Image className='w-11 cursor-pointer h-11 rounded-full ' src={user?.imageUrl as string}  width={55} height={55} alt='user profile'/>
         <CreatButton/>
      </div>
    </div>
  )
}

export default Navbar