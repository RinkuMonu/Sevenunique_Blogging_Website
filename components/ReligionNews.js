"use client";
import Image from "next/image";

export default function ReligionNews({
  pageHeading,
  topAdText,
  mainImage,
  mainTitle,
  mainTime,
  rightTopImage,
  rightTopTitle,
  rightTopTime,
  rightBottomImage,
  rightBottomTitle,
  rightBottomTime,
  rightAdImage,
  rightAdText,
}) {
  return (
    <div className="bg-white min-h-screen pb-3">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl  text-red-700 underline mb-4 font-bold">{pageHeading}</h1>
        {/* 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* Column 1: Main news, 40% width */}
          <div className="lg:col-span-5 flex flex-col">
            <div className=" overflow-hidden">
              <div className="relative w-full h-[260px] bg-gray-200">
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  className="object-cover rounded-md"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="py-2">
                <span className="text-xs text-gray-500">Updated {mainTime}</span>
                <h2 className="mt-1 text-base font-semibold text-blue-900 leading-tight">
                  {mainTitle}
                </h2>
              </div>
            </div>
          </div>
          {/* Column 2: Two news cards */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* News card 1 */}
            <div className="rounded-md overflow-hidden">
              <div className="relative w-full h-[147px] rounded-md bg-gray-200">
                <Image
                  src={rightTopImage.src}
                  alt={rightTopImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 28vw rounded-md"
                />
              </div>
            <div className="py-2">
                <span className="text-xs text-gray-500">Updated {rightTopTime}</span>
                <h3 className="mt-1 text-base font-semibold text-blue-900">
                  {rightTopTitle}
                </h3>
              </div>
            </div>
            {/* News card 2 */}
            <div className="rounded-md overflow-hidden">
              <div className="relative w-full h-[147px] rounded-md bg-gray-200">
                <Image
                  src={rightBottomImage.src}
                  alt={rightBottomImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 28vw rounded-md"
                />
              </div>
            <div className="py-2">
                <span className="text-xs text-gray-500">Updated {rightBottomTime}</span>
                <h3 className="mt-1 text-base font-semibold text-blue-900">
                  {rightBottomTitle}
                </h3>
              </div>
            </div>
          </div>
          {/* Column 3: Advertisement */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-5">
            <div className=" flex items-center justify-center h-[240px] min-h-[250px]">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={rightAdImage.src}
                  alt={rightAdImage.alt}
                  width={200}
                  height={70}
                  className="object-contain mb-1 w-[300px] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-2 mt-8" />
            <hr className="w-full h-2 -mt-1" />
    </div>
  );
}
