import FetchUserDb from '@/Helper/FetchUserDb'

const page = async () => {
  await FetchUserDb()
  return (
    <div className=""></div>
  ) 
}

export default page