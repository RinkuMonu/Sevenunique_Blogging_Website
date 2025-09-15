'use client';

import React, { useState, useEffect } from 'react';



// In a real application, you would fetch this data from an API.
const allUniversities = [
    {
        id: 1,
        name: 'Apex University',
        image: "/education/ed2.png",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        course: 'Engineering',
        state: 'Rajasthan',
    },
    {
        id: 2,
        name: 'Jaipur National University',
        image: "/education/ed1.png",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        course: 'Medical',
        state: 'Rajasthan',
    },
    {
        id: 3,
        name: 'University of Cambridge',
        image: "/education/ed3.png",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        course: 'Arts',
        state: 'Other',
    },
    {
        id: 4,
        name: 'Nirwan University',
        image: "/education/ed1.png",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        course: 'Management',
        state: 'Rajasthan',
    },
    {
        id: 5,
        name: 'IIT Bombay',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        course: 'Engineering',
        state: 'Maharashtra',
    },
    {
        id: 6,
        name: 'AIIMS Delhi',
        image: "/education/ed2.png",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        course: 'Medical',
        state: 'Delhi',
    },
    {
        id: 7,
        name: 'IIM Ahmedabad',
        image: "/education/ed3.png",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        course: 'Management',
        state: 'Gujarat',
    },
    {
        id: 8,
        name: 'University of Delhi',
        image: "/education/ed1.png",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        course: 'Arts',
        state: 'Delhi',
    },
];

// --- HELPER FUNCTIONS ---
const getUniqueValues = (data, key, type) => {
    const values = data.map(item => item[key]);
    const label = type === "course" ? "Course" : type === "state" ? "State" : "All";
    return [label, ...new Set(values)];
};






// University Card Component
const UniversityCard = ({ university }) => (
    <div className=" overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
        <img
            src={university.image}
            alt={university.name}
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <p className="text-gray-600 text-sm">{university.description}</p>
        </div>
    </div>
);


export default function TopUniversities() {
    const [filteredUniversities, setFilteredUniversities] = useState(allUniversities);
    const [selectedCourse, setSelectedCourse] = useState('Course');
    const [selectedState, setSelectedState] = useState('State');
    const [visibleCount, setVisibleCount] = useState(4);

    const courseOptions = getUniqueValues(allUniversities, "course", "course");
    const stateOptions = getUniqueValues(allUniversities, "state", "state");

    useEffect(() => {
        let result = allUniversities;

        if (selectedCourse !== 'Course') {
            result = result.filter(uni => uni.course === selectedCourse);
        }

        if (selectedState !== 'State') {
            result = result.filter(uni => uni.state === selectedState);
        }

        setFilteredUniversities(result);
        setVisibleCount(4); // Reset visible count on filter change
    }, [selectedCourse, selectedState]);

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    return (
        <div className="py-10">


            {/* Header Section */}
            <div className="flex flex-col sm:flex-row  items-center mb-8 gap-4">
                <p className="text-3xl underline font-bold text-red-600 mb-6">
                    Top Universities

                </p>
                <div className="flex items-center gap-4 pb-4">
                    {/* Course Dropdown */}
                    <div className="relative">
                        <select
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="appearance-none rounded px-3 py-2 pr-8 font-semibold  focus:ring-2 focus:ring-red-600"
                        >
                            {courseOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        {/* Custom Icon */}
                        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-black">
                            <svg
                                className="w-4 h-4"
                                fill="black"
                                stroke="currentColor"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* State Dropdown */}
                    <div className="relative">
                        <select
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className="appearance-none rounded px-3 py-2 pr-8 font-semibold  focus:ring-2 focus:ring-red-600"
                        >
                            {stateOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        {/* Custom Icon */}
                        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-black">
                            <svg
                                className="w-4 h-4"
                                fill="black"
                                stroke="currentColor"
                                strokeWidth="1"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>


            </div>

            {/* University Grid Section */}
            {filteredUniversities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredUniversities.slice(0, visibleCount).map(uni => (
                        <UniversityCard key={uni.id} university={uni} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-gray-500 text-xl">No universities found for the selected filters.</p>
                </div>
            )}

            {/* View More Button */}
            {visibleCount < filteredUniversities.length && (
                <div className="text-center mt-12">
                    <button
                        onClick={handleViewMore}
                        className="bg-red-600 text-white font-semibold py-2 px-8 rounded-md hover:bg-red-700 transition-colors duration-300 shadow-lg"
                    >
                        View more
                    </button>
                </div>
            )}
        </div>

    );
}

