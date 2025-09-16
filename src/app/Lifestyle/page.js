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
import AddCompo from "../../../components/AddCompo";
import NowPlaying from "../../../components/NowPlaying";

const tabs = [
  "Trending",
  "Kerala",
  "Punjab Flood",
  "Bali",
  "Gurugram",
  "Rajasthan",
  "▼",
];

const items = [
  {
    id: 1,
    image: "/images/lifestyle/travel1.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 2,
    image: "/images/lifestyle/travel2.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 3,
    image: "/images/lifestyle/travel3.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 4,
    image: "/images/lifestyle/travel4.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
];

const foodtabs = ["Trending", "healthy", "junk ", "green food", "fibre", "dessert", "▼"];

const fooditems = [
  {
    id: 1,
    image: "/images/lifestyle/food1.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 2,
    image: "/images/lifestyle/food2.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 3,
    image: "/images/lifestyle/food3.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 4,
    image: "/images/lifestyle/food4.png",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
];

const fashiontabs = [
  "Trending",
  "Casual",
  "Formal",
  "Ethnic",
  "Western",
  "Accessories",
  "▼",
];

const fashionitems = [
  {
    id: 1,
    category: "Casual",
    image: "/images/lifestyle/fashion1.png",
    title: "Stylish summer T-shirt collection",
  },
  {
    id: 2,
    category: "Formal",
    image: "/images/lifestyle/fashion2.png",
    title: "Classic black blazer for formal events",
  },
  {
    id: 3,
    category: "Ethnic",
    image: "/images/lifestyle/fashion3.png",
    title: "Traditional saree with modern design",
  },
  {
    id: 4,
    category: "Western",
    image: "/images/lifestyle/fashion4.png",
    title: "Trendy denim jacket for all seasons",
  },
];


const recipetabs = ["Trending", "Indian", "Italian", "Chinese", "Dessert", "Vegan", "▼"];

const recipeitems = [
  {
    id: 1,
    category: "Indian",
    image: "/images/lifestyle/food1.png",
    title: "Delicious Paneer Butter Masala",
  },
  {
    id: 2,
    category: "Italian",
    image: "/images/lifestyle/food2.png",
    title: "Classic Spaghetti Carbonara",
  },
  {
    id: 3,
    category: "Chinese",
    image: "/images/lifestyle/food3.png",
    title: "Crispy Chilli Garlic Noodles",
  },
  {
    id: 4,
    category: "Dessert",
    image: "/images/lifestyle/food4.png",
    title: "Chocolate Lava Cake",
  },
];


const healthtabs = [
  "Trending",
  "Fitness",
  "Nutrition",
  "Mental Health",
  "Lifestyle",
  "▼",
];

const healthitems = [
  {
    id: 1,
    category: "Fitness",
    image: "/images/lifestyle/health1.png",
    title: "Best morning exercises to boost energy",
  },
  {
    id: 2,
    category: "Nutrition",
    image: "/images/lifestyle/health2.png",
    title: "Top 10 superfoods for a healthy life",
  },
  {
    id: 3,
    category: "Mental Health",
    image: "/images/lifestyle/health3.png",
    title: "How meditation improves focus",
  },
  {
    id: 4,
    category: "Lifestyle",
    image: "/images/lifestyle/health4.png",
    title: "Daily habits for long-term wellness",
  },
];


const relationshiptabs = [
  "Trending",
  "Love",
  "Friendship",
  "Marriage",
  "Family",
  "Breakup",
  "▼",
];

const relationshipitems = [
  {
    id: 1,
    category: "Love",
    image: "/images/lifestyle/rel1.png",
    title: "10 tips for building stronger relationships",
  },
  {
    id: 2,
    category: "Marriage",
    image: "/images/lifestyle/rel2.png",
    title: "How to maintain trust in marriage",
  },
  {
    id: 3,
    category: "Friendship",
    image: "/images/lifestyle/rel3.png",
    title: "The power of lifelong friendships",
  },
  {
    id: 4,
    category: "Family",
    image: "/images/lifestyle/rel4.png",
    title: "Balancing work and family life",
  },
];


const beautytabs = [
  "Trending",
  "Skincare",
  "Makeup",
  "Haircare",
  "Wellness",
  "▼",
];

const beautyitems = [
  {
    id: 1,
    category: "Skincare",
    image: "/images/lifestyle/health1.png",
    title: "5 tips for glowing skin",
  },
  {
    id: 2,
    category: "Makeup",
    image: "/images/lifestyle/health2.png",
    title: "Top 10 makeup trends this year",
  },
  {
    id: 3,
    category: "Haircare",
    image: "/images/lifestyle/health3.png",
    title: "How to prevent hair damage",
  },
  {
    id: 4,
    category: "Wellness",
    image: "/images/lifestyle/health4.png",
    title: "Self-care rituals for a better you",
  },
];


const visualStoriesData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    imageUrl: "/images/lifestyle/visual1.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    imageUrl: "/images/lifestyle/visual2.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    imageUrl: "/images/lifestyle/visual3.png",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    imageUrl: "/images/lifestyle/visual4.png",
  },
];

export default function LifestyleNews() {
  return (
    <>
      <div className="px-24">
        <NowPlaying />
        <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-9">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 underline mb-6">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Advertisement */}
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
        <LifeTravelSection tabs={tabs} items={items} />
        <LifeFoodSection tabs={foodtabs} items={fooditems} />

<AddCompo />

        <LifeFashionSection tabs={fashiontabs} items={fashionitems} />
        <LifeRecipeSection tabs={recipetabs} items={recipeitems} />
        <LifeRelationshipSection
          tabs={relationshiptabs}
          items={relationshipitems}
        />
        <LifeBeautySection tabs={beautytabs} items={beautyitems} />
        <LifeHealthSection tabs={healthtabs} items={healthitems} />

         <div className="flex flex-col items-center justify-center  rounded-lg  w-full col-span-2 mt-5">
                  <Image
                    width={728}
                    height={90}
                    src="/Newimg/header/bottom1.jpg"
                    alt="Ad"
                    className="object-cover h-24 relative adverimg"
                  />
                </div>


        <VisualStories visualStoriesData={visualStoriesData} />
        <HotTopics />
      </div>
    </>
  );
}
