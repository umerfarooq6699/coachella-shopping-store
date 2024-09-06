import React from 'react'
import Loafers from '../Images/loafers.webp'
import Heels from '../Images/high-heels.webp'
import Chair from '../Images/obj9Image3.webp'

const Collections = () => {
    return (
        <>
            <h1 className='text-3xl md:text-5xl ml-3 md:ml-9 lg:ml-[70px] mt-[70px]'>Popular Collections</h1>
            <p className='ml-3 md:ml-9 lg:ml-[70px] mt-3 text-xl text-gray-500'>Save on all best selling and exclusive styles</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 w-[90%] mx-auto mt-4 *: md:mt-[40px]'>
                <div className='cursor-pointer overflow-hidden'>
                    <img className='hover:scale-110 transition-all duration-1000' src={Loafers} alt="" />
                </div>
                <div className='cursor-pointer overflow-hidden'>
                    <img className='hover:scale-110 transition-all duration-1000' src={Heels} alt="" />
                </div>
                <div className='cursor-pointer overflow-hidden'>
                    <img className='hover:scale-110 transition-all duration-1000' src={Chair} alt="" />
                </div>
            </div>
        </>
    )
}

export default Collections