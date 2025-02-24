import FetchUserDb from '@/Helper/FetchUserDb'
import { redirect } from 'next/navigation'

const page = async () => {
  await FetchUserDb()
  redirect('/Profile')
  return (
    <>
    waite .....
    </>
  ) 
}

export default page