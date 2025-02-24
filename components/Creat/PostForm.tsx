"use client"
import addPost from '@/actions/addPost'
import React, { useActionState } from 'react'
import Status from './Status'

const PostForm = () => {
    const [state, formAction ,pending] = useActionState(addPost,
        {sucess:'', error:undefined})
  return (
    <div className='flex p-5 flex-col gap-2'>
    <div className="">
    <h1 className='text-2xl '>Creat new Job Post</h1>
    <p>creat job post for more users</p>
    {state.sucess && <Status />}
    {state.error && <Status Status={false} />}

    </div>

    
    
    <form action={formAction} className='flex flex-col gap-2'>
        <label htmlFor="">Title</label>
        <input type="text" name='title' className='input' placeholder='Job title' />
        <label htmlFor="">Branch</label>
        <input type="text"  className='input'   name='Branch' placeholder='Cofat-Kenitra' />
        <label htmlFor="">Location</label>
        <input type="text"  className='input'   name='Location' placeholder='Morocco' />
        <label htmlFor="">Description</label>

        <textarea name='description' placeholder='Post description' className='h-52 input resize-none'/>
        <button disabled={pending ? true : false} type='submit' className='w-52  bg-gradient-to-br from-Cofat-500 to-Cofat-600 text-white flex justify-center items-center h-11 rounded  '>publish</button>
    </form>

    
   </div>
  )
}

export default PostForm