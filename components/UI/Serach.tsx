import { Search } from 'lucide-react'
import React from 'react'

function Serach() {
  return (
    <div className='w-72 px-3  flex rounded-full justify-between items-center h-11 bg-blue-50 rounded-s-full '>
        <input className='bg-transparent w-full outline-none' type="text" placeholder='search' />
        <Search/>
    </div>
  )
}

export default Serach