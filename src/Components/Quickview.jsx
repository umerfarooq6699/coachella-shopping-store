import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartDispatch, quickAddtocart, quickAddtocart2 } from '../Slices/Saleslice'

const Quickview = ({selected}) => {
    // console.log(selected, "selected Quick Object jjjjjjjjjjjjjjjjj");

    const dispatch = useDispatch()
    const [quickObject, setquickObject] = useState({})
    const [customSize,setcustomSize]=useState()
    const [borderIndex,setborderIndex]=useState()

    useEffect(() => {
        setquickObject(selected)
    },[selected])


    console.log(quickObject, "quickObject jjjjjjjjjjjjjjj");
    const decrement = () => {
        if (quickObject.quantity === 1) {
            return quickObject
        } else {
            setquickObject({ ...quickObject, quantity: Number(quickObject.quantity) - 1 })
        }
    }
    const increment = () => {
        setquickObject({ ...quickObject, quantity: Number(quickObject.quantity) + 1 })
    }

    const change = (e) => {
        setquickObject({ ...quickObject, quantity: e.target.value })
    }

    const quickButton=()=>{
        dispatch(quickAddtocart(quickObject))
        dispatch(cartDispatch())
        dispatch(quickAddtocart2())
    }

    const sizes=(obj,idx)=>{
        console.log("working")
        setcustomSize(obj)
        setborderIndex(idx)
    }
    console.log(customSize)
    console.log(borderIndex)
    return (
        <>

            {
                quickObject &&
                <div className='grid grid-cols-2 relative'>

                    <div className='w-full h-[400px]'>
                        <img className='w-full h-full' src={quickObject.images && quickObject.images[0]} alt="" />
                    </div>

                    <div className='p-5'>
                        <h1 className='text-2xl'>{quickObject.name}</h1>

                        <div className='flex justify-between mt-4'>
                            <div className='flex'>
                                <h1>${quickObject.price}.00</h1>
                                <h1 className='ml-4'>${quickObject.discount}.00</h1>
                            </div>
                            <div>({quickObject.reviews} reviews)</div>
                        </div>

                        <h1 className='mt-4'>Size : {customSize}</h1>

                        <div className='w-[250px] h-[40px] flex justify-between mt-4'>
                            {
                                quickObject.sizes &&
                                quickObject.sizes.map((e, i) => {
                                    return (
                                        <>
                                            <div onClick={()=>sizes(e,i)} className={`w-[40px] h-[40px] cursor-pointer flex justify-center items-center rounded ${borderIndex===i?"border border-black":""}`}>{e}</div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <h1 className='mt-4'>Quantity</h1>
                        <div className='flex mt-4'>
                            <div className='flex'>
                                <div onClick={decrement} className='w-[40px] h-[40px] border border-gray-400 flex justify-center items-center cursor-pointer'>-</div>
                                <input onChange={change} type="text" className='w-[60px] border border-gray-400 text-center' value={quickObject.quantity} />
                                <div onClick={increment} className='w-[40px] h-[40px] border border-gray-300 flex justify-center items-center cursor-pointer'>+</div>
                            </div>
                            <div onClick={quickButton} className='w-full cursor-pointer py-2 ml-4 border border-black rounded flex justify-center items-center hover:bg-black hover:text-white transition duration-300'>ADD TO CART</div>
                        </div>

                    </div>
                </div>
            }


        </>
    )
}

export default Quickview