import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-[rgb(245,245,245)] px-3 py-9 md:p-[50px] mt-[70px]'>
                <div className=''>
                    <h1 className='font-bold'>Company</h1>
                    <p className='mt-3 text-[rgb(102,109,115)]'>Find a location nearest you.</p>
                    <p className='mt-1 text-[rgb(102,109,115)]'>See Our Stores</p>
                    <p className='mt-5 text-[rgb(102,109,115)]'>+391 (0)35 2568 4593</p>
                    <p className='mt-2 text-[rgb(102,109,115)]'>hello@domain.com</p>
                </div>
                <div>
                    <h1 className='font-bold mt-5'>Information</h1>
                    <ul>
                        <li className='text-[rgb(102,109,115)] hover:text-black cursor-pointer mt-2'>My Account</li>
                        <li className='text-[rgb(102,109,115)] hover:text-black cursor-pointer mt-2'>Login</li>
                        <li className='text-[rgb(102,109,115)] hover:text-black cursor-pointer mt-2'>My Cart</li>
                        <li className='text-[rgb(102,109,115)] hover:text-black cursor-pointer mt-2'>Wishlist</li>
                        <li className='text-[rgb(102,109,115)] hover:text-black cursor-pointer mt-2'>Checkout</li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <h1 className='font-bold'>Services</h1>
                    <ul>
                        <li className='text-[rgb(102,109,115)] hover:text-black cursor-pointer mt-2'>About Us</li>
                        <li className='text-[rgb(102,109,115)] hover:text-black cursor-pointer mt-2'>Careers</li>
                        <li className='text-[rgb(102,109,115)] hover:text-black cursor-pointer mt-2'>Delivery Information</li>
                        <li className='text-[rgb(102,109,115)] hover:text-black cursor-pointer mt-2'>Privacy Policy</li>
                        <li className='text-[rgb(102,109,115)] hover:text-black cursor-pointer mt-2'>Terms & Condition</li>
                    </ul>
                </div>
                <div className='mt-5'>
                    <h1 className='font-bold'>Subscribe</h1>
                    <p className='mt-3 text-[rgb(102,109,115)]'>Enter your email below to be the first to know about new collections and product launches.</p>
                    <input type="text" placeholder='Your Email' className='w-full bg-transparent border border-black py-2 px-3 mt-4' />
                </div>
            </div>
        </>
    )
}

export default Footer