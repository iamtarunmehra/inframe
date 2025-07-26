'use client'
import React, { useState } from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";



export default function Page() {
    const [currentFaqId, setCurrentFaqId] = useState(0)
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


    return (
        <>
            <div className='w-[100%] lg:my-[60px] my-[20px]'>
                <div className='max-w-7xl mx-auto grid lg:grid-cols-[65%_auto] p-3 lg:p-0 grid-cols-1 lg:gap-10 gap-5'>

                    {/* left section */}
                    <div>

                        {/* section 1 */}
                        <h3 className='text-[30px] mb-5 capitalize text-gray-800'>Interior Design : Learn this Course Basic to Advance</h3>
                        <iframe className='rounded-[10px]' width="100%" height="400" src="https://www.youtube.com/embed/yYDa_3MeITU"></iframe>
                        <div className='lg:my-[60px] my-[20px]'>
                            <h4 className='text-[25px] font-semibold text-gray-900 mb-3'>About this course</h4>
                            <p className=''>Welcome to our specially crafted WordPress course, tailored for individuals seeking to master website o learn web design during their spare time, enhancing their skillset. Workers in search of an additional stream of income by venturing into the exciting world of web designing and development.</p>
                        </div>

                    </div>

                    {/* right section */}
                    <div className=''>
                        <button className='px-[35px] py-[8px] bg-gray-100 border-[1px] border-gray-400 rounded'>Limited Period Only</button><br />
                        <span className='flex items-center gap-2 text-[45px] text-amber-800 my-[15px]'><LiaRupeeSignSolid /> 11,550/-</span>
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


            <div className='max-w-[1320px] mx-auto '>


                {/* section 2 */}
                <div className='w-[90%] mx-auto'>
                    <h3 className='text-[30px] text-gray-900 mb-3'>Course Content</h3>
                    <p className='flex gap-5'>
                        <span>Section 1</span>
                        <span>24 Lectures</span>
                        <span>6Hr.0 Min.</span>
                    </p>
                    <div className={`${videoSectionOpen ? 'h-auto' : 'h-[310px] overflow-hidden'}`}>
                        <table className='w-[100%]  my-5 border border-gray-300'>
                            <thead>
                                <tr className='bg-gray-100'>
                                    <th className='lg:block hidden text-start px-3 py-3 border-b border-gray-300'>Play</th>
                                    <th className='text-start px-5 py-3  border-b border-gray-300'>Course</th>
                                    <th className='text-end px-3 py-3 border-b border-gray-300'>Preview</th>
                                    <th className='text-end px-3 py-3 border-b border-gray-300'>Duration</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {data.map((item, index) => {
                                    return (
                                        <tr key={index} className={`hover:bg-gray-50 ${(item.id === '1' || item.id === '2') ? 'text-black' : 'text-gray-500'}`}>
                                            <td className='lg:block hidden border-b px-3 py-3 border-gray-300'><FaPlayCircle className='text-[22px]' /></td>
                                            <td className=' border-b px-5 py-3 border-gray-300'>{item.title}</td>
                                            <td className=' border-b px-3 py-3 border-gray-300 text-blue-600 cursor-pointer text-end'>{(item.id === '1' || item.id === '2') && <span>Preview</span>}</td>
                                            <td className=' border-b px-3 py-3 border-gray-300 text-end'>{item.duration}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className='flex justify-end'><button onClick={() => setVideoSectionOpen(!videoSectionOpen)} className='p-3 text-[18px] cursor-pointer text-blue-600'>{videoSectionOpen ?
                        <p className='flex gap-1 items-center'>Show Less <FaChevronUp /></p>
                        :
                        <p className='flex gap-1 items-center'>Show More <FaAngleDown /></p>
                    }
                    </button></div>
                </div>

                <div className='lg:p-0 p-3 grid lg:grid-cols-[35%_auto] md:grid-cols-2 grid-cols-1 lg:gap-15 gap-5 lg:my-[60px] my-[20px]'>
                    {/* section 3 */}
                    <div className='shadow-2xl p-10 rounded-2xl lg:h-[550px] '>
                        <h4 className='text-[30px] text-gray-900 mb-3'>Earn the Certificate of Completion</h4>
                        <p className='text-gray-700 mb-3'>Unlock greater career opportunities and a better LinkedIn profile with an added certificate.</p>
                        <Image alt='' className='w-[500px] h-[350px] object-contain' src='https://marketplace.canva.com/EAFCP1Ox_-c/1/0/1600w/canva-blue-yellow-minimalist-internship-certificate-RR9ND_Uk1Bw.jpg' />
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
                                        }} className='w-[100%] text-[20px] py-[12px] cursor-pointer px-[20px] border-[1px] mt-[20px] bg-amber-300 border-amber-300 rounded-t-lg flex justify-between items-center'>
                                            {item.question}
                                            <FaAngleRight className='text-[20px]' />
                                        </h6>
                                        <div className={`${currentFaqId === item.id ? 'h-auto opacity-[1]' : 'h-0 scale-0 opacity-0'} p-3 rounded-b-lg border-[2px] border-amber-300 text-[18px] left-0 duration-300 w-[100%] origin-top`}>
                                            {item.answer}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                {/* section 5 */}
                <div className='lg:my-[60px] my-[20px] lg:p-0 p-3'>
                    <h2 className='text-[35px] text-gray-800 font-semibold mb-5'>What you'll learn</h2>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7'>

                        <p className='grid grid-cols-[8%_auto] shadow-md shadow-amber-400 items-start border-[1px] p-3 rounded-md border-amber-300 gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-amber-500' /> How to design & develop websites without coding knowledge</p>
                        <p className='grid grid-cols-[8%_auto] shadow-md shadow-amber-400 items-start border-[1px] p-3 rounded-md border-amber-300 gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-amber-500' /> How to buy a domain name and web hosting.</p>
                        <p className='grid grid-cols-[8%_auto] shadow-md shadow-amber-400 items-start border-[1px] p-3 rounded-md border-amber-300 gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-amber-500' /> How to create pages and menus easily.</p>
                        <p className='grid grid-cols-[8%_auto] shadow-md shadow-amber-400 items-start border-[1px] p-3 rounded-md border-amber-300 gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-amber-500' /> How to embed Google Maps on your website.</p>
                        <p className='grid grid-cols-[8%_auto] shadow-md shadow-amber-400 items-start border-[1px] p-3 rounded-md border-amber-300 gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-amber-500' />How to create inquiry forms.</p>
                        <p className='grid grid-cols-[8%_auto] shadow-md shadow-amber-400 items-start border-[1px] p-3 rounded-md border-amber-300 gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-amber-500' />How to create a backup of your website. </p>
                        <p className='grid grid-cols-[8%_auto] shadow-md shadow-amber-400 items-start border-[1px] p-3 rounded-md border-amber-300 gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-amber-500' />How to launch your website on the internet with just a few steps.</p>

                        <p className='grid grid-cols-[8%_auto] shadow-md shadow-amber-400 items-start border-[1px] p-3 rounded-md border-amber-300 gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-amber-500' />How to start your own home-based web design business.</p>
                        <p className='grid grid-cols-[8%_auto] shadow-md shadow-amber-400 items-start border-[1px] p-3 rounded-md border-amber-300 gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-amber-500' />How to Create Products Easily</p>
                        <p className='grid grid-cols-[8%_auto] shadow-md shadow-amber-400 items-start border-[1px] p-3 rounded-md border-amber-300 gap-2 h-[auto] text-[16px] text-gray-700'><AiOutlineSwapRight className='text-[25px] text-amber-500' />What is a Website and What is WordPress, it's advantages, etc
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
