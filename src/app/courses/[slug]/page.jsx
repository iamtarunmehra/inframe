'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    let param = useParams()
    let slug = param.slug
    console.log(slug)


    return (
        <div className="lg:my-16 my-10">
            <h2 className="text-center uppercase text-3xl lg:text-4xl font-bold text-gray-900">
                Our <span className='text-amber-500'>{slug}</span> Programs
            </h2>

            <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto my-10 px-4">
                <div className="w-full h-[auto] shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl">
                    <div
                        className="h-[180px] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                `url("https://png.pngtree.com/png-clipart/20230116/original/pngtree-realistic-folded-graduation-diploma-certificate-illustration-png-image_8918722.png")`,
                        }}
                    ></div>

                    <div className="bg-transparent p-6">
                        <h3 className="text-xl font-semibold text-gray-900">
                            B.Des in Interior Design

                        </h3>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                            Transform spaces and shape experiences through our comprehensive design program.
                        </p>
                        <Link href={`/${slug}/b-des-in-interior-design`}><button className="w-full py-2 px-4 mt-4 bg-amber-400  text-sm font-medium text-white rounded-md transition">
                            View Details
                        </button></Link>
                    </div>
                </div>
                <div className="w-full h-[auto] shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl">
                    <div
                        className="h-[180px] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                `url("https://png.pngtree.com/png-clipart/20230116/original/pngtree-realistic-folded-graduation-diploma-certificate-illustration-png-image_8918722.png")`,
                        }}
                    ></div>

                    <div className="bg-transparent p-6">
                        <h3 className="text-xl font-semibold text-gray-900">
                            B.VOC in Interior Design
                        </h3>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                            Combine practical skills with theoretical knowledge in our vocational bachelor's program.
                        </p>
                        <button className="w-full py-2 px-4 mt-4 bg-amber-400  text-sm font-medium text-white rounded-md transition">
                            View Details
                        </button>
                    </div>
                </div>
                <div className="w-full h-[auto] shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl">
                    <div
                        className="h-[180px] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                `url("https://png.pngtree.com/png-clipart/20230116/original/pngtree-realistic-folded-graduation-diploma-certificate-illustration-png-image_8918722.png")`,
                        }}
                    ></div>

                    <div className="bg-transparent p-6">
                        <h3 className="text-xl font-semibold text-gray-900">
                            11 Month Interior Design Diploma
                        </h3>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                            Master interior design skills in just 11 months with hands-on training, expert guidance, and real-
                        </p>
                        <button className="w-full py-2 px-4 mt-4 bg-amber-400  text-sm font-medium text-white rounded-md transition">
                            View Details
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}
