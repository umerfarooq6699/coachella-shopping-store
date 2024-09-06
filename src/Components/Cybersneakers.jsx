import React from 'react'
import Image1 from '../Images/obj12Image4.webp'
import Image2 from '../Images/coachella-pack-2.webp'

const Cybersneakers = () => {
  return (
    <>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 mt-[70px] w-[90%] mx-auto gap-4'>
            <div className='cursor-pointer overflow-hidden'>
                <img className='hover:scale-110 transition-all duration-700' src={Image1} alt="" />
            </div>
            <div className='cursor-pointer overflow-hidden'>
                <img className='hover:scale-110 transition-all duration-700' src={Image2} alt="" />
            </div>
        </div>
    </>
  )
}

export default Cybersneakers