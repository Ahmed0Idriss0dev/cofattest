import Image from 'next/image'
import React from 'react'

const Porfile = () => {
  return (
    <div className='flex justify-start items-center gap-2'>
       <Image  className='w-11 animate-spin cursor-pointer h-11 rounded-full ' src='/logo/Ai.svg'  width={55} height={55} alt='user profile'/>

    </div>
  )
}

export default Porfile