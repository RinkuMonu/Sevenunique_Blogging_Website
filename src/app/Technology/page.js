"use client";

import Image from "next/image";
import TechMobile from "../../../components/TechMobile";
import LaptopPCSection from "../../../components/LaptopPCSection";
import GamesSection from "../../../components/GamesSection";
import TechTips from "../../../components/TechTips";
import VideosSection from "../../../components/TechVideos";
import MoreStories from "../../../components/MoreStories";
import SponsoredBrandsSection from "../../../components/Sponsored";
import HotTopics from "../../../components/HotTopics";
import NowPlaying from "../../../components/NowPlaying";

export default function NewsSection() {
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
      <div className="px-24">
        <NowPlaying />
        <section className="max-w-7xl mx-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-9 space-y-6">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h2 className="text-2xl font-bold text-red-600 underline mb-6">
                Tech News
              </h2>
              <div className="bg-[#D9D9D9] text-gray-700 text-center w-[500px] h-[70px] flex flex-col items-center justify-center rounded-md">
                <Image
                  src="/Newimg/header/bottom1.jpg"
                  alt="adver"
                  width={468}
                  height={60}
                  className="w-[500px] h-[70px] object-cover rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/tech-1.png"
                    alt="Main news"
                    width={700}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0  p-4 text-white text-lg font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <p
                    key={i}
                    className="text-sm text-gray-700 border-b pb-2 hover:text-red-500 cursor-pointer"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor in
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "/images/tech-1.png",
                "/images/tech-2.png",
                "/images/tech-3.png",
                "/images/tech-4.png",
              ].map((img, i) => (
                <div key={i} className="space-y-2">
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`news-${i}`}
                      width={700}
                      height={200}
                      className="w-full h-[140px] object-cover"
                    />
                  </div>
                  <p className="text-[#002765] font-bold text-[16px] hover:text-blue-900 cursor-pointer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-3 flex flex-col items-center space-y-6">
            <div className="bg-[#D9D9D9] text-gray-700 w-[250px] h-[600px] flex items-center justify-center rounded-md text-sm">
              <Image
                src="/Newimg/header/sidenew.jpg"
                className="w-[250px] h-[630px] object-cover rounded-md"
                alt="sidenews"
                width={160}
                height={600}
              />
            </div>
          </aside>
        </section>

        <hr className="w-full h-2 mt-6" />
        <hr className="w-full h-2 -mt-1" />

        <TechMobile />
        <LaptopPCSection />
        <GamesSection />
        <TechTips />
        <VideosSection
          featuredVideo={featuredVideoData}
          sideVideos={sideVideosData}
        />
        <MoreStories stories={storiesData} />
        <SponsoredBrandsSection />
        <HotTopics />
      </div>
    </>
  );
}
