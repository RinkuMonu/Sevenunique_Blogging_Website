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

    // The first article is featured, the rest are in the list
    const featuredArticle = articles[0];
    const listArticles = articles.slice(1, 7); // Show up to 6 articles in the list

    return (
        <>
            <div className='grid lg:grid-cols-5 px-4 py-10 border-t-2 border-b-2 border-black'>
                <div className='col-span-4'>
                        <SportNewsS1 heading={heading} articles={articles} newsData={newsData}/>
                </div>
                <div className="col-span-1 ">
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


