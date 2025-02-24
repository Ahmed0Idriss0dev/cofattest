import React from 'react'
import { motion } from 'framer-motion'
const ChatRoom = () => {
  return (
    <motion.div drag dragMomentum={false} className='w-96 bg-white right-0 flex justify-end items-center h-96 rounded  top-0 fixed  border shadow-sm '>
    </motion.div>
  )
}

export default ChatRoom