'use client'
import React from 'react'
import { IoMdClose } from "react-icons/io";

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
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
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
    return (
        registerForm && (
            <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[450px] w-[95%] bg-white rounded-2xl shadow-xl border border-amber-300 z-50 px-7 py-6 duration-300 ${registerForm ? 'opacity-100' : 'opacity-0'}`}>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-[30px] font-semibold text-gray-800'>Register</h2>
                    <button onClick={() => setRegisterForm(false)} className='text-2xl cursor-pointer text-gray-600 hover:text-amber-500 transition'><IoMdClose /></button>
                </div>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition"
                    >
                        Create Account
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
