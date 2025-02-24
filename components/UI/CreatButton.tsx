"use client"
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const CreatButton = () => {
    const route = useRouter()
    const creatPost = ()=> route.push('/Create')
  return (
    <button onClick={creatPost} className='justify-center bg-Cofat-600 text-white items-center flex h-11 w-11 rounded-full '><Plus/></button>

  )
}

export default CreatButton