
import { GitBranch, MapPin, TimerIcon } from 'lucide-react'
import moment from 'moment'
import React from 'react'
import Form from './Form'
interface Jobtype{
    title:string , 
    description:string ,
    branch:string ,
    time:Date ,
    Location:string ,
    id:string
}
const JobPost = ({Location ,branch , id  , title, description ,time}:Jobtype) => {
const timer = moment(time).fromNow()
  return (
    <div className='flex group flex-col  duration-100  hover:border-Cofat-600 cursor-pointer rounded border  w-full h-56 justify-between items-center p-2'>
        <div className="w-full">
            <h1 className='text-2xl'>{title} </h1>
            <p>{description} </p>
        </div>
        <div className="w-full flex justify-between items-center">
        <div className="flex text-sm  w-full justify-start items-center gap-1">
            <div className="w-max text-Cofat-700 bg-Cofat-100 rounded flex justify-center items-center gap-1 px-2  h-11">
                <MapPin/>
                <span>{Location} </span>
            </div>
            <div className="w-max rounded flex justify-center items-center gap-1 px-2  h-11">
                <GitBranch/>
                <span className='line-clamp-1'>{branch} </span>
            </div>
            <div className="w-max hidden rounded sm:flex justify-center items-center gap-1 px-2  h-11">
                <TimerIcon/>
                <span className='line-clamp-1'>{timer} </span>
            </div>
        </div>
        <Form postId={id} />
        </div>

    </div>
  )
}

export default JobPost