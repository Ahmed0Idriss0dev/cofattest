import FetchUserDb from '@/Helper/FetchUserDb'
import { redirect } from 'next/navigation'

const page = async () => {
  await FetchUserDb()
  redirect('/Profile')
  return (
    <div className=""></div>
  ) 
}

export default page