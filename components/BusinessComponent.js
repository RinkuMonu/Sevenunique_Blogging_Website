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
      <div className="relative h-full flex items-center justify-center p-4">
        <h2 className="text-white text-sm font-semibold text-center text-shadow-lg">
          {text}
        </h2>
      </div>
    </div>
  );
};

// Main App component
export default function BusinessComponent() {
  const leftCards = [
    { text: "Left card 1: Latest sports update with key highlights", imageUrl: "/sports/img1.png" },
    { text: "Left card 2: In-depth analysis of the recent matches", imageUrl: "/sports/img2.png" },
    { text: "Left card 3: Player interviews and behind-the-scenes", imageUrl: "/sports/img3.png" },
    { text: "Left card 4: Upcoming tournaments schedule and news", imageUrl: "/sports/img4.png" },

  ];

  const rightCards = [
    { text: "Right card 1: Top stories from around the globe", imageUrl: "/sports/img6.png" },
    { text: "Right card 2: Expert opinions and match predictions", imageUrl: "/sports/img7.png" },
    { text: "Right card 3: Highlights of key sports events", imageUrl: "/sports/img8.png" },
    { text: "Right card 4: Training tips and player fitness updates", imageUrl: "/sports/img9.png" },
 
  ];

  const mainCards = [
    { 
      imageUrl: "/sports/img6.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" 
    },
    { 
      imageUrl: "/sports/img7.png",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" 
    },
  ];

  return (
    <div className="py-4 sm:py-6 lg:py-8 ">
      <div className="">
        <h1 className="text-3xl font-bold mb-6 text-[#E50914]">
          Sports Highlights
        </h1>
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
