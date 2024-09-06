import React, { useState } from 'react'
import array from '../Data'
import { useDispatch, useSelector } from 'react-redux'
import { quickViewcross, quickViewdis, setModelObject } from '../Slices/Saleslice'
import { Link } from 'react-router-dom'

const Sellers = () => {
    const dispatch = useDispatch()
    const [selected, setselected] = useState({})
    const { quickcheck } = useSelector(state => state.Ecommerce)


    // const Viewcross = () => {
    //     dispatch(quickViewcross())
    // }

    const Add = (e) => {
        localStorage.setItem("object", JSON.stringify(e))
        console.log(e, "Deals Category")
    }
    return (
        <>
            <h1 className='text-3xl md:text-5xl ml-3 md:ml-9 lg:ml-[70px] mt-[70px]'>Best Sellers</h1>
            <p className='ml-3 md:ml-9 lg:ml-[70px] mt-3 text-xl text-gray-500'>Save on all best selling and exclusive styles</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 w-[90%] mx-auto relative mt-7 md:mt-[40px]'>
                {
                    array.map((e, i) => {
                        return (
                            <>
                                {
                                    e.category === "Sellers" &&
                                    <div>
                                        <div className='relative w-full group overflow-hidden'>
                                            <Link onClick={() => Add(e)} to="/selectoptions">
                                                <img src={e.images[0]} className='w-full' alt="" />
                                                <img src={e.images[1]} className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-110 duration-1000 w-full' />
                                                <button className='w-[80%] text-white py-2 absolute left-2/4 -bottom-[40px] -translate-x-2/4 group-hover:bottom-[40px] transition-all duration-400 bg-black hover:bg-[rgb(34,34,34)]'>SELECT OPTIONS</button>
                                            </Link>

                                            {/* <div className='w-[50px] h-[150px] absolute top-9 -right-[60px] group-hover:right-4 transition-all duration-400 flex justify-between items-center flex-col'>
                                                <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer'>
                                                    <i class="fa-regular fa-star"></i>
                                                </div>
                                                <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer'>
                                                    <i class="fa-solid fa-angles-left"></i>
                                                </div>
                                                <div onClick={() => {
                                                    dispatch(setModelObject(e))
                                                    dispatch(quickViewdis())
                                                }} className='w-[40px] h-[40px] rounded-full hover:bg-black hover:text-white transition-all duration-400 bg-white flex justify-center items-center cursor-pointer'>
                                                    <i class="fa-solid fa-eye"></i>
                                                </div>
                                            </div> */}

                                        </div>
                                        <div className='mt-5'>
                                            <h1 className='text-2xl text-[rgb(34,34,34)] font-[500]'>{e.name}</h1>
                                            <div className='flex mt-2'>
                                                <h1 className='line-through font-[500] text-xl text-gray-500'>${e.price}.00</h1>
                                                <h1 className='ml-3 text-xl font-[500]'>${e.discount}.00</h1>
                                            </div>
                                            {/* <div className='flex mt-2'>
                                                <div className='w-[30px] h-[30px] rounded-full bg-black'></div>
                                                <div className='w-[30px] h-[30px] rounded-full bg-gray-500 ml-4'></div>
                                            </div> */}
                                        </div>
                                    </div>
                                }
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Sellers