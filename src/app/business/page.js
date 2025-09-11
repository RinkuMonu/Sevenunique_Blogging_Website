"use client"
import React from 'react'
import NowPlaying from '../../../components/NowPlaying'
import BusinessComponent from '../../../components/BusinessComponent'
import FeaturedNewsCategory from '../../../components/SortNews1'

const cricketNewsData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    imageUrl:   "/sports/img4.png",
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

function page() {
  return (
    <>
      <div className='px-4 lg:px-24 py-5'>
<NowPlaying/>

<BusinessComponent/>
<FeaturedNewsCategory heading={"India Business News"} articles={cricketNewsData} newsData={newsData}/>
      </div>
    </>
  )
}

export default page
