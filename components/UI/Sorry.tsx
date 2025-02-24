import Image from 'next/image'
import React from 'react'

const Sorry = () => {
  return (
    <div className='flex justify-center flex-col gap-1 items-center h-full'>
        <Image src="/logo/lock.png" width={50} height={50} alt='lock' />
        <p className='text-sm'>Sorry, this feature is currently locked</p>
    </div>
  )
}

export default Sorry