import React, { useState } from 'react'
import Darklogo from '../Images/dark-logo.webp'
import Emptycart from '../Images/empty-cart.webp'
import { useDispatch, useSelector } from 'react-redux'
import { cartDecrement, cartDispatch, cartIncrement, cartcrossDispatch, quickcartRemove, } from '../Slices/Saleslice'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { cartArray, cartCheck } = useSelector(state => state.Ecommerce)
    const dispatch = useDispatch()
    const [sign, setsign] = useState(false)
    const [search, setsearch] = useState(false)
    const [leftbar, setleftbar] = useState(false)

    const Sign = () => {
        setsign(true)
    }
    const Signcross = (event) => {
        if (event.target.classList.contains("login_lay")) {
            setsign(false)
        }
    }
    const Signincross = () => {
        setsign(false)
    }
    const Search = () => {
        setsearch(true)
    }
    const Searchcross = (event) => {
        if (event.target.classList.contains("search_lay")) {
            setsearch(false)
        }
    }
    const Searchcrossbtn = () => {
        setsearch(false)
    }
    const cartIcon = () => {
        dispatch(cartDispatch())
    }

    const overlay = (event) => {
        if (event.target.classList.contains('blacklay')) {
            dispatch(cartcrossDispatch());
        }
    };

    const cartArrayreduce = cartArray.reduce((a, b) => {
        return a + (b.quantity * b.discount)
    }, 0)

    const menu = () => {
        setleftbar(!leftbar)
    }
    return (
        <>
            <div className='w-full h-[60px] flex justify-between items-center px-[5%] relative'>
                {/* <div onClick={menu} className='text-2xl block lg:hidden'>
                    <i class="fa-solid fa-bars"></i>
                </div> */}
                {/* <ul className='w-[300px] hidden  lg:flex justify-between'>
                    <Link to="">
                        <li className='cursor-pointer group'>
                            HOME
                            <div className='h-[2px] w-0 bg-black duration-500 group-hover:w-full'></div>
                        </li>
                    </Link>
                    <Link>
                        <li className='cursor-pointer group'>
                            SHOP
                            <div className='h-[2px] w-0 bg-black duration-500 group-hover:w-full'></div>
                        </li>
                    </Link>
                    <Link>
                        <li className='cursor-pointer group'>
                            CART
                            <div className='h-[2px] w-0 bg-black duration-500 group-hover:w-full'></div>
                        </li>
                    </Link>
                    <Link>
                        <li className='cursor-pointer group'>
                            CHECKOUT
                            <div className='h-[2px] w-0 bg-black duration-500 group-hover:w-full'></div>
                        </li>
                    </Link>
                </ul> */}
                <div className='w-[150px]'>
                    <img src={Darklogo} className='w-full h-full' alt="" />
                </div>
                <div className=''>
                    {/* <div onClick={Sign} className='cursor-pointer'><i class="text-xl fa-solid fa-user"></i></div>
                    <div onClick={Search} className='cursor-pointer'><i class="text-xl fa-solid fa-magnifying-glass"></i></div>
                    <div className='cursor-pointer'><i class="text-xl fa-regular fa-star"></i></div> */}
                    <div onClick={cartIcon} className='cursor-pointer relative'>
                        <i class="text-2xl fa-solid fa-cart-shopping"></i>
                        <div className='w-[20px] h-[20px] rounded-full flex justify-center font-bold items-center bg-black text-white absolute -top-2 left-3'>{cartArray.length}</div>
                    </div>
                </div>

                {/* -------------------------------Menu-------------------------- */}
                {/* <div className={`h-screen w-[32%] bg-black duration-300 absolute top-[80px] -left-[32%] ${leftbar ? "left-0" : "-left-[32%]"}`}>
                    <ul className='text-white'>
                        <li className='border-b p-2 cursor-pointer hover:bg-white hover:text-black duration-300'>HOME</li>
                        <li className='border-b p-2 cursor-pointer hover:bg-white hover:text-black duration-300'>SHOP</li>
                        <li className='border-b p-2 cursor-pointer hover:bg-white hover:text-black duration-300'>CART</li>
                        <li className='border-b p-2 cursor-pointer hover:bg-white hover:text-black duration-300'>CHECKOUT</li>
                    </ul>
                </div> */}


                {/* ..............................Log In ................................ */}
                {/* <div onClick={Signcross} className={`login_lay w-full h-screen bg-[rgba(118,122,116,0.62)] flex justify-center ${sign ? "visible" : "hidden"} items-center absolute top-0 left-0 cursor-crosshair`}>
                    <div className='w-[80%] md:w-[50%] h-[400px] bg-white rounded-2xl p-5 relative'>

                        <div onClick={Signincross} className='w-[35px] h-[35px] flex justify-center items-center hover:bg-black hover:text-white transition-all duration-500 cursor-pointer absolute -top-5 -right-4 rounded-full bg-white text-black'>
                            <i class="fa-solid fa-xmark"></i>
                        </div>

                        <h1 className='text-center text-3xl'>Sign In</h1>
                        <p className='text-center mt-4'>Don't have an account yet? Sign up for free</p>
                        <input type="text" className='mt-5 w-full py-3 border border-gray-300 px-3' placeholder='Your username or email' />
                        <input type="password" className='mt-5 w-full py-3 border border-gray-300 px-3' placeholder='Password' />
                        <div className='flex justify-between mt-5'>
                            <div className='flex'>
                                <input type="checkbox" />
                                <label htmlFor="" className='ml-3'>Stay signed in</label>
                            </div>
                            <h1>Forget Your Password?</h1>
                        </div>
                        <button className='w-full py-2 mt-7 hover:scale-y-110 transition-all duration-200 bg-black text-white'>Log In</button>

                    </div>
                </div> */}

                {/* ..............................Search................................. */}
                {/* <div onClick={Searchcross} className={`search_lay w-full h-screen bg-[rgba(118,122,116,0.62)] absolute top-0 left-0 z-20 ${search ? "block" : "hidden"} cursor-crosshair`}>
                    <div className={`w-full h-[150px] bg-white flex justify-between items-center absolute -top-[150x] ${search ? "top-0" : "-top-[150px]"} transition-all duration-1000 cursor-auto`}>
                        <div onClick={Searchcrossbtn} className='absolute top-2 right-4 text-xl cursor-pointer'><i class="fa-solid fa-xmark"></i></div>
                        <div className='w-full flex justify-between items-center px-[50px]'>
                            <div className='w-[130px]'>
                                <img src={Darklogo} className='w-full h-full' alt="" />
                            </div>
                            <div className='w-[50%]'>
                                <input type="text" className='w-full px-3 py-2 border border-black' placeholder='Search products' />
                            </div>
                            <div className='w-[120px] flex justify-between'>
                                <div className='cursor-pointer'><i class="text-xl fa-solid fa-user"></i></div>
                                <div className='cursor-pointer'><i class="text-xl fa-regular fa-star"></i></div>
                                <div className='cursor-pointer'><i class="text-xl fa-solid fa-cart-shopping"></i></div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* ..............................Cart.............................. */}
                <div onClick={overlay} className={`blacklay w-full h-screen z-20 bg-[rgba(118,122,116,0.62)] ${cartCheck ? "block" : "hidden"} fixed top-0 left-0 cursor-crosshair`}>
                    <div className={`w-[100%] md:w-[50%] lg:w-[30%] h-screen fixed top-0 z-10 p-5 ${cartCheck ? "right-0" : "-right-[30%]"} overflow-auto bg-white cursor-pointer`}>
                        <div onClick={() => dispatch(cartcrossDispatch())} className='absolute top-3 right-4 cursor-pointer text-xl'><i class="fa-solid fa-xmark"></i></div>

                        {
                            cartArray && cartArray.length > 0 ?

                                <>

                                    {
                                        cartArray.map((e, i) => {
                                            return (
                                                <>
                                                    {/* <h1 className='mt-5 font-[500] text-xl'>"{e.name}" has been added to cart</h1> */}
                                                    <div className='flex justify-center items-center gap-3 lg:px-5 pt-5 mt-4'>
                                                        <div className='w-full'>
                                                            <img className='w-full' src={e.images[0]} alt="" />
                                                        </div>
                                                        <div className=''>
                                                            <h1 className='font-[500] text-xl'>{e.name}</h1>
                                                            <h1 className='font-[500]'>${e.price}.00</h1>
                                                            <h1 className='font-[500]'>${e.discount}.00</h1>
                                                            <div className='flex mt-2'>
                                                                <div className='flex'>
                                                                    <div onClick={() => dispatch(cartDecrement(e))} className='w-[30px] h-[30px] border border-gray-400 flex justify-center items-center cursor-pointer'>-</div>
                                                                    <input type="text" className='w-[60px] h-[30px] border border-gray-400 text-center' value={e.quantity} />
                                                                    <div onClick={() => dispatch(cartIncrement(e))} className='w-[30px] h-[30px] border border-gray-400 flex justify-center items-center cursor-pointer'>+</div>
                                                                </div>
                                                                <div>
                                                                    <button onClick={() => dispatch(quickcartRemove(i))} className='bg-red-500 text-white rounded px-2 py-1 ml-2'>Remove</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }

                                    <div className='flex justify-between mt-5'>
                                        <p>Total</p>
                                        <p>${cartArrayreduce}</p>
                                    </div>

                                    <div className='w-full py-2 flex justify-center items-center rounded mt-3 bg-black text-white hover:bg-[rgb(34,34,34)]'>Checkout</div>

                                </>
                                :
                                <div>
                                    <h1 className='text-2xl'>Shopping Cart</h1>
                                    <div className='w-[80%] mx-auto mt-9'>
                                        <img src={Emptycart} className='w-full h-full' alt="" />
                                    </div>
                                    <h1 className='text-xl text-center mt-5'>Your cart is currently empty.</h1>
                                    <p className='text-center mt-3'>You may check out all the available products and buy some in the shop.</p>
                                    <Link to={"/"}>
                                        <button onClick={()=>dispatch(cartcrossDispatch())} className='bg-black text-white px-5 py-2 mt-7 ml-[30%]'>Return to Home</button>
                                    </Link>
                                </div>
                        }




                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar