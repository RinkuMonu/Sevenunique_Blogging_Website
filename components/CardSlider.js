import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

// Mock data for the articles - added more for the slider
const articles = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: '/sports/img6.png'
  },
  {
    id: 2,
    title: 'Consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: '/sports/img2.png'
  },
  {
    id: 3,
    title: 'Eiusmod tempor incididunt ut labore et dolore',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: '/sports/img7.png'
  },
  {
    id: 4,
    title: 'Ut enim ad minim veniam, quis nostrud',
    category: 'Sports',
    date: 'Sept 4, 2025',
    imageUrl: '/sports/img8.png'
  },
  {
    id: 5,
    title: 'Quis nostrud exercitation ullamco laboris nisi',
    category: 'Sports',
    date: 'Sept 4, 2025',
    imageUrl: '/sports/img1.png'
  },
  {
    id: 6,
    title: 'Nisi ut aliquip ex ea commodo consequat',
    category: 'Sports',
    date: 'Sept 5, 2025',
    imageUrl: '/sports/img2.png'
  },
];




// Article Ticker Card Component
const ArticleTickerCard = ({ article }) => (
  <div className="flex items-center space-x-4 p-2">
    <img
      src={article.imageUrl}
      alt={article.title}
      className="w-24 h-20 sm:w-32 sm:h-24 object-cover rounded-xl"
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/128x96/cccccc/ffffff?text=Error'; }}
    />
    <div className="flex-1">
      <h3 className="font-semibold text-gray-800 text-base sm:text-lg leading-tight">
        {article.title}
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        {article.category} / {article.date}
      </p>
    </div>
  </div>
);

// Main App Component
export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of items to show at once on large screens
  const canGoNext = currentIndex < articles.length - itemsPerPage;
  const canGoPrev = currentIndex > 0;

  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (canGoPrev) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className=" p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {articles.map(article => (
              <div key={article.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
                <ArticleTickerCard article={article} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 px-2">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <button className="bg-gray-800 text-white px-3 py-1.5 text-sm font-semibold rounded-full whitespace-nowrap">In Focus</button>
            <span className="text-gray-300">›</span>
            <button className="bg-white border border-gray-300 text-gray-600 px-3 py-1.5 text-sm rounded-full whitespace-nowrap">Lorem</button>
            <button className="bg-white border border-gray-300 text-gray-600 px-3 py-1.5 text-sm rounded-full whitespace-nowrap">Lorem ipsum dolor sit amet,</button>
            <button className="bg-white border border-gray-300 text-gray-600 px-3 py-1.5 text-sm rounded-full whitespace-nowrap">In Focus</button>
          </div>

          <div className="flex items-center space-x-2 pl-4">
            <button
              onClick={prevSlide}
              disabled={!canGoPrev}
              className="p-1.5 rounded-full border border-gray-300 text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              disabled={!canGoNext}
              className="p-1.5 rounded-full border border-gray-300 text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

