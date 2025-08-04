import React from 'react'

export default function Banner() {
    return (
        <div className="w-[100%] ">
            <div className='max-w-7xl overflow-hidden p-3 lg:p-0 mx-auto lg:my-[80px] my-[20px] lg:gap-y-0 gap-y-10 grid lg:grid-cols-[55%_auto] gap-3 grid-cols-1 justify-between'>
                <div>
                    <button className='px-[20px] text-[16.5px] mb-2 font-semibold py-[5px] rounded-[15px] bg-amber-400'>4 Years Full-Time</button>
                    <h2 className='text-[35px] font-bold text-gray-800 my-2'>Bachelor of  Design <br /> in <span className='text-amber-500'>Interior Design</span></h2>
                    <p className='text-[18px] text-gray-700'>Transform spaces and shape experiences through our comprehensive design program. Learn from industry experts and build a successful career in interior design. </p>
                    <button className='lg:w-[330px] w-[100%] hover:bg-gradient-to-br from-amber-400 via-yellow-100 to-yellow-400 transition-all ease-in-out py-[15px] rounded-xl text-[22px] text-gray-900 font-semibold mt-3 cursor-pointer bg-amber-300   duration-300 '>Enroll Now</button>
                </div>
                <div>
                    <iframe className='lg:w-[600px] w-[100%] h-[350px]' src="https://www.youtube.com/embed/IZ7zCSj8G40" title="Life At InFrame | InFrame College Campus Jodhpur"></iframe>
                </div>
            </div>
        </div>
    )
}
