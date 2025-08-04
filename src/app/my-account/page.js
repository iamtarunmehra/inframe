import React from 'react'
import { FaEdit, FaUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


export default function Page() {
    return (
        <div style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} className="w-[100%] py-[10px] p-2">
            <div className='max-w-7xl px-4 py-[25px] mx-auto lg:my-[80px] my-[20px] bg-white rounded-[10px] shadow-lg'>
                <h2 className='text-gray-900 text-[24px] border-b-[1px] border-gray-700 mb-[10px]'>My Profile</h2>
                <h3 className='text-[16px] text-gray-900 flex items-center gap-1 mb-2'><FaUserCircle className='text-[18px] text-gray-900' /> Tarun Mehra</h3>
                <p className='text-[14px] text-gray-900 flex items-center gap-1 mb-2'><MdOutlineEmail className='text-[18px]' /> tarunmehra80790@gmail.com</p>
                <p className='text-[14px] text-gray-900 flex items-center gap-1 mb-2'><FaPhoneAlt className='text-[18px]' /> +91 8079092775</p>
                <div className="mt-5">
                    <button className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-[5px] rounded-[10px] transition-all">
                        <FaEdit /> Edit Profile
                    </button>
                </div>
            </div>
        </div>
    )
}
