import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import Link from 'next/link'
const More = async () => {
  return (
    <div className='section  '>
      
        <div className="grid h-full grid-cols-1 w-full sm:grid-cols-2">
          <div className="w-full p-3  flex justify-center items-center h-full ">
           <Image src='/Post/showcase.svg' className='rotate-2' alt='showcas.svg' width={500} height={500}  />
          </div>
          <div className="w-full p-3 flex justify-start items-center h-full">
            <div className="space-y-5">
            <h2 className='text-2xl '> What You Get When You Use Our Platform</h2>
            <div className="flex flex-col gap-2">

            <p className='flex justify-start items-center gap-2'>
              <Check/>
              <span>Access to Exclusive Job Opportunities</span>
            </p>
            <p className='flex justify-start items-center gap-2'>
              <Check/>
              <span>Streamlined Application Process</span>
            </p>
            <p className='flex justify-start items-center gap-2'>
              <Check/>
              <span>Direct Connection with Cofat</span>
            </p>

            </div>
              <div className="flex  justify-start items-center gap-2">
               <Link href='/Profile' className='underline text-Cofat-700'>learn more
               </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default More