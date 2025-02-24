import React from 'react'
interface HoverTYpe{
    label:string , 
    Childern:React.ReactNode
}
const Hover = ({Childern , label}:HoverTYpe) => {
  return (
    <div className='group flex  gap-2 justify-start flex-col'>
        <span>{label} </span>
        <div className="w-[300px]  group-hover:visible visb h-max ">{Childern} </div>
    </div>
  )
}

export default Hover