import React from 'react'
interface Stutustype{
    label:string , 
    icon:React.ReactNode ,
    number:number ,
}
const Status = ({icon ,label ,number}:Stutustype) => {
  return (
    <div className='w-full bg-neutral-50/20 h-full px-6 rounded-md border'>
        <div className="container  w-full h-full">
            <span>{label} </span>
            {icon}
        </div>
        <div className="w-full h-full section">
            <h3>{number} </h3>
        </div>
    </div>
  )
}

export default Status