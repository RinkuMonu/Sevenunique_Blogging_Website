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

function page() {
  return (
    <>
      <div className='px-4 lg:px-24 py-5'>
        <NowPlaying />

        <BusinessComponent />
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
        <HotTopics />


      </div>
    </>
  )
}

export default page
