"use client";
import Image from "next/image";
import FocusSection from "./FocusSection";

export default function RitualsSection({
    heading,
    mainImage,
    mainTitle,
    rightHeadlines,
    miniCards,
    buttonText,
    onViewMore,
    adText
}) {
    return (
        <div className="bg-white min-h-screen pb-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-serif text-red-700 underline mb-5 font-bold">{heading}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
                    <div className="lg:col-span-7 relative">
                        <div className="rounded-xl overflow-hidden relative bg-gray-100 h-[250px]">
                            <Image
                                src={mainImage.src}
                                alt={mainImage.alt}
                                fill
                                className="object-cover rounded-xl"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 w-full px-7 py-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl">
                                <p className="text-white text-lg font-semibold leading-tight drop-shadow">
                                    {mainTitle}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-2 pl-2 pt-1">
                        {rightHeadlines.map((text, idx) => (
                            <div
                                key={idx}
                                className="text-sm text-gray-800 border-b border-gray-300 pb-4"
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-2">
                    {miniCards.map((card, idx) => (
                        <div key={idx}>
                            <div className="relative w-full h-[120px] rounded-lg overflow-hidden mb-2  bg-gray-100">
                                <Image
                                    src={card.img.src}
                                    alt={card.img.alt}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="text-blue-900 font-semibold text-md leading-snug">
                                {card.title}
                            </div>
                        </div>
                    ))}
                </div>
                <FocusSection />
                <div className="flex justify-center mb-7 mt-8">
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-10 py-2.5 rounded-full text-lg font-semibold shadow-lg shadow-red-200 transition"
                        onClick={onViewMore}
                    >
                        {buttonText}
                    </button>
                </div>
                <div className="flex justify-center w-full py-4">
                    <div className="bg-gray-200 w-full h-[100px] flex items-center justify-center text-xl font-semibold rounded">
                        <Image src="/Newimg/header/bottom1.jpg" alt="adver" width={468} height={60} className="w-full h-[100px] object-cover rounded-md" />

                    </div>
                </div>
            </div>
            <hr className="w-full h-2 mt-8" />
            <hr className="w-full h-2 -mt-1" />
        </div>
    );
}
