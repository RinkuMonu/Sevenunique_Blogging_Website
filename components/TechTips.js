import Image from "next/image";
import FocusSection from "./FocusSection";

export default function TechTips() {
    const listCards = [
        {
            img: "/Newimg/Tech/6.png",
            desc: "Work across locations in real time using cloud platforms."
        },
        {
            img: "/Newimg/Tech/7.png",
            desc: "Harness AI assistants for faster, smarter workflows."
        },
        {
            img: "/Newimg/Tech/8.png",
            desc: "Enable two-factor authentication and backups for all devices."
        },
        {
            img: "/Newimg/Tech/9.png",
            desc: "Join our community and get exclusive digital tips."
        },
        {
            img: "/Newimg/Tech/10.png",
            desc: "Recognize trusted sources—look for our official badge."
        },
        {
            img: "/Newimg/Tech/1.png",
            desc: "Unlock hidden features on your favorite apps and phones."
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            {/* Title */}
            <h1 className="text-3xl underline font-bold text-red-600 mb-6">Tech Tips</h1>
            {/* Responsive flex row with explicit column widths */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Column 1: Banner + Small Cards */}
                <div className="w-full md:w-[70%] flex flex-col">
                    {/* Banner */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Large image card */}
                        <div className="relative flex-shrink-0 w-full md:w-2/3 h-100 rounded-xl overflow-hidden h-64">
                            <Image
                                src="/Newimg/Tech/1.png"
                                alt="Laptop Feature"
                                layout="fill"
                                className="object-cover h-100"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                                <p className="text-white text-xl font-medium leading-tight">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </p>
                            </div>
                        </div>
                        {/* Side List */}
                        <div className="flex-1 flex flex-col gap-3 h-100">
                            <p className="text-gray-800 border-b pb-2 text-sm cursor-pointer hover:text-red-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                            <p className="text-gray-800 border-b pb-2 text-sm cursor-pointer hover:text-red-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                            <p className="text-gray-800 border-b pb-2 text-sm cursor-pointer hover:text-red-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                            <p className="text-gray-800 border-b pb-2 text-sm cursor-pointer hover:text-red-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                            <p className="text-gray-800 border-b pb-2 text-sm cursor-pointer hover:text-red-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-10">
                        <div className="p-2 flex flex-col items-center cursor-pointer hover:text-red-500">
                            <Image width={166} height={103} src="/Newimg/Tech/2.png" alt="tech" className="w-full h-20 object-cover rounded mb-2" />
                            <p className="text-xs text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                        </div>
                        <div className="p-2 flex flex-col items-center cursor-pointer hover:text-red-500">
                            <Image width={166} height={103} src="/Newimg/Tech/3.png" alt="tech" className="w-full h-20 object-cover rounded mb-2" />
                            <p className="text-xs text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                        </div>
                        <div className="p-2 flex flex-col items-center cursor-pointer hover:text-red-500">
                            <Image width={166} height={103} src="/Newimg/Tech/4.png" alt="tech" className="w-full h-20 object-cover rounded mb-2" />
                            <p className="text-xs text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                        </div>
                        <div className="p-2 flex flex-col items-center cursor-pointer hover:text-red-500">
                            <Image width={166} height={103} src="/Newimg/Tech/5.png" alt="tech" className="w-full h-20 object-cover rounded mb-2" />
                            <p className="text-xs text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                        </div>
                    </div>
                </div>
                {/* Column 2: List of Cards */}
                <div className="w-full md:w-[30%] flex flex-col gap-4">
                    {listCards.map((card, i) => (
                        <div key={i} className="flex items-center gap-3 p-3  cursor-pointer hover:text-red-500">
                            <Image width={200} height={85} src={card.img} alt={card.title} className="w-52 h-16 object-cover rounded" />
                            <div>
                                <p className="text-sm">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FocusSection />
            <hr className='w-full h-2 mt-6' />
            <hr className='w-full h-2 -mt-1' />
        </section>
    );
}
