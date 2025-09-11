import Image from 'next/image';
import React from 'react';
import FocusSection from './FocusSection';

// SVG Icon for the bottom bar
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function BusinessComponent3() {
  const middleListItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
  ];

  const bottomGridItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  ];

  return (
    <div className="py-10">
  
        <h1 className="text-2xl font-bold text-red-600 mb-4 border-b-4 border-red-600 inline-block">
          Startup
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Main Feature Card */}
            <div className='lg:flex'>
              <div className="relative rounded-lg shadow-md overflow-hidden h-72 hover:shadow-xl transition-shadow duration-300">
            
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/sports/img6.png')` }}
              ></div>



              {/* Content on top */}
              <div className="relative h-full flex flex-col justify-center items-center p-6 text-white text-center">
                <h2 className="text-5xl font-extrabold tracking-widest mb-2">
                  START UP
                </h2>
                <p className="text-lg max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
              </div>
              
            </div>
              <div className="flex flex-col justify-between pt-2 lg:pl-4">
            {middleListItems.map((text, index) => (
              <div key={index} className="border-b pb-2 mb-2 ">
                <p className="text-gray-800 cursor-pointer">{text}</p>
              </div>
            ))}
          </div>
            </div>

            {/* Bottom Grid Items */}
            <div className="grid  md:grid-cols-4 gap-4">
              {bottomGridItems.map((text, index) => (
                <div key={index}>
                  <p className="text-[#002765]  border-e pb-1 border-[#BDBDBD] font-semibold cursor-pointer">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>


          <div className="lg:col-span-2 flex items-center justify-center">
            
              <Image width={300} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
            
          </div>
        </div>
<FocusSection/>
      </div>
   
  );
}

