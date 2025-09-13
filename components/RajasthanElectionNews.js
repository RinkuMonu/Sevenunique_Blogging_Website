"use client"
import Image from 'next/image';
import React from 'react'

export default function RajasthanElectionNews({
    heading,
    mainImage,
    mainHeadline,
    newsCards,
    mainNewsList,
    sideNews,
    buttonText,
    onViewMore,
}) {
    return (
        <div className="bg-white min-h-screen pb-8">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-3xl  text-red-700 underline mb-6 font-bold">
                    {heading}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 flex flex-col">
                        <div className="flex flex-row gap-4 mb-6">
                            <div className="relative rounded-xl overflow-hidden bg-gray-100 h-[340px] flex-1 min-w-[467px]">
                                <Image
                                    src={mainImage.src}
                                    alt={mainImage.alt}
                                    fill
                                    className="rounded-xl object-cover"
                                    priority
                                    sizes="(max-width: 900px) 100vw, 400px"
                                />
                                <div className="absolute bottom-0 left-0 w-full px-7 py-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl">
                                    <p className="text-white text-xl font-semibold leading-tight drop-shadow">
                                        {mainHeadline}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 min-w-[220px]">
                                {mainNewsList.map((headline, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white border-b border-gray-300  py-3 text-gray-800 text-sm leading-snug"
                                    >
                                        {headline}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
                            {newsCards.map((card, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <div className="relative w-full h-[90px] rounded-lg overflow-hidden mb-2">
                                        <Image
                                            src={card.img.src}
                                            alt={card.img.alt}
                                            fill
                                            className="object-cover rounded-lg"
                                            sizes="(max-width: 900px) 50vw, 150px"
                                        />
                                    </div>
                                    <p className="text-[#13326e] font-semibold text-sm text-center leading-snug">
                                        {card.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {sideNews.map((news, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white rounded-lg">
                                <div className="relative w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
                                    <Image
                                        src={news.img.src}
                                        alt={news.img.alt}
                                        fill
                                        className="object-cover rounded-md"
                                        sizes="(max-width: 900px) 20vw, 80px"
                                    />
                                </div>
                                <div className="flex-1 text-gray-700 text-sm mt-1">
                                    {news.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-2 mb-4">
                <button
                    className="bg-red-600 hover:bg-red-700 text-white px-9 py-2.5 font-semibold rounded-full text-lg shadow transition"
                    onClick={onViewMore}
                >
                    {buttonText}
                </button>
            </div>
            <hr className="w-full h-2 mt-8" />
            <hr className="w-full h-2 -mt-1" />
        </div>
    );
}
