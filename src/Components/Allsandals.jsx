import React from 'react'
import Image1 from '../Images/obj1Image1.webp'
import Image2 from '../Images/obj2Image1.webp'
import Image3 from '../Images/obj3Image1.webp'
import Image4 from '../Images/obj4Image1.webp'
import Image5 from '../Images/obj9Image1.webp'
import Image6 from '../Images/obj10Image1.webp'
import Image7 from '../Images/obj12Image1.webp'

const Allsandals = () => {
  return (
    <div className='grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-1 gap-5 w-[90%] mx-auto mt-[70px]'>
        <div className='rounded-full transition-all duration-700 hover:scale-105 cursor-pointer'>
            <img src={Image1} className='rounded-full' alt="" />
        </div>
        <div className='rounded-full transition-all duration-700 hover:scale-105 cursor-pointer'>
            <img src={Image2} className='rounded-full' alt="" />
        </div>
        <div className='rounded-full transition-all duration-700 hover:scale-105 cursor-pointer'>
            <img src={Image3} className='rounded-full' alt="" />
        </div>
        <div className='rounded-full transition-all duration-700 hover:scale-105 cursor-pointer'>
            <img src={Image4} className='rounded-full' alt="" />
        </div>
        <div className='rounded-full transition-all duration-700 hover:scale-105 cursor-pointer'>
            <img src={Image5} className='rounded-full' alt="" />
        </div>
        <div className='rounded-full transition-all duration-700 hover:scale-105 cursor-pointer'>
            <img src={Image6} className='rounded-full' alt="" />
        </div>
        <div className='rounded-full transition-all duration-700 hover:scale-105 cursor-pointer'>
            <img src={Image7} className='rounded-full' alt="" />
        </div>
    </div>
  )
}

export default Allsandals