"use client"
import React from 'react'
import { MdArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function FocusSection() {
    const tags = [
        'Lorem ipsum dolor sit amet,',
        'Consectetur adipiscing elit,',
        'Sed do eiusmod tempor,',
        'Ut labore et dolore magna aliqua,',
        'Ut enim ad minim veniam,',
    ];
    return (
        <>
            <div className="flex items-center w-full gap-4 mt-8 relative">
                    <div className="w-[20%]">
                        <span className="px-4 py-1 flex items-center gap-2 bg-[#EAEAEA] text-black rounded-sm text-sm font-semibold whitespace-nowrap">
                            In Focus <MdArrowRight />
                        </span>
                    </div>

                    
                    <div className="w-[70%] relative">
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
                                    <button className="cursor-pointer px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition">
                                        {tag}
                                    </button>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="w-[10%] flex justify-end items-center gap-4">
                        <div className="custom-prev cursor-pointer p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
                            <IoMdArrowRoundBack />
                        </div>

                        <div className="custom-next cursor-pointer p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200">
                            <IoMdArrowRoundForward />
                        </div>
                    </div>

                </div>
        </>
    )
}
