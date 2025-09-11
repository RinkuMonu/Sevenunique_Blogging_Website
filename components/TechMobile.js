"use client";

import Image from "next/image";

export default function TechMobile() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-red-600 underline">Mobile</h2>

      {/* Top Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Large Image */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden">
          <Image
            src="/images/mobile-img.png"
            alt="Main mobile news"
            width={800}
            height={400}
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </div>
        </div>

        {/* Right Side News List */}
        <div className="flex flex-col justify-between space-y-6">
          {/* Single Item */}
          <div className="flex items-center gap-4 border-b pb-4">
            <Image
              src="/images/mob-1.png"
              alt="Side news 1"
              width={150}
              height={100}
              className="w-[120px] h-[80px] rounded-lg object-cover"
            />
            <p className="text-[#002765] font-medium text-sm hover:text-blue-800 cursor-pointer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>

          <div className="flex items-center gap-4 border-b pb-4">
            <Image
              src="/images/mob-2.png"
              alt="Side news 2"
              width={150}
              height={100}
              className="w-[120px] h-[80px] rounded-lg object-cover"
            />
            <p className="text-[#002765] font-medium text-sm hover:text-blue-800 cursor-pointer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/images/mob-3.png"
              alt="Side news 3"
              width={150}
              height={100}
              className="w-[120px] h-[80px] rounded-lg object-cover"
            />
            <p className="text-[#002765] font-medium text-sm hover:text-blue-800 cursor-pointer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>
        </div>
      </div>

      {/* Middle Section (Left Image + Right Text List) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Image */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/mobile-img2.png"
            alt="Mobile focus"
            width={400}
            height={250}
            className="w-full h-[250px] object-cover"
          />
        </div>

        {/* Right Text List */}
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <p
              key={i}
              className="text-[#002765] font-medium text-sm hover:text-blue-800 cursor-pointer"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>
          ))}
        </div>
      </div>

      {/* Bottom Slider (In Focus) */}
      <div className="flex items-center justify-between gap-4 border-t pt-4">
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1 bg-gray-200 rounded-full text-sm font-semibold cursor-pointer">
            In Focus
          </span>
          <span className="px-4 py-1 bg-gray-100 rounded-full text-sm cursor-pointer">
            Lorem
          </span>
          <span className="px-4 py-1 bg-gray-100 rounded-full text-sm cursor-pointer">
            Lorem ipsum dolor sit amet,
          </span>
          <span className="px-4 py-1 bg-gray-200 rounded-full text-sm font-semibold cursor-pointer">
            In Focus
          </span>
          <span className="px-4 py-1 bg-gray-100 rounded-full text-sm cursor-pointer">
            Lorem ipsum dolor sit amet,
          </span>
          <span className="px-4 py-1 bg-gray-200 rounded-full text-sm font-semibold cursor-pointer">
            In Focus
          </span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 border rounded-full">{">"}</button>
          <button className="px-2 py-1 border rounded-full">{"<"}</button>
        </div>
      </div>
    </section>
  );
}
