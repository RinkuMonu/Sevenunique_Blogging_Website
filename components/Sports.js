'use client';

import Link from 'next/link';
import React from 'react'
import FocusSection from './FocusSection';


export default function Sports() {

    return (
        <>
            <hr className='w-full h-2 ' />
            <hr className='w-full h-2 -mt-1' />
            <section className="w-full max-w-screen-xl mx-auto py-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6 underline">Sports</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col space-y-4">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <p key={idx} className="text-sm text-gray-600 border-b pb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:col-span-2">
                        <img src="/Newimg/header/Sp1.png" alt="Sport 1" className="w-full h-auto rounded-lg shadow-md object-cover" />
                        <img src="/Newimg/header/Sp2.png" alt="Sport 2" className="w-full h-auto rounded-lg shadow-md object-cover" />
                        <img src="/Newimg/header/Sp3.png" alt="Sport 3" className="w-full h-auto rounded-lg shadow-md object-cover" />
                    </div>
                </div>

                <FocusSection />


                {/* View More Button */}
                <div className="flex justify-center mt-8">
                    <Link href={"/"} className="bg-red-600 text-white px-10 py-2 rounded-full text-md font-medium hover:bg-red-700" style={{ boxShadow: " 0px 0px 100px 0px #0000000D" }}>
                        View more
                    </Link>
                </div>
            </section>
            <hr className='w-full h-2 ' />
            <hr className='w-full h-2 -mt-1' />

        </>
    )
}
