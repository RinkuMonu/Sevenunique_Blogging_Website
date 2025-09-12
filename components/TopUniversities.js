'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';


// In a real application, you would fetch this data from an API.
const allUniversities = [
  {
    id: 1,
    name: 'Apex University',
    image: '/sports/img7.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    course: 'Engineering',
    state: 'Rajasthan',
  },
  {
    id: 2,
    name: 'Jaipur National University',
    image: "/sports/img2.png",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    course: 'Medical',
    state: 'Rajasthan',
  },
  {
    id: 3,
    name: 'University of Cambridge',
   image: '/sports/img4.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    course: 'Arts',
    state: 'Other',
  },
  {
    id: 4,
    name: 'Nirwan University',
    image: '/sports/img4.png',
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
   image:"/sports/img6.png",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    course: 'Medical',
    state: 'Delhi',
  },
  {
    id: 7,
    name: 'IIM Ahmedabad',
       image: '/sports/img9.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    course: 'Management',
    state: 'Gujarat',
  },
  {
    id: 8,
    name: 'University of Delhi',
    image:"/sports/img6.png",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    course: 'Arts',
    state: 'Delhi',
  },
];

// --- HELPER FUNCTIONS ---
const getUniqueValues = (data, key) => {
    const values = data.map(item => item[key]);
    return ['All', ...new Set(values)];
};


// --- SUB-COMPONENTS ---

// Custom Dropdown Component
const CustomDropdown = ({ label, options, selectedValue, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {label}: {selectedValue}
                    <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <a
                                key={option}
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSelect(option);
                                }}
                            >
                                {option}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
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


// --- MAIN PAGE COMPONENT ---
export default function TopUniversities() {
    const [filteredUniversities, setFilteredUniversities] = useState(allUniversities);
    const [selectedCourse, setSelectedCourse] = useState('All');
    const [selectedState, setSelectedState] = useState('All');
    const [visibleCount, setVisibleCount] = useState(4);

    const courseOptions = getUniqueValues(allUniversities, 'course');
    const stateOptions = getUniqueValues(allUniversities, 'state');

    useEffect(() => {
        let result = allUniversities;

        if (selectedCourse !== 'All') {
            result = result.filter(uni => uni.course === selectedCourse);
        }

        if (selectedState !== 'All') {
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
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <p className="text-3xl underline font-bold text-red-600 mb-6">
                       Top Universities
                      
                    </p>
                    <div className="flex items-center gap-4">
                        <CustomDropdown 
                            label="Course"
                            options={courseOptions}
                            selectedValue={selectedCourse}
                            onChange={setSelectedCourse}
                        />
                         <CustomDropdown
                            label="State"
                            options={stateOptions}
                            selectedValue={selectedState}
                            onChange={setSelectedState}
                              className="border-0 shadow-none outline-none bg-transparent p-0"
                        />
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

