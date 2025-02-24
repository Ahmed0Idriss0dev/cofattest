"use client"
import { useActionState } from 'react'
import React from 'react'
import UpdateProfile from '@/actions'
import { CircleAlert, Upload } from 'lucide-react'

const Info =   () => {

  const [state, formAction ,pending] = useActionState(UpdateProfile,
    {sucess:'', error:undefined})
    
    return (
      <div className={`flex justify-start items-center duration-200  flex-col w-full sm:w-[400px] ${pending ?"opacity-15 ":"opacity-100"}`}>
        
        {state.error && (
            <div className="flex h-20 w-full border rounded p-2 border-red-300 bg-red-400/10 justify-start text-red-600 items-center gap-2">
            <CircleAlert/>
            <span>{state.error} </span>
          </div>
        )}
        {state.sucess && (
            <div className="flex h-20 w-full border rounded p-2 border-green-300 bg-green-400/10 justify-start text-green-600 items-center gap-2">
            <CircleAlert/>
            <span>{state.sucess} </span>
          </div>
        )}
        <form className='space-y-2 flex flex-col gap-y-3 w-full'  action={formAction} >
        <div className="flex flex-col w-full gap-2">
         {!state.sucess && !state.sucess && (
           <div className="flex h-20 w-full border rounded p-2 border-yellow-300 bg-yellow-400/10 justify-start text-yellow-600 items-center gap-2">
           <CircleAlert/>
           <span>Pleas add your real information</span>
         </div>
         )}

          <span className='text-sm opacity-90'>Full name</span>
        <input type="text" name='name' className="input" placeholder='your name' />
        </div>
        <div className="flex flex-col gap-1">
          <span className='text-sm opacity-90'>Phone number</span>
          <input required type="text" name='phone' className="input"  placeholder='enter your phone number' />
          </div>
        <label className='mt-2 space-y-2' htmlFor="file">
         <span className='text-sm opacity-90'>Upload your cv</span>
        
        <div className="w-full border cursor-pointer duration-100 hover:bg-Cofat-100 text-Cofat-800 border-Cofat-500 border-dashed flex justify-center items-center  rounded-md bg-blue-50 h-36">
        <Upload/>

        </div>
        <input type="file" name="doc" id="file" hidden  accept='.pdf' />
          </label>     
        <button className='w-40 h-11 bg-Cofat-600 rounded-md text-white ' >Complet Profile</button>

        </form>
      </div>
    )
}

export default Info