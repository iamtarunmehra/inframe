'use client'
import React, { useEffect, useState } from 'react'
import { FaEdit, FaUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';
import { logoutUser } from '../slice/loginSlice';


export default function Page() {
    let dispatch = useDispatch()
    let apiBaseUrl = process.env.NEXT_PUBLIC_API_BASEURL
    let userEmail = useSelector((store) => store.loginStore.user?.userEmail) ?? ''

    let [userData, setUserData] = useState([])
    useEffect(() => {
        axios.post(`${apiBaseUrl}/user/fetch-userName`, { userEmail })
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status == 1) {
                    setUserData(finalRes.userData)
                }
            })
    }, [])
    console.log(userData)

    const logout = () => {
        Swal.fire({
            title: 'Do you really want to logout ?',
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            iconColor: '#332A2A',
            background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
            confirmButtonColor: '#332A2A',
        }).then((res) => {
            if (res.isConfirmed) {
                dispatch(logoutUser())
                Swal.fire({
                    title: 'Logout Successfully',
                    showConfirmButton: false,
                    icon: 'success',
                    iconColor: '#332A2A',
                    background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                    confirmButtonColor: '#332A2A',
                    timer: 1000,
                }).then((res) => {
                    window.location.href = '/';
                })
            }
        })
    }


    return (
        <div style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} className="w-[100%] py-[10px] p-2">
            <div className='max-w-7xl px-4 py-[25px] mx-auto lg:my-[80px] my-[20px] bg-white rounded-[10px] shadow-lg'>
                <h2 className='text-gray-900 text-[24px] border-b-[1px] border-gray-700 mb-[10px]'>My Profile</h2>
                <h3 className='text-[16px] text-gray-900 flex items-center gap-1 mb-2'><FaUserCircle className='text-[18px] text-gray-900' /> {userData.userName}</h3>
                <p className='text-[14px] text-gray-900 flex items-center gap-1 mb-2'><MdOutlineEmail className='text-[18px]' /> {userData.userEmail}</p>
                {/* <p className='text-[14px] text-gray-900 flex items-center gap-1 mb-2'><FaPhoneAlt className='text-[18px]' /> +91 8079092775</p> */}
                <div className="mt-5 flex  gap-3">
                    <button className="flex items-center gap-[2px] bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-[5px] rounded-[10px] transition-all">
                        <FaEdit /> Edit Profile
                    </button>
                    <button onClick={logout} className="flex items-center gap-[2px] bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-[5px] rounded-[10px] transition-all">
                        <FaEdit /> Logout
                    </button>
                </div>
            </div>
        </div>
    )
}
