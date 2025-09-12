import React from 'react'


const bannerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function NowPlaying() {
  return (
     <div className="w-full bg-red-600 rounded-2xl p-2 flex items-center space-x-4 my-6 overflow-hidden border-2 border-white/30 ">
          {/* "Now Playing" Button */}
          <div className="flex-shrink-0 bg-white text-red-600 rounded-full px-4 py-1.5 flex items-center space-x-2.5  cursor-pointer shadow-md">
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
  )
}

export default NowPlaying
