import Link from 'next/link';
import React from 'react';




// Main component for the video news layout
export default function BusinessComponent4() {
  // Data for the video cards. Replace with your desired YouTube video IDs and titles.
  const mainVideo = {
    id: 'EWPFmdAWRZ0',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
  };

  const sideVideos = [
    {
      id: 'videoseries', // A playlist ID or a specific video ID
      title: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      id: '8m43s7KPYKg',
      title: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      id: 't-gY-G9qsc8',
      title: 'Lorem ipsum dolor sit amet, consectetur',
    },
  ];

  return (
    <div className=" py-10">
      <p className='text-red-600 underline text-3xl mb-5'>Videos </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">

        {/* Main Video Player (Left Column) */}
        <div className="lg:col-span-3">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-[50vh]">
              <iframe
                src="https://www.youtube.com/embed/2FX7OMExh2g?si=5fKwZXM8HsAr7PCh"
                title="Live Breaking News"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 w-full  p-4">
              <h2 className="text-white text-lg font-semibold">
                {mainVideo.title}
              </h2>
            </div>
          </div>

        </div>

        {/* Side Video List (Right Column) */}
        <div className='lg:col-span-2'>
          <div className="flex flex-col gap-4 items-center">
            {sideVideos.map((video, index) => (
              <div
                key={index}
                className=" rounded-lg   flex items-center space-x-4  cursor-pointer"
              >
                <div className="relative flex-shrink-0  w-40 h-22 lg:w-52 lg:h-28">
                  <iframe
                    src="https://www.youtube.com/embed/2FX7OMExh2g?si=5fKwZXM8HsAr7PCh"
                    title="Live Breaking News"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="w-full h-full rounded-lg shadow-md"
                  />

                </div>
                <p className="text-gray-800 text-sm font-medium">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link href={"/"} className="bg-red-600 text-white px-10 py-2 rounded-full text-md font-medium hover:bg-red-700" style={{ boxShadow: " 0px 0px 100px 0px #0000000D" }}>
          View more
        </Link>
      </div>
    </div>
  );
}

