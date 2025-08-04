'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export default function SliderBanner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="w-[100%] bg-gray-100 py-[30px]">
            <div className='max-w-7xl mx-auto lg:my-[20px] my-[20px]'>
                <Slider {...settings}>
                    <div>
                        <img className='w-[100%] lg:h-[80vh] h-[50vh] lg:object-center object-fill object-center  rounded' src="https://www.inframedesigninstitute.com/images/homesliderpic/1732701125MOCK_TEST01.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-[100%] lg:h-[80vh] h-[50vh] lg:object-center object-fill object-center  rounded' src="https://www.inframedesigninstitute.com/images/homesliderpic/1732701188ADMISSON.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-[100%] lg:h-[80vh] h-[50vh] lg:object-center object-fill object-center  rounded' src="https://www.inframedesigninstitute.com/assets/upload/image/GET.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[100%] lg:h-[80vh] h-[50vh] lg:object-center object-fill object-center  rounded' src="https://www.inframedesigninstitute.com/images/homesliderpic/1732702600GET_COURSE.jpg" alt="" />
                    </div>
                </Slider>

            </div>
        </div>
    )
}
