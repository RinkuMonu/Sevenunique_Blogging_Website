// pages/election.js
import Image from "next/image";
import FocusSection from "./FocusSection";

export default function ElectionSection() {
    return (
        <div className="py-8 bg-white">
            <h2 className="text-2xl font-bold text-red-600 mb-6">Election</h2>
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Content */}
                <div className="lg:w-2/3 w-full">
                    <div className="bg-white overflow-hidden">
                        {/* Election Results & Video */}
                        <div className="relative">
                            <iframe
                                allowFullScreen
                                className="w-full h-96 rounded-lg shadow-md"
                                src="https://www.youtube.com/embed/YXVTGcdvc0Q?si=IFyxOuKFH3rIA1Pn"
                                title="YouTube video player"
                                // frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                            />

                        </div>
                        <div className="p-4">
                            <p className="text-blue-900 text-[18px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                            </p>
                        </div>
                    </div>
                </div>
                {/* Advertisement Column */}
                <div className="lg:w-1/3 w-full flex flex-col gap-6">
                    <AdBox />
                    <AdBox />
                </div>
            </div>
            <FocusSection />
            <hr className='w-full h-2 mt-8' />
            <hr className='w-full h-2 -mt-1' />
        </div>
    );
}

function AdBox() {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-lg h-56 w-full">
            <Image fill src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
        </div>
    );
}
