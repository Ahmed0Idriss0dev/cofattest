
import React from 'react'

interface TypeCrad{
    icon:React.ReactNode , 
    label:string ,
    status:number
}
const OverviewCrad = ({icon , label , status}:TypeCrad) => {
  return (
    <div className='w-full bg-white p-3 h-full border rounded'>
        <div className="flex justify-between items-center ">
            <h1> {label} </h1>
            {icon}
        </div>
        <div className="w-full h-full flex justify-center items-center">
            <span className='text-2xl'>{status} </span>
        </div>
    </div>
  )
}

export default OverviewCrad