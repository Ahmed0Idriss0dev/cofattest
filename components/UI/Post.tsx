"use client"
import React from 'react'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { BriefcaseBusiness, RemoveFormatting } from 'lucide-react'
import Remove from '@/actions/Delet'

const Post = ({created_at , title  , count , Path}:{title:string  , image:string, Path:string, count:number, created_at:Date }) => {
    const now = moment(created_at).fromNow() ;
    const route = useRouter()
    const setRoute = ()=> route.push(`Post/${Path}`)
    return (
    <div  
    onClick={setRoute}
    className="w-full motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth cursor-pointer border rounded p-2  bg-white h-max">
    <Image className='w-full h-full rounded opacity-5' src='/logo/logo.svg' width={44} height={44} alt='articla' />
    <h1 className='line-clamp-1'> {title} </h1>
    <div className="flex justify-start items-center gap-3">

    <span className='h-11 justify-center items-center flex gap-1 w-11  text-Cofat-950 rounded'>
    <BriefcaseBusiness/>
    {count}

    </span>
    <p className='text-sm opacity-80'>{now} </p>
    <form action={Remove} >
     <input type="text" name='postId' hidden defaultValue={Path} />
    
    </form>
    </div>

 </div>
 
 )
}

export default Post