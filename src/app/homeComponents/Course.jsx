'use client'
import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { courseData } from '../slice/courseSlice';



export default function Course() {


    let allCourse = [
        {
            name: 'Interior Design',
            category: 'design',
            src: 'https://media.designcafe.com/wp-content/uploads/2020/06/16184832/yellow-living-room-chair.jpg',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
        {
            name: 'Fashion Designing',
            category: 'design',
            src: 'https://www.gkftii.com/blog/img/bsc-fashion-design-course-details.webp',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
        {
            name: 'Graphic Design',
            category: 'design',
            src: 'https://www.andacademy.com/resources/wp-content/uploads/2023/09/feature-41.webp',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
        {
            name: 'UI/UX Design',
            category: 'design',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFsJutzYZHWVBq3S_LM8JCGbjxV8s7VkJgg&s',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
        {
            name: 'Animation VFX',
            category: 'design',
            src: 'https://5.imimg.com/data5/SELLER/Default/2024/8/439918324/NY/KI/JX/227098061/vfx-course-500x500.jpg',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
        {
            name: 'Jwellery design course',
            category: 'design',
            src: 'https://www.pdinstitute.in/wp-content/uploads/2024/01/Basic-Jewellery-Designing-500x333.jpg',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
        {
            name: 'Fine Arts',
            category: 'art',
            src: 'https://content.jdmagicbox.com/comp/def_content/fine-art-institutes/npkmcjcdsa-fine-art-institutes-5-c6fxd.jpg',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
        {
            name: 'Digital Marketing',
            category: 'business',
            src: 'https://www.njitm.com/admin/pages/image/950227.png',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
        {
            name: 'Entrepreneurship Skill',
            category: 'business',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrG6xa0LsA7yajvMNFtYSdBRD0I3ImljF-qg&s',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
        {
            name: 'Media-Entertainment',
            category: 'business',
            src: 'https://cdn01.alison-static.net/courses/1682/alison_courseware_intro_1682.jpg',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
        {
            name: 'Advertisement Marketing',
            category: 'business',
            src: 'https://www.brainwonders.in/blog_feature_images/2023/11/2023-11-17-16-37-29Explore_the_Top_Marketing_Courses_After_12th.webp',
            points: [
                { key: 'BDes In Interior Design' },
                { key: 'BVOC in Interior Design' },
                { key: 'BSC in Interior Design' },
                { key: 'One Year Diploma in Interior Design' },
                { key: 'Three Year Diploma in Interior Design' },
            ]
        },
    ]
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(courseData(allCourse))
    }, [dispatch])

    const [activeTab, setActiveTab] = useState('all')

    let tabs = [{ name: 'all' }, { name: 'art' }, { name: 'design' }, { name: 'business' }]
    return (
        <div className="w-[100%] ">
            <div className='max-w-7xl mx-auto lg:my-[80px] my-[20px] justify-between p-3 lg:p-0'>
                <h3 className='text-center lg:text-[40px] text-[30px] text-gray-800 mb-5 font-semibold'>Our Industry-Centered <span className='text-amber-500'>Programs</span></h3>
                <div className='flex lg:gap-[15px] gap-[5px] justify-center relative z-10'>
                    <div className='md:block hidden w-[100%] h-[3px] bg-amber-300 absolute top-[50%] translate-y-[-50%]'></div>
                    {tabs.map((item, index) => {
                        return (
                            <button key={index} onClick={() => setActiveTab(item.name)} className={`${activeTab === item.name ? 'bg-amber-300 text-gray-800 ' : 'bg-white hover:bg-amber-50'} w-[150px] z-20 text-amber-500  hover:text-gray-800  duration-300 lg:text-[18px] px-2 font-semibold uppercase cursor-pointer lg:py-[10px] py-[7px] border-[1px] mb-2 rounded`}>{item.name}</button>
                        )
                    })}
                </div>
                <div>
                    {activeTab === 'all' && <All allCourse={allCourse} />}
                    {activeTab === 'art' && <Art allCourse={allCourse} />}
                    {activeTab === 'design' && <Design allCourse={allCourse} />}
                    {activeTab === 'business' && <Business allCourse={allCourse} />}
                </div>

            </div>
        </div>
    )

}



function All({ allCourse }) {

    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 '>
            {
                allCourse.length >= 1 ?
                    allCourse.map((item, index) => {
                        let { points } = item
                        return (
                            <div key={index} className='bg-white w-[100%] shadow-lg hover:bg-gradient-to-br from-amber-400 via-yellow-100 to-yellow-400 group overflow-hidden group h-auto my-[40px] hover:shadow-2xl shadow-amber-300 duration-300 rounded-[20px]'>
                                <img className='w-[100%] duration-300 group-hover:scale-[1.1] rounded-t-[20px] h-[40%] object-cover' src={item.src} alt="" />
                                <div className='px-7 pt-3 h-[70%]'>
                                    <h2 className='text-gray-900 my-[10px] font-semibold text-[24px]'>{item.name}</h2>
                                    <ul>
                                        {points.map((point, ind) => {
                                            return (
                                                <li key={ind} className='flex items-center gap-3 my-2'><div className='w-2 h-2 rounded-full bg-amber-300' /> {point.key}</li>
                                            )
                                        })}
                                    </ul>
                                    <Link href={`/courses/${item.name.toLowerCase().replace(/[\s\/]+/g, '-')}`}><button className='w-[100%] hover:bg-orange-400 lg:mt-3 flex justify-center items-center gap-2 py-[7px] rounded-[10px] duration-300 cursor-pointer bg-amber-400 group-hover:bg-white hover:text-white'>Explore Now <FaLongArrowAltRight /></button></Link>
                                </div>
                            </div>
                        )
                    })
                    : <div>hello</div>
            }
        </div>
    )
}

function Art({ allCourse }) {
    let data = allCourse.filter(item => item.category === 'art')
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
            {data.map((item, index) => {
                let { points } = item
                return (
                    <div key={index} className='bg-white w-[100%] shadow-lg hover:bg-gradient-to-br from-amber-400 via-yellow-100 to-yellow-400 group overflow-hidden group h-auto my-[40px] hover:shadow-2xl shadow-amber-300 duration-300 rounded-[20px]'>
                        <img className='w-[100%] z-10 group-hover:scale-[1.1] duration-300 rounded-t-[20px] h-[40%] object-cover' src={item.src} alt="" />
                        <div className='px-7 pt-3 '>
                            <h2 className='text-gray-900 my-[10px] font-semibold text-[24px]'>{item.name}</h2>
                            <ul>
                                {points.map((point, ind) => {
                                    return (
                                        <li key={ind} className='flex items-center gap-3 my-2'><div className='w-2 h-2 rounded-full bg-amber-300' /> {point.key}</li>
                                    )
                                })}
                            </ul>
                            <Link href={`/courses/${item.name.toLowerCase().replace(/[\s\/]+/g, '-')}`}><button className='w-[100%] hover:bg-orange-400 lg:mt-3 flex justify-center items-center gap-2 py-[7px] rounded-[10px] duration-300 cursor-pointer bg-amber-400 group-hover:bg-white hover:text-white'>Explore Now <FaLongArrowAltRight /></button></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function Design({ allCourse }) {
    let data = allCourse.filter(item => item.category === 'design')
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
            {data.map((item, index) => {
                let { points } = item
                return (
                    <div key={index} className='bg-white w-[100%] shadow-lg hover:bg-gradient-to-br from-amber-400 via-yellow-100 to-yellow-400 group overflow-hidden group h-auto my-[40px] hover:shadow-2xl shadow-amber-300 duration-300 rounded-[20px]'>
                        <img className='w-[100%] group-hover:scale-[1.1] duration-300 rounded-t-[20px] h-[40%] object-cover' src={item.src} alt="" />
                        <div className='px-7 pt-3 h-[70%]'>
                            <h2 className='text-gray-900 my-[10px] font-semibold text-[24px]'>{item.name}</h2>
                            <ul>
                                {points.map((point, ind) => {
                                    return (
                                        <li key={ind} className='flex items-center gap-3 my-2'><div className='w-2 h-2 rounded-full bg-amber-300' /> {point.key}</li>
                                    )
                                })}
                            </ul>
                            <Link href={`/courses/${item.name.toLowerCase().replace(/[\s\/]+/g, '-')}`}><button className='w-[100%] hover:bg-orange-400 lg:mt-3 flex justify-center items-center gap-2 py-[7px] rounded-[10px] duration-300 cursor-pointer bg-amber-400 group-hover:bg-white hover:text-white'>Explore Now <FaLongArrowAltRight /></button></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function Business({ allCourse }) {
    let data = allCourse.filter(item => item.category === 'business')
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
            {data.map((item, index) => {
                let { points } = item
                return (
                    <div key={index} className='bg-white w-[100%] shadow-lg hover:bg-gradient-to-br from-amber-400 via-yellow-100 to-yellow-400 group overflow-hidden group h-auto my-[40px] hover:shadow-2xl shadow-amber-300 duration-300 rounded-[20px]'>
                        <img className='w-[100%] rounded-t-[20px] duration-300 group-hover:scale-[1.1] h-[40%] object-cover' src={item.src} alt="" />
                        <div className='px-7 pt-3 h-[70%]'>
                            <h2 className='text-gray-900 my-[10px] font-semibold text-[24px]'>{item.name}</h2>
                            <ul>
                                {points.map((point, ind) => {
                                    return (
                                        <li key={ind} className='flex items-center gap-3 my-2'><div className='w-2 h-2 rounded-full bg-amber-300' /> {point.key}</li>
                                    )
                                })}
                            </ul>
                            <Link href={`/courses/${item.name.toLowerCase().replace(/[\s\/]+/g, '-')}`}><button className='w-[100%] hover:bg-orange-400 mt-3 flex justify-center items-center gap-2 py-[7px] rounded-[10px] duration-300 cursor-pointer group-hover:bg-white bg-amber-400 hover:text-white'>Explore Now <FaLongArrowAltRight /></button></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
