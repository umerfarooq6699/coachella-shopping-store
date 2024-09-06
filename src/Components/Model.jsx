import React from 'react'
import Quickview from './Quickview'
import { useDispatch, useSelector } from 'react-redux'
import { quickViewcross } from '../Slices/Saleslice'

const Model = () => {

    const dispatch = useDispatch()

    const {quickcheck, modelObject}=useSelector(state=>state.Ecommerce)
    console.log(quickcheck, modelObject);

    const model=(even)=>{
        if(even.target.classList.contains("model_overlay")){
            dispatch(quickViewcross())
        }
    }

  return (
    <>

                <div onClick={model} className={`model_overlay w-full h-screen bg-[#0000009a] flex justify-center items-center ${quickcheck ? "block" : "hidden"} fixed top-0 left-0 z-20 cursor-crosshair`}>
                    <div className='w-[75%] h-[400px] bg-white rounded-xl relative cursor-pointer'>
                        <div onClick={()=>dispatch(quickViewcross())} className='w-[30px] h-[30px] rounded-full bg-white absolute -top-3 z-10 -right-2 flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                        <Quickview selected={modelObject} />
                    </div>
                </div>

    </>
  )
}

export default Model