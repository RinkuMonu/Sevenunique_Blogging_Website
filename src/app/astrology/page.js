import React from 'react'
import NowPlaying from '../../../components/NowPlaying'
import HoroscopeSection from '../../../components/HoroscopeSection'
import AdvertisementSection from '../../../components/AdvertisementSection2'
import PlanetsTransitsSection from '../../../components/PlanetsTransitsSection'
import AstroTipsSection from '../../../components/AstroTipsSection'
import VisualStoriesSwiper from '../../../components/VisualStoriesSwiper'
import MoreStories from '../../../components/MoreStories'
import SponsoredBrandsSection from '../../../components/Sponsored'
import HotTopics from '../../../components/HotTopics'

export default function page() {
    const firstContent = {
        mainImage: "/Newimg/Astrology/A1.png",
        mainImageAlt: "Solar System",
        mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
        sideImages: [
            { src: "/Newimg/Astrology/A2.png", alt: "Sun and Planets", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " },
            { src: "/Newimg/Astrology/A3.png", alt: "Planets orbiting", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " },
        ],
        rightImage: { src: "/Newimg/Astrology/A1.png", alt: "Right section image" },
        bottomTexts: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
        ],
    };

    // const secondContent = {
    //     mainImage: "/Newimg/Astrology/B1.png",
    //     mainImageAlt: "Galaxy view",
    //     mainText: "This is the second content's main description.",
    //     sideImages: [
    //         { src: "/Newimg/Astrology/B2.png", alt: "Stars view", text: "Side image A description" },
    //         { src: "/Newimg/Astrology/B3.png", alt: "Nebula clouds", text: "Side image B description" },
    //     ],
    //     rightImage: { src: "/Newimg/Astrology/B1.png", alt: "Right section image different" },
    //     bottomTexts: [
    //         "Another bottom text 1.",
    //         "Another bottom text 2.",
    //     ],
    // };
    const tipsData1 = [
        { img: "/Newimg/Astrology/T1.png", alt: "Tip 1", desc: "First custom description." },
        { img: "/Newimg/Astrology/T2.png", alt: "Tip 2", desc: "Second custom description." },
        { img: "/Newimg/Astrology/T3.png", alt: "Tip 3", desc: "Third custom description." },
        { img: "/Newimg/Astrology/T4.png", alt: "Tip 3", desc: "Third custom description." },
        { img: "/Newimg/Astrology/T5.png", alt: "Tip 3", desc: "Third custom description." },
        { img: "/Newimg/Astrology/T6.png", alt: "Tip 3", desc: "Third custom description." },
        { img: "/Newimg/Astrology/T7.png", alt: "Tip 3", desc: "Third custom description." },
        { img: "/Newimg/Astrology/T8.png", alt: "Tip 3", desc: "Third custom description." },
    ];
    
const storiesData = [
    {
      img: "/Newimg/Tech/11.png",
      overlay: "Tech news and updates",
      items: [
        "AI breakthrough this week",
        "New smartphone released",
        "Top 10 programming languages",
      ],
    },
    {
      img: "/Newimg/Tech/12.png",
      overlay: "Gadgets and Reviews",
      items: ["Smartwatch review", "Laptop comparison", "Best headphones 2025"],
    },
    {
      img: "/Newimg/Tech/13.png",
      overlay: "Innovations in tech",
      items: ["Electric cars trends", "Space exploration updates", "Robotics news"],
    },
  ];
    return (
        <>
            <div className='px-24'>

                <NowPlaying />
                <HoroscopeSection />
                <AdvertisementSection />
                <PlanetsTransitsSection {...firstContent} />
                <AstroTipsSection 
                    tips={tipsData1} />
                <VisualStoriesSwiper />
                <MoreStories stories={storiesData} />
                <SponsoredBrandsSection />
                <HotTopics />

            </div>

        </>
    )
}
