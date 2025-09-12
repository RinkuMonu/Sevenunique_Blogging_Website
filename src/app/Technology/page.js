"use client";

import Image from "next/image";
import TechMobile from "../../../components/TechMobile";
import LaptopPCSection from "../../../components/LaptopPCSection";
import GamesSection from "../../../components/GamesSection";


export default function NewsSection() {
  return (
    <>
    <div className="px-24">

      <section className="max-w-7xl mx-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-9 space-y-6">
          {/* Header + Top Advertisement */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold text-red-600 underline mb-6">Tech News</h2>
            <div className="bg-[#D9D9D9] text-gray-700 text-center w-[468px] h-[60px] flex flex-col items-center justify-center rounded-md">
              <span className="font-medium text-lg">Advertisement</span>
              <span className="font-extrabold text-lg">468*60</span>
            </div>
          </div>

          {/* Main News */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/tech-1.png"
                  alt="Main news"
                  width={700}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0  p-4 text-white text-lg font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod
                </div>
              </div>
            </div>

            {/* Right Side Headlines */}
            <div className="flex-1 flex flex-col justify-between space-y-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <p
                  key={i}
                  className="text-sm text-gray-700 border-b pb-2 hover:text-red-500 cursor-pointer"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor in
                </p>
              ))}
            </div>
          </div>

          {/* Bottom Grid News */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["/images/tech-1.png", "/images/tech-2.png", "/images/tech-3.png", "/images/tech-4.png"].map(
              (img, i) => (
                <div key={i} className="space-y-2">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`news-${i}`}
                      width={700}
                      height={200}
                      className="w-full h-[140px] object-cover"
                    />
                  </div>
                  <p className="text-[#002765] font-bold text-[16px] hover:text-blue-900 cursor-pointer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </p>
                </div>
              )
            )}
          </div>

        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3 flex flex-col items-center space-y-6">
          <div className="bg-[#D9D9D9] text-gray-700 w-[160px] h-[600px] flex items-center justify-center rounded-md text-sm">
            Advertisement <br /> 160*600
          </div>
          {/* <div className="flex flex-col items-center space-y-4">
          <Image
            src="/images/logo.png"
            alt="Sevenunique logo"
            width={150}
            height={150}
          />
          <Image
            src="/images/logo2.png"
            alt="Sevenunique logo alt"
            width={150}
            height={150}
          />
        </div> */}
        </aside>
      </section>

      <hr className='w-full h-2 mt-6' />
      <hr className='w-full h-2 -mt-1' />

      <TechMobile />
      <LaptopPCSection/>
      <GamesSection/>
      </div>

    </>
  );
}
