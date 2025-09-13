import Image from 'next/image';
import React from 'react'
import Gallery from '../../../components/Gallery';
import EntertainmentGrid from '../../../components/EntertainmentGrid';
import PaintingsGallery from '../../../components/PaintingsGallery';
import SponsoredBrandsSection from '../../../components/Sponsored';
import HotTopics from '../../../components/HotTopics';




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
    imgSrc: '/art/img6.png',
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
    { id: 1, imageUrl: 'gk/img1.png', title: 'Exploring Mountain Vistas and Scenic Trails' },
    { id: 2, imageUrl: 'gk/img2.png', title: 'A Deep Dive into Modern Architectural Marvels' },
    { id: 3, imageUrl: 'gk/img3.png', title: 'The Subtle Art of Minimalist Photography' },
    { id: 4, imageUrl: 'gk/img1.png', title: 'Urban Exploration: Discovering Hidden City Gems' },
    { id: 5, imageUrl: 'gk/img2.png', title: 'A Culinary Journey Through International Cuisines' },
    { id: 6, imageUrl: 'gk/img1.png', title: 'The Innovative Future of Sustainable Technology' },
    { id: 7, imageUrl: 'gk/img3.png', title: 'Classic Literature That Continues to Shape Our World' },
    { id: 8, imageUrl: 'gk/img2.png', title: 'Adventures in the Wild: An Essential Survival Guide' },

];


function page() {
  return (
      <div className='px-4 lg:px-24'>
                  <section className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-9 space-y-6">
                          <div className="flex flex-col lg:flex-row justify-between items-center">
                             <h2 className="text-3xl underline font-bold text-red-600 mb-6">
                          Gk
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
                                  src="/gk/img1.png"
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
                           "/gk/img1.png",
                           "/gk/img2.png","/gk/img3.png","/gk/img1.png"
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

                <EntertainmentGrid heading="Music" data={cardData} />
                <PaintingsGallery/>
                       <Gallery data={danceItems}/>
                            <Gallery data={danceItems}/>
            <SponsoredBrandsSection />
            <HotTopics />
    </div>
  )
}

export default page
