import React from 'react'
import Button from '../UI/Button'
import { Building2, File, LayoutDashboard, LogOut, Settings } from 'lucide-react'
import Logo from '../UI/Logo'
import { SignOutButton } from '@clerk/nextjs'

const SideBar = () => {
  return (
    <div className='w-full   h-full overflow-auto  border-r  py-4 flex justify-between  flex-col items-start gap-2 p-2'>
             <Logo/>
             <div className="h-[40%] space-y-2 w-full  ">
              <Button icon={<LayoutDashboard/>} label='Overview' path='/dashbourd'/>
              <Button icon={<File/>} label='My Post' path='/Post'/>
              <Button icon={<Building2/>} label='Company' path='/Company'/>

              <Button icon={<Settings/>} label='AI Configration' path='/AI'/>
             </div>
             <div className="h-[40%] flex justify-end flex-col w-full  ">
             <SignOutButton>
              <button className='flex h-14 w-full justify-center items-center gap-2 bg-Cofat-100 rounded'>
                <LogOut/>
                <span>Sign Out</span>
              </button>
            </SignOutButton>
             </div>
    </div>
  )
}

export default SideBar