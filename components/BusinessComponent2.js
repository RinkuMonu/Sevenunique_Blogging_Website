import React from 'react';
import RightColumnCard from './RightColumnCard';
import FocusSection from './FocusSection';

const BusinessComponent2 = ({ topImage, topTitle, detailedCard, rightCards }) => {
    return (
        <div className="pb-8 pt-4 ">
            <h3 className="text-3xl font-bold text-red-600 mb-4 border-b-4 border-red-600 inline-block">
                International Business news
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-5 md:gap-8">
                <div className="col-span-3">
                    <div className="flex flex-col gap-6">
                        <div className="relative rounded-xl overflow-hidden h-72">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${topImage})` }}
                            ></div>

                            <div className="relative h-full flex items-end p-6">
                                <h3 className="text-white text-2xl font-semibold text-shadow-lg">
                                    {topTitle}
                                </h3>
                            </div>
                        </div>
                        <div className="rounded-xl md:flex items-center space-x-4">
                            <img
                                src={detailedCard.image}
                                alt="News"
                                className="w-64 h-52 object-cover rounded-md flex-shrink-0"
                            />
                            <div className="flex flex-col justify-center">
                                <h3 className="font-bold text-[#002765] mb-2">
                                    {detailedCard.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {detailedCard.description}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-span-2">
                    <RightColumnCard cardItems={rightCards} />
                </div>

            </div>

            <FocusSection />
            <hr className="w-full h-2 mt-6" />
      <hr className="w-full h-2 -mt-1" />
        </div>
    );
};

export default BusinessComponent2;
