"use client"
import React, { useState, useEffect } from "react";

export default function VisualStories({ visualStoriesData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const slidesPerPage = 4;
  const numDots = Math.ceil((visualStoriesData?.length || 0) / slidesPerPage);
  const totalSlides = visualStoriesData?.length || 0;

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
  };

  // ✅ Autoplay effect with pause on hover
  useEffect(() => {
    if (!visualStoriesData || visualStoriesData.length === 0) return;
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [visualStoriesData, isHovered]);

  // ✅ Handle "infinite smooth loop"
  useEffect(() => {
    if (currentIndex === numDots) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); 
        setCurrentIndex(0); // instantly reset to 0
      }, 500); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, numDots]);

  return (
    <div
      className="py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-3xl underline font-bold text-red-600 mb-6">
        Visual Stories
      </h3>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* Original slides */}
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
            {/* ✅ Clone for seamless infinite loop */}
            {visualStoriesData?.map((story) => (
              <div key={`clone-${story.id}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 p-2">
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

      {/* ✅ Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: numDots }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex % numDots === idx ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
