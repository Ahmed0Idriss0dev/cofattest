import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/" className='flex justify-start items-start gap-1'>
    
   <Image src="/logo/fulllogo.svg" width={100} height={100} alt='logo' />
  

    </Link>
  )
}

export default Logo