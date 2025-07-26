import React from 'react'

export default function Testimonials() {
    return (
        <div className='max-w-7xl overflow-hidden p-3 lg:p-0 mx-auto lg:my-[60px] my-[20px]'>
            <h3 className='text-center lg:text-[40px] text-[30px] text-amber-500 mb-5 font-semibold'>Testimonials</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                <iframe className='rounded-[15px]' width='100%' height="450" src="https://www.youtube.com/embed/8Zz5zcOPHDw"></iframe>
                <iframe className='rounded-[15px]' width='100%' height="450" src="https://www.youtube.com/embed/Vl9aTeiM6RM"></iframe>
                <iframe className='rounded-[15px]' width='100%' height="450" src="https://www.youtube.com/embed/AyRoxi85cHw"></iframe>
            </div>
        </div>
    )
}