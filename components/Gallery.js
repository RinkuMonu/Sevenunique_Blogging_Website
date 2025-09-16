import React from 'react';
import Image from 'next/image';



const Gallery = ({data}) => {
  return (
    <section className="py-10">
      
        <div className="mb-12">
    <p className="text-3xl underline font-bold text-red-600 mb-6">
            Dance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className=" rounded-xl shadow-[0_4px_6px_#00000026] border border-gray-300 p-4 flex items-center space-x-4 transition-transform duration-300 ease-in-out hover:scale-105 "
            >
              <div className="flex-shrink-0">
                <Image
                  src={item.imgSrc}
                  alt={`Dance form example ${item.id}`}
                  width={100}
                  height={75}
                  className="rounded-lg h-16 object-cover"
                />
              </div>
              <div>
                {/* The text now comes from the 'item' object */}
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-red-600 text-white font-semibold py-2 px-10 rounded-full shadow-md hover:bg-red-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
            View more
          </button>
        </div>
  
    </section>
  );
};

export default Gallery;