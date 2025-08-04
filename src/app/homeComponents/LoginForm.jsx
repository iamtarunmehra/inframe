'use client'
import axios from 'axios';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { loginData } from '../slice/loginSlice';
import Link from 'next/link';

export default function LoginForm({ currentPage, setCurrentPage, setMobileMenuOpen }) {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    let dispatch = useDispatch()
    let apiBaseUrl = process.env.NEXT_PUBLIC_API_BASEURL

    let userLogin = (event) => {
        event.preventDefault();
        let obj = {
            userEmail,
            userPassword
        }
        axios.post(`${apiBaseUrl}/user/login`, obj)
            .then((res) => res.data)
            .then((finalRes) => {
                let finalObj = {
                    user: obj,
                    token: finalRes.token
                }
                if (finalRes.status == 2) {
                    dispatch(loginData(finalObj))
                    setIsLogin(true)
                    Swal.fire({
                        title: 'Login Successfully',
                        icon: 'success',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    })
                }
                else if (finalRes.status == 1) {
                    Swal.fire({
                        title: 'Password Is Incorrect',
                        icon: 'warning',
                        text: 'Please enter a valid password',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    })
                }
                else {
                    Swal.fire({
                        title: 'User Not Exist !',
                        icon: 'error',
                        text: 'Please Register first to login',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    })
                }
            })
    }

    //redirecting on thank you page
    useEffect(() => {
        if (isLogin) {
            redirect('/thank-you')
        }
    }, [isLogin])

    return (
        <div style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[400px] w-[95%] rounded-2xl shadow-xl border border-amber-300 z-50 px-6 py-6 duration-300`}>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-[30px] font-semibold text-gray-800'>Login</h2>
                <button onClick={() => setCurrentPage('')} className='text-2xl cursor-pointer text-gray-600 hover:text-gray-950 transition'><IoMdClose /></button>
            </div>

            <form onSubmit={userLogin} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        onChange={(e) => setUserEmail(e.target.value)}
                        id="email"
                        type="email"
                        name='userEmail'
                        required
                        className="mt-1 w-full px-4 py-[10px] border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        onChange={(e) => setUserPassword(e.target.value)}
                        id="password"
                        name='userPassword'
                        type="password"
                        required
                        className="mt-1 w-full px-4 py-[10px] border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 py-[12px] px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
                >
                    Sign In
                </button>
            </form>

            <p className="text-center text-sm text-gray-950 mt-4">
                Don't have an account?{' '}
                <span
                    onClick={() => {
                        setCurrentPage('register')
                    }}
                    className="text-black font-medium cursor-pointer hover:underline"
                >
                    Sign Up
                </span>
            </p>
            <p className="text-center text-sm text-gray-950 mt-1">
                <Link href={'/forgot-password'}><span
                    onClick={() => {
                        setCurrentPage('')
                        setMobileMenuOpen(false)
                    }}
                    className="text-black font-medium cursor-pointer hover:underline"
                >
                    Forgot password ?
                </span></Link>
            </p>
        </div>
    )

}


export function RegisterForm({ currentPage, setCurrentPage, setMegaMenuOpen }) {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [otpStatus, setOtpStatus] = useState(false)
    const [otpValue, setOtpValue] = useState('')
    const [isRegister, setIsRegister] = useState(false)

    let apiBaseUrl = process.env.NEXT_PUBLIC_API_BASEURL

    let userRegister = (event) => {
        event.preventDefault();
        if (otpStatus) {
            let userObj = {
                userName,
                userEmail,
                userPassword,
                otpValue
            }
            //otp verify work
            if (userPassword === confirmPassword) {
                axios.post(`${apiBaseUrl}/user/otp-check`, userObj)
                    .then((res) => res.data)
                    .then((finalRes) => {
                        if (finalRes.status === 1) {
                            setIsRegister(true)
                            Swal.fire({
                                title: 'OTP Verified',
                                text: 'Login to Continue',
                                icon: 'success',
                                iconColor: '#332A2A',
                                background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                                confirmButtonColor: '#332A2A',
                                timer: 2000,
                            })
                        }
                        else {
                            Swal.fire({
                                title: 'Invalid OTP',
                                text: 'Check your mail to verify',
                                icon: 'error',
                                iconColor: '#332A2A',
                                background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                                confirmButtonColor: '#332A2A',
                                timer: 2000,
                            })
                        }
                    })
            }
            else {
                Swal.fire({
                    title: 'Password Not Matched',
                    icon: 'error',
                    iconColor: '#332A2A',
                    background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                    confirmButtonColor: '#332A2A',
                    timer: 2000,
                })
            }
        }
        else {
            let userObj = {
                userName,
                userEmail,
                userPassword,
            }
            axios.post(`${apiBaseUrl}/user/register`, userObj)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status === 1) {
                        setOtpStatus(true)
                        Swal.fire({
                            title: 'OTP Sent',
                            text: 'Check your mail id to verify',
                            icon: 'success',
                            iconColor: '#332A2A',
                            background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                            confirmButtonColor: '#332A2A',
                            timer: 2000,
                        })
                    }
                    else {
                        Swal.fire({
                            title: 'Please Login To Continue',
                            text: 'Email Id Is Already Exist !',
                            icon: 'warning',
                            iconColor: '#332A2A',
                            background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                            confirmButtonColor: '#332A2A',
                            timer: 2000,
                        })
                    }
                })
        }
    }

    useEffect(() => {
        if (isRegister) {
            setCurrentPage('login')
        }
    }, [isRegister])

    return (
        <div style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[450px] w-[95%]  rounded-2xl shadow-xl border border-amber-300 z-50 px-7 py-6 duration-300 ${currentPage == 'register' ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-[30px] font-semibold text-gray-800'>Register</h2>
                <button onClick={() => setCurrentPage('')} className='text-2xl cursor-pointer text-gray-600 hover:text-gray-950 transition'><IoMdClose /></button>
            </div>

            <form onSubmit={userRegister} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        name='userName'
                        id="name"
                        type="text"
                        required
                        className="mt-1 w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        onChange={(e) => setUserEmail(e.target.value)}
                        name='userEmail'
                        id="email"
                        type="email"
                        required
                        className="mt-1 w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        onChange={(e) => setUserPassword(e.target.value)}
                        name='userPassword'
                        id="password"
                        type="password"
                        required
                        className="mt-1 w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        name='confirmPassword'
                        id="confirmPassword"
                        type="password"
                        required
                        className="mt-1 w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                </div>

                {otpStatus &&
                    <div>
                        <label htmlFor="otpValue" className="block text-sm font-medium text-gray-700">OTP</label>
                        <input
                            onChange={(e) => setOtpValue(e.target.value)}
                            name='otpValue'
                            id="otpValue"
                            type="text"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>
                }

                <button
                    type="submit"
                    className="w-full cursor-pointer py-[10px] px-4 mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
                >
                    {otpStatus ? 'VERIFY OTP' : 'GET OTP'}
                </button>
            </form>


            <p className="text-center text-sm text-gray-950 mt-4">
                Already have an account?{' '}
                <span
                    onClick={() => {
                        setCurrentPage('login')
                    }}
                    className="text-black font-medium cursor-pointer hover:underline"
                >
                    Login
                </span>
            </p>
        </div>
    )
}
