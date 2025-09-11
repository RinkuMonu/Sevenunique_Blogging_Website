import Image from 'next/image';
import FocusSection from './FocusSection';
import Link from 'next/link';

const businessArticles = [
    {
        imgSrc: '/Newimg/Home/1.png',
        alt: 'Article 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
        imgSrc: '/Newimg/Home/2.png',
        alt: 'Article 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
        imgSrc: '/Newimg/Home/1.png',
        alt: 'Article 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
        imgSrc: '/Newimg/Home/2.png',
        alt: 'Article 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
];

export default function BusinessSection() {
    return (
        <>
            <section className="max-w-7xl mx-auto py-8">
                <h2 className="text-3xl underline font-bold text-red-600 mb-6">Business</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {businessArticles.map((article, idx) => (
                        <div key={idx} className="bg-white overflow-hidden">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={article.imgSrc}
                                    alt={article.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className='rounded-md'
                                />
                            </div>
                            <p className="p-4 text-center text-bold text-md text-[#002765]">
                                {article.description}
                            </p>
                        </div>
                    ))}
                </div>
                <FocusSection />
                {/* View More Button */}
                <div className="flex justify-center mt-8">
                    <Link href={"/"} className="bg-red-600 text-white px-10 py-2 rounded-full text-md font-medium hover:bg-red-700" style={{ boxShadow: " 0px 0px 100px 0px #0000000D" }}>
                        View more
                    </Link>
                </div>
                <div className="flex mt-3 flex-col items-center justify-center  rounded-lg  w-full col-span-2">
                    <Image width={728} height={90} src="/Newimg/header/bottom1.jpg" alt="Ad" className="object-cover h-24 w-full relative adverimg" />
                </div>
            </section>
            <hr className='w-full h-2 ' />
            <hr className='w-full h-2 -mt-1' />
        </>
    );
}
