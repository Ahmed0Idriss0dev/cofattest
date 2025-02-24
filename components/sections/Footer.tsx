import React from 'react'

const Footer = () => {
  return (
    <div className='section  p-5'>
        <div className="container rounded bg-Cofat-950 min-h-52  text-white">
          <div className="w-full grid-cols-1 space-y-4 p-4 h-full sm:grid-cols-2 grid md:grid-cols-4">
            <div className="w-full h-full">
            <h1 className='text-2xl fong-bold'>Cofat One</h1>
            <p>by cofat</p>
            </div>
            <div className="w-full h-full">
            <h1 className='text-2xl fong-bold'>Contact</h1>
            <p>Cofatmarac@Cofat.net</p>
            <p>0530122285</p>
            </div>
            <div className="w-full h-full">
            <h1 className='text-2xl fong-bold'>More</h1>
            <p>About</p>
            <p>Location</p>

            </div>
            <div className="w-full h-full">
            <h1 className='text-2xl fong-bold'>Scail Media</h1>
            <p>X.com</p>
            <p>Linkedin</p>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer