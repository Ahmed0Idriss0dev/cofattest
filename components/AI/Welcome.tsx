import React from 'react'

const Welcome = () => {
  return (
    <div className='flex gap-2 rounded  flex-col bg-white  justify-between items-center w-[50%] h-dvh  '>         
            <div className="text-center">
            <h1 className='text-2xl font-bold'>Cofat ai </h1>
            <p>hello and welcome </p>
            </div>
            <button className='w-40 flex justify-center items-center h-11 bg-gradient-to-br from-Cofat-500 to-Cofat-600 text-white rounded  '>Get start</button>
    </div>
  )
}

export default Welcome