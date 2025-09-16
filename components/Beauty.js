"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function LifeBeautySection({ tabs, items }) {
  // Active tab state
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Filter items by category, or show all when "Trending"
  const filteredItems = items.filter(
    (item) => item.category === activeTab || activeTab === "Trending"
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-6 mb-6">
       <h2 className="text-2xl md:text-3xl underline font-bold text-red-600 flex items-center">
          Beauty <span><ChevronRight className="ml-1 w-5 h-5" /></span>
        </h2>
        <nav className="flex gap-6 text-gray-800 text-sm font-medium flex-wrap">
          {tabs.map((tab, index) => (
            <span
              key={index}
              onClick={() => setActiveTab(tab)} // update active tab
              className={`cursor-pointer ${
                activeTab === tab ? "text-red-600 font-semibold" : ""
              }`}
            >
              {tab}
            </span>
          ))}
        </nav>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="rounded-xl overflow-hidden">
              <div className="h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="mt-2 text-[#002765] font-semibold text-base leading-snug">
                {item.title}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No beauty articles available
          </p>
        )}
      </div>

      {/* Button */}
      <div className="flex justify-center mb-6">
        <button className="px-6 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700">
          View more
        </button>
      </div>

      {/* Bottom Line */}
      <div className="border-b"></div>
    </section>
  );
}
