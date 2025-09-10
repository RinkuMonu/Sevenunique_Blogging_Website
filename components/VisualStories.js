import React, { useState } from 'react';

// Main App Component with all sections combined
export default function VisualStories() {
  // State for the Visual Stories slider
  const [currentIndex, setCurrentIndex] = useState(0);


  const visualStoriesData = [
      { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: 'https://images.unsplash.com/photo-1560298803-1d9c2f6b8b20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=1974&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: 'https://images.unsplash.com/photo-1604903233812-3493e8ae989c?q=80&w=1974&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1974&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { id: 7, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: 'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=2080&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { id: 8, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: 'https://images.unsplash.com/photo-1621295228136-3c4673324c8b?q=80&w=1974&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  ];

  // Logic for the Visual Stories slider
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  const numDots = Math.ceil(visualStoriesData.length / 4);



  return (
    <div className="p-4 sm:p-6 md:p-8 ">

        <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-red-600 inline-block pr-4">Visual Stories</h2>
            <div className="relative">
                <div className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {visualStoriesData.map((story) => (
                            <div key={story.id} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 p-2">
                                <div className="relative rounded-lg overflow-hidden h-96 shadow-lg">
                                    <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <p className="text-white text-base font-semibold">{story.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: numDots }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-gray-800' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
      </div>

  );
}

