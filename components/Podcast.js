"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css/navigation";

const podcasts = [
    {
        date: "1st SEP 2025",
        duration: "07:11",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        videoUrl: "https://youtu.be/KdAzDlbr8jc?si=FIkk6HLh5_Dx7Thl",
    },
    {
        date: "1st SEP 2025",
        duration: "07:11",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        videoUrl: "https://youtu.be/KdAzDlbr8jc?si=FIkk6HLh5_Dx7Thl",
    },
    {
        date: "1st SEP 2025",
        duration: "07:11",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        videoUrl: "https://youtu.be/KdAzDlbr8jc?si=FIkk6HLh5_Dx7Thl",
    },
    {
        date: "1st SEP 2025",
        duration: "07:11",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        videoUrl: "https://youtu.be/KdAzDlbr8jc?si=FIkk6HLh5_Dx7Thl",
    },
    {
        date: "1st SEP 2025",
        duration: "07:11",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        videoUrl: "https://youtu.be/KdAzDlbr8jc?si=FIkk6HLh5_Dx7Thl",
    },
    {
        date: "1st SEP 2025",
        duration: "07:11",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        videoUrl: "https://youtu.be/KdAzDlbr8jc?si=FIkk6HLh5_Dx7Thl",
    },
    {
        date: "1st SEP 2025",
        duration: "07:11",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        videoUrl: "https://youtu.be/KdAzDlbr8jc?si=FIkk6HLh5_Dx7Thl",
    },
    {
        date: "1st SEP 2025",
        duration: "07:11",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        videoUrl: "https://youtu.be/KdAzDlbr8jc?si=FIkk6HLh5_Dx7Thl",
    },
];
function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
}

export default function PodcastSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className="py-8 bg-white">
            <h2 className="text-3xl font-bold text-red-600 mb-6 underline">
                Podcast
            </h2>
            <Swiper
                modules={[Navigation]}
                slidesPerView={4}
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
                className="mySwiper"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {podcasts.map((pod, idx) => {
                    const videoId = extractVideoId(pod.videoUrl);
                    return (
                        <SwiperSlide key={idx}>
                            <div className="flex flex-col justify-between items-start gap-3 h-full">
                                <div className="w-full">
                                    <YoutubeEmbed videoId={videoId} />
                                </div>
                                <div className="flex justify-between w-full mt-3 mb-1 text-sm text-gray-700">
                                    <span>{pod.date}</span>
                                    <span>{pod.duration}</span>
                                </div>
                                <div className="mb-2 text-gray-800 text-sm">
                                    {pod.description}
                                </div>
                                <div className="w-full">
                                <button className="bg-red-600 text-white cursor-pointer rounded-full px-6 py-2 text-sm float-end font-semibold hover:bg-red-700 shadow-xl mb-3">
                                    View more
                                </button>
                                </div>
                              
                            </div>
                        </SwiperSlide>
                    );
                })}
                <button ref={prevRef} className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#E50914] rounded-full shadow p-2 hover:bg-[#fe969c]">
                    <MdKeyboardArrowLeft className="text-white" size={24} />
                </button>

                <button ref={nextRef} className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#E50914] rounded-full shadow p-2 hover:bg-[#fe969c]">
                    <MdKeyboardArrowRight className="text-white" size={24} />
                </button>
            </Swiper>
            <hr className='w-full h-2 mt-8' />
            <hr className='w-full h-2 -mt-1' />
        </div>
    );
}
function YoutubeEmbed({ videoId }) {
    return (
        <div className="relative w-full h-52 rounded-md overflow-hidden shadow-md">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
                // allow="autoplay; encrypted-media"
                allowFullScreen
                title="Podcast video"
            />
        </div>
    );
}
