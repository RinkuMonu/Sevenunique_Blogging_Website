"use client";

import Image from "next/image";
import LifeTravelSection from "../../../components/Travel";
import LifeFoodSection from "../../../components/Food";
import LifeFashionSection from "../../../components/Fashion";
import LifeRecipeSection from "../../../components/Recipe";
import LifeHealthSection from "../../../components/Health";
import LifeRelationshipSection from "../../../components/Relationship";
import LifeBeautySection from "../../../components/Beauty";
import VisualStories from "../../../components/VisualStories";
import HotTopics from "../../../components/HotTopics";


 const tabs = ["Trending", "Kerala", "Punjab Flood", "Bali", "Gurugram", "Rajasthan", "▼"];

  const items = [
    {
      id: 1,
      image: "/images/lifestyle/travel1.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 2,
      image: "/images/lifestyle/travel2.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 3,
      image: "/images/lifestyle/travel3.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 4,
      image: "/images/lifestyle/travel4.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];

 const foodtabs = ["Trading", "lorem", "lorem ", "lorem", "lorem", "lorem", "▼"];

  const fooditems = [
    {
      id: 1,
      image: "/images/lifestyle/food1.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 2,
      image: "/images/lifestyle/food2.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 3,
      image: "/images/lifestyle/food3.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 4,
      image: "/images/lifestyle/food4.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];


   const fashiontabs = ["Trending", "lorem", "lorem ", "lorem", "lorem", "lorem", "▼"];

  const fashionitems = [
    {
      id: 1,
      image: "/images/lifestyle/fashion1.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 2,
      image: "/images/lifestyle/fashion2.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 3,
      image: "/images/lifestyle/fashion3.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 4,
      image: "/images/lifestyle/fashion4.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];

   const recipetabs = ["Trading", "lorem", "lorem ", "lorem", "lorem", "lorem", "▼"];

  const recipeitems = [
    {
      id: 1,
      image: "/images/lifestyle/food1.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 2,
      image: "/images/lifestyle/food2.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 3,
      image: "/images/lifestyle/food3.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 4,
      image: "/images/lifestyle/food4.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];


  const healthtabs = ["Trading", "lorem", "lorem ", "lorem", "lorem", "lorem", "▼"];

  const healthitems = [
    {
      id: 1,
      image: "/images/lifestyle/health1.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 2,
      image: "/images/lifestyle/health2.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 3,
      image: "/images/lifestyle/health3.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 4,
      image: "/images/lifestyle/health4.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];


  const relationshiptabs = ["Trading", "lorem", "lorem ", "lorem", "lorem", "lorem", "▼"];

  const relationshipitems = [
    {
      id: 1,
      image: "/images/lifestyle/rel1.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 2,
      image: "/images/lifestyle/rel2.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 3,
      image: "/images/lifestyle/rel3.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 4,
      image: "/images/lifestyle/rel4.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];

  const beautytabs = ["Trading", "lorem", "lorem ", "lorem", "lorem", "lorem", "▼"];

  const beautyitems = [
    {
      id: 1,
      image: "/images/lifestyle/health1.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 2,
      image: "/images/lifestyle/health2.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 3,
      image: "/images/lifestyle/health3.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: 4,
      image: "/images/lifestyle/health4.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];


  const visualStoriesData = [
  { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/images/lifestyle/visual1.png' },
  { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/images/lifestyle/visual2.png' },
  { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/images/lifestyle/visual3.png' },
  { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/images/lifestyle/visual4.png' },
];


export default function LifestyleNews() {
  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Section */}
      <div className="lg:col-span-9">
        {/* Title */}
        <h2 className="text-2xl font-bold text-red-600 underline mb-6">
          Lifestyle News
        </h2>

        {/* Top Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/lifestyle/lifestyle-1.png"
              alt="Lifestyle"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            {/* Gradient Bottom Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(0,0,0,0)_32.21%,rgba(0,0,0,0.5)_60.1%)] p-4 flex items-end">
              <p className="text-white text-base font-semibold leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/images/lifestyle/lifestyle-2.png"
              alt="Lifestyle"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(0,0,0,0)_32.21%,rgba(0,0,0,0.5)_60.1%)] p-4 flex items-end">
              <p className="text-white text-base font-semibold leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Four Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "/images/lifestyle/life1.png",
            "/images/lifestyle/life2.png",
            "/images/lifestyle/life3.png",
            "/images/lifestyle/life4.png",
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-white">
              {/* Fixed height image container */}
              <div className="h-36 w-full">
                <Image
                  src={src}
                  alt={`News ${i}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <p className="p-3 text-gray-600 hover:text-[#002765] font-semibold text-sm leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Advertisement */}
      <aside className="lg:col-span-3 flex flex-col items-center space-y-6">
        <div className="bg-[#D9D9D9] text-gray-700 w-[160px] h-[600px] flex items-center justify-center rounded-md text-sm">
          Advertisement <br /> 160*600
        </div>
      </aside>





    </section>
 <LifeTravelSection tabs={tabs} items={items} />
 <LifeFoodSection tabs={foodtabs} items={fooditems} />


 <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side (Stacked Ads) */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* 728x90 Ad */}
          <div className="w-full bg-gray-200 flex justify-center items-center">
            <Image
              src="/images/ads/ad-728x90.png"
              alt="728x90 Advertisement"
              width={728}
              height={90}
              className="object-cover"
            />
          </div>

          {/* 468x60 Ad */}
          <div className="w-[468px] mx-auto bg-gray-200 flex justify-center items-center">
            <Image
              src="/images/ads/ad-468x60.png"
              alt="468x60 Advertisement"
              width={468}
              height={60}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side (300x250 Ad) */}
        <div className="flex justify-center items-start">
          <div className="bg-gray-200">
            <Image
              src="/images/ads/ad-300x250.png"
              alt="300x250 Advertisement"
              width={300}
              height={250}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b mt-6"></div>
    </section>

<LifeFashionSection tabs={fashiontabs} items={fashionitems} />
<LifeRecipeSection tabs={recipetabs} items={recipeitems} />
<LifeRelationshipSection tabs={relationshiptabs} items={relationshipitems} />
<LifeBeautySection tabs={beautytabs} items={beautyitems} />
<LifeHealthSection tabs={healthtabs} items={healthitems} />
<VisualStories visualStoriesData={visualStoriesData}/>
<HotTopics/>
    </>
  );
}
