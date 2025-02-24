import { CircleCheck, CloudAlert, Eraser } from 'lucide-react'
import React from 'react'
interface Status{
    Status?:boolean
}
const Status = ({Status}:Status) => {
 switch(Status){
    case false :
        return (
         <div className="h-12 gap-1 border rounded flex justify-start items-center p-2 bg-white border-red-600 text-red-600">
             <CloudAlert/>
            <p>PLease add post details </p>
         </div>
        )
    default :
     return (
        <div className="h-12 gap-1 flex justify-start items-center p-2 bg-white border-green-600 text-green-600">
             <CircleCheck/>
            <p>Nice ! your post has been created</p>
         </div>
     )
 }
}

export default Status