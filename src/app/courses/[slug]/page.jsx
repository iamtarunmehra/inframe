'use client'
import React, { useState } from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Image from 'next/image';
import { useParams } from 'next/navigation';


export default function Page() {

    let params = useParams()
    let title = params.slug.toLowerCase().replace('-', ' ')

    let allCoursesData = {
        'interior-design': {
            description: 'where you learn ',
            price: '11,000',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'fashion-designing': {
            description: 'where you learn',
            price: '11,200',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'graphic-design': {
            description: 'where you learn',
            price: '13,151',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'animation-vfx': {
            description: 'where you learn',
            price: '11,025',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'ui-ux-design': {
            description: 'where you learn',
            price: '14,250',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'jwellery-design': {
            description: 'where you learn',
            price: '11,305',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'digital-marketing': {
            description: 'where you learn',
            price: '12,251',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'entrepreneurship-skill': {
            description: 'where you learn',
            price: '15,182',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'media-entertainment': {
            description: 'where you learn',
            price: '36,201',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'entrepreneurship-skill': {
            description: 'where you learn',
            price: '17,020',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'advertisement-marketing': {
            description: 'where you learn',
            price: '13,025',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
        'fine-arts': {
            description: 'where you learn',
            price: '18,700',
            aboutCourse: 'Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.'
        },
    }

    //to destructure a specific course which is selected
    const { slug } = params
    let singleCourse = allCoursesData[slug]


    const [currentFaqId, setCurrentFaqId] = useState(0)
    const [preview, setPreview] = useState(false)
    const [secondPreview, setSecondPreview] = useState(false)

    let faqs = [
        { id: "1", question: 'What is diff ?', answer: 'diff full full form full form full form full form full form full form full form full form full form full form full form full form full form full form full form full form full form full form full form full form form is difference' },
        { id: "2", question: 'What opportunity does Bizgurukul provide ?', answer: 'difull ffull form full form full form orm full form full form full form ff full ffull form full form full form full form full form full form full form full form orm full form full form full form full form full form full form  full form full form is difference' },
        { id: "3", question: 'What are education bundles?', answer: 'difull form full form full form full form full form ff full forfull form full form full form full form full form full form m is difference' },
        { id: "4", question: 'What kind of skill-based courses do you provide?', answer: 'dffull form full form full form full form full form full form ull form full form full form full form iff full form is difference' },
        { id: "5", question: 'Is the Bizgurukul Government verified?', answer: 'full form full form full form full form full form full form difull form full form full form full form full form full form full form full form full form full form ff full form is difference' },
        // { id: "6", question: 'What is diff ?', answer: 'diff full form is difference' },
        // { id: "7", question: 'What is diff ?', answer: 'diff full form is difference' },
    ]
    let [videoSectionOpen, setVideoSectionOpen] = useState(false)
    let data = [
        { id: "1", title: "Introduction", duration: '2:04' },
        { id: "2", title: "What Is A Website And What Is Wordpress, It's Advantages, Etc", duration: '5:20' },
        { id: "3", title: "What Is Domain Name, Web Hosting & How To Buy", duration: '10:50' },
        { id: "4", title: "C Panel Introduction, Business Email, Ssl And Wordpress Installation", duration: '12:04' },
        { id: "5", title: "WordPress Installation", duration: '10:04' },
        { id: "6", title: "Changing The Theme, Creating The Pages And Menus", duration: '30:04' },
        { id: "7", title: "Astra Theme Sidebar Options", duration: '24:04' },
        { id: "8", title: "Creating Content On The Homepage With Elementor", duration: '55:04' },
        { id: "9", title: "Creating Content On The Homepage With Elementor (Continues...)", duration: '1:02:04' },
    ]

    const handlePreview = (id) => {
        id === '1' && setPreview(true)
        id === '2' && setSecondPreview(true)
    }


    return (
        <>

            {/* for overlay  */}
            {(preview || secondPreview) && <div className='fixed w-[100%] h-[100vh] bg-[rgba(0,0,0,0.7)] z-[10]'></div>}

            {/* for previews */}
            {preview && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/40">
                    <div className="w-[90%] max-w-[900px] aspect-video bg-white rounded-[10px] relative">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-[10px]"
                            src="https://player.vimeo.com/video/1104707814?badge=0&autopause=0&player_id=0&app_id=58479&loop=1"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            title="Introduction"
                        ></iframe>
                        <span
                            onClick={() => setPreview(false)}
                            className="absolute -top-4 -right-4 cursor-pointer hover:bg-amber-400 transition duration-300 text-[25px] bg-gray-300 rounded-full py-[5px] px-[15px]"
                        >
                            &times;
                        </span>
                    </div>
                </div>
            )}

            {secondPreview && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/40">
                    <div className="w-[90%] max-w-[900px] aspect-video bg-white rounded-[10px] relative">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-[10px]"
                            src="https://player.vimeo.com/video/1104723677?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&loop=1"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            title="Basics"
                        ></iframe>
                        <span
                            onClick={() => setSecondPreview(false)}
                            className="absolute -top-4 -right-4 cursor-pointer hover:bg-amber-400 transition duration-300 text-[25px] bg-gray-300 rounded-full py-[5px] px-[15px]"
                        >
                            &times;
                        </span>
                    </div>
                </div>
            )}



            <div className='w-[100%] bg-gray-100 lg:py-[40px] lg:mb-10 sm:py-[20px]'>

                <div className='max-w-7xl mx-auto grid lg:grid-cols-[65%_auto] p-3 lg:p-0 grid-cols-1 lg:gap-10 gap-5'>

                    {/* left section */}
                    <div>

                        {/* section 1 */}
                        <h3 className='text-[30px] mb-5 capitalize text-gray-800'>{title} : {singleCourse.description}</h3>
                        <iframe className='rounded-[10px]' width="100%" height="400" src="https://www.youtube.com/embed/e_dv7GBHka8"></iframe>
                        <div className='lg:my-[60px] my-[20px]'>
                            <h4 className='text-[25px] font-semibold text-gray-900 mb-3'>About this course</h4>
                            <p className=''>{singleCourse.aboutCourse}</p>
                        </div>
                    </div>

                    {/* right section */}
                    <div className='bg-white shadow-md  rounded-[15px] lg:p-5 p-3'>
                        <button className="mb-4 px-5 py-2 bg-yellow-100 text-yellow-700 border border-yellow-400 rounded-full text-sm font-medium">
                            Limited Period Only
                        </button><br />
                        <span className='flex items-center gap-2 text-[40px] font-semibold text-orange-600 my-[15px]'><LiaRupeeSignSolid /> {singleCourse.price}/-</span>
                        <ul>
                            <li className='my-[10px] capitalize text-[20px] text-gray-800 flex items-center gap-2'><GoDotFill /> Language - Hindi</li>
                            <li className='my-[10px] capitalize text-[20px] text-gray-800 flex items-center gap-2'><GoDotFill /> can watch anytime</li>
                            <li className='my-[10px] capitalize text-[20px] text-gray-800 flex items-center gap-2'><GoDotFill /> Use On Desktop,Tablet & Mobile</li>
                            <li className='my-[10px] capitalize text-[20px] text-gray-800 flex items-center gap-2'><GoDotFill /> Full Lifetime Access</li>
                            <li className='my-[10px] capitalize text-[20px] text-gray-800 flex items-center gap-2'><GoDotFill /> Certificate Of Completion</li>
                            <li className='my-[10px] capitalize text-[20px] text-gray-800 flex items-center gap-2'><GoDotFill /> 24 lessons (6Hr.0 Min.)</li>
                            <li className='my-[10px] capitalize text-[20px] text-gray-800 flex items-center gap-2'><GoDotFill /> Language - Hindi</li>
                            <li className='my-[10px] capitalize text-[20px] text-gray-800 flex items-center gap-2'><GoDotFill /> Learn at Your Own Pace</li>
                        </ul>
                        <div className='grid grid-cols-2 gap-5 mt-7'>
                            <button className='py-[10px] cursor-pointer bg-gray-300 border-[1px] hover:border-gray-700  border-transparent rounded-md'>Add To Cart</button>
                            <button className='py-[10px] text-white cursor-pointer bg-orange-400 hover:bg-orange-500 duration-300 rounded-md'>Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-[100%] bg-white lg:py-[20px] lg:mb-10 sm:py-[20px]'>
                <div className='max-w-7xl p-3 lg:p-0 mx-auto '>
                    <h3 className='text-[30px] text-gray-900 mb-3'>Course Content</h3>
                    <p className='flex gap-5'>
                        <span>Section 1</span>
                        <span>24 Lectures</span>
                        <span>6Hr.0 Min.</span>
                    </p>
                    <div className={`${videoSectionOpen ? 'h-auto' : 'h-[310px] overflow-hidden'}`}>
                        <div className="overflow-x-auto">
                            <table className="w-full my-5 border border-gray-300 text-sm">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="lg:table-cell hidden px-4 py-3 border-b border-gray-300">Play</th>
                                        <th className="px-4 py-3 border-b border-gray-300">Course</th>
                                        <th className="text-right px-4 py-3 border-b border-gray-300">Preview</th>
                                        <th className="text-right px-4 py-3 border-b border-gray-300">Duration</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {data.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={`hover:bg-gray-50 ${item.id === '1' || item.id === '2' ? 'text-black' : 'text-gray-500'
                                                }`}
                                        >
                                            <td className="lg:table-cell hidden px-4 py-3 border-b border-gray-300">
                                                <FaPlayCircle className="text-xl" />
                                            </td>
                                            <td className="px-4 py-3 border-b border-gray-300">{item.title}</td>
                                            <td className="px-4 py-3 border-b border-gray-300 text-right text-blue-600 cursor-pointer">
                                                {(item.id === '1' || item.id === '2') && (
                                                    <span onClick={() => handlePreview(item.id)}>Preview</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3 border-b border-gray-300 text-right">
                                                {item.duration}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='flex justify-end'><button onClick={() => setVideoSectionOpen(!videoSectionOpen)} className='p-3 text-[18px] cursor-pointer text-blue-600'>{videoSectionOpen ?
                        <p className='flex gap-1 items-center'>Show Less <FaChevronUp /></p>
                        :
                        <p className='flex gap-1 items-center'>Show More <FaAngleDown /></p>
                    }
                    </button></div>
                </div>

            </div>


            <div className='w-[100%] bg-gray-100 lg:py-[20px] lg:mb-10 sm:py-[20px]'>
                <div className='max-w-7xl p-3 lg:p-0 mx-auto '>
                    <div className='lg:p-0 p-3 grid lg:grid-cols-[35%_auto] md:grid-cols-2 grid-cols-1 lg:gap-15 gap-5 lg:my-[60px] my-[20px]'>
                        {/* section 3 */}
                        <div className='shadow-2xl bg-white p-10 rounded-2xl lg:h-[550px] '>
                            <h4 className='text-[30px] text-gray-900 mb-3'>Earn the Certificate of Completion</h4>
                            <p className='text-gray-700 mb-3'>Unlock greater career opportunities and a better LinkedIn profile with an added certificate.</p>
                            <Image width={500} height={350} alt='' className='w-[500px] h-[350px] object-contain' src='https://marketplace.canva.com/EAFCP1Ox_-c/1/0/1600w/canva-blue-yellow-minimalist-internship-certificate-RR9ND_Uk1Bw.jpg' />
                        </div>

                        {/* section 4 */}
                        <div className=''>
                            <h4 className='text-[30px] text-gray-800 mb-5'>Frequently Asked Questions</h4>

                            {
                                faqs.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <h6 onClick={() => {
                                                setCurrentFaqId(item.id)
                                                currentFaqId === item.id && setCurrentFaqId(0)
                                            }} className={`${item.id === currentFaqId ? 'rounded-t-lg' : 'rounded-lg'} w-[100%] lg:text-[20px] text-[16px] py-[12px] cursor-pointer px-[20px] border-[2px] mt-[20px] bg-white border-gray-300 text-gray-700  flex justify-between items-center`}>
                                                {item.question}
                                                <FaAngleRight className='text-[20px] ' />
                                            </h6>
                                            <div className={`${currentFaqId === item.id ? 'h-auto opacity-[1]' : 'h-0 scale-0 opacity-0'} text-gray-900 p-3 rounded-b-lg bg-white border-[2px] border-gray-300 text-[16px] left-0 duration-300 w-[100%] origin-top`}>
                                                {item.answer}
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>

            <div className='w-[100%] bg-white lg:py-[20px] lg:mb-0 sm:py-[20px]'>
                <div className='max-w-7xl p-3 lg:p-0 mx-auto '>

                    <div className='lg:my-[60px] my-[20px] lg:p-0 p-3'>
                        <h2 className='text-[35px] text-gray-800 font-semibold mb-5'>What you&#39;ll learn</h2>
                        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10'>

                            <p className='grid grid-cols-[8%_auto] shadow-lg shadow-amber-300 border-[1px] border-amber-300  bg-white items-start p-3 rounded-md gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-gray-600' /> How to design & develop websites without coding knowledge</p>
                            <p className='grid grid-cols-[8%_auto] shadow-lg shadow-amber-300 border-[1px] border-amber-300  bg-white items-start p-3 rounded-md gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-gray-600' /> How to buy a domain name and web hosting.</p>
                            <p className='grid grid-cols-[8%_auto] shadow-lg shadow-amber-300 border-[1px] border-amber-300  bg-white items-start p-3 rounded-md gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-gray-600' /> How to create pages and menus easily.</p>
                            <p className='grid grid-cols-[8%_auto] shadow-lg shadow-amber-300 border-[1px] border-amber-300  bg-white items-start p-3 rounded-md gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-gray-600' /> How to embed Google Maps on your website.</p>
                            <p className='grid grid-cols-[8%_auto] shadow-lg shadow-amber-300 border-[1px] border-amber-300  bg-white items-start p-3 rounded-md gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-gray-600' />How to create inquiry forms.</p>
                            <p className='grid grid-cols-[8%_auto] shadow-lg shadow-amber-300 border-[1px] border-amber-300  bg-white items-start p-3 rounded-md gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-gray-600' />How to create a backup of your website. </p>
                            <p className='grid grid-cols-[8%_auto] shadow-lg shadow-amber-300 border-[1px] border-amber-300  bg-white items-start p-3 rounded-md gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-gray-600' />How to launch your website on the internet with just a few steps.</p>

                            <p className='grid grid-cols-[8%_auto] shadow-lg shadow-amber-300 border-[1px] border-amber-300  bg-white items-start p-3 rounded-md gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-gray-600' />How to start your own home-based web design business.</p>
                            <p className='grid grid-cols-[8%_auto] shadow-lg shadow-amber-300 border-[1px] border-amber-300  bg-white items-start p-3 rounded-md gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-gray-600' />How to Create Products Easily</p>
                            <p className='grid grid-cols-[8%_auto] shadow-lg shadow-amber-300 border-[1px] border-amber-300  bg-white items-start p-3 rounded-md gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-gray-600' />What is a Website and What is WordPress, it&#39;s advantages, etc
                            </p>
                        </div>
                    </div>
                </div >
            </div>


        </>
    )


}
