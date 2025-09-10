import React from 'react';
import ArticleList from './ArticalListVer';
import SportNewsS1 from './SportNewsS1';

const articlesV = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
    image:
      "https://images.unsplash.com/photo-1607083206833-81d11895dc1b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
    image:
      "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
    image:
      "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
    image:
      "https://images.unsplash.com/photo-1601314167099-ea6c5b2be501?q=80&w=400&auto=format&fit=crop",
  },
];

export default function SportNews2({ heading , articles ,newsData }) {

    if (!articles || articles.length === 0) {
        return (
            <div className="text-center p-8">
                <p>No articles to display.</p>
            </div>
        );
    }


    return (
        <>
            <div className='grid lg:grid-cols-5 px-4 py-10 border-t-2 border-b-2 border-black'>
                <div className='col-span-4'>
               <SportNewsS1 heading={heading} articles={articles} newsData={newsData}/>
                </div>
                <div className="col-span-1 ">
          <ArticleList articlesV={articlesV}/>
          </div>
            </div>
        </>
    );
};


