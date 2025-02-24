"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface ButonType{
    icon?:React.ReactNode ,
    label:string ,
    path:string ,
}
// fix button change will be active
const Button = ({icon ,label ,path}:ButonType) => {
    const isOnPath = usePathname() === path ? true : false ;
    const Gopath = useRouter()
    const SetPath =()=> Gopath.push(path)
  return (
    <button onClick={SetPath} className={`flex duration-200 hover:opacity-100  rounded-md w-full h-11 px-2 justify-start items-center gap-2  ${isOnPath ? " bg-gradient-to-br from-Cofat-400 to-Cofat-600 text-white  ":"opacity-80"}`} >{icon} {label} </button >
  )
}

export default Button