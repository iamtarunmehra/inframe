import React from 'react'
import { LuDot } from "react-icons/lu";


export default function Footer() {
    return (
        <footer
            style={{
                background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)'
            }}
            className="w-full py-[50px]"
        >
            <div className='w-[100%] border-b-[2px] border-gray-400 pb-5'>
                <div className='max-w-7xl mx-auto grid lg:grid-cols-[18%_40%_auto] grid-cols-1 lg:gap-15 gap-5 p-3 lg:p-0'>
                    <ul className='space-y-2'>
                        <li><img className='w-[180px]' src="https://www.inframeschool.com/_next/image?url=%2Fpixelcut-export-negate.png&w=384&q=75" alt="" /></li>
                        <li className='font-semibold text-[24px]'>Quick Links</li>
                        <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>About Us</li>
                        <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>Admission Process</li>
                        <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>Campus</li>
                        <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>Blog</li>
                        <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>Advisors</li>
                        <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>News & Events</li>
                        <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>Mentors</li>
                        <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>Careers</li>
                        <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>Downloads</li>
                        <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>Quick Payment</li>
                    </ul>
                    <ul>
                        <li className='font-semibold text-[24px]'>Courses We Offer</li>
                        <div className='flex lg:gap-10 gap-5'>
                            <ul>
                                <li className='my-[10px] text-gray-900 cursor-pointer font-semibold text-[18px]'>Interior Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>B. Des in Interior Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>B.VOC in Interior Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>B.Sc in Interior Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>1-Year Diploma in Interior Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>3-Year Diploma in Interior Design</li>
                            </ul>
                            <ul>
                                <li className='my-[10px] text-gray-900 cursor-pointer font-semibold text-[18px]'>Fashion Design Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>B. Des in Fashion Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>B.VOC in Fashion Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>B.Sc in Fashion Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>1-Year Diploma in Fashion Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>3-Year Diploma in Interior Design</li>
                            </ul>
                        </div>
                        <div className='flex lg:gap-10 gap-5'>
                            <ul>
                                <li className='my-[10px] text-gray-900 cursor-pointer font-semibold text-[18px]'>Graphic Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>B. Des in Graphic Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>B.VOC in Graphic Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>B.Sc in Graphic Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>1-Year Diploma in Graphic Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>3-Year Diploma in Graphic Design</li>
                            </ul>
                            <ul>
                                <li className='my-[10px] text-gray-900 cursor-pointer font-semibold text-[18px]'>UI & UX Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>B. Des in UI & UX Design</li>
                                <li className='my-[10px] text-gray-600 hover:text-gray-900 cursor-pointer'>1-Year Diploma in UI & UX Design</li>
                            </ul>
                        </div>
                    </ul>
                    <div>
                        <h3 className='text-[22px] font-semibold mb-5'>Locate Us</h3>
                        <iframe className='rounded-[15px] lg:w-[90%] w-[90%] lg:h-[300px] h-[220px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.737300906896!2d72.98363617520116!3d26.27018807703596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418e9b41703f4d%3A0xa8313d8409192420!2sInFrame%20Design%20Institute%20-%20NIFT%20%7C%20NID%20%7C%20UCEED%20%7C%20NATA%20%7C%20JEE%20%7C%20FDDI!5e0!3m2!1sen!2sin!4v1753273570979!5m2!1sen!2sin"></iframe>
                        <p className='my-[15px] max-w-[300px]'>09, Pal Link Road, Marudhar Nagar, Kamla Nehru Nagar, Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                        <p>Admissions: +91 9649 9649 37 <br /> Admin: +91 9649 9649 70</p>
                        <p>Email : <span className='text-blue-600 underline cursor-pointer'>info@inframeschool.com</span></p>
                        <p>Careers :<span className='text-blue-600 underline cursor-pointer'>hr@inframeschool.com</span>
                        </p>
                    </div>
                </div>

            </div>
            <div className='w-[100%] border-b-[2px] border-gray-400'>
                <p className='max-w-7xl p-3 my-[40px] mx-auto flex flex-wrap'>
                    <span className='font-semibold'>Free Courses : &nbsp;</span>
                    <span className='flex items-center '> <LuDot />  Copywriting </span>
                    <span className='flex items-center '> <LuDot /> Digital Marketing</span>
                    <span className='flex items-center '> <LuDot /> Graphic Design</span>
                    <span className='flex items-center '> <LuDot /> Interior Design</span>
                    <span className='flex items-center '> <LuDot /> Digital Software</span>
                    <span className='flex items-center '> <LuDot /> Facebook Ads</span>
                    <span className='flex items-center '> <LuDot /> Google Ads</span>
                    <span className='flex items-center '> <LuDot /> SEO </span>
                    <span className='flex items-center '> <LuDot /> Digital Painting</span>
                    <span className='flex items-center '> <LuDot /> Illustrations </span>
                    <span className='flex items-center '> <LuDot /> Sewing Machine Technique</span>
                    <span className='flex items-center '> <LuDot /> Furniture Making</span>
                    <span className='flex items-center '> <LuDot /> Sketching </span>
                    <span className='flex items-center '> <LuDot /> Drawing </span>
                    <span className='flex items-center '> <LuDot /> Video Editing</span>
                    <span className='flex items-center '> <LuDot /> Fashion Styspanng</span>
                    <span className='flex items-center '> <LuDot /> Fashion Communication</span>
                    <span className='flex items-center '> <LuDot /> Engspansh Communication</span>
                    <span className='flex items-center '> <LuDot /> Animation </span>
                    <span className='flex items-center '> <LuDot /> VFX </span>
                    <span className='flex items-center '> <LuDot /> Jewellery Design</span>
                    <span className='flex items-center '> <LuDot /> CAD Design</span>
                    <span className='flex items-center '> <LuDot /> Painting </span>
                    <span className='flex items-center '> <LuDot /> Business Management</span>
                    <span className='flex items-center '> <LuDot /> Draping </span>
                    <span className='flex items-center '> <LuDot /> Pattern Making</span>
                    <span className='flex items-center '> <LuDot /> Carpentry </span>
                    <span className='flex items-center '> <LuDot /> Entrepreneurship Skills</span>
                    <span className='flex items-center '> <LuDot /> Advertising </span>
                    <span className='flex items-center '> <LuDot /> Marketing</span>
                </p>
            </div>
            <div className='w-[100%] pt-5'>
                <div className="max-w-7xl p-3 mx-auto">
                    <p className='lg:text-center text-justify font-semibold'>© 2025 Inframe School of Art, Design & Business is a Unit of Inframe Educational Society Registered under the Rajasthan Society Act. All rights reserved Privacy Policy · Cancellation and Refund · Terms & Conditions · Shipping and Delivery</p>
                </div>
            </div>
        </footer>
    )
}
