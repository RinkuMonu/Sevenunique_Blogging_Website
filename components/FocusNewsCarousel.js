"use client";
import Image from "next/image";
import FocusSection from "./FocusSection";

export default function FocusNewsCarousel({
    newsSlides,
    categories,
    adText
}) {
    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto flex flex-row items-start justify-between pb-3">
                {newsSlides.map((news, idx) => (
                    <div key={idx} className="w-[310px] flex flex-row gap-3 items-start">
                        <div className="relative w-28 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                                src={news.img.src}
                                alt={news.img.alt}
                                fill
                                className="object-cover rounded-md"
                                sizes="112px"
                            />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-blue-900 leading-tight">
                                {news.title}
                            </div>
                            <div className="text-xs text-gray-600 flex gap-1 mt-1">
                                <span>{news.category}</span>
                                <span>/</span>
                                <span>{news.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <FocusSection />
            <div className="flex justify-center w-full py-4">
                <div className="bg-gray-200 w-full h-[100px] flex items-center justify-center text-xl font-semibold rounded">
                    <Image src="/Newimg/header/bottom1.jpg" alt="adver" width={468} height={60} className="w-full h-[100px] object-cover rounded-md" />

                </div>
            </div>
            <hr className="w-full h-2 mt-8" />
            <hr className="w-full h-2 -mt-1" />
        </div>
    );
}
