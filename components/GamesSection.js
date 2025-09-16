import Image from "next/image";
import FocusSection from "./FocusSection";

export default function GamesSection() {
    return (
        <div className="pb-8 bg-white">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-red-700 underline mb-6">Games</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Main Content Column */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Top Row: Main card & side list */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Large image card */}
                        <div className="relative flex-shrink-0 w-full md:w-2/3 rounded-xl overflow-hidden h-64">
                            <Image
                                src="/images/game1.png"
                                alt="Laptop Feature"
                                layout="fill"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                                <p className="text-white text-xl font-medium leading-tight">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                </p>
                            </div>
                        </div>
                        {/* Side List */}
                        <div className="flex-1 flex flex-col gap-3">
                            <p className="text-gray-800 border-b pb-2 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                            <p className="text-gray-800 border-b pb-2 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                            <p className="text-gray-800 border-b pb-2 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                            <p className="text-gray-800 border-b pb-2 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                            <p className="text-gray-800 border-b pb-2 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                            </p>
                        </div>
                    </div>
                    {/* Lower News Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="overflow-hidden flex flex-col items-center p-2 pl-0  border-r border-blue-900 last:border-r-2">

                            <p className="text-blue-900 font-semibold text-sm text-left mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            </p>
                        </div>
                        <div className="overflow-hidden flex flex-col items-center p-2 pl-0  border-r border-blue-900 last:border-r-2">

                            <p className="text-blue-900 font-semibold text-sm text-left mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            </p>
                        </div>
                        <div className="overflow-hidden flex flex-col items-center p-2 pl-0  border-r border-blue-900 last:border-r-2">

                            <p className="text-blue-900 font-semibold text-sm text-left mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            </p>
                        </div>
                        <div className="overflow-hidden flex flex-col items-center p-2">

                            <p className="text-blue-900 font-semibold text-sm text-left mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Advertisement Sidebar */}
                <div className="hidden lg:flex flex-col items-center w-56">
                <div className=" w-full flex flex-col items-center mb-5">
            <Image src="/Newimg/header/sidenew.jpg" className="w-[250px] h-[450px] object-cover rounded-md" alt="sidenews" width={160} height={600} />
          </div>
                </div>
            </div>
            <FocusSection />
            <hr className='w-full h-2 mt-8' />

        </div>
    );
}
