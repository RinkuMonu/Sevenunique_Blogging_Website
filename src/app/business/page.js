"use client"
import React from 'react'
import NowPlaying from '../../../components/NowPlaying'
import BusinessComponent from '../../../components/BusinessComponent'
import FeaturedNewsCategory from '../../../components/SortNews1'
import FocusSection from '../../../components/FocusSection'
import HotTopics from '../../../components/HotTopics'
import VisualStories from '../../../components/VisualStories'
import BusinessComponent2 from '../../../components/BusinessComponent2'
import BusinessComponent3 from '../../../components/BusinessComponent3'
import BusinessComponent4 from '../../../components/BusinessComponent4'
import SponsoredBrandsSection from '../../../components/Sponsored'

const cricketNewsData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    imageUrl: "/sports/img4.png",
  },
  { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  { id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  { id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
  { id: 7, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in' },
];
const newsData = [
  {
    id: 1,
    image: "/sports/img6.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    id: 2,
    image: "/sports/img7.png",
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
  },
  {
    id: 3,
    image: "/sports/img8.png",
    title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
  },
  {
    id: 4,
    image: "/sports/img6.png",
    title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
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

 const leftCards = [
    { text: "Left card 1: Latest sports update with key highlights", imageUrl: "/sports/img1.png" },
    { text: "Left card 2: In-depth analysis of the recent matches", imageUrl: "/sports/img2.png" },
    { text: "Left card 3: Player interviews and behind-the-scenes", imageUrl: "/sports/img3.png" },
    { text: "Left card 4: Upcoming tournaments schedule and news", imageUrl: "/sports/img4.png" },

  ];

  const rightCards = [
    { text: "Right card 1: Top stories from around the globe", imageUrl: "/sports/img6.png" },
    { text: "Right card 2: Expert opinions and match predictions", imageUrl: "/sports/img7.png" },
    { text: "Right card 3: Highlights of key sports events", imageUrl: "/sports/img8.png" },
    { text: "Right card 4: Training tips and player fitness updates", imageUrl: "/sports/img9.png" },

  ];

  const mainCards = [
    {
      imageUrl: "/sports/img6.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    },
    {
      imageUrl: "/sports/img7.png",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
    },
  ];
function page() {
  return (
    <>
      <div className='px-4 lg:px-24 py-5'>
        <NowPlaying />

        <BusinessComponent mainCards={mainCards} leftCards={leftCards} rightCards={rightCards} heading={" Banking News"} />
        <FeaturedNewsCategory heading={"India Business News"} articles={cricketNewsData} newsData={newsData} ExtraComponent={FocusSection} />
        <BusinessComponent2
          topImage="/sports/img6.png"
          topTitle="Custom Top Large Card Title"
          detailedCard={{
            image: "/sports/img4.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod orem ipsum dolor sit amet, consectet."
          }}
          rightCards={[
            { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ", image: "/sports/img7.png" },
            { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ", image: "/sports/img8.png" },
            { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ", image: "/sports/img8.png" }
          ]}
        />
        <BusinessComponent3 />

        <FeaturedNewsCategory heading={"India Business News"} articles={cricketNewsData} newsData={newsData} ExtraComponent={FocusSection} />
        <VisualStories visualStoriesData={visualStoriesData} />
        <BusinessComponent4 />
         <SponsoredBrandsSection/>
        <HotTopics />


      </div>
    </>
  )
}

export default page
