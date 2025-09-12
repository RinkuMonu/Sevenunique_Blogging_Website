import Image from 'next/image';
import FocusSection from './FocusSection';
import Link from 'next/link';

const astrologyArticles = [
    {
        imgSrc: '/Newimg/Home/1.png',
        alt: 'Astrology 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
        imgSrc: '/Newimg/Home/2.png',
        alt: 'Astrology 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
        imgSrc: '/Newimg/Home/1.png',
        alt: 'Astrology 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
];

const sideItems = Array(5).fill(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in'
);

export default function AstrologySection() {
    return (
        <>
            <section className="max-w-7xl mx-auto py-8">
                <h2 className="text-3xl underline font-bold text-red-600 mb-6">Astrology</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Left: Three Articles */}
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {astrologyArticles.map((article, idx) => (
                            <div key={idx} className="bg-white shadow rounded overflow-hidden">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={article.imgSrc}
                                        alt={article.alt}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <p className="p-4 text-center text-md text-[#002765] font-bold">
                                    {article.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Vertical List */}
                    <div className="flex flex-col justify-start space-y-4">
                        {sideItems.map((item, idx) => (
                            <p key={idx} className="text-sm text-gray-600 border-b pb-2">
                                {item}
                            </p>
                        ))}
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
    );
}
