import React from 'react';
import SportNewsS1 from './SportNewsS1';
import Image from 'next/image';

// Reusable component for the featured news section
export default function FeaturedNewsCategory({ heading, articles, newsData ,ExtraComponent }) {


    if (!articles || articles.length === 0) {
        return (
            <div className="text-center p-8">
                <p>No articles to display.</p>
            </div>
        );
    }


    return (
        <>
           <div className='py-10 border-t border-b border-black'>
             <div className='grid lg:grid-cols-5 '>
                <div className='lg:col-span-4'>
                    <SportNewsS1 heading={heading} articles={articles} newsData={newsData} />
                </div>
                <div className="lg:col-span-1 px-5 flex items-center">
                      
                                           <Image width={300} height={900} src="/Newimg/header/sidenew.jpg" alt="Ad" className="object-cover min-h-screen  relative adverimg" />
                                    
                </div>
                   
      
            </div>
            {ExtraComponent && <ExtraComponent />}
           </div>
        </>
    );
};


