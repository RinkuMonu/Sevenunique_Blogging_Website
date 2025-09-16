"use client"
import React, { useState } from 'react';

export default function VisualStories({ visualStoriesData }) {
    const [currentIndex, setCurrentIndex] = useState(0);


    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };
    const numDots = Math.ceil((visualStoriesData?.length || 0) / 4);



    return (
        <div className="py-10">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 border-b-4 border-red-600 inline-block">Visual Stories</h3>
            <div className="relative">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {visualStoriesData?.map((story) => (
                            <div key={story.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 p-2">
                                <div className="relative rounded-lg overflow-hidden h-[70vh] shadow-lg">
                                    <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <p className="text-white text-base font-semibold">{story.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: numDots }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-gray-800' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>


    );
}

