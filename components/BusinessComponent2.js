import React from 'react';
import FocusSection from './FocusSection';

// RightColumnCard with array of 3 items including text and image
const RightColumnCard = () => {
    const cardItems = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            image: "/sports/img6.png"
        },
        {
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
            image: "/sports/img7.png"
        },
        {
            text: "At vero eos et accusamus et iusto odio dignissimos ducimus",
            image: "/sports/img8.png"
        }
    ];

    return (
        <div className="flex flex-col gap-5">
            {cardItems.map((item, index) => (
                <div
                    key={index}
                    className=" md:flex items-center space-x-4 border-b last:border-0 pb-3"
                >
                    <img
                        src={item.image}
                        alt="News"
                        className="lg:w-58 lg:h-36 object-cover rounded-md flex-shrink-0"
                    />
                    <p className="text-[#002765] font-bold flex-grow">{item.text}</p>
                </div>
            ))}
        </div>
    );
};

// Main component
export default function BusinessComponent2() {
    return (
        <div className="py-10 border-b ">
            <div className="grid grid-cols-1 lg:grid-cols-5 md:gap-8">

                {/* Left Column */}
                <div className='col-span-3'>
                    <div className="flex flex-col gap-6">
                        {/* Top Large Card */}
                        <div className="relative rounded-xl overflow-hidden h-72">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url('/sports/img6.png')` }}
                            ></div>

                            <div className="relative h-full flex items-end p-6">
                                <h3 className="text-white text-2xl font-semibold text-shadow-lg">
                                    Lorem ipsum dolor sit amet, consectetur
                                </h3>
                            </div>
                        </div>

                        {/* Bottom Detailed Card */}
                        <div className="  rounded-xl  md:flex items-center space-x-4 ">
                            <img
                                src="/sports/img6.png"
                                alt="News"
                                className="w-64 h-52 object-cover  rounded-md flex-shrink-0"
                            />
                            <div className="flex flex-col justify-center">
                                <h3 className="font-bold text-[#002765]  mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod orem ipsum dolor sit amet, consectet
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Column */}
                <div className='col-span-2'>
                    <RightColumnCard />
                </div>

            </div>
            <FocusSection/>
        </div>
    );
}
