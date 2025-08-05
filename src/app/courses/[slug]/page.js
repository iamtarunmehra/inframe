'use client'
import ComboPack from '@/app/homeComponents/ComboPack'
import Customizecourse from '@/app/homeComponents/Customizecourse'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Page() {

    let allCourses = [
        {
            category: 'interior-design',
            courses: [
                'B.Des in Interior Design',
                'B.VOC in Interior Design',
                '11 Month Interior Design Diploma',
                '6 Months Certificate In Interior Design',
                '2 Year Diploma In Interior Design'
            ]
        },
        {
            category: 'graphic-design',
            courses: [
                'B.Des in Interior Design',
                'B.VOC in Interior Design',
                '11 Month Interior Design Diploma',
                '6 Months Certificate In Interior Design',
                '2 Year Diploma In Interior Design'
            ]
        },
        {
            category: 'fashion-designing',
            courses: [
                'B.Des in Interior Design',
                'B.VOC in Interior Design',
                '11 Month Interior Design Diploma',
                '6 Months Certificate In Interior Design',
                '2 Year Diploma In Interior Design'
            ]
        },
    ]

    let param = useParams()
    let slug = param.slug
    let specificCourse = allCourses.filter(items => items.category === slug)
    console.log(specificCourse[0].courses)

    return (
        <div className="lg:my-16 my-10">
            <h2 className="text-center uppercase text-3xl lg:text-4xl font-bold text-gray-900">
                Our <span className='text-amber-500'>{slug}</span> Programs
            </h2>

            <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 sm:gap-5  mx-auto px-4">
                {specificCourse[0].courses?.map((item, index) => {
                    return (
                        <div key={index} className='bg-white w-[100%] shadow-lg hover:bg-gradient-to-br from-amber-400 via-yellow-100 to-yellow-400 group overflow-hidden group h-auto lg:my-[40px] my-[20px] hover:shadow-2xl shadow-amber-300 duration-300 rounded-[20px]'>
                            <img className='w-[100%] rounded-t-[20px] duration-300 group-hover:scale-[1.1] h-[40%] object-cover' src='https://www.fnu.edu/wp-content/uploads/2023/10/fnu-1-1.jpg' alt="" />
                            <div className="bg-transparent p-6">
                                <h3 className="text-xl font-semibold mt-4 text-gray-900">
                                    {item}
                                </h3>
                                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                    Transform spaces and shape experiences through our comprehensive design program.
                                </p>
                                <Link href={`/courses/${slug}/${item.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}`}><button className="w-full py-3 px-4 mt-10 bg-amber-400 group-hover:bg-white hover:bg-orange-500 text-black hover:text-white  text-sm font-medium  rounded-md transition">
                                    View Details
                                </button></Link>
                            </div>
                        </div>
                    )
                })}


            </div>
            <ComboPack />
            <Customizecourse />
        </div>

    )
}
