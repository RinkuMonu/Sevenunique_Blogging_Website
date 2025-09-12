"use client"
import React from 'react'
import NowPlaying from '../../../components/NowPlaying'
import Image from 'next/image';
import Entertenment1 from '../../../components/Entertenment1';
import EntertainmentGrid from '../../../components/EntertainmentGrid';
import MovieReviewSlider from '../../../components/MovieReviewSlider';
import VisualStories from '../../../components/VisualStories';
import HotTopics from '../../../components/HotTopics';
import AddCompo from '../../../components/AddCompo';
import SponsoredBrandsSection from '../../../components/Sponsored';


const cardData = [
    { id: 1, imageUrl: 'sports/img1.png', title: 'Exploring Mountain Vistas and Scenic Trails' },
    { id: 2, imageUrl: 'sports/img2.png', title: 'A Deep Dive into Modern Architectural Marvels' },
    { id: 3, imageUrl: 'sports/img3.png', title: 'The Subtle Art of Minimalist Photography' },
    { id: 4, imageUrl: 'sports/img4.png', title: 'Urban Exploration: Discovering Hidden City Gems' },
    { id: 5, imageUrl: 'sports/img5.png', title: 'A Culinary Journey Through International Cuisines' },
    { id: 6, imageUrl: 'sports/img6.png', title: 'The Innovative Future of Sustainable Technology' },
    { id: 7, imageUrl: 'sports/img7.png', title: 'Classic Literature That Continues to Shape Our World' },
    { id: 8, imageUrl: 'sports/img8.png', title: 'Adventures in the Wild: An Essential Survival Guide' },
    { id: 9, imageUrl: 'sports/img9.png', title: 'Understanding the Psychology of Colors in Design' },
    { id: 10, imageUrl: 'sports/img10.png', title: 'Mastering the Intricate Craft of Digital Art' },
    { id: 11, imageUrl: 'sports/img11.png', title: 'A Thrilling Look at the World of Extreme Sports' },
    { id: 12, imageUrl: 'sports/img12.png', title: 'Uncovering the Secrets of Ancient Civilizations' },
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

const ads = [
    { id: 1, imageUrl: "/sports/img6.png" },
    { id: 2, imageUrl: "/sports/img2.png" },
    { id: 3, imageUrl: "/sports/img6.png" },
];

function page() {
    return (
        <div className='px-4 lg:px-24'>
            <NowPlaying />



            <section className="py-5">
                <h2 className="text-3xl underline font-bold text-red-600 mb-6">Entertainment News </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">

                    <div className='lg:col-span-3'>
                        <div className=" rounded-lg">
                            <div className="relative">
                                <Image
                                    src="/sports/img4.png"
                                    alt="Cricket players celebrating"
                                    width={400}
                                    height={400}
                                    className="object-cover rounded-xl w-full"
                                    priority
                                    style={{ "minHeight": "70vh" }}
                                />
                            </div>
                            <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
                            <p className="text-base font-semibold text-[#002765] ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            </p>
                        </div>
                    </div>


                    <div className='lg:col-span-2'>
                        <div className=" mb-3 pb-2 border-b border-gray-50">
                            <div className="relative">
                                <img
                                    src="/sports/img6.png"
                                    alt="Cricket players celebrating"
                                    className="w-full h-50 object-cover rounded-lg mb-4"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'; }}
                                />
                            </div>
                            <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
                            <p className="text-base font-semibold text-[#002765] ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            </p>
                        </div>
                        <div className="">
                            <div className="relative">
                                <img
                                    src="/sports/img8.png"
                                    alt="Cricket players celebrating"
                                    className="w-full h-50 object-cover rounded-lg mb-4"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'; }}
                                />
                            </div>
                            <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
                            <p className="text-base font-semibold text-[#002765] ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            </p>
                        </div>
                    </div>

                    <div className='lg:col-span-2'>
                        <div className="  rounded-lg flex flex-col justify-center">
                            <div className="flex flex-col items-center  rounded-lg  w-full mb-2">
                                <Image width={300} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover lg:h-72 w-full relative adverimg" />
                            </div>

                            <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
                            <p className="text-base font-semibold text-[#002765] ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            </p>
                            <p className="text-base font-semibold text-[#002765] pt-2 mt-4 border-t border-gray-50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            </p>
                        </div>
                    </div>

                </div>
            </section>

    

            <Entertenment1 />
             <AddCompo/>
            <EntertainmentGrid heading="Latest Movie News" data={cardData} />
            <EntertainmentGrid heading="Photos" data={cardData} />


<div className=' border-t border-b py-6 '>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {ads.map((ad) => (

                        <div  key={ad.id}>
                            <Image
                                src={ad.imageUrl}
                                alt={`Advertisement ${ad.id}`}
                                width={400}
                                height={400}
                                className="object-contain w-full h-auto"
                            />
                        </div>

                    ))}
                </div>
            </div>
            </div>


            <MovieReviewSlider/>

     <VisualStories visualStoriesData={visualStoriesData}/>
 <SponsoredBrandsSection/>
<HotTopics/>
        </div>
    )
}

export default page
