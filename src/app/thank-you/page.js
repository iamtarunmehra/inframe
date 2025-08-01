'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function ThankYouRegistration() {
    const router = useRouter()

    const handleBackToDashboard = () => {
        router.push('/')
    }

    return (
        <div className="min-h-auto flex items-center justify-center bg-white lg:px-6 lg:py-12 mb-10">
            <div style={{ background: 'linear-gradient(154deg,rgba(182, 189, 0, 1) 0%, rgba(255, 248, 189, 1) 50%, rgba(255, 229, 0, 1) 100%)' }} className="max-w-7xl lg:rounded-xl shadow-xl lg:p-12 p-5 text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Thank you for reaching out to us!</h1>
                <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                    We&#39;re excited to have you onboard. Your registration has been successfully completed.
                    You now have full access to our platform and all its features.
                </p>
                <p className="text-gray-700 text-md mb-8 leading-relaxed max-w-xl mx-auto">
                    To get started, explore your dashboard where you can manage your profile, track your progress,
                    and customize your preferences. If you need any assistance, our support team is always here
                    to help you.
                </p>
                <button
                    onClick={handleBackToDashboard}
                    className="mt-4 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300"
                    aria-label="Back to Dashboard"
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    )
}
