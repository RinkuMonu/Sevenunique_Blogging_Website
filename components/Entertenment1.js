import { ChevronRight } from 'lucide-react';
import React, { useState, useMemo } from 'react';

// --- Data for all entertainment items ---
// I've flattened the data into a single list of items.
// The component will now arrange them into your desired layout.
const allEntertainmentItems = [
  // Trending Items
  { id: 1, category: 'Trending', imageUrl: 'sports/img7.png', title: 'The Great Mountain Expedition', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 2, category: 'Trending', imageUrl: 'sports/img9.png', title: 'Urban Jungle Photography', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 3, category: 'Trending', imageUrl: 'sports/img4.png', title: 'Cinematic Landscapes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.' },
  { id: 4, category: 'Trending', imageUrl: 'sports/img10.png', title: 'Adventures in the Deep Sea', text: 'A thrilling journey into the unknown depths of the ocean, exploring vibrant coral reefs and mysterious shipwrecks.' },
  { id: 5, category: 'Trending', imageUrl: 'sports/img11.png', title: 'The Art of Street Food', text: 'A delicious exploration of the world\'s most popular street food.' },
  { id: 12, category: 'Trending', imageUrl: 'sports/img11.png', title: 'The Art of Street Food', text: 'A delicious exploration of the world\'s most popular street food.' },

  // Hindi Items
  { id: 6, category: 'Hindi', imageUrl: 'sports/img1.png', title: 'This is the Main Hindi Feature', text: 'The text is updated to show that the filter is working correctly. Each category can have its own unique layout and data.' },
  { id: 7, category: 'Hindi', imageUrl: 'sports/img2.png', title: 'Hindi Top Right Item', text: 'A secondary feature for the Hindi category.' },
  { id: 8, category: 'Hindi', imageUrl: 'sports/img3.png', title: 'Hindi Bottom Right Item', text: 'Another supporting article for this category.' },

  // English Items
  { id: 9, category: 'English', imageUrl: 'sports/img7.png', title: 'Welcome to the English Category', text: 'This demonstrates how versatile the filtering can be, showcasing different media while the layout remains consistent.' },
  { id: 10, category: 'English', imageUrl: 'sports/img6.png', title: 'English Content Block One', text: 'Exploring classic literature in the modern age.' },
  { id: 11, category: 'English', imageUrl: 'sports/img8.png', title: 'English Content Block Two', text: 'A look at breakthrough independent films.' },
];


const Entertenment1 = () => {
  const [activeFilter, setActiveFilter] = useState('Trending');
  const filters = ['Trending', 'Hindi', 'English', 'Tamil', 'Telugu'];

  // Filter data to get a simple list of items for the active category
  const filteredItems = useMemo(() => {
    if (activeFilter === 'Trending') return allEntertainmentItems.filter(item => item.category === 'Trending');
    return allEntertainmentItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  }

  // Helper function to create chunks of 3 for the layout
  const createLayoutChunks = (items) => {
    const chunks = [];
    for (let i = 0; i < items.length; i += 3) {
      chunks.push(items.slice(i, i + 3));
    }
    return chunks;
  };

  const layoutChunks = createLayoutChunks(filteredItems);

  return (
    <div className=" text-gray-800 py-10">
       <div className="">
         {/* Filter Navigation */}
        <div className="flex flex-col sm:flex-row mb-6 border-b pb-4 gap-4">
<p className="text-3xl underline font-bold text-red-600 mb-4 align-middle inline-flex gap-2">
            Movie    <ChevronRight size={32} className='pt-2'/>
          </p>
            <nav className="flex items-center flex-wrap gap-x-4 pb-5">
                {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => handleFilterClick(filter)}
                    className={`text-sm font-semibold transition-colors duration-300 ${activeFilter === filter ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-red-600'}`}
                >
                    {filter}
                </button>
                ))}
                <button className="text-gray-500">&#9660;</button>
            </nav>
        </div>

        {/* Display filtered content in chunks */}
        <div className="flex flex-col gap-12">
            {layoutChunks.length > 0 ? layoutChunks.map((chunk, index) => {
                const [mainItem, topRightItem, bottomRightItem] = chunk;
                return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* ## Left Column (Spans 7 of 12 columns) - Order is changed for every second row */}
                        {mainItem && (
                            <div className={`flex flex-col md:col-span-7 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                                <img
                                    src={mainItem.imageUrl}
                                    alt={mainItem.title}
                                    className="w-full h-auto object-cover rounded-xl"
                                />
                                <p className="mt-4 text-[#002765] font-bold">
                                    {mainItem.text}
                                </p>
                            </div>
                        )}

                        {/* ## Right Column (Spans 5 of 12 columns) */}
                        <div className="flex flex-col gap-8 md:col-span-5">
                            {/* Top Item */}
                            {topRightItem && (
                                <div className="flex flex-col">
                                    <img
                                        src={topRightItem.imageUrl}
                                        alt={topRightItem.title}
                                        className="w-full h-48 object-cover rounded-xl"
                                    />
                                    <p className="mt-4 text-[#002765] font-bold">
                                        {topRightItem.text}
                                    </p>
                                </div>
                            )}

                            {/* Bottom Item */}
                            {bottomRightItem && (
                                <div className="flex flex-col">
                                    <img
                                        src={bottomRightItem.imageUrl}
                                        alt={bottomRightItem.title}
                                        className="w-full h-48 object-cover rounded-xl"
                                    />
                                    <p className="mt-4 text-[#002765] font-bold">
                                        {bottomRightItem.text}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }) : (
                <p className="text-center text-gray-500">No items found for this category.</p>
            )}
        </div>

       </div>

       
    </div>
  );
};

export default Entertenment1;

