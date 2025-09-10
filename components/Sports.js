'use client';

import Link from 'next/link';
import React from 'react'
import { MdArrowRight, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export default function Sports() {
    const tags = [
        'Lorem ipsum dolor sit amet,',
        'Consectetur adipiscing elit,',
        'Sed do eiusmod tempor,',
        'Ut labore et dolore magna aliqua,',
        'Ut enim ad minim veniam,',
    ];
    return (
        <>
            <section className="w-full max-w-screen-xl mx-auto px-4 py-12">
                {/* Section Header */}
                <h2 className="text-2xl font-bold text-red-600 mb-6">Sports</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column: List of articles */}
                    <div className="flex flex-col space-y-4">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <p key={idx} className="text-sm text-gray-600 border-b pb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                        ))}
                    </div>

                    {/* Center & Right Column: Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:col-span-2">
                        <img src="/Newimg/header/Sp1.png" alt="Sport 1" className="w-full h-auto rounded-lg shadow-md object-cover" />
                        <img src="/Newimg/header/Sp2.png" alt="Sport 2" className="w-full h-auto rounded-lg shadow-md object-cover" />
                        <img src="/Newimg/header/Sp3.png" alt="Sport 3" className="w-full h-auto rounded-lg shadow-md object-cover" />
                    </div>
                </div>

                {/* Tag Navigation */}
                <div className="flex items-center justify-between w-full gap-4 mt-8 relative">
                    {/* Left: In Focus Badge */}
                    <span className="px-4 py-1 flex items-center gap-2 bg-[#EAEAEA] text-black rounded-sm text-sm font-semibold whitespace-nowrap">
                        In Focus <MdArrowRight />
                    </span>

                    {/* Center: Slider */}
                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: '.custom-prev',
                                nextEl: '.custom-next',
                            }}
                            slidesPerView="auto"
                            spaceBetween={10}
                            className="w-full"
                        >
                            {tags.map((tag, idx) => (
                                <SwiperSlide key={idx} style={{ width: 'auto' }}>
                                    <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition">
                                        {tag}
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* Left Arrow */}
                    <div className="custom-prev block relative  cursor-pointer p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
                        <MdKeyboardArrowLeft size={24} />
                    </div>

                    {/* Right Arrow */}
                    <div className="custom-next block relative   cursor-pointer p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
                        <MdKeyboardArrowRight size={24} />
                    </div>
                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-8">
                    <Link href={"/"} className="bg-red-600 text-white px-10 py-2 rounded-full text-md font-medium hover:bg-red-700" style={{ boxShadow: " 0px 0px 100px 0px #0000000D" }}>
                        View more
                    </Link>
                </div>
            </section>


        </>
    )
}
