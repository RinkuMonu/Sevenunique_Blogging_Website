import React from 'react'
import NowPlaying from '../../../components/NowPlaying'
import AgricultureNewsSection from '../../../components/AgricultureNewsSection'
import BusinessComponent2 from '../../../components/BusinessComponent2';
import CartoonsSection from '../../../components/CartoonsSection';
import AdvertisementSection from '../../../components/AdvertisementSection2'
import PlanetsTransitsSection from '../../../components/PlanetsTransitsSection';
import VideosSection from '../../../components/TechVideos';
import VisualStoriesSwiper from '../../../components/VisualStoriesSwiper';
import MoreStories from '../../../components/MoreStories';
import SponsoredBrandsSection from '../../../components/Sponsored';
import HotTopics from '../../../components/HotTopics';

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

    const cartoons = [
        { img: "/Newimg/agriculture/15.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/agriculture/8.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/agriculture/9.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/agriculture/10.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/agriculture/11.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/agriculture/12.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/agriculture/13.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
        { img: "/Newimg/agriculture/14.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
    ]
    const featuredVideoData = {
        videoUrl: "https://youtu.be/eZzDXUhdjr0?si=j0nvCeOZEskIhDwb",
        desc: "Featured video description for this page"
    };

    const sideVideosData = [
        {
            videoUrl: "https://youtu.be/Yvz_vW5IDOI?si=jbCmW1wBBjyPJxKY",
            desc: "Side video 1 description"
        },
        {
            videoUrl: "https://youtu.be/yamdAucdzkk?si=y_Q0--tkhaD_z2vd",
            desc: "Side video 2 description"
        },
        {
            videoUrl: "https://youtu.be/E9tTKUWnF8g?si=6SyteEOkiHnS4WJm",
            desc: "Side video 3 description"
        }
    ];
    const storiesData = [
        {
          img: "/Newimg/agriculture/20.png",
          overlay:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
          items: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
          ],
        },
        {
          img: "/Newimg/agriculture/19.png",
          overlay:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
          items: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
          ],
        },
        {
          img: "/Newimg/agriculture/21.png",
          overlay:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
          items: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
          ],
        },
      ];
    return (
        <>
            <div className='px-24'>
                <NowPlaying />
                <AgricultureNewsSection heroData={heroData} newsCards={newsCards} />
                <BusinessComponent2
                    topImage="/Newimg/agriculture/3.png"
                    topTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                    detailedCard={{
                        image: "/Newimg/agriculture/7.png",
                        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod orem ipsum dolor sit amet, consectet"
                    }}
                    rightCards={[
                        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ", image: "/Newimg/agriculture/4.png" },
                        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ", image: "/Newimg/agriculture/5.png" },
                        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ", image: "/Newimg/agriculture/6.png" }
                    ]}

                />
                <CartoonsSection cartoons={cartoons} heading="Agriculture tips" />
                <AdvertisementSection />
                <PlanetsTransitsSection
                    heading=""
                    mainImage="/Newimg/agriculture/3.png"
                    mainImageAlt="Solar System"
                    mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                    sideImages={[
                        { src: "/Newimg/agriculture/16.png", alt: "Sun and Planets", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
                        { src: "/Newimg/agriculture/17.png", alt: "Planets orbiting", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." },
                    ]}
                    rightImage={{ src: "/Newimg/agriculture/18.png", alt: "Right section image" }}
                    bottomTexts={[
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                    ]}
                />
                <VideosSection
                    featuredVideo={featuredVideoData}
                    sideVideos={sideVideosData}
                />
                <VisualStoriesSwiper />
                <MoreStories stories={storiesData}  />
                <SponsoredBrandsSection />
                <HotTopics />
            </div>

        </>
    )
}
