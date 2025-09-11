import Image from "next/image";
import React from "react";
import { HiOutlineViewGrid } from "react-icons/hi";

export default function TopNews() {
    const sections = [
        {
            title: "India",
            image: "/Newimg/Home/top1.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        },
        {
            title: "World",
            image: "/Newimg/Home/top2.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        },
        {
            title: "Sports",
            image: "/Newimg/Home/top3.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        },
        {
            title: "Business",
            image: "/Newimg/Home/top2.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        }
        ,
        {
            title: "Religion",
            image: "/Newimg/Home/top4.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        },
        {
            title: "Education",
            image: "/Newimg/Home/top5.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        },
        {
            title: "Agriculture",
            image: "/Newimg/Home/top1.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        },
        {
            title: "Auto",
            image: "/Newimg/Home/top2.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        },
        {
            title: "Astrology",
            image: "/Newimg/Home/top3.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        },
        {
            title: "technology",
            image: "/Newimg/Home/top2.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        }
        ,
        {
            title: "Entertainment",
            image: "/Newimg/Home/top4.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        },
        {
            title: "Lifestyle",
            image: "/Newimg/Home/top5.png",
            lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            articles: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            ],
        },

    ];
    const adImage = '/Newimg/header/bottom1.jpg';
    return (
        <div className="pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((sec, idx) => (
                <React.Fragment key={sec.title}>
                    {idx > 0 && idx % 6 === 0 && (
                        <div className="col-span-full w-full my-8">
                            <Image
                                src={adImage}
                                alt="Advertisement Banner"
                                width={1920}
                                height={100}
                                className="w-full h-48 rounded-lg object-cover"
                            />
                        </div>
                    )}

                    <div className="flex flex-col items-left mb-2">
                        <div className="flex items-center mb-2">
                            <span className="mr-2">
                                <HiOutlineViewGrid size={30} />
                            </span>
                            <h2 className="text-3xl font-semibold">{sec.title}</h2>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-md flex flex-col">
                            <div className="mb-2 rounded-lg overflow-hidden">
                                <Image
                                    src={sec.image}
                                    alt={`${sec.title} preview`}
                                    width={400}
                                    height={140}
                                    className="object-cover w-full h-36"
                                />
                            </div>

                            <div>
                                <a href="#" className="block font-semibold text-blue-900 text-md mb-2 hover:underline">
                                    {sec.lead}
                                </a>

                                {sec.articles.map((art, i) => (
                                    <div
                                        key={i}
                                        className="border-b border-gray-200 py-2 last:border-b-0 text-gray-600 text-sm"
                                    >
                                        {art}
                                    </div>
                                ))}

                                <div className="pt-4 flex">
                                    <button className="bg-red-600 rounded-full text-white px-6 py-1 font-semibold text-sm ml-auto">
                                        View more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
        <hr className='w-full h-2 mt-8' />
        <hr className='w-full h-2 -mt-1' />
    </div>
    );
}
