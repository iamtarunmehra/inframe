'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import Swal from 'sweetalert2';

export default function LoginForm({ loginForm, setLoginForm, setRegisterForm }) {


    return (
        loginForm && (
            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[400px] w-[95%] bg-white rounded-2xl shadow-xl border border-amber-300 z-50 px-6 py-6 duration-300 ${loginForm ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-[30px] font-semibold text-gray-800'>Login</h2>
                    <button onClick={() => setLoginForm(false)} className='text-2xl cursor-pointer text-gray-600 hover:text-amber-500 transition'><IoMdClose /></button>
                </div>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            name='userEmail'
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            name='userPassword'
                            type="password"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <span
                        onClick={() => {
                            setLoginForm(false)
                            setRegisterForm(true)
                        }}
                        className="text-amber-600 font-medium cursor-pointer hover:underline"
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        )
    )
}

export function RegisterForm({ registerForm, setRegisterForm, setLoginForm }) {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [otpStatus, setOtpStatus] = useState(false)
    const [otpValue, setOtpValue] = useState(false)


    let apiBaseUrl = process.env.NEXT_PUBLIC_API_BASEURL

    let userRegister = (event) => {
        event.preventDefault();
        let userObj = {
            userName,
            userEmail,
            userPassword,
            otpValue
        }

        if (otpStatus) {
            //otp verify work
            axios.post(`${apiBaseUrl}/user/otp-check`, userObj)
                .then((res) => res.data)
                .then((finalRes) => {
                    console.log(finalRes)
                })
        }
        else {
            axios.post(`${apiBaseUrl}/user/register`, userObj)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status == 1) {
                        setOtpStatus(true)
                        Swal.fire({
                            title: 'OTP Sent',
                            msg: 'Check your mail id to verify',
                            icon: 'success'
                        })
                    }
                    else {
                        Swal.fire({
                            title: 'Something went wrong',
                            msg: 'try again later',
                            icon: 'warning'
                        })
                    }
                })
        }
    }


    return (
        registerForm && (
            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[450px] w-[95%] bg-white rounded-2xl shadow-xl border border-amber-300 z-50 px-7 py-6 duration-300 ${registerForm ? 'opacity-100' : 'opacity-0'}`}>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-[30px] font-semibold text-gray-800'>Register</h2>
                    <button onClick={() => setRegisterForm(false)} className='text-2xl cursor-pointer text-gray-600 hover:text-amber-500 transition'><IoMdClose /></button>
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
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            name='confirmPassword'
                            id="confirmPassword"
                            type="password"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                        </div>
                    }



                    <button
                        disabled={otpStatus}
                        type="submit"
                        className="w-full cursor-pointer py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition"
                    >
                        {otpStatus ? 'VERIFY OTP' : 'GET OTP'}
                    </button>


                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <span
                        onClick={() => {
                            setRegisterForm(false)
                            setLoginForm(true)
                        }}
                        className="text-amber-600 font-medium cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </div>
        )
    )
}
