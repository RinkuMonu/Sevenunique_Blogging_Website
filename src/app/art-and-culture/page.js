import Image from 'next/image';
import React from 'react'
import Gallery from '../../../components/Gallery';
import AdsSection from '../../../components/Ads';
import EntertainmentGrid from '../../../components/EntertainmentGrid';
import PaintingsGallery from '../../../components/PaintingsGallery';
import SponsoredBrandsSection from '../../../components/Sponsored';
import HotTopics from '../../../components/HotTopics';
import EducationGrid from '../../../components/EducationGrid';
import VisualStories from '../../../components/VisualStories';



// Updated data array with a unique 'text' property for each card.
const danceItems = [
  {
    id: 1,
    imgSrc: '/art/img1.png',
    text: 'Exploring the ancient history and origins of classical dance forms.',
  },
  {
    id: 2,
    imgSrc: '/art/img2.png',
    text: 'The vibrant costumes and intricate headgear in traditional performances.',
  },
  {
    id: 3,
    imgSrc: '/art/img3.png',
    text: 'Kathakali: A story-play genre of art, distinguished by its makeup.',
  },
  {
    id: 4,
    imgSrc: '/art/img4.png',
    text: 'The celestial grace and fluid movements of the Odissi style.',
  },
  {
    id: 5,
    imgSrc: '/art/img5.png',
    text: 'Group folk dances that celebrate harvest seasons and local festivals.',
  },
  {
    id: 6,
    imgSrc: '/art/img6.png',
    text: 'Mohiniyattam, the graceful dance of the enchantress from Kerala.',
  },
  {
    id: 7,
    imgSrc: '/art/img7.png',
    text: 'The expressive hand gestures (mudras) that convey complex emotions.',
  },
  {
    id: 8,
    imgSrc: '/art/img8.png',
    text: 'Bharatanatyam, known for its fixed upper torso and bent legs.',
  },
  {
    id: 9,
    imgSrc: '/art/img9.png',
    text: 'The dynamic energy and rhythmic footwork of modern fusion dance.',
  },
  {
    id: 10,
    imgSrc: '/art/img10.png',
    text: 'Kuchipudi, a dance-drama performance with lively, spirited movements.',
  },
  {
    id: 11,
    imgSrc: '/art/img11.png',
    text: 'Community and celebration captured in the joy of Garba and Dandiya.',
  },
  {
    id: 12,
    imgSrc: '/art/img12.png',
    text: 'The storytelling tradition passed down through generations of dancers.',
  },
];


const cardData = [
    { id: 1, imageUrl: 'art/img1.png', title: 'Exploring Mountain Vistas and Scenic Trails' },
    { id: 2, imageUrl: 'art/img2.png', title: 'A Deep Dive into Modern Architectural Marvels' },
    { id: 3, imageUrl: 'art/img3.png', title: 'The Subtle Art of Minimalist Photography' },
    { id: 4, imageUrl: 'art/img4.png', title: 'Urban Exploration: Discovering Hidden City Gems' },
    { id: 5, imageUrl: 'art/img5.png', title: 'A Culinary Journey Through International Cuisines' },
    { id: 6, imageUrl: 'art/img6.png', title: 'The Innovative Future of Sustainable Technology' },
    { id: 7, imageUrl: 'art/img7.png', title: 'Classic Literature That Continues to Shape Our World' },
    { id: 8, imageUrl: 'art/img8.png', title: 'Adventures in the Wild: An Essential Survival Guide' },

];


const visualStoriesData = [
    { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/art/img9.png' },
    { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/art/img10.png' },
    { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/art/img11.png' },
    { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/art/img9.png' },
    { id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/art/img10.png' },
    { id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/art/img9.png' },
    { id: 7, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/art/img10.png' },
    { id: 8, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', imageUrl: '/art/img11.png' },
];


function page() {
  return (
      <div className='px-4 lg:px-24'>
                  <section className="py-5">
                      <h2 className="text-3xl underline font-bold text-red-600 mb-6">Art & Culture  </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
      
                          <div className='lg:col-span-3'>
                              <div className=" rounded-lg">
                                  <div className="relative">
                                      <Image
                                          src="/art/img4.png"
                                          alt="Cricket players celebrating"
                                          width={400}
                                          height={400}
                                          className="object-cover rounded-xl w-full"
                                          priority
                                          style={{ "minHeight": "74vh" }}
                                      />
                                  </div>
                                  <p className="text-gray-500 text-sm my-2">Updated 9 mins ago</p>
                                  <p className="text-base font-semibold text-[#002765] ">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                  </p>
                              </div>
                          </div>
      
      
                          <div className='lg:col-span-2'>
                              <div className=" mb-3 pb-2 border-b border-gray-200">
                                  <div className="relative">
                                      <img
                                          src="/art/img6.png"
                                          alt="Cricket players celebrating"
                                          className="w-full h-50 object-cover rounded-lg mb-4"
                                        
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
                                          src="/art/img8.png"
                                          alt="Cricket players celebrating"
                                          className="w-full h-50 object-cover rounded-lg mb-4"
                                        
                                      />
                                  </div>
                                  <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
                                  <p className="text-base font-semibold text-[#002765] ">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                  </p>
                              </div>
                          </div>
      
                          <div className='lg:col-span-2'>
                              <div className=" mb-3 pb-2 border-b border-gray-200">
                                  <div className="relative">
                                      <img
                                          src="/art/img6.png"
                                          alt="Cricket players celebrating"
                                          className="w-full h-50 object-cover rounded-lg mb-4"
                                        
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
                                          src="/art/img8.png"
                                          alt="Cricket players celebrating"
                                          className="w-full h-50 object-cover rounded-lg mb-4"
                                        
                                      />
                                  </div>
                                  <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
                                  <p className="text-base font-semibold text-[#002765] ">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                  </p>
                              </div>
                          </div>
      
                      </div>
                  </section>


      <Gallery data={danceItems}/>
      <AdsSection/>
                <EntertainmentGrid heading="Music" data={cardData} />
                <PaintingsGallery/>
                    <VisualStories visualStoriesData={visualStoriesData} />
            <EntertainmentGrid heading="More Art & Culture " data={cardData} />
            <SponsoredBrandsSection />
            <HotTopics />
    </div>
  )
}

export default page
