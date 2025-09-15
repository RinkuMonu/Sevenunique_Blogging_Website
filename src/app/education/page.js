"use client"
import React from 'react'
import FocusSection from '../../../components/FocusSection';
import VisualStories from '../../../components/VisualStories';
import SportNews2 from '../../../components/SportNews2';
import FeaturedNewsCategory from '../../../components/SortNews1';
import SponsoredBrandsSection from '../../../components/Sponsored';
import HotTopics from '../../../components/HotTopics';
import AddCompo from '../../../components/AddCompo';
import TopUniversities from '../../../components/TopUniversities';
import Image from 'next/image';
import EducationGrid from '../../../components/EducationGrid';



const educationData = [
  {
    imageUrl: "/education/ed1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    imageUrl: "/education/ed2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    imageUrl: "/education/ed3.png",
    text: "Don't read success stories, you will only get a message. Read failure stories, you will get some ideas",
  },
  {
    imageUrl: "/education/ed1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    imageUrl: "/education/ed2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    imageUrl: "/education/ed3.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    imageUrl: "/education/ed1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    imageUrl: "/education/ed3.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    imageUrl: "/education/ed2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
];



const cricketNewsData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    imageUrl: "/education/ed1.png",
  },
  { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  { id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  { id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  { id: 7, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
];



const articles = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: "/education/ed1.png",
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: "/education/ed2.png",
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025',
    imageUrl: "/education/ed3.png",
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025', imageUrl: "/education/ed1.png",
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025', imageUrl: "/education/ed2.png",
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025', imageUrl: "/education/ed3.png",
  },
  {
    id: 7,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025', imageUrl: "/education/ed1.png",
  },
  {
    id: 8,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025', imageUrl: "/education/ed2.png",
  },
  {
    id: 9,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025', imageUrl: "/education/ed3.png",
  },
  {
    id: 10,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    category: 'Sports',
    date: 'Sept 3, 2025', imageUrl: "/education/ed1.png",
  },
];

const visualStoriesData = [
  { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/sports/img9.png' },
  { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/sports/img10.png' },
  { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/sports/img11.png' },
  { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/sports/img9.png' },
  { id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/sports/img10.png' },
  { id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/sports/img9.png' },
  { id: 7, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/sports/img10.png' },
  { id: 8, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/sports/img11.png' },
];

const newsData = [
  {
    id: 1,
    image:"/education/ed1.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 2,
    image: "/education/ed2.png",
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
  },
  {
    id: 3,
    image: "/education/ed3.png",
    title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
  },
  {
    id: 4,
    image:"/education/ed1.png",
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
  },
];

function Page() {
  return (
    <>
      <div className='px-4 lg:px-24 py-10'>
        <section className="pb-10">

          <h2 className="text-3xl underline font-bold text-red-600 mb-6">
            Education News
          </h2>

          {/* Top Two Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative overflow-hidden rounded-xl h-full">
              <Image
                src="/education/education1.png"
                alt="education"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 via-black/40 to-transparent">
                <p className="text-white leading-snug  text-lg font-semibold text-center px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>
              </div>
            </div>


            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/education/education2.png"
                alt="education"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(0,0,0,0)_32.21%,rgba(0,0,0,0.5)_60.1%)] p-4 flex items-end">
                <p className="text-white  leading-snug  text-lg font-semibold text-center px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Four Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                src: "/education/ed1.png",
                text: "Learn at your own pace with flexible schedules.",
              },
              {
                src: "/education/ed2.png",
                text: "Interactive courses designed for real-world skills.",
              },
              {
                src: "/education/ed3.png",
                text: "Expert mentors to guide you through every step.",
              },
              {
                src: "/education/ed1.png",
                text: "Build a strong foundation with practical projects.",
              },
              {
                src: "/education/ed2.png",
                text: "Join a global community of learners and achievers.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-white">
                {/* Fixed height image container */}
                <div className="h-36 w-full">
                  <Image
                    src={item.src}
                    alt={`education-${i}`}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <p className="p-3 text-base font-semibold text-blue-900 leading-snug hover:underline cursor-pointer">
                  {item.text}
                </p>
              </div>

            ))}

          </div>



          <FocusSection />




        </section>
        <FeaturedNewsCategory heading={"Govt. Exams & Results "} articles={cricketNewsData} newsData={newsData} ExtraComponent={FocusSection} />
        <AddCompo />

        <SportNews2 heading={"Jobs"} articles={articles} newsData={newsData} />
        <TopUniversities />
        <EducationGrid cardData={educationData} heading={" Success Stories"} />
        <VisualStories visualStoriesData={visualStoriesData} />
        <SponsoredBrandsSection />
        <HotTopics />
      </div>
    </>
  )
}

export default Page
