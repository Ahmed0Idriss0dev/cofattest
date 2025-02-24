"use client"
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import ChatRoom from './ChatRoom'

const Chat = () => {
  const [View , setView ] = useState<boolean>(false)
  const OnView = ()=> !View ? setView(true) : setView(false) 
  return (
   <>
    <Image onClick={OnView} className='w-11 cursor-pointer h-11 rounded-full ' src='/logo/Ai.svg'  width={55} height={55} alt='user profile'/>
    <AnimatePresence>
     {View && <ChatRoom/>}
    </AnimatePresence>
   </>
  )
}

export default Chat