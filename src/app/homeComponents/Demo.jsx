'use client'
import React, { useState } from 'react';

export default function CourseSearch() {
    const courseData = [
        { id: 1, title: "Full Stack Web Development" },
        { id: 2, title: "Data Science with Python" },
        { id: 3, title: "React Frontend Mastery" },
        { id: 4, title: "Node.js Backend Development" },
        { id: 5, title: "UI/UX Design Basics" },
        { id: 6, title: "Machine Learning" },
        { id: 7, title: "Graphic Designing" },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    // Filtered list based on search term
    const filteredCourses = courseData.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-3xl mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold mb-4">Search Courses</h2>

            <input
                type="text"
                placeholder="Search by course name..."
                className="w-full px-4 py-2 border border-gray-400 rounded-md mb-6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredCourses.length > 0 ? (
                <ul className="space-y-3">
                    {filteredCourses.map(course => (
                        <li
                            key={course.id}
                            className="p-4 bg-white rounded shadow border border-gray-200 hover:shadow-md transition"
                        >
                            {course.title}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No matching courses found.</p>
            )}
        </div>
    );
}
