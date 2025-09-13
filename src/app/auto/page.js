"use client"
import Image from 'next/image';
import React from 'react'
import CardSlider from '../../../components/CardSlider';
import FeaturedNewsCategory from '../../../components/SortNews1';
import SportNews2 from '../../../components/SportNews2';
import BusinessComponent4 from '../../../components/BusinessComponent4';
import VisualStories from '../../../components/VisualStories';
import SponsoredBrandsSection from '../../../components/Sponsored';
import HotTopics from '../../../components/HotTopics';
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
const articles = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        category: 'Sports',
        date: 'Sept 3, 2025',
        imageUrl: '/sports/img6.png'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        category: 'Sports',
        date: 'Sept 3, 2025',
        imageUrl: '/sports/img8.png'
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        category: 'Sports',
        date: 'Sept 3, 2025',
        imageUrl: '/sports/img7.png'
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        category: 'Sports',
        date: 'Sept 3, 2025', imageUrl: '/sports/img8.png'
    },
    {
        id: 5,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        category: 'Sports',
        date: 'Sept 3, 2025', imageUrl: '/sports/img6.png'
    },
    {
        id: 6,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        category: 'Sports',
        date: 'Sept 3, 2025', imageUrl: '/sports/img7.png'
    },
    {
        id: 7,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        category: 'Sports',
        date: 'Sept 3, 2025', imageUrl: '/sports/img8.png'
    },
    {
        id: 8,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        category: 'Sports',
        date: 'Sept 3, 2025', imageUrl: '/sports/img6.png'
    },
    {
        id: 9,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        category: 'Sports',
        date: 'Sept 3, 2025', imageUrl: '/sports/img8.png'
    },
    {
        id: 10,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        category: 'Sports',
        date: 'Sept 3, 2025', imageUrl: '/sports/img7.png'
    },
];
const ArticleCard = ({ article }) => (
    <div className=" rounded-lg p-3 flex items-center space-x-4 ">
        <img
            src={article.imageUrl}
            alt={article.title}
            className="w-36 md:w-64 md:h-32 object-cover rounded-md"

        />
        <div>
            <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                {article.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
                {article.category} / {article.date}
            </p>
        </div>
    </div>
);



function page() {
    const column1Articles = articles.slice(0, 5);
    const column2Articles = articles.slice(5, 10);
    return (
        <div className='px-4 lg:px-24 py-10'>

            <section className="py-5">
                <div className='grid lg:grid-cols-4 '>
                    <p className="text-2xl font-bold text-red-600 underline mb-6 col-span-1">
                        Auto News
                    </p>
                  
                     <div className="flex flex-col items-center justify-center  rounded-lg  w-full col-span-3">
                        <Image width={600} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-16 relative adverimg" />
               
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

                    <div className=" p-4 rounded-lg">
                        <div className="relative">
                            <img
                                src="/sports/img4.png"
                                alt="Cricket players celebrating"
                                className="w-full min-h-[55vh] object-cover rounded-lg mb-4"

                            />
                        </div>
                        <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
                        <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </h2>
                    </div>

                    <div>
                        <div className=" p-4 rounded-lg">
                            <div className="relative">
                                <img
                                    src="/sports/img6.png"
                                    alt="Cricket players celebrating"
                                    className="w-full h-50 object-cover rounded-lg mb-4"

                                />
                            </div>
                            <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
                            <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            </h2>
                        </div>
                        <div className=" p-4 rounded-lg">
                            <div className="relative">
                                <img
                                    src="/sports/img8.png"
                                    alt="Cricket players celebrating"
                                    className="w-full h-50 object-cover rounded-lg mb-4"

                                />
                            </div>
                            <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
                            <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            </h2>
                        </div>
                    </div>
                    <div className=" p-4 rounded-lg flex flex-col justify-center">
                        <div className="flex flex-col items-center justify-center  rounded-lg  w-full">
                            <Image width={300} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
                        </div>

                        <p className="text-gray-500 text-sm mb-2">Updated 9 mins ago</p>
                        <h2 className="text-lg font-semibold text-gray-800 leading-tight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        </h2>
                    </div>
                </div>
            </section>

            <section className=" py-4 ">
                <div className=" py-10 border-b border-t border-black">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

                        {/* Column 1 */}
                        <div className="space-y-4 col-span-2">
                            {column1Articles.map(article => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4 col-span-2">
                            {column2Articles.map(article => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>

                        {/* Column 3 (Advertisement) */}
                        <div className="lg:w-[300px] lg:flex-shrink-0 px-4 ">
                            <div className="relative h-full w-full rounded-lg">
                                <Image
                                    src="/Newimg/header/sidenew.jpg"
                                    alt="Ad"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </section>


            <CardSlider />

            <FeaturedNewsCategory heading={"Car news"} articles={cricketNewsData} newsData={newsData} />
            <SportNews2 heading={"Bikes news"} articles={articles} newsData={newsData} />
            <FeaturedNewsCategory heading={"Electric cars news"} articles={cricketNewsData} newsData={newsData} />
            <SportNews2 heading={"Electric Bikes news"} articles={articles} newsData={newsData} />

            <BusinessComponent4 />
            <VisualStories visualStoriesData={visualStoriesData} />
            <EducationGrid cardData={educationData} heading={"More Auto News"} />
            <SponsoredBrandsSection />
            <HotTopics />
        </div>
    )
}

export default page
