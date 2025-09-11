"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function MovieReviewSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const movies = [
        {
            title: "Lorem ipsum dolor sit amet,",
            description: "Lorem ipsum dolor sit amet,\nLorem ipsum dolor sit amet,",
            poster: "/Newimg/header/movie.png",
            rating: 4,
        },
        {
            title: "Lorem ipsum dolor sit amet,",
            description: "Lorem ipsum dolor sit amet,\nLorem ipsum dolor sit amet,",
            poster: "/Newimg/header/movie.png",
            rating: 3,
        },
        {
            title: "Lorem ipsum dolor sit amet,",
            description: "Lorem ipsum dolor sit amet,\nLorem ipsum dolor sit amet,",
            poster: "/Newimg/header/movie.png",
            rating: 5,
        },
        {
            title: "Lorem ipsum dolor sit amet,",
            description: "Lorem ipsum dolor sit amet,\nLorem ipsum dolor sit amet,",
            poster: "/Newimg/header/movie.png",
            rating: 1,
        },
        {
            title: "Lorem ipsum dolor sit amet,",
            description: "Lorem ipsum dolor sit amet,\nLorem ipsum dolor sit amet,",
            poster: "/Newimg/header/movie.png",
            rating: 4,
        },
        {
            title: "Lorem ipsum dolor sit amet,",
            description: "Lorem ipsum dolor sit amet,\nLorem ipsum dolor sit amet,",
            poster: "/Newimg/header/movie.png",
            rating: 2,
        }
    ];

    return (
        <div className="px-6 py-8 bg-white">
            <h2 className="text-3xl font-bold text-red-600 mb-6 underline">
                Movie review
            </h2>
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                loop
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mySwiper"
            >
                {movies.map((movie, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="flex flex-col items-left">
                            <div className="w-80 h-72 rounded-md overflow-hidden shadow-md">
                                <Image
                                    src={movie.poster}
                                    alt={movie.title}
                                    width={320}
                                    height={384}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex items-center mt-3 mb-1">
                                {[1, 2, 3, 4, 5].map(i =>
                                    <svg key={i} className="w-5 h-5" fill={i <= movie.rating ? "#fbbf24" : "#e5e7eb"} viewBox="0 0 20 20">
                                        <polygon points="10 15 4 18 5.5 11.5 1 7.5 7 7 10 1 13 7 19 7.5 14.5 11.5 16 18" />
                                    </svg>
                                )}
                            </div>

                            <div className="text-left">
                                <div className="font-semibold text-gray-800 text-md mb-2">{movie.title}</div>
                                <p className="text-gray-600 text-sm mb-2 whitespace-pre-line">{movie.description}</p>
                            </div>
                            <div className="w-full float-end">
                                <button className="bg-red-600 cursor-pointer text-white rounded-full w-[fit-content] float-right px-6 py-2 text-sm font-semibold hover:bg-red-700 mt-2 shadow-md">
                                    View more
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>

                ))}
                <button ref={prevRef} className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#E50914] rounded-full shadow p-2 hover:bg-[#fe969c]">
                    <MdKeyboardArrowLeft className="text-white" size={24} />
                </button>

                <button ref={nextRef} className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#E50914] rounded-full shadow p-2 hover:bg-[#fe969c]">
                    <MdKeyboardArrowRight className="text-white" size={24} />
                </button>
            </Swiper>
        </div>
    );
}
