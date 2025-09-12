import Image from "next/image";

export default function AgricultureNewsSection({ heroData, newsCards }) {
    return (
        <section className="max-w-7xl mx-auto pb-8">
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-2">Agriculture News</h1>

                <div className="bg-[#D9D9D9] text-gray-700 text-center w-[500px] h-[70px] flex flex-col items-center justify-center rounded-md">
                    <Image src="/Newimg/header/bottom1.jpg" alt="adver" width={468} height={60} className="w-[500px] h-[70px] object-cover rounded-md" />
                </div>
            </div>

            <div className="grid grid-cols-[60%_40%] gap-6 items-start px-0">
                <div className="relative  rounded-xl overflow-hidden h-full">
                    <Image
                        src={heroData.img}
                        alt={heroData.alt || "Agriculture Field"}
                        width={528}
                        height={376}
                        objectFit="cover"
                        className="rounded-xl w-[-webkit-fill-available] h-full"
                        priority
                    />

                    <div className="absolute bottom-0 text-center left-0 w-full bg-opacity-40 px-6 py-4 flex items-center">
                        <p className="text-white text-lg text-center font-semibold">
                            {heroData.desc}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        {newsCards.map((card, idx) => (
                            <div key={idx} className="flex flex-row gap-3 items-center bg-white rounded-lg shadow px-3 py-2">
                                <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 relative">
                                    <Image
                                        src={card.img}
                                        alt={card.alt || ""}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                </div>
                                <span className="text-xs text-[#20345C] font-medium">{card.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="w-full h-2 mt-6" />
            <hr className="w-full h-2 -mt-1" />
        </section>
    );
}
