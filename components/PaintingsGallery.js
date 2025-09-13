import React from 'react';
import Image from 'next/image';

// Data for the main painting card and the list of smaller painting cards
const paintingItems = [
    {
        id: 1,
        imgSrc: '/art/img10.png', // Main painting image
        alt: 'Traditional Indian art paintings',
        text: 'A collection of vibrant traditional Indian art paintings, showcasing cultural narratives and intricate designs.',
        isLarge: true, // Flag to indicate a large card
    },
    {
        id: 2,
        imgSrc: '/art/img2.png',
        alt: 'Deer painting',
        text: 'Depiction of two deer under a tree, symbolizing peace and nature in folk art style.',
    },
    {
        id: 3,
        imgSrc: '/art/img3.png',
        alt: 'Art supplies and miniature paintings',
        text: 'A glimpse into the artist\'s studio, with various miniature paintings and tools of the trade.',
    },
    {
        id: 4,
        imgSrc: '/art/img4.png',
        alt: 'Elephant painting',
        text: 'An artistic representation of an elephant with riders, characteristic of historical Indian mural art.',
    },
    {
        id: 5,
        imgSrc: '/art/img4.png',
        alt: 'Traditional dance painting',
        text: 'A vivid painting capturing a scene of traditional dancers in a festive gathering, full of movement and color.',
    },
    {
        id: 6,
        imgSrc: '/art/img6.png',
        alt: 'Mythological scene painting',
        text: 'A painting illustrating a scene from Hindu mythology, featuring divine figures and storytelling elements.',
    },
    {
        id: 7,
        imgSrc: '/art/img7.png',
        alt: 'Blue tree and figures painting',
        text: 'Art depicting figures under a stylized blue tree, often found in tribal or indigenous art forms.',
    },
    {
        id: 8,
        imgSrc: '/art/img8.png',
        alt: 'Krishna and Radha painting',
        text: 'The iconic depiction of Lord Krishna and Radha, symbols of divine love and devotion.',
    },
    {
        id: 9,
        imgSrc: '/art/img9.png',
        alt: 'Group dance painting',
        text: 'Another lively painting showcasing a group of dancers celebrating, emphasizing community and joy.',
    },
    {
        id: 10,
        imgSrc: '/art/img9.png',
        alt: 'Group dance painting',
        text: 'Another lively painting showcasing a group of dancers celebrating, emphasizing community and joy.',
    },
];



const PaintingsGallery = () => {
    const mainPainting = paintingItems.find(item => item.isLarge);
    const smallPaintingsLeft = paintingItems.filter(item => !item.isLarge).slice(0, 3);
    const smallPaintingsRight = paintingItems.filter(item => !item.isLarge).slice(3, 10);

    return (
        <section className=" py-16 ">
            <div className="mb-12">
                <h2 className="text-3xl underline font-bold text-red-600 mb-6">
                    Paintings
                </h2>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Main Painting and 3 Small Cards */}
                <div className="lg:col-span-1 flex flex-col gap-8">
                    {/* Main Painting Card */}
                    {mainPainting && (
                        <div className="bg-white rounded-xl shadow-md overflow-hidden relative group transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                            <Image
                                src={mainPainting.imgSrc}
                                alt={mainPainting.alt}
                                width={600} // Adjust width/height as needed for aspect ratio
                                height={500}
                                layout="responsive"
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                                <p className="text-lg font-semibold">{mainPainting.text}</p>
                            </div>
                        </div>
                    )}


                    <div className="flex flex-col gap-5">
                        {smallPaintingsLeft.map((item) => (
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
                </div>

                <div className="lg:col-span-1 flex flex-col gap-3">
                    {smallPaintingsRight.map((item) => (
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

                <div className="lg:col-span-1 flex lg:flex-shrink-0 gap-4 ">

                    <div className="relative h-full w-full rounded-lg">
                        <Image
                            src="/Newimg/header/sidenew.jpg"
                            alt="Ad"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative h-full w-full rounded-lg">
                        <Image
                            src="/Newimg/header/sidenew.jpg"
                            alt="Ad"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
                <button className="bg-red-600 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-red-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                    View more
                </button>
            </div>

        </section>
    );
};

export default PaintingsGallery;