import Image from "next/image";
import FocusSection from "./FocusSection";
import Link from "next/link";

export default function LifestyleSection() {
    return (
        <>

            <div className="py-8 bg-white">
                <h2 className="text-3xl underline font-bold text-red-600 mb-6">Lifestyle</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        <Card imageSrc="/Newimg/Home/Life1.png" className="object-cover" />
                        <Card imageSrc="/Newimg/Home/Life2.png" className="object-cover" />
                        <Card imageSrc="/Newimg/Home/Life3.png" className="object-cover" />
                    </div>

                    {/* Center Large Cards */}
                    <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
                        <LargeCard
                            imageSrcs={["/Newimg/Home/Life5.png", "/Newimg/Home/Life6.png", "/Newimg/Home/Life7.png"]}
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                            subtitle="Uploaded 9 mins ago"
                            className=""
                        />
                        <LargeCard
                            imageSrcs={["/Newimg/Home/Life5.png", "/Newimg/Home/Life6.png", "/Newimg/Home/Life7.png"]}
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        <Card imageSrc="/Newimg/Home/Life4.png" />
                        <Card imageSrc="/Newimg/Home/Life1.png" />
                        <Card imageSrc="/Newimg/Home/Life2.png" />
                    </div>
                </div>
                <FocusSection />
                {/* View More Button */}
                <div className="flex justify-center mt-8">
                    <Link href={"/"} className="bg-red-600 text-white px-10 py-2 rounded-full text-md font-medium hover:bg-red-700" style={{ boxShadow: " 0px 0px 100px 0px #0000000D" }}>
                        View more
                    </Link>
                </div>
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
            </div>
            <hr className='w-full h-2 ' />
            <hr className='w-full h-2 -mt-1' />
        </>
    );
}

function Card({ imageSrc }) {
    return (
        <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
                src={imageSrc}
                alt="Lifestyle"
                objectFit="cover"
                width={301}
                height={343}
                className="transition-transform hover:scale-105 "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <p className="text-white font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <button className="mt-3 cursor-pointer bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">View more</button>
            </div>
        </div>
    );
}

function LargeCard({ imageSrcs, title, subtitle }) {
    return (
        <div className="bg-white rounded-xl p-6" style={{ boxShadow: "2px 4px 22px 0px #00000026" }}>
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">{title}</h3>
            {subtitle && (
                <p className="text-gray-500 text-xs mb-3">{subtitle}</p>
            )}
            <div className="grid grid-cols-3 gap-2">
                {imageSrcs.map((src, idx) => (
                    <div key={idx} className="relative rounded-lg overflow-hidden">
                        <Image
                            src={src}
                            alt={`Lifestyle illustration ${idx + 1}`}
                            width={149}
                            height={289}
                            objectFit="cover"
                            className="object-cover h-72"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
