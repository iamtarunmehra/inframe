import React from 'react'

export default function Testimonials() {
    return (
        <div className="w-[100%] bg-gray-100 py-[10px]">
            <div className='max-w-7xl overflow-hidden p-3 lg:p-0 mx-auto lg:my-[80px] my-[20px]'>
                <h3 className='text-center lg:text-[40px] text-[30px] text-gray-900 mb-5 font-semibold'>Testimonials</h3>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                    <iframe className='rounded-[15px]' width='100%' height="450" src="https://www.youtube.com/embed/8Zz5zcOPHDw"></iframe>
                    <iframe className='rounded-[15px]' width='100%' height="450" src="https://www.youtube.com/embed/Vl9aTeiM6RM"></iframe>
                    <iframe className='rounded-[15px]' width='100%' height="450" src="https://www.youtube.com/embed/AyRoxi85cHw"></iframe>
                </div>
            </div>
        </div>
    )
}