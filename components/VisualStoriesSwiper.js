"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const visualStories = [
    { img: "/Newimg/Astrology/V1.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
    { img: "/Newimg/Astrology/V2.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
    { img: "/Newimg/Astrology/V3.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
    { img: "/Newimg/Astrology/V4.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
    { img: "/Newimg/Astrology/V1.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
    { img: "/Newimg/Astrology/V2.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
    { img: "/Newimg/Astrology/V3.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing" },
];

export default function VisualStoriesSwiper() {
    return (
        <section className="max-w-7xl mx-auto pb-8 visualstories">
            <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-4">Visual Stories</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                modules={[Pagination, Autoplay]}
                // pagination={{ clickable: false }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 14 },
                    0: { slidesPerView: 1, spaceBetween: 8 },
                }}
                className="relative pb-24" 
            >
                {visualStories.map((story, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative rounded-xl overflow-hidden aspect-[3/5] w-full">
                            <Image
                                src={story.img}
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                                priority={idx < 2}
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black/0 bg-opacity-50 px-4 py-3">
                                <p className="text-white text-base">{story.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <hr className="w-full h-2 mt-6" />
            <hr className="w-full h-2 -mt-1" />
        </section>
    );
}
