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
          <div className="py-10 border-t border-b border-black">
  <div className="lg:flex lg:gap-0">
    {/* Left Section */}
    <div className="lg:flex-1">
      <SportNewsS1 heading={heading} articles={articles} newsData={newsData} />
    </div>

    {/* Right Section */}
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

  {ExtraComponent && <ExtraComponent />}
</div>

        </>
    );
};


