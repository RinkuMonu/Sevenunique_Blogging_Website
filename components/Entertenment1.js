import React from 'react';

const Entertenment1 = () => {
    return (
        <div className="bg-white text-gray-800 py-10">
            {/* Updated to a 12-column grid for medium screens and up */}
            <div className=" grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* ## Left Column (Spans 7 of 12 columns) */}
                <div className="flex flex-col md:col-span-7">
                    <img
                        src="sports/img7.png"
                        alt="Movie poster collage of Pathaan and Farzi"
                        className="w-full h-auto rounded-xl"
                    />
                    <p className="mt-4 text-[#002765]  font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                </div>

                {/* ## Right Column (Spans 5 of 12 columns) */}
                <div className="flex flex-col gap-8 md:col-span-5">

                    {/* Top Item */}
                    <div className="flex flex-col">
                        <img
                            src="sports/img9.png"
                            alt="Action movie poster"
                            className="w-full h-48 rounded-xl"
                        />
                        <p className="mt-4 text-[#002765]  font-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                    </div>

                    {/* Bottom Item */}
                    <div className="flex flex-col">
                        <img
                            src="sports/img4.png"
                            alt="Movie scene with multiple characters"
                            className="w-full h-48 rounded-xl"
                        />
                        <p className="mt-4 text-[#002765]  font-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                    </div>

                </div>
                <div className="flex flex-col gap-8 md:col-span-5">

                    {/* Top Item */}
                    <div className="flex flex-col">
                        <img
                            src="sports/img9.png"
                            alt="Action movie poster"
                            className="w-full h-48 rounded-xl"
                        />
                        <p className="mt-4 text-[#002765]  font-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                    </div>

                    {/* Bottom Item */}
                    <div className="flex flex-col">
                        <img
                            src="sports/img4.png"
                            alt="Movie scene with multiple characters"
                            className="w-full h-48 rounded-xl"
                        />
                        <p className="mt-4 text-[#002765]  font-bold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                    </div>

                </div>
                <div className="flex flex-col md:col-span-7">
                    <img
                        src="sports/img7.png"
                        alt="Movie poster collage of Pathaan and Farzi"
                        className="w-full h-auto rounded-xl"
                    />
                    <p className="mt-4 text-[#002765]  font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Entertenment1;