"use client"
import React from 'react'
import NowPlaying from '../../../components/NowPlaying'
import ReligionNews from '../../../components/ReligionNews'
import Image from 'next/image'
import FocusNewsCarousel from '../../../components/FocusNewsCarousel'
import UpcomingFestivals from '../../../components/UpcomingFestivals'
import RajasthanElectionNews from '../../../components/RajasthanElectionNews'
import RitualsSection from '../../../components/RitualsSection'
import MantrasSection from '../../../components/MantrasSection'
import VisualStoriesSwiper from '../../../components/VisualStoriesSwiper'
import HotTopics from '../../../components/HotTopics'

export default function page() {
    return (
        <>
            <div className='px-24'>
                <NowPlaying />
                <div className="flex justify-between mb-4">
                    <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-2">Election</h1>

                    <div className="bg-[#D9D9D9] text-gray-700 text-center w-[500px] h-[70px] flex flex-col items-center justify-center rounded-md">
                        <Image src="/Newimg/header/bottom1.jpg" alt="adver" width={468} height={60} className="w-[500px] h-[70px] object-cover rounded-md" />
                    </div>
                </div>
                <ReligionNews
                    // pageHeading="Religion"
                    mainImage={{ src: "/Newimg/religion/1.png", alt: "Main Religion News" }}
                    mainTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
                    mainTime="9 mins ago"
                    rightTopImage={{ src: "/Newimg/religion/2.png", alt: "Rosary" }}
                    rightTopTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                    rightTopTime="9 mins ago"
                    rightBottomImage={{ src: "/Newimg/religion/3.png", alt: "Symbols" }}
                    rightBottomTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                    rightBottomTime="9 mins ago"
                    rightAdImage={{ src: "/Newimg/header/leftside1.jpg", alt: "Sevenunique Ad" }}
                />
                <FocusNewsCarousel
                    newsSlides={[
                        {
                            img: { src: "/Newimg/religion/4.png", alt: "Hijab News" },
                            title: "Lorem ipsum dolor sit amet, consectetur",
                            category: "Religion",
                            date: "Sept 3, 2025"
                        },
                        {
                            img: { src: "/Newimg/religion/4.png", alt: "Hijab News" },
                            title: "Lorem ipsum dolor sit amet, consectetur",
                            category: "Religion",
                            date: "Sept 3, 2025"
                        },
                        {
                            img: { src: "/Newimg/religion/4.png", alt: "Hijab News" },
                            title: "Lorem ipsum dolor sit amet, consectetur",
                            category: "Religion",
                            date: "Sept 3, 2025"
                        }
                    ]}
                    categories={[
                        "Lorem", "Lorem ipsum dolor sit amet,", "Lorem ipsum dolor sit amet,"
                    ]}
                    adText="728*90"
                />
                <UpcomingFestivals
                    heading="Upcoming festivals"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                    columns={["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"]}
                    rows={Array.from({ length: 10 }).map(() =>
                        ["Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur", "Lorem ipsum dolor sit amet, consectetur"]
                    )}
                    buttonText="View more"
                    onViewMore={() => alert("Show more festivals!")}
                />
                <RajasthanElectionNews
                    heading="Festivals"
                    mainImage={{ src: "/Newimg/religion/9.png", alt: "Election Main" }}
                    mainHeadline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                    newsCards={[
                        {
                            img: { src: "/Newimg/religion/2.png", alt: "Election Thumb 1" },
                            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                        },
                        {
                            img: { src: "/Newimg/religion/5.png", alt: "Election Thumb 2" },
                            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                        },
                        {
                            img: { src: "/Newimg/religion/3.png", alt: "Election Thumb 3" },
                            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                        },
                        {
                            img: { src: "/Newimg/religion/4.png", alt: "Election Thumb 4" },
                            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                        },
                    ]}
                    mainNewsList={[
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
                    ]}
                    sideNews={[
                        {
                            img: { src: "/Newimg/religion/7.png", alt: "Side News 1" },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        },
                        {
                            img: { src: "/Newimg/religion/8.png", alt: "Side News 1" },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        },
                        {
                            img: { src: "/Newimg/religion/9.png", alt: "Side News 1" },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        },
                        {
                            img: { src: "/Newimg/religion/10.png", alt: "Side News 1" },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        },
                        {
                            img: { src: "/Newimg/religion/11.png", alt: "Side News 1" },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        },
                        {
                            img: { src: "/Newimg/religion/10.png", alt: "Side News 1" },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        },
                        {
                            img: { src: "/Newimg/religion/11.png", alt: "Side News 1" },
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        },
                    ]}
                    buttonText="View more"
                    onViewMore={() => alert("View more clicked!")}
                />
                <RitualsSection
                    heading="Rituals"
                    mainImage={{ src: "/Newimg/religion/19.png", alt: "Main Ritual" }}
                    mainTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                    rightHeadlines={[
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
                    ]}
                    miniCards={[
                        {
                            img: { src: "/Newimg/religion/15.png", alt: "Ritual 1" },
                            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                        },
                        {
                            img: { src: "/Newimg/religion/16.png", alt: "Ritual 2" },
                            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                        },
                        {
                            img: { src: "/Newimg/religion/17.png", alt: "Ritual 3" },
                            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                        },
                        {
                            img: { src: "/Newimg/religion/18.png", alt: "Ritual 4" },
                            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                        },
                    ]}
                    navButtons={[
                        "In Focus",
                        ">",
                        "Lorem",
                        "Lorem ipsum dolor sit amet,",
                        "In Focus"
                    ]}
                    onNavClick={(idx) => console.log("Nav clicked:", idx)}
                    buttonText="View more"
                    onViewMore={() => alert("View more clicked")}
                    adText="728*90"
                />
                <MantrasSection
                    heading="Mantras"
                    mainCard={{
                        img: { src: "/Newimg/religion/29.png", alt: "Main Mantra" },
                        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                    }}
                    leftList={[
                        { img: { src: "/Newimg/religion/20.png", alt: "Mantra 1" }, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
                        { img: { src: "/Newimg/religion/21.png", alt: "Mantra 2" }, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
                        { img: { src: "/Newimg/religion/22.png", alt: "Mantra 3" }, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" }
                    ]}
                    rightList={[
                        { img: { src: "/Newimg/religion/23.png", alt: "Mantra 4" }, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
                        { img: { src: "/Newimg/religion/24.png", alt: "Mantra 5" }, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
                        { img: { src: "/Newimg/religion/25.png", alt: "Mantra 6" }, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
                        { img: { src: "/Newimg/religion/25.png", alt: "Mantra 6" }, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
                        { img: { src: "/Newimg/religion/25.png", alt: "Mantra 6" }, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" },
                    ]}
                    ads={[
                        { img: { src: "/Newimg/header/sidenew.jpg", alt: "Ad 1" }, },
                        { img: { src: "/Newimg/header/sidenew.jpg", alt: "Ad 2" }, }
                    ]}
                    buttonText="View more"
                    onViewMore={() => alert("More mantras...")}
                />
                <VisualStoriesSwiper />
                <HotTopics />

            </div>
        </>
    )
}
