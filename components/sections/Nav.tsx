import Link from 'next/link'
import React from 'react'
import { SignInButton, SignUpButton } from '@clerk/nextjs'

import UserProfile from '../getUser'
import Logo from '../UI/Logo'
import { currentUser } from '@clerk/nextjs/server'

const Nav =  async () => {
  const user = await currentUser()
  return (
    <nav className='section border-b py-3'>
        <div className="container  rounded-full ">
          <Logo/>
        <ul className='sm:section hidden sm:block  space-x-3'>
            <Link href="/" className='opacity-85 hover:opacity-100 duration-150'>About us</Link>
            <Link href="/" className='opacity-85 hover:opacity-100 duration-150'>FAQ</Link>
            <Link href="/" className='opacity-85 hover:opacity-100 duration-150'>Location</Link>
            <Link href="/" className='opacity-85 hover:opacity-100 duration-150'>Profile</Link>
            <Link href="/Job" className='opacity-85 hover:opacity-100 duration-150'>Jobs</Link>

        </ul>
        <div className="section gap-2">
       
         {
          user ? 
          (<UserProfile/>):(
          <div className=" flex justify-start items-center gap-1">
          <div className="">
            
          </div>
          <SignInButton mode='modal'>
            <button className='border w-32 h-11 border-Cofat-500 text-Cofat-500 rounded bg-transparent'>Sign in</button>
          </SignInButton>
          <SignUpButton mode='modal'>
          <button className='w-32  hidden sm:block duration-150 hover:bg-Cofat-500 h-11 bg-Cofat-600 text-white rounded  '>Get started</button>
          </SignUpButton>
          </div>        
          )
         }
        </div>
        </div>
    </nav>
  )
}

export default Nav