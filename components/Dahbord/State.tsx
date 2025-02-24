import React from 'react'
import OverviewCrad from '../UI/OverviewCrad'
import { File, Users2 } from 'lucide-react'
import FetchAll from '@/Helper/FetchAll'
const State = async () => {
  const {getPost } = await FetchAll()
  const allapply= getPost.reduce((initialValue , allapply)=>{
    const {JobApplication} = allapply._count
    const gettotal =  JobApplication + initialValue
    return gettotal
  },0)
  
  return (
    <div className='w-full gap-2 h-60  p-4 grid grid-cols-3'>
      <OverviewCrad
       icon={<Users2/>}
       label='Apply'
       status={allapply}
      />
    
      <OverviewCrad
       icon={<File/>}
       label='Post'
       status={getPost.length}
      />
     


    </div>
  )
}

export default State