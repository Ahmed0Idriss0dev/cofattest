import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className=' w-[400px] gap-3 m-auto  flex justify-start items-center flex-col h-96  p-7'>
                <Image className='mx-auto' src="/logo/logo.svg" width={44} height={44} loading='lazy' alt='log'/>
                <div className="text-center">
                    <h1 className='text-3xl'>Cofat One </h1>
                    <p className='text-sm'>Join cofat on ,  we make auth more easer to join us</p>
                </div>
                <button className='w-[200px] text-white h-11 rounded-md bg-blue-700 '>Connect</button>
    </div>
  )
}

export default Login