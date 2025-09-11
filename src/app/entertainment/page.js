"use client"
import React from 'react'
import NowPlaying from '../../../components/NowPlaying'
import Image from 'next/image';

function page() {
    return (
        <div className='px-4 lg:px-24'>
            <NowPlaying />



            <section className="py-5">
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

<section className='py-10 grid grid-cols-1 lg:grid:col-12'>
     <div className='lg:col-span-7'>
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
                     <div className='lg:col-span-5'>
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

</section>

        </div>
    )
}

export default page
