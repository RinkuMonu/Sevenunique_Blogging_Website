import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useMemo } from 'react';

// --- Reusable Star Rating Component ---
const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex ">
      {[...Array(totalStars)].map((_, index) => (
        <svg key={index} className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.07 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.956z" />
        </svg>
      ))}
    </div>
  );
};

// --- Data for all entertainment items with ratings ---
const allEntertainmentItems = [
  // Trending Items
  { id: 1, category: 'Trending', imageUrl: 'sports/img7.png', title: 'The Great Mountain Expedition', rating: 5 },
  { id: 2, category: 'Trending', imageUrl: 'sports/img9.png', title: 'Urban Jungle Photography', rating: 4 },
  { id: 3, category: 'Trending', imageUrl: 'sports/img4.png', title: 'Cinematic Landscapes', rating: 5 },
  { id: 4, category: 'Trending', imageUrl: 'sports/img10.png', title: 'Adventures in the Deep Sea', rating: 4 },
  { id: 5, category: 'Trending', imageUrl: 'sports/img11.png', title: 'The Art of Street Food', rating: 5 },

  // Hindi Items
  { id: 6, category: 'Hindi', imageUrl: 'sports/img1.png', title: 'This is the Main Hindi Feature', rating: 4 },
  { id: 7, category: 'Hindi', imageUrl: 'sports/img2.png', title: 'Hindi Top Right Item', rating: 3 },
  { id: 8, category: 'Hindi', imageUrl: 'sports/img3.png', title: 'Hindi Bottom Right Item', rating: 4 },

  // English Items
  { id: 9, category: 'English', imageUrl: 'sports/img5.png', title: 'Welcome to the English Category', rating: 5 },
  { id: 10, category: 'English', imageUrl: 'sports/img6.png', title: 'English Content Block One', rating: 4 },
  { id: 11, category: 'English', imageUrl: 'sports/img8.png', title: 'English Content Block Two', rating: 3 },
];

const MovieReviewSlider = () => {
  const [activeFilter, setActiveFilter] = useState('Trending');
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Show 3 items on larger screens

  const filters = ['Trending', 'Hindi', 'English', 'Tamil', 'Telugu'];

  const filteredItems = useMemo(() => {
    setCurrentIndex(0); // Reset slider on filter change
    if (activeFilter === 'All') return allEntertainmentItems;
    return allEntertainmentItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    // Ensure we don't go past the last possible page
    const maxIndex = filteredItems.length - itemsPerPage;
    if (maxIndex < 0) return; // Don't slide if there are fewer items than itemsPerPage
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="py-10 ">
      <div className="">
        {/* Filter Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center align-middle gap-5 mb-8  pb-4">
       <p className="text-3xl underline font-bold text-red-600 mb-4 align-middle inline-flex gap-2">
            Movie review   <ChevronRight size={32} className='pt-2'/>
          </p>
          <nav className="flex items-center flex-wrap gap-x-4 pb-5 align-middle">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`text-sm font-semibold transition-colors duration-300 ${activeFilter === filter ? 'text-red-600 border-b-2 border-red-600' : ' hover:text-red-600'}`}
              >
                {filter}
              </button>
            ))}
            <button className="">&#9660;</button>
          </nav>
        </div>

        {/* Slider Section */}
        {filteredItems.length > 0 ? (
          <div className="flex items-center justify-center ">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-red-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300"
            >
             <ChevronLeft/>
            </button>

            {/* Movie Cards Slider */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {filteredItems.map(item => (
                   <div key={item.id} className="w-full flex-shrink-0" style={{ flexBasis: `${100 / itemsPerPage}%`}}>
                    <div className=" rounded-lg overflow-hidden flex flex-col  h-full mx-3">
                      <img src={item.imageUrl} alt={item.title} className="w-full h-96 object-cover" />
                      <div className="p-4 flex flex-col">
                        <div className="my-2">
                          <StarRating rating={item.rating} />
                        </div>
                          <p className="text-gray-800  mt-1 ">
                         Lorem ipsum dolor sit amet
                        </p>
                        <p className="text-gray-600 text-sm mt-1 h-12">
                         Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                        </p>
                     <div className='flex justify-end'>   <button className="mt-4 bg-red-600 text-white text-sm font-bold py-1 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 ">
                          View more
                        </button></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
               disabled={currentIndex >= filteredItems.length - itemsPerPage}
              className="p-2 rounded-full bg-red-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300"
            >
          <ChevronRight/>
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-10">No items found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default MovieReviewSlider;

