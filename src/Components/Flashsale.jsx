import React from 'react'
import Heroimage from '../Images/hero-image.webp'

const Flashsale = () => {
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-4'>
            <div>
                <img src={Heroimage} className='w-full h-full' alt="" />
            </div>
            <div className='bg-[rgb(237,245,233)] lg:flex justify-center items-center px-2 py-9'>
                <div className='flex justify-center items-center flex-col lg:w-[60%]'>
                    <h1 className='text-3xl'>FLASH SALE</h1>
                    <h1 className='text-[80px] lg:text-[150px]'>-70%</h1>
                    <p className='text-center text-xl'>Great deals for black friday. Hurry up and get your beauty products</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Flashsale