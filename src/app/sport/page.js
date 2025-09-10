"use client"
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import CardSlider from "../../../components/CardSlider";
import SortNews1 from "../../../components/SortNews1";
import FeaturedNewsCategory from "../../../components/SortNews1";
import SportNews2 from "../../../components/SportNews2";
import VisualStories from "../../../components/VisualStories";

const images = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1024/600/400",
  "https://picsum.photos/id/1037/600/400",
  "https://picsum.photos/id/1045/600/400",
  "https://picsum.photos/id/1050/600/400",
];

const bannerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
 const cricketNewsData = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      imageUrl: 'https://images.unsplash.com/photo-1598256553586-2c0b05505d5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
    { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
    { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
    { id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
    { id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
    { id: 7, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  ];

  
const articles = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1551958214-2d5b24efa1a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1560272564-c83b66b17485?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1579952516518-6c211a139d76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 7,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f853?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 8,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1521413692349-65a195b6a7a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 9,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1626252346592-74782935531d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 10,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1553909774-68046271a4f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

    const newsData = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1599058917212-d750089bc07b?q=80&w=600",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1607082349566-1873420a06f0?q=80&w=600",
            title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1600150731463-0505c7b56c5b?q=80&w=600",
            title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=600",
            title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        },
    ];

// Article Card Component
const ArticleCard = ({ article }) => (
  <div className=" rounded-lg p-3 flex items-center space-x-4 ">
    <img
      src={article.imageUrl}
      alt={article.title}
      className="w-64 h-32 object-cover rounded-md"
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/112x80/cccccc/ffffff?text=Error'; }}
    />
    <div>
      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
        {article.title}
      </h3>
      <p className="text-xs text-gray-500 mt-1">
        {article.category} / {article.date}
      </p>
    </div>
  </div>
);

// Advertisement Component
const Advertisement = () => (
  <div className=" p-4 rounded-lg h-full flex flex-col items-center justify-around text-center">
    <div>
      <p className="text-gray-500 text-xs">Advertisement</p>
      <p className="text-gray-500 text-sm mb-8">160*600</p>
    </div>
    <div className="flex flex-col items-center space-y-8">
      <div className="flex space-x-2">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-gray-700">7U</div>
          <p className="text-gray-600 font-semibold text-xs mt-1">SEVENUNIQUE</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-gray-700">7U</div>
          <p className="text-gray-600 font-semibold text-xs mt-1">SEVENUNIQUE</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-gray-700">7U</div>
          <p className="text-gray-600 font-semibold text-xs mt-1">SEVENUNIQUE</p>
        </div>
      </div>
      <div>
        <div className="text-7xl font-bold text-gray-700">7U</div>
        <p className="text-gray-600 font-semibold mt-2">SEVENUNIQUE</p>
      </div>
    </div>
    <div></div>
  </div>
);

export default function page() {
  const cardsToShow = 3.5;
  const [currentIndex, setCurrentIndex] = useState(cardsToShow); // start after clones
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const transitionRef = useRef(null);
  const autoplayRef = useRef(null);


  // Clone slides for seamless infinite loop
  const extendedImages = [
    ...images.slice(-Math.ceil(cardsToShow)), // clone last N at start
    ...images,
    ...images.slice(0, Math.ceil(cardsToShow)), // clone first N at end
  ];

  const totalSlides = extendedImages.length;

  // Handle looping reset
  useEffect(() => {
    if (currentIndex >= totalSlides - cardsToShow) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(cardsToShow);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex <= 0) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(images.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides, cardsToShow, images.length]);

  // Re-enable transition after instant jump
  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
  }, [transitionEnabled]);

  // Auto play
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(autoplayRef.current);
  }, []);

  const prevSlide = () => setCurrentIndex((prev) => prev - 1);
  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const column1Articles = articles.slice(0, 5);
  const column2Articles = articles.slice(5, 10);

  // Correct dot index
  const realIndex = (currentIndex - cardsToShow + images.length) % images.length;

  return (
    <>
    
      <div className="w-full bg-red-600 rounded-2xl p-2 flex items-center space-x-4 overflow-hidden border-2 border-white/30 shadow-2xl">
        {/* "Now Playing" Button */}
        <div className="flex-shrink-0 bg-white text-red-600 rounded-full px-4 py-1.5 flex items-center space-x-2.5 shadow-md">
          <div className="w-7 h-7 bg-red-600 rounded-md flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white ml-0.5"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 1.5L13 8L3 14.5V1.5Z" />
            </svg>
          </div>
          <span className="font-semibold text-sm text-gray-800">
            Now Playing
          </span>
        </div>

        {/* Scrolling Text */}
        <div className="flex-grow overflow-hidden whitespace-nowrap relative h-6">
          <div className="absolute inset-0 flex items-center animate-marquee">
            <p className="text-white text-md">
              <span className="mx-4">{bannerText}</span>
              <span className="mx-4">{bannerText}</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          width: 200%;
          animation: marquee 25s linear infinite;
        }
      `}</style>

      {/* Slider */}
      <div
        className="relative w-full  flex flex-col justify-center  overflow-hidden p-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://picsum.photos/id/1015/1600/900')",
        }}
      >
        {/* Slider */}
        <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-white/10 backdrop-blur-md">
          <div
            ref={transitionRef}
            className={`flex ${transitionEnabled ? "transition-transform duration-500 ease-in-out" : ""
              }`}
            style={{
              // Shift by (index * 100) but subtract half-card width once
              transform: `translateX(calc(-${(100 / cardsToShow) * currentIndex}% + ${100 / (cardsToShow * 2)
                }%))`,
            }}
          >
            {extendedImages.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={src}
                    alt={`Slide ${index}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Controls below */}
        <div className="flex justify-between  mt-6 space-y-4">
           <div className="flex  justify-end space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index + cardsToShow)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${realIndex === index ? "bg-white scale-125" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
          {/* Arrows */}
          <div className="flex space-x-6">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full shadow p-3 hover:bg-gray-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white rounded-full shadow p-3 hover:bg-gray-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Dots */}
         
        </div>
      </div>







      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          <div className=" p-4 rounded-lg">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cricket players celebrating"
                className="w-full min-h-[55vh] object-cover rounded-lg mb-4"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'; }}
              />
            </div>
            <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
            <h2 className="text-lg font-semibold text-gray-800 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </h2>
          </div>

          <div>
            <div className=" p-4 rounded-lg">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cricket players celebrating"
                  className="w-full h-50 object-cover rounded-lg mb-4"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'; }}
                />
              </div>
              <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
              <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h2>
            </div>
            <div className=" p-4 rounded-lg">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cricket players celebrating"
                  className="w-full h-50 object-cover rounded-lg mb-4"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'; }}
                />
              </div>
              <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
              <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h2>
            </div>
          </div>
          <div className=" p-4 rounded-lg flex flex-col justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cricket players celebrating"
                className="w-full min-h-[55vh] object-cover rounded-lg mb-4"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'; }}
              />
            </div>
            <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
            <h2 className="text-lg font-semibold text-gray-800 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </h2>
          </div>
        </div>
      </section>



      <section className=" p-4 ">
        <div className="max-w-7xl mx-auto py-10 border-b-2 border-t-2 border-black">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

            {/* Column 1 */}
            <div className="space-y-4 col-span-2">
              {column1Articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4 col-span-2">
              {column2Articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Column 3 (Advertisement) */}
            <div className="hidden lg:block col-span-1">
              <Advertisement />
            </div>

          </div>
        </div>
      </section>
     

     <CardSlider/>
   <FeaturedNewsCategory heading={"Cricket news"} articles={cricketNewsData} newsData={newsData}/>
<SportNews2 heading={"Tennis news"} articles={articles} newsData={newsData}/>
  <FeaturedNewsCategory heading={"Football news"} articles={cricketNewsData} newsData={newsData}/>
  <SportNews2 heading={"MMA news"} articles={articles} newsData={newsData}/>
  <FeaturedNewsCategory heading={"Asian Games"} articles={cricketNewsData} newsData={newsData}/>
  <VisualStories/>
    </>
  );
}
