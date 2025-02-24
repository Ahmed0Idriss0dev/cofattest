import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='section h-[50dvh] items-center '>
        <div className="flex justify-center items-center  ">
          <div className="space-y-5 text-center  w-full ">
            <div className="space-y-2 ">
                <h1 className='Title '>Drive the Future <br /> of Automotive Connectivity</h1>
                <p className='line-clamp-2'>Join Cofat, a leading automotive  cable manufacturer  and be part of shaping <br /> the future of vehicle connectivity.</p>
            </div>
            <div className="flex mx-auto  items-center w-max justify-center gap-2">
              <Link href="/Profile">
              <button className='w-40 flex justify-center items-center h-11 bg-gradient-to-br from-Cofat-500 to-Cofat-600 text-white rounded  '>Apply now</button>
      
              </Link>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header