import Image from "next/image";
import { useRef } from "react";
export default function VideosSection() {
    const sideVideos = [
        {
            videoUrl: "https://youtu.be/OGs2YsqvWDg?si=7m-8a7L8_eZawJJy",
            desc: "Lorem ipsum dolor sit amet, consectetur",
        },
        {
            videoUrl: "https://youtu.be/Cr9B6yyLZSk?si=mLNLtz9fDe30dPeK",
            desc: "Lorem ipsum dolor sit amet, consectetur",
        },
        {
            videoUrl: "https://youtu.be/Otim2mDjsYM?si=mN9JBexOjrj-OZJO",
            desc: "Lorem ipsum dolor sit amet, consectetur",
        },
    ];
    function extractVideoId(url) {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    }

    return (
        <section className="max-w-7xl mx-auto py-8">
            {/* Section Title */}
            <h1 className="text-4xl font-bold text-red-600 mb-6 underline underline-offset-2">
                Videos
            </h1>

            <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Featured Video */}
                <div className="w-full md:w-[60%] relative">
                    <div className="rounded-lg  w-full h-96 overflow-hidden relative">
                        <iframe
                            src="https://www.youtube.com/embed/1UufaK3pQMg?si=0U61BB4ejXhp--mL"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                            <p className="text-white text-lg font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod
                            </p>
                        </div>
                    </div>
                </div>

                {/* Side Videos */}
                <div className="w-full md:w-[40%] flex flex-col gap-4">
                    {sideVideos.map((vid, idx) => {
                        const videoId = extractVideoId(vid.videoUrl);
                        return (
                            <div
                                key={idx}
                                className="flex items-center  gap-3  p-2 cursor-pointer"
                            >
                                <div className="relative w-[200px] h-[110] flex-shrink-0 overflow-hidden">
                                    <YoutubeEmbed videoId={videoId} />
                                </div>
                                <span className="text-md text-[#002765] font-medium">
                                    {vid.desc}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* View More Button */}
            <div className="w-full justify-center flex">
                <button className="bg-red-600 text-white cursor-pointer rounded-full px-6 py-2 text-sm  font-semibold hover:bg-red-700 shadow-xl mb-3">
                    View more
                </button>
            </div>
            <hr className='w-full h-2 mt-8' />
            <hr className='w-full h-2 -mt-1' />
        </section>
    );
}
function YoutubeEmbed({ videoId }) {
    return (
        <div className="relative rounded-md overflow-hidden shadow-md">
            <iframe
                className="w-[200px] h-[110]"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
                // allow="autoplay; encrypted-media"
                allowFullScreen
                title="Podcast video"
            />
        </div>
    );
}
