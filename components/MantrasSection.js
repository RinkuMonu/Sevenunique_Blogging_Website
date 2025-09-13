"use client";
import Image from "next/image";

export default function MantrasSection({
  heading,
  mainCard,   
  leftList,    
  rightList,   
  ads,        
  buttonText,
  onViewMore
}) {
  return (
    <div className="bg-white min-h-screen pb-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-red-700 underline mb-4 font-bold">{heading}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
          <div className="xl:col-span-2 flex flex-col gap-5">
            <div className="relative w-full h-[260px] rounded-xl overflow-hidden bg-gray-100 mb-2">
              <Image
                src={mainCard.img.src}
                alt={mainCard.img.alt}
                fill
                className="object-cover rounded-xl"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full px-5 py-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl">
                <span className="text-white text-xl font-semibold drop-shadow">
                  {mainCard.caption}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {leftList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3  px-3 py-2 border-gray-100">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.img.src}
                      alt={item.img.alt}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-blue-900 font-medium text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="xl:col-span-1 flex flex-col gap-4">
            {rightList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3  px-3 py-2 border-gray-100">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.img.src}
                    alt={item.img.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="text-blue-900 font-medium text-sm">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-col justify-between gap-4 xl:col-span-1">
            {ads.slice(0, 1).map((ad, idx) => (
              <div key={idx} className="bg-gray-200 rounded-md w-[200px] h-[600px] mx-auto">
                <Image
                  src={ad.img.src}
                  alt={ad.img.alt}
                  width={200}
                  height={500}
                  className="object-cover rounded-md h-[600px]"
                />
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-col justify-between gap-4 xl:col-span-1">
            {ads.slice(1, 2).map((ad, idx) => (
              <div key={idx} className="bg-gray-200 rounded-md  w-[200px] h-[600px] mx-auto">
                <Image
                  src={ad.img.src}
                  alt={ad.img.alt}
                  width={200}
                  height={500}
                  className="object-cover rounded-md h-[600px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 mb-2">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-2.5 rounded-full text-lg font-semibold shadow-lg shadow-red-200 transition"
            onClick={onViewMore}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <hr className="w-full h-2 mt-8" />
      <hr className="w-full h-2 -mt-1" />
    </div>
  );
}
