import React from 'react'

const Supper = () => {
  return (
    <div className='w-full flex  duration-200 cursor-pointer hover:border-Cofat-500 hover:border relative group  justify-center items-center gap-2 flex-col h-[200px] p-3 border rounded-md '>
        <span className="absolute top-0 opacity-0 duration-300 translate-y-0 group-hover:opacity-100 group-hover:-translate-y-4 scale-0 text-white bg-Cofat-500 group-hover:scale-95 rounded-full px-4 w-max h-7">Get Hellp now</span>
        <div className="text-center">
            <h2 className='text-2xl'>Use AI</h2>
            <p className='text-sm'>Set your ai configiration ?</p>
        </div>
            <button className='w-full h-10 rounded bg-Cofat-500 text-white '>Configer</button>
    </div>
  )
}

export default Supper