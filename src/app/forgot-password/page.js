"use client";
import axios from "axios";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";
import { useState } from "react";

export default function ForgotPassword() {
    let apiBaseUrl = process.env.NEXT_PUBLIC_API_BASEURL;

    const [activePage, setActivePage] = useState("checkEmail");
    const [userEmail, setUserEmail] = useState("");

    return (
        <>
            {activePage === "checkEmail" && (
                <CheckEmail setActivePage={setActivePage} userEmail={userEmail} setUserEmail={setUserEmail} apiBaseUrl={apiBaseUrl} />
            )}
            {activePage === "checkOtp" && (
                <CheckOtp userEmail={userEmail} setActivePage={setActivePage} apiBaseUrl={apiBaseUrl} />
            )}
            {activePage === "resetPassword" && <ResetPassword userEmail={userEmail} apiBaseUrl={apiBaseUrl} />}
        </>
    );
}

export function CheckEmail({ setActivePage, setUserEmail, userEmail }) {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASEURL
    const checkEmail = (event) => {
        event.preventDefault();
        axios.post(`${apiBaseUrl}/user/check-email`, { userEmail })
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status == 1) {
                    setActivePage('checkOtp')
                    Swal.fire({
                        title: 'OTP Sent',
                        text: 'Check your email to verify',
                        icon: 'success',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    })
                }
                else {
                    Swal.fire({
                        title: 'Email ID Not Exist !',
                        text: 'Please Register first to login',
                        icon: 'warning',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    })
                }
            })
    }

    return (
        <div style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} className="py-[50px]  flex items-center justify-center lg:p-15 p-5">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Forgot Password
                </h2>
                <form onSubmit={checkEmail} className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <input
                            onChange={(e) => setUserEmail(e.target.value)}
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-amber-400 hover:bg-orange-400 text-white font-semibold rounded-lg shadow focus:outline-none"
                    >
                        Send OTP
                    </button>
                </form>
            </div>
        </div>
    );
}

export function CheckOtp({ userEmail, setActivePage }) {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASEURL
    const [otpValue, setOtpValue] = useState(null)
    const checkOtp = (event) => {
        event.preventDefault();
        let obj = {
            otpValue, userEmail
        }
        axios.post(`${apiBaseUrl}/user/verify-otp`, obj)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status == 1) {
                    setActivePage('resetPassword')
                    Swal.fire({
                        title: 'OTP Verified',
                        icon: 'success',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    })
                }
                else {
                    Swal.fire({
                        title: 'OTP Is Invalid',
                        text: 'Recheck your email to verify',
                        icon: 'error',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    })
                }
            })
    };

    return (
        <div style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} className="py-[50px] flex items-center justify-center bg-gray-100 lg:p-15 p-5">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    OTP Verification
                </h2>
                <form onSubmit={checkOtp} className="space-y-5">
                    <div>
                        <label
                            htmlFor="otpValue"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Enter OTP
                        </label>
                        <input
                            onChange={(e) => setOtpValue(e.target.value)}
                            type="text"
                            id="otpValue"
                            name="otpValue"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter OTP"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-amber-400 hover:bg-orange-400 text-white font-semibold rounded-lg shadow focus:outline-none"
                    >
                        Verify
                    </button>
                </form>
            </div>
        </div>
    );
}

export function ResetPassword({ setActivePage, userEmail }) {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASEURL
    const [newPassword, setNewPassword] = useState('')
    const obj = { newPassword, userEmail }
    let resetPassword = (event) => {
        event.preventDefault();
        axios
            .put(`${apiBaseUrl}/user/reset-password`, obj)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status === 1) {
                    Swal.fire({
                        title: 'Password Changed Successfully',
                        icon: 'success',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    }).then((res) => {
                        redirect('/')
                    })
                } else {
                    Swal.fire({
                        title: 'Please Enter a New Password',
                        icon: 'warning',
                        iconColor: '#332A2A',
                        background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)',
                        confirmButtonColor: '#332A2A',
                        timer: 2000,
                    })
                }
            });
    };
    return (
        <div style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} className="py-[50px] flex items-center justify-center bg-gray-100 lg:p-15 p-5">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Reset Password
                </h2>
                <form onSubmit={resetPassword} className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-[16px] font-medium text-gray-700"
                        >
                            Create New Password
                        </label>
                        <input
                            onChange={(e) => setNewPassword(e.target.value)}
                            type="text"
                            id="newPassword"
                            name="newPassword"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-[15px]"
                            placeholder="Enter new password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-amber-400 hover:bg-orange-400 text-white font-semibold rounded-lg shadow focus:outline-none"
                    >
                        Create Password
                    </button>
                </form>
            </div>
        </div>
    );
}
