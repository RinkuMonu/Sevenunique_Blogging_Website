import React from 'react'
import NowPlaying from '../../../components/NowPlaying'
import AgricultureNewsSection from '../../../components/AgricultureNewsSection'

export default function page() {
    const heroData = {
        img: "/Newimg/agriculture/2.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  Lorem ipsum dolor sit amet, consectetur",
        alt: "Sustainable farming field",
      };
      
      const newsCards = [
        { img: "/Newimg/agriculture/1.png", desc: "New irrigation techniques revolutionize farming", alt: "Irrigation" },
        { img: "/Newimg/agriculture/1.png", desc: "Crop yield improves with advanced fertilizers", alt: "Fertilizers" },
        { img: "/Newimg/agriculture/1.png", desc: "Crop yield improves with advanced fertilizers", alt: "Fertilizers" },
        { img: "/Newimg/agriculture/1.png", desc: "Farmers adopt eco-friendly pest control methods", alt: "Pest Control" },
        { img: "/Newimg/agriculture/1.png", desc: "Smart tractors driving agricultural innovation", alt: "Smart Tractors" },
        { img: "/Newimg/agriculture/1.png", desc: "Smart tractors driving agricultural innovation", alt: "Smart Tractors" },
        { img: "/Newimg/agriculture/1.png", desc: "Smart tractors driving agricultural innovation", alt: "Smart Tractors" },
        { img: "/Newimg/agriculture/1.png", desc: "Smart tractors driving agricultural innovation", alt: "Smart Tractors" },
        { img: "/Newimg/agriculture/1.png", desc: "Smart tractors driving agricultural innovation", alt: "Smart Tractors" },
        { img: "/Newimg/agriculture/1.png", desc: "Smart tractors driving agricultural innovation", alt: "Smart Tractors" },
        { img: "/Newimg/agriculture/1.png", desc: "Smart tractors driving agricultural innovation", alt: "Smart Tractors" },
        { img: "/Newimg/agriculture/1.png", desc: "Smart tractors driving agricultural innovation", alt: "Smart Tractors" },
      ];
    return (
        <>
        <div className='px-24'>
        <NowPlaying />
        <AgricultureNewsSection heroData={heroData} newsCards={newsCards} />
        </div>
            
        </>
    )
}
