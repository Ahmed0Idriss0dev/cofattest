import React from 'react'

const loading = () => {
  return (
    <div className='grid gap-2 p-4 grid-cols-4'>
     <div className="w-full anil animate-pulse rounded h-60 bg-neutral-200 "></div>
     <div className="w-full anil animate-pulse rounded h-60 bg-neutral-200 "></div>
     <div className="w-full anil animate-pulse rounded h-60 bg-neutral-200 "></div>
     <div className="w-full anil animate-pulse rounded h-60 bg-neutral-200 "></div>

    </div>
  )
}

export default loading