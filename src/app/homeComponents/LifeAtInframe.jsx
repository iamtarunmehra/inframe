import React from 'react'

export default function LifeAtInframe() {
    let data = [
        { title: 'Industry-Relevant Skills', src: 'https://www.inframeschool.com/_next/image?url=%2FIMG_8698.jpg&w=3840&q=75', para: 'Stay ahead in your field by mastering high-demand skills through our online sessions.' },
        { title: 'Learn by Doing', src: 'https://www.inframeschool.com/_next/image?url=%2FIMG_8829.jpg&w=3840&q=75', para: 'Dive into real challenges from today businesses, gaining hands-on experience.' },
        { title: 'Industry-Relevant Skills', src: 'https://www.inframeschool.com/_next/image?url=%2F1721737896096.jpg&w=1920&q=75', para: 'Stay ahead in your field by mastering high-demand skills through our online sessions.' },
        // { title: 'Expert-Led Workshops', src: 'https://www.inframeschool.com/_next/image?url=%2Fimages%2Fgallery%2F1717668347893%20-%20Copy.jpg&w=3840&q=75', para: 'Learn directly from industry leaders through interactive workshops and masterclasses.' },
    ]
    return (
        <div className="w-[100%] ">
            <div className='max-w-7xl mx-auto p-3 lg:p-0 lg:my-[80px] my-[20px]'>
                <h3 className='text-center lg:text-[40px] text-[30px] text-gray-800 mb-5 font-semibold'>Life<span className='text-amber-500'>@Inframe</span></h3>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-7'>
                    {data.length >= 1 ?
                        data.map((item, index) => {
                            return (
                                <div key={index} style={{ backgroundImage: `url(${item.src})` }}
                                    className='w-[100%] relative h-[500px] bg-no-repeat bg-cover rounded-[30px] flex items-end'
                                >
                                    <div className='absolute w-[100%] h-[100%] rounded-[30px] bg-[rgba(0,0,0,0.5)]'></div>
                                    <div className='p-5 text-white z-10'>
                                        <h2 className='font-semibold text-[24px] mb-2'>{item.title}</h2>
                                        <p className='text-gray-200'>{item.para}</p>
                                    </div>
                                </div>
                            )
                        }) : ''
                    }
                </div>
            </div>
        </div>
    )
}
