"use client"
import useStore from '@/store'
import Image from 'next/image'
import React from 'react'

const Selected = ({srcPath}:{srcPath:string}) => {
  const {ImagePath , setImagePath} = useStore()
  const setimage=()=> setImagePath(srcPath) 
  const select = srcPath===ImagePath ? true : false
  return (
    <div onClick={setimage} className={`w-full border-4 cursor-pointer duration-150 ${select ? "border-Cofat-500":"border-white"} hover:border-Cofat-600 h-52 rounded`}>
        <Image className='w-full h-full rounded object-cover' src={srcPath} width={670} height={400} alt='articla' />
    </div>
  )
}

export default Selected