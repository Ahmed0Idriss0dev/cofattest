"use client"
import Applay from '@/actions/applay'
import { Check } from 'lucide-react'
import React, { useActionState } from 'react'
interface  FromType{
    postId:string
}
const Form = ({postId}:FromType) => {
    const [state, formAction ,pending] = useActionState(Applay,
        {sucess:'', error:undefined})
    const isWait = pending ? true : false
  return (
    <form action={formAction}>
        <input type="text" defaultValue={postId} hidden  name='postid'  id="applay" />
        {state.sucess ? (
        <button disabled={isWait} className={`h-11 w-28 sm:w-36 duration-100 group-hover:bg-Cofat-500 group-hover:text-white group-hover:border-0  bg-white border-Cofat-500 border text-Cofat-600 rounded`} >
          <Check/>

        </button>

        ):(
          <button disabled={isWait} className={`h-11 w-28 sm:w-36 duration-100 group-hover:bg-Cofat-500 group-hover:text-white group-hover:border-0  bg-white border-Cofat-500 border text-Cofat-600 rounded`} >Apply</button>

        )}
    </form>
  )
}

export default Form