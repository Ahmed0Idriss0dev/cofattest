import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'

const Hello = async () => {
    const user = await currentUser()
    return (
        <div className=" w-full border-r border-neutral-100 p-4  h-full  flex  justify-start items-center gap-2 flex-col">
            <div className="">
                <Image alt="" src="/Post/hello.svg" width={400} height={400} />
                <h1 className="text-2xl">hay  {user?.fullName}  Cofat need more information!</h1>
                <span>You need to complet your profile </span>
            </div>
        </div>)

}

export default Hello