import React, { useEffect, useState } from 'react'
import { cartDispatch, selectAdd } from '../Slices/Saleslice'
import { useDispatch } from 'react-redux'
import Navbar from '../Components/Navbar'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from 'react-router-dom'

const CustomSliderArrows = ({ onClick, direction }) => (
    <button onClick={onClick} className={`custom-arrow z-10 w-[40px] h-[40px] hover:bg-[rgb(34,34,34)] rounded-full flex justify-center items-center absolute top-2/4 left-2 lg:left-9 -translate-y-2/4 bg-gray-500 text-white ${direction}`}>
        <i class="fa-solid fa-arrow-left"></i>
    </button>
);
const CustomSliderArrows2 = ({ onClick, direction }) => (
    <button onClick={onClick} className={`custom-arrow w-[40px] h-[40px] hover:bg-[rgb(34,34,34)]  rounded-full flex justify-center items-center absolute top-2/4 right-2 lg:right-9 -translate-y-2/4 bg-gray-500 text-white ${direction}`}>
        <i class="fa-solid fa-arrow-right"></i>
    </button>
);

const Selectoption = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const [localObject, setlocalObject] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0);
    const [customSize, setcustomSize] = useState(38)
    const [borderIndex, setborderIndex] = useState(0)

    useEffect(() => {
        setlocalObject(JSON.parse(localStorage.getItem("object")) || {})
    }, [])

    const decrement = () => {
        if (localObject.quantity === 1) {
            return localObject
        }
        else {
            setlocalObject(
                { ...localObject, quantity: localObject.quantity - 1 }
            )
        }
    }
    const increment = () => {
        setlocalObject(
            { ...localObject, quantity: localObject.quantity + 1 }
        )
    }

    const clear = () => {
        setlocalObject("")
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentIndex(index),
        prevArrow: <CustomSliderArrows direction="prev" />,
        nextArrow: <CustomSliderArrows2 direction="next" />,
    };


    const goToCustomIndex = (index) => {
        setCurrentIndex(index);
        slider.slickGoTo(index);
    };

    let slider;

    const sizes = (obj, idx) => {
        setcustomSize(obj)
        setborderIndex(idx)
    }

    const handleCart = () => {
        dispatch(selectAdd(localObject))
        dispatch(cartDispatch())
        navigate("/")
    }

    console.log(borderIndex)
    return (
        <>
            {
                localObject &&
                <Navbar />
            }
            {
                localObject &&
                <div className='grid grid-cols-1 md:grid-cols-2 mt-[50px] w-4/4 h-auto gap-5 px-3 md:px-[80px]'>

                    <div className='w-full flex gap-4 md:mt-[60px] lg:mt-0'>
                        <div className='w-[15%] md:w-[16%] lg:w-[13%] flex justify-start'>
                            <div className='flex justify-between items-center flex-col h-[55%]'>
                                {
                                    localObject.images && localObject.images.map((e, i) => {
                                        return (
                                            <>
                                                <div onClick={() => goToCustomIndex(i)} className='cursor-pointer w-full h-auto mt-2 '>
                                                    <img className={`w-full h-auto ${i === currentIndex ? 'border-[3px] border-black rounded p-1' : ""}`} src={e} alt="" />
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='w-[75%]'>
                            <Slider ref={(c) => (slider = c)} {...settings}>
                                {
                                    localObject.images && localObject.images.map((e, i) => {
                                        return (
                                            <>
                                                <div className='w-full'>
                                                    <img className='w-full h-full' src={e} alt="" />
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>


                    <div className=''>
                        <h1 className='text-3xl'>{localObject.name}</h1>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <h1 className='font-bold text-xl mt-4'>${localObject.price}.00</h1>
                                <h1 className='ml-3 text-xl text-yellow-600 font-bold mt-4'>${localObject.discount}.00</h1>
                            </div>
                            <div className='text-xl font-[500]'>({localObject.reviews} reviews)</div>
                        </div>
                        <h1 className='mt-4 text-xl font-[500]'>Size : {customSize}</h1>
                        <div className='flex justify-between w-[240px] mt-4'>
                            {
                                localObject.sizes &&
                                localObject.sizes.map((e, i) => {
                                    return (
                                        <>
                                            <div onClick={() => sizes(e, i)} className={`w-[40px] h-[40px] flex font-[500] justify-center items-center rounded-xl border cursor-pointer ${borderIndex == i ? "bg-black text-white" : ""}`}>{e}</div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <h1 className='mt-4 text-xl font-[500]'>Quantity :</h1>

                        <div className='flex  mt-5'>
                            <div className='flex items-center'>
                                <div onClick={decrement} className='w-[35px] h-[35px] border border-gray-400 flex justify-center items-center cursor-pointer text-xl font-[500]'>-</div>
                                <input type="text" className='w-[60px] h-[35px] py-0 border border-gray-400 text-center' value={localObject.quantity} />
                                <div onClick={increment} className='w-[35px] h-[35px] border border-gray-400 flex justify-center items-center cursor-pointer text-xl font-[500]'>+</div>
                            </div>
                            <div onClick={()=>handleCart(localObject)} className='w-full cursor-pointer ml-5 py-2 border bg-black hover:bg-black rounded flex justify-center items-center text-white hover:text-white transition duration-300'>ADD TO CART</div>
                        </div>

                            <Link to="/">
                                <button className='w-full py-2 bg-black flex justify-center items-center mt-5 md:text-xl text-white rounded'>Back To Home</button>
                            </Link>

                    </div>

                </div>
            }
        </>
    )
}

export default Selectoption