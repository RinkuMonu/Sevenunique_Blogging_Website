import React from 'react'
import PlanetsTransitsSection from '../../../components/PlanetsTransitsSection'
import NowPlaying from '../../../components/NowPlaying';
import Image from 'next/image';
import AstroTipsSection from '../../../components/AstroTipsSection';
import AdsSection from '../../../components/Ads';
import CartoonsSection from '../../../components/CartoonsSection';
import BlogsSection from '../../../components/BlogsSection';
import VisualStoriesSwiper from '../../../components/VisualStoriesSwiper';
import SponsoredBrandsSection from '../../../components/Sponsored';
import HotTopics from '../../../components/HotTopics';

export default function page() {
    const firstContent = {
        mainImage: "/Newimg/Opinion/3.png",
        mainImageAlt: "Solar System",
        mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
        sideImages: [
            { src: "/Newimg/Opinion/1.png", alt: "Sun and Planets", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " },
            { src: "/Newimg/Opinion/2.png", alt: "Planets orbiting", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " },
        ],
        rightImage: { src: "/Newimg/Opinion/3.png", alt: "Right section image" },
        bottomTexts: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
        ],
    };
    const tipsData1 = [
        { img: "/Newimg/Opinion/4.png", alt: "Tip 1", desc: "First custom description." },
        { img: "/Newimg/Opinion/5.png", alt: "Tip 2", desc: "Second custom description." },
        { img: "/Newimg/Opinion/6.png", alt: "Tip 3", desc: "Third custom description." },
        { img: "/Newimg/Opinion/7.png", alt: "Tip 3", desc: "Third custom description." },
        { img: "/Newimg/Opinion/8.png", alt: "Tip 3", desc: "Third custom description." },
        { img: "/Newimg/Opinion/9.png", alt: "Tip 3", desc: "Third custom description." },
        { img: "/Newimg/Opinion/10.png", alt: "Tip 3", desc: "Third custom description." },
        { img: "/Newimg/Opinion/11.png", alt: "Tip 3", desc: "Third custom description." },
    ];
    const cartoons = [
        { img: "/Newimg/Opinion/cartoon/1.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/2.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/3.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/4.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/5.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/6.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/7.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/8.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/9.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/10.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/11.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/12.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/13.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/14.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/15.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/Opinion/cartoon/16.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
    ]
    const homeBlogs = [
        { img: "/Newimg/Opinion/blog/1.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Tech", date: "Sept 10, 2025" },
        { img: "/Newimg/Opinion/blog/2.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Health", date: "Sept 11, 2025" },
        { img: "/Newimg/Opinion/blog/3.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Sports", date: "Sept 12, 2025" },
        { img: "/Newimg/Opinion/blog/4.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Entertainment", date: "Sept 13, 2025" },
        { img: "/Newimg/Opinion/blog/1.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Tech", date: "Sept 10, 2025" },
        { img: "/Newimg/Opinion/blog/2.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Health", date: "Sept 11, 2025" },
        { img: "/Newimg/Opinion/blog/3.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Sports", date: "Sept 12, 2025" },
        { img: "/Newimg/Opinion/blog/4.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Entertainment", date: "Sept 13, 2025" },
        { img: "/Newimg/Opinion/blog/1.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Tech", date: "Sept 10, 2025" },
        { img: "/Newimg/Opinion/blog/2.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Health", date: "Sept 11, 2025" },
        { img: "/Newimg/Opinion/blog/3.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Sports", date: "Sept 12, 2025" },
        { img: "/Newimg/Opinion/blog/4.png", title: "Lorem ipsum dolor sit amet, consectetur ", category: "Entertainment", date: "Sept 13, 2025" },
    ];
    return (
        <>
            <div className='px-24'>

                <NowPlaying />
                <div className="flex justify-between mb-4">
                    <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-2">Opinions</h1>

                    <div className="bg-[#D9D9D9] text-gray-700 text-center w-[500px] h-[70px] flex flex-col items-center justify-center rounded-md">
                        <Image src="/Newimg/header/bottom1.jpg" alt="adver" width={468} height={60} className="w-[500px] h-[70px] object-cover rounded-md" />
                    </div>
                </div>
                <PlanetsTransitsSection
                    heading=""
                    mainImage="/Newimg/Opinion/3.png"
                    mainImageAlt="Solar System"
                    mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                    sideImages={[
                        { src: "/Newimg/Opinion/1.png", alt: "Sun and Planets", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
                        { src: "/Newimg/Opinion/2.png", alt: "Planets orbiting", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
                    ]}
                    rightImage={{ src: "/Newimg/Opinion/3.png", alt: "Right section image" }}
                    bottomTexts={[
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                    ]}
                />

                <AstroTipsSection title=""
                    tips={tipsData1} />
                <AdsSection />
                <CartoonsSection cartoons={cartoons} />
                <BlogsSection blogs={homeBlogs} />
                <VisualStoriesSwiper />
                <SponsoredBrandsSection />
                <HotTopics />
            </div>


        </>
    )
}
