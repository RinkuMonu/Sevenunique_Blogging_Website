import Link from 'next/link';
import React from 'react';

// Data for the news cards
const sportsNews = [
  {
    id: 1,
    imageUrl: "/sports/img6.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 2,
    imageUrl: "/sports/img9.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 3,
    imageUrl: "/sports/img10.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 4,
    imageUrl: "/sports/img11.png",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    id: 5,
    imageUrl: "/sports/img9.png",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    id: 6,
    imageUrl: "/sports/img6.png",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    id: 7,
    imageUrl: "/sports/img11.png",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    id: 8,
    imageUrl: "/sports/img10.png",
    text: "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
  },
  {
    id: 9,
    imageUrl: "/sports/img6.png",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
];


// Main App Component
export default function MoreSports() {
  return (
 
  <>
       <p className="text-3xl underline font-bold text-red-600 mb-6">
          More Sports News
        </p>
        
        {/* Grid of News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsNews.map((news) => (
            <div key={news.id} className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              {/* Background Image */}
              <img 
                src={news.imageUrl} 
                alt="Sports News" 
                className="w-full h-64 object-cover" 
              />
              
              {/* Gradient Overlay for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white text-lg font-medium">
                  {news.text}
                </p>
              </div>
            </div>
          ))}
        </div>
            <div className="flex justify-center mt-8">
                    <Link href="/" className="bg-red-600 text-white px-10 py-2 rounded-full text-md font-medium hover:bg-red-700" style={{ boxShadow: " 0px 0px 100px 0px #0000000D" }}>
                        View more
                    </Link>
                </div>
</>
  );
}

