"use client";

import Image from "next/image";

export default function LifeTravelSection({ tabs, items }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-6 mb-6">
        <h2 className="text-2xl font-bold text-red-600 flex items-center">
          Travel <span className="ml-1">{">"}</span>
        </h2>
        <nav className="flex gap-6 text-gray-800 text-sm font-medium flex-wrap">
          {tabs.map((tab, index) => (
            <span
              key={index}
              className={`cursor-pointer ${
                index === 0 ? "text-red-600 font-semibold" : ""
              }`}
            >
              {tab}
            </span>
          ))}
        </nav>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {items.map((item) => (
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
        ))}
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
