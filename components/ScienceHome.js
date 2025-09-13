import Image from "next/image";

export default function ScienceHome() {
    const images = [
        "/Newimg/science/2.png",
        "/Newimg/science/3.png",
        "/Newimg/science/4.png",
        "/Newimg/science/5.png",
        "/Newimg/science/6.png",
        "/Newimg/science/7.png",
        "/Newimg/science/2.png",
        "/Newimg/science/3.png",
    ];
    const sideImages = [
        "/Newimg/science/6.png",
        "/Newimg/science/7.png",
        "/Newimg/science/16.png",
        "/Newimg/science/19.png",
    ];
    const sideCards = [
        { src: "/Newimg/science/8.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { src: "/Newimg/science/9.png", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { src: "/Newimg/science/10.png", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
        { src: "/Newimg/science/11.png", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
        { src: "/Newimg/science/12.png", text: "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat." },
        { src: "/Newimg/science/13.png", text: "Sunt in culpa qui officia deserunt mollit anim id est laborum." },
    ];
    return (
        <div className="min-h-screen pb-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-6 space-y-6">
                        <div className=" flex flex-col md:flex-row gap-6">
                            <div className="relative w-[-webkit-fill-available]  rounded overflow-hidden">
                                <Image
                                    src="/Newimg/science/1.png"
                                    alt="Science Spotlight"
                                    width={467}
                                    height={323}
                                    style={{ objectFit: "cover" }}
                                    className="rounded w-[-webkit-fill-available] h-[323px]"
                                />
                            </div>
                        </div>

                        {/* News Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                            {images.map((src, i) => (
                                <div key={i} className=" flex flex-col items-center">
                                    <div className="relative w-full h-24 mb-2">
                                        <Image
                                            src={src}
                                            alt={`News ${i + 1}`}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            className="rounded-md"
                                        />
                                    </div>
                                    <p className="text-[15px] font-bold text-[#002765] text-left">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center (Top Science) */}
                    <div className="md:col-span-3">
                        <div className="bg-yellow-100 rounded shadow mb-6 p-4">
                            <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                                TOP SCIENCE
                            </h3>
                        </div>

                        <p className="text-sm mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod
                        </p>
                        {/* Top science image */}
                        <div className="relative w-full h-24 mb-2">
                            <Image
                                src="/Newimg/science/13.png "
                                alt="Top Science"
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded"
                            />

                        </div>
                        <p className="text-sm mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod
                        </p>
                        {/* Three stacked news cards */}
                        <div className="space-y-3">
                            {sideImages.map((src, i) => (
                                <div key={i} className="flex flex-col gap-2 items-start justify-start">
                                    <div className="relative w-[220px]">
                                        <Image src={src} alt={`Side ${i + 1}`} width={220} height={103} style={{ objectFit: "cover" }} className="rounded" />
                                    </div>
                                    <p className="text-[15px] font-bold text-[#002765] w-[220px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Advertisements & Side Cards */}
                    <div className="md:col-span-3 space-y-6">
                        {/* Top Ad */}
                        <div className="bg-gray-200 h-[250px] flex items-center justify-center rounded mb-4">
                            <Image src="/Newimg/header/leftside1.jpg" className="rounded-md" alt="" width={300} height={250} />
                        </div>
                        {/* Side cards */}
                        <div className="space-y-3">
                            {sideCards.map((card, i) => (
                                <div key={i} className=" flex gap-2 items-center justify-center">
                                    <div className="relative w-[137px] h-[85px] overflow-hidden">
                                        <Image
                                            src={card.src}
                                            alt={`Side card ${i + 1}`}
                                            width={137}
                                            height={85}
                                            style={{ objectFit: "cover" }}
                                            className="rounded w-[137px] h-[85px]"
                                        />
                                    </div>
                                    <p className="text-xs w-[fit-content] text-gray-500">
                                        {card.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* Bottom Ad */}
                        <div className="bg-gray-200 h-[250px] flex items-center justify-center rounded mb-4">
                            <Image src="/Newimg/header/leftside1.jpg" className="rounded-md" alt="" width={300} height={250} />
                        </div>
                    </div>
                </div>

                {/* View more button */}
                <div className="flex justify-center my-8">
                    <button className="bg-red-600 hover:bg-red-700 shadow-2xl text-white px-6 py-2 rounded-full font-semibold">
                        View more
                    </button>
                </div>
            </div>
            <hr className="w-full h-2 mt-6" />
            <hr className="w-full h-2 -mt-1" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <div className="flex flex-col items-center justify-center  rounded-lg  w-full">
                        <Image width={300} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
                    </div>  
                    <div className="flex flex-col items-center justify-center  rounded-lg  w-full">
                            <Image width={300} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
                        </div>

                        <div className="flex flex-col items-center justify-center  rounded-lg  w-full">
                            <Image width={300} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
                        </div>


                </div>
            <hr className="w-full h-2 mt-6" />
            <hr className="w-full h-2 -mt-1" />
        </div>
    );
}
