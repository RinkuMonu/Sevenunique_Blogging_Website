import React from 'react'
import ScienceHome from '../../../components/ScienceHome'
import NowPlaying from '../../../components/NowPlaying'
import Image from 'next/image'
import VideosSection from '../../../components/TechVideos';
import MoreStories from '../../../components/MoreStories';
import SponsoredBrandsSection from '../../../components/Sponsored';
import HotTopics from '../../../components/HotTopics';

export default function page() {
    const featuredVideoData = {
        videoUrl: "https://youtu.be/1UufaK3pQMg",
        desc: "Featured video description for this page",
      };
    
      const sideVideosData = [
        {
          videoUrl: "https://youtu.be/OGs2YsqvWDg",
          desc: "Side video 1 description",
        },
        {
          videoUrl: "https://youtu.be/Cr9B6yyLZSk",
          desc: "Side video 2 description",
        },
        {
          videoUrl: "https://youtu.be/Otim2mDjsYM",
          desc: "Side video 3 description",
        },
      ];
      const storiesData = [
        {
          img: "/Newimg/Tech/11.png",
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
          img: "/Newimg/Tech/12.png",
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
          img: "/Newimg/Tech/13.png",
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
                <div className="flex justify-between mb-4">
                    <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-2">Science</h1>

                    <div className="bg-[#D9D9D9] text-gray-700 text-center w-[500px] h-[70px] flex flex-col items-center justify-center rounded-md">
                        <Image src="/Newimg/header/bottom1.jpg" alt="adver" width={468} height={60} className="w-[500px] h-[70px] object-cover rounded-md" />
                    </div>
                </div>
        <ScienceHome />
        <VideosSection
          featuredVideo={featuredVideoData}
          sideVideos={sideVideosData}
        />
        <MoreStories stories={storiesData} />
        <SponsoredBrandsSection />
        <HotTopics />
        </div>
            
        </>
    )
}
