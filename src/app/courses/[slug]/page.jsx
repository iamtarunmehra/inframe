import React from 'react'

export default function page() {
    let courses = [
        {
            id: '1',
            title: 'B.Voc in Media and Entertainment', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yqPnPJob4f5Aq1lBkgmttT9H_0808oT4ZA&s', description: 'Master the art of media production and entertainment management. Learn from industry professionals and develop cutting-edge creation skills'
        },
        {
            id: '2',
            title: '1 Year Diploma in Media and Entertainment', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yqPnPJob4f5Aq1lBkgmttT9H_0808oT4ZA&s', description: 'Launch your career in media and entertainment with our intensive one-year program. Focus on'
        },
        {
            id: '3',
            title: '2 Year Diploma in Media and Entertainment', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yqPnPJob4f5Aq1lBkgmttT9H_0808oT4ZA&s', description: 'Kickstart your creative journey with the 2-Year Diploma in Media and Entertainment at Inframe'
        },
    ]


    return (
        <div className="lg:my-16 my-10">
            <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800">
                Our Media & Entertainment Programs
            </h2>

            <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto my-10 px-4">
                {courses.map((item, index) => {
                    return (
                        <div key={index} className="w-full h-[auto] shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl">
                            <div
                                className="h-[180px] bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yqPnPJob4f5Aq1lBkgmttT9H_0808oT4ZA&s")',
                                }}
                            ></div>

                            <div className="bg-transparent p-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                                <button className="w-full py-2 px-4 mt-4 bg-amber-400  text-sm font-medium text-white rounded-md transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}
