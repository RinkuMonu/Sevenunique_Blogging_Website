import React from 'react'

function SportNewsS1({ heading , articles ,newsData }) {
        const featuredArticle = articles[0];
    const listArticles = articles.slice(1, 7);
  return (
    <>
          <div>
                     <p className='text-red-600 underline text-3xl mb-5'>{heading}</p>
                    <div className="rounded-lg ">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="relative h-64 md:h-auto ">
                                <img
                                    src={featuredArticle.imageUrl}
                                    alt={featuredArticle.title}
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h2 className="text-white text-2xl font-bold leading-tight">
                                        {featuredArticle.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Articles List */}
                            <div className="p-6 flex flex-col justify-center">
                                <ul className="space-y-4">
                                    {listArticles.map((article) => (
                                        <li key={article.id}>
                                            <a href="#" className="block text-gray-800  transition-colors duration-300 border-b border-gray-600 pb-4">
                                                {article.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6 ">
                        {newsData.map((item) => (
                            <div
                                key={item.id}
                                className=" overflow-hidden "
                            >
                                {/* Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-40 object-cover rounded-lg"
                                />

                                {/* Content */}
                                <div className="p-3">
                                    <h3 className="text-base font-semibold text-blue-900 leading-snug hover:underline cursor-pointer">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
    </>
  )
}

export default SportNewsS1
