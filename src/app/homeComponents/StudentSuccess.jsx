import React from 'react'

export default function StudentSuccess() {
    let studentData = [
        { studentName: 'Bharat Kumar', src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdl5h5f8gm%2Fimage%2Fupload%2Fv1740325121%2FWhatsApp_Image_2025-01-21_at_11.50.20_AM_mpno5k.jpg&w=1920&q=75', description: 'Hi, my name is Hashim Ansari. I am a student at Inframe School, currently pursuing a 1-year Digital Marketing Diploma course' },
        { studentName: 'Nikhil Rao', src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdl5h5f8gm%2Fimage%2Fupload%2Fv1740325112%2FWhatsApp_Image_2025-01-21_at_11.50.18_AM_hlxalc.jpg&w=3840&q=75', description: 'My name is Uttam Chouhan. I have studied Graphic Design at Inframe School, and I must say it' },
        { studentName: 'Neha', src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdobngibkc%2Fimage%2Fupload%2Fv1750847462%2Fcarimagecover%2Fkojbodvoic0eeupi9saj.jpg&w=3840&q=75', description: 'My name is Neha Arora. I am pursuing a Diploma in Graphic Design from Inframe School. The' },
        { studentName: 'Muskan Agarwal', src: 'https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdl5h5f8gm%2Fimage%2Fupload%2Fv1740325103%2FWhatsApp_Image_2025-01-21_at_11.50.12_AM_1_x7hnca.jpg&w=1920&q=75', description: 'I am Yash Saini. I have joined the Graphic Design course at Inframe School. The faculty is dedicated' },
    ]
    return (
        <div className="w-[100%] ">
            <div className='max-w-7xl p-3 lg:p-0 mx-auto lg:my-[80px] my-[20px]'>
                <h3 className='lg:text-[40px] text-[30px] text-gray-800 mb-5 font-semibold'>Student <span className='text-amber-500'>Success </span>Stories</h3>
                <p className='text-gray-800 text-[23px]'>Discover how our platform has transformed the learning journey of our students Sufiyan</p>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-[40px] lg:gap-10 gap-10'>

                    {studentData.map((item, index) => {
                        return (
                            <div key={index} style={{ backgroundImage: `url(${item.src})` }} className='w-[100%] h-[450px] bg-no-repeat bg-cover bg-center relative rounded-[10px] flex items-end hover:scale-[1.05] overflow-hidden duration-300'>
                                <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-[100%] h-[100%] rounded-[10px]'></div>
                                <div className='z-10 p-3'>
                                    <h3 className='text-white text-[18px] border-b-[1px] pb-2 border-white'>{item.description}</h3>
                                    <div className='mt-3 flex gap-2 items-center'>
                                        <img className='w-[50px] h-[50px] rounded-full object-cover' src="https://www.inframeschool.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdl5h5f8gm%2Fimage%2Fupload%2Fv1740325063%2FIMG_20250206_204402_2_fdncsp.jpg&w=1920&q=75" alt="" />
                                        <div>
                                            <h3 className='text-[20px] font-semibold text-white'>{item.studentName}</h3>
                                            <span className='text-white text-[20px] '>Student</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
