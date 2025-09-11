import React from 'react';
import Link from 'next/link';

const EntertainmentGrid = ({ heading , data }) => {
  return (
    <div className="py-10">
      <h2 className="text-3xl underline font-bold text-red-600 mb-6">
        {heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((card) => (
          <div key={card.id} className="flex flex-col">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-32 object-cover rounded-xl"
            />
            <p className="mt-4 text-[#002765] font-bold">
              {card.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href={"/"}
          className="bg-red-600 text-white px-10 py-2 rounded-full text-md font-medium hover:bg-red-700"
          style={{ boxShadow: "0px 0px 100px 0px #0000000D" }}
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default EntertainmentGrid;
