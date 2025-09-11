import React from 'react';
import SportNewsS1 from './SportNewsS1';

// Reusable component for the featured news section
export default function FeaturedNewsCategory({ heading , articles ,newsData }) {


    if (!articles || articles.length === 0) {
        return (
            <div className="text-center p-8">
                <p>No articles to display.</p>
            </div>
        );
    }


    return (
        <>
            <div className='grid lg:grid-cols-5 py-10 border-t-2 border-b-2 border-black'>
                <div className='lg:col-span-4'>
                        <SportNewsS1 heading={heading} articles={articles} newsData={newsData}/>
                </div>
                <div className="lg:col-span-1 ">
            <div className="max-h-screen rounded-lg shadow-md">
                <img
                    src="/ad.png"
                    alt="Advertisement"
                    className="w-full max-h-screen object-cover rounded-lg"
                />
            </div>
          </div>
            </div>
        </>
    );
};


