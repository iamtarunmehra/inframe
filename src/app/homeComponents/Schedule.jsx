import React from 'react'

export default function Schedule() {
    return (
        <div className='max-w-7xl p-3 lg:p-0 mx-auto lg:my-[60px] my-[20px] grid sm:grid-cols-[40%_auto] grid-cols-1 items-center gap-10'>
            <div className='shadow-lg shadow-amber-500 p-7 rounded-[20px]'>
                <h3 className='text-[30px] text-gray-800 font-semibold'>Schedule a Free Session</h3>
                <form action="">
                    <div className='my-[15px]'>
                        <p className='text-gray-800'>Name*</p>
                        <input placeholder='Enter Your Name' required className='w-[100%] px-[10px] py-[10px] border-[1px]  border-gray-300 rounded' type="text" />
                    </div>
                    <div className='my-[15px]'>
                        <p className='text-gray-800'>Phone Number*</p>
                        <input placeholder='Enter Your Name' required className='w-[100%] px-[10px] py-[10px] border-[1px]  border-gray-300 rounded' type="text" />
                    </div>
                    <div className='my-[15px]'>
                        <p className='text-gray-800'>Email*</p>
                        <input placeholder='Enter Your Name' required className='w-[100%] px-[10px] py-[10px] border-[1px]  border-gray-300 rounded' type="text" />
                    </div>
                    <div className='my-[15px]'>
                        <p className='text-gray-800'>City*</p>
                        <input placeholder='Enter Your Name' required className='w-[100%] px-[10px] py-[10px] border-[1px]  border-gray-300 rounded' type="text" />
                    </div>
                    <select className='w-[100%] py-[12px] px-[5px] my-[10px] cursor-pointer border-[1px] border-gray-300 rounded  text-gray-700' name="" id="">
                        <option value="">Choose a course</option>
                        <option value="">Interior design</option>
                        <option value="">Fashion design</option>
                        <option value="">UI/UX design</option>
                        <option value="">Animation and VFX</option>
                        <option value="">Jwellery design</option>
                        <option value="">Fine Arts</option>
                    </select>
                    <button type='submit' className='bg-amber-500 duration-300 mt-5 w-[100%] py-[9px] rounded hover:bg-amber-400 font-semibold text-[18px] text-gray-900'>Book a session</button>
                </form>

            </div>
            <div style={{ backgroundImage: 'url("https://www.inframeschool.com/_next/image?url=%2F1717492615506%20-%20Copy%20(2)%20(1).jpg&w=1920&q=75")' }} className='w-[100%] p-7 z-[-10] relative h-[100%] bg-no-repeat bg-cover rounded-xl'>
                <div className='w-[100%] z-[-5] h-[100%] absolute top-0 rounded-xl left-0 bg-[rgba(0,0,0,0.7)]'></div>
                <div className='z-50'>
                    <h3 className='text-white text-[35px] font-semibold'>Welcome to Counseling</h3>
                    <p className='text-white text-[18px] mt-3'>We are here to help you through your journey. Fill out the form to get started today.</p>
                </div>
            </div>
        </div>
    )
}
