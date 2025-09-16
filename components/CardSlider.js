import React from "react";
import FocusSection from "./FocusSection";
import Image from "next/image";

// Mock data for the articles
const articles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur",
    category: "Sports",
    date: "Sept 3, 2025",
    imageUrl: "/sports/img6.png",
  },
  {
    id: 2,
    title: "Consectetur adipiscing elit, sed do eiusmod",
    category: "Sports",
    date: "Sept 3, 2025",
    imageUrl: "/sports/img2.png",
  },
  {
    id: 3,
    title: "Eiusmod tempor incididunt ut labore et dolore",
    category: "Sports",
    date: "Sept 3, 2025",
    imageUrl: "/sports/img7.png",
  },
];

// Article Ticker Card Component
const ArticleTickerCard = ({ article }) => (
  <div className="flex items-center space-x-4 p-2">
    <img
      src={article.imageUrl}
      alt={article.title}
      className="w-24 h-20 sm:w-32 sm:h-24 object-cover rounded-xl"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/128x96/cccccc/ffffff?text=Error";
      }}
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
  return (
    <div className="flex items-center justify-center">
      <div className="mb-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <ArticleTickerCard key={article.id} article={article} />
          ))}
        </div>

        <FocusSection />

        <div className="flex flex-col items-center justify-center  rounded-lg  w-full col-span-2 mt-5">
          <Image
            width={728}
            height={90}
            src="/Newimg/header/bottom1.jpg"
            alt="Ad"
            className="object-cover h-24 relative adverimg"
          />
        </div>
      </div>
    </div>
  );
}
