import React from 'react';

// Sub-component for the smaller cards on the sidebars
const SmallCard = ({ text, imageUrl }) => {
  return (
    <div className="rounded-lg border border-[#00000040] shadow-[0_4px_6px_#00000026] p-4 grid grid-cols-4 gap-4 items-center hover:shadow-xl transition-shadow duration-300 h-24">
      <p className="text-[#002765] text-sm col-span-3">{text}</p>
      <img
        src={imageUrl}
        alt="Sport"
        className="w-16 h-16 object-cover rounded-md"
      />
    </div>
  );
};

// Sub-component for the larger cards in the center
const LargeCard = ({ imageUrl, text }) => {
  return (
    <div className="relative rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative h-full flex items-end justify-center p-4">
        <p className="text-white text-lg font-semibold text-center text-shadow-lg">
          {text}
        </p>
      </div>
    </div>
  );
};

// Main App component
export default function BusinessComponent({mainCards, leftCards, rightCards , heading}) {
 

  return (
    <div className="py-4 sm:py-6 lg:py-8 ">
      <div className="">
    <p className="text-3xl underline font-bold text-red-600 mb-6">
         {heading}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Left Sidebar */}
          <div className="col-span-1 flex flex-col gap-6">
            {leftCards.map((card, index) => (
              <SmallCard key={`left-${index}`} text={card.text} imageUrl={card.imageUrl} />
            ))}
          </div>

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
            {mainCards.map((card, index) => (
              <div className="h-[13.5rem]" key={index}>
                <LargeCard key={`main-${index}`} imageUrl={card.imageUrl} text={card.text} />
              </div>
            ))}
          </div>


          {/* Right Sidebar */}
          <div className="col-span-1 flex flex-col gap-6">
            {rightCards.map((card, index) => (
              <SmallCard key={`right-${index}`} text={card.text} imageUrl={card.imageUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
