import React from 'react'
import Image1 from '../Images/coachella-feature-product-1.webp'
import Image2 from '../Images/obj9Image1.webp'
import Image3 from '../Images/obj9Image2.webp'
import Image4 from '../Images/obj9Image3.webp'
import Image5 from '../Images/obj9Image4.webp'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = ({ onClick }) => (
    <div className="custom-next-arrow w-[50px] h-[50px] rounded-full cursor-pointer absolute top-2/4 right-3 hover:bg-black hover:text-white duration-300 -translate-y-[50%] flex justify-center items-center border border-gray-400" onClick={onClick}>
        <i class="fa-solid fa-arrow-right"></i>
    </div>
);

const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-prev-arrow w-[50px] h-[50px] rounded-full cursor-pointer absolute top-2/4 left-3 z-10 hover:bg-black hover:text-white duration-300 -translate-y-[50%] flex justify-center items-center border border-gray-400" onClick={onClick}>
        <i class="fa-solid fa-arrow-left"></i>
    </div>
);

const Highheel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 w-[90%] mx-auto mt-[70px]'>

                <div className='col-span-1 flex flex-col justify-center items-center'>
                    <h1 className='mb-[50px] text-3xl md:text-4xl font-[500]'>Sale upto 50% OFF</h1>
                    <div className='w-[250px] h-[300px]'>
                        <Slider {...settings}>
                            <div className='w-[250px] h-[300px]'>
                                <img src={Image2} className='w-full h-full' alt="" />
                            </div>
                            <div className='w-[250px] h-[300px]'>
                                <img src={Image3} className='w-full h-full' alt="" />
                            </div>
                            <div className='w-[250px] h-[300px]'>
                                <img src={Image4} className='w-full h-full' alt="" />
                            </div>
                            <div className='w-[250px] h-[300px]'>
                                <img src={Image5} className='w-full h-full' alt="" />
                            </div>

                        </Slider>
                    </div>
                </div>

                <div className='col-span-2 mt-7 lg:mt-0 hidden md:block'>
                    <img src={Image1} alt="" />
                </div>
            </div>
        </>
    )
}

export default Highheel