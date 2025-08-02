import React from 'react'

export default function Subscribe() {
    return (
        <div className='w-[100%] bg-black py-[60px] lg:my-[80px] my-[20px]'>
            <div className='max-w-2xl p-3 lg:p-0 mx-auto'>
                <h3 className='lg:text-[35px] text-[30px] mb-4 text-white font-semibold text-center'>Stay Updated with Inframe School</h3>
                <p className='text-center text-white'>Subscribe to our newsletter to receive the latest articles, news, and updates about design education and career opportunities.</p>
                <form className='flex justify-center sm:flex-row items-center flex-col gap-5 mt-5'>
                    <input required placeholder='Your email address' type="text" className='py-[12px] text-gray-900 lg:w-[350px] text-[18px] w-[300px] px-3  rounded-[10px] bg-white' />
                    <button className='bg-amber-400 hover:uppercase hover:text-white cursor-pointer text-[18px] hover:bg-orange-500 duration-200 transition-all ease-in-out lg:w-[25%] w-[300px] font-semibold py-[12px] px-[20px] rounded-[10px]'>Subscribe</button>
                </form>
                <p className='text-gray-300 text-center mt-5'>By subscribing, you`ll receive exclusive content about design education, career opportunities, and admission updates.</p>
            </div>
        </div>
    )
}
