import React from 'react'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'

const UserProfile =  async () => {
  const isAdmin = await (await auth()).sessionClaims?.metadata.role=="ADMIN"? true : false
  return (
     <>
     {isAdmin ? ( <Link href='/dashbourd'>
    <button className='w-32   duration-150 hover:bg-black h-11 bg-black text-white rounded  '>dashbourd</button>
    </Link>):(
       <Link href='/Job'>
       <button className='w-32   duration-150 hover:bg-Cofat-500 h-11 bg-Cofat-600 text-white rounded  '>Explore </button>
       </Link>
    )}
     </>
    
  )
}

export default UserProfile