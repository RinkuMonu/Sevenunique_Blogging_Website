import Image from "next/image";
import FocusSection from "./FocusSection";

export default function PlanetsTransitsSection() {
    return (
        <section className="max-w-7xl mx-auto pb-8">
            {/* Title */}
            <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-4">
                Planets & Transits
            </h1>

            <section className="max-w-7xl mx-auto py-8">
                <div className="flex gap-6">
                    {/* Left: 60% width */}
                    <div className="flex gap-3 w-[65%]">
                        <div className="flex flex-col">
                            <div className="w-[380px] h-[402px] rounded-xl overflow-hidden mb-2 relative">
                                <Image
                                    src="/Newimg/Astrology/A1.png"
                                    alt="Solar system planets"
                                    width={380}
                                    height={402}
                                    objectFit="cover"
                                    className="rounded-xl object-cover h-[402px]"
                                    priority
                                />
                            </div>
                            <p className="text-base text-[#20345C] font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-[255px] h-[154px] rounded-xl overflow-hidden relative">
                                <Image
                                    src="/Newimg/Astrology/A2.png"
                                    alt="Sun and Planets"
                                    width={255}
                                    height={154}
                                    objectFit="cover"
                                    className="rounded-xl"
                                />
                            </div>
                            <p className="text-base text-[#20345C] font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                            <div className="w-[255px] h-[154px] rounded-xl overflow-hidden relative">
                                <Image
                                    src="/Newimg/Astrology/A3.png"
                                    alt="Planets orbiting"
                                    width={255}
                                    height={154}
                                    objectFit="cover"
                                    className="rounded-xl"
                                />
                            </div>
                            <p className="text-base text-[#20345C] font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                        </div>
                    </div>

                    {/* Right: 40% width */}
                    <div className="flex flex-col gap-4 items-left w-[35%] h-full">
                        <div className="bg-gray-200 rounded-md flex flex-col overflow-hidden h-[250px] w-[300px] items-center">
                            <Image
                                src="/Newimg/Astrology/A1.png"
                                alt="SEVENUNIQUE Logo"
                                width={300}
                                height={250}
                                className="mb-1 object-cover"
                            />
                        </div>
                        <div className="w-full border-t mt-2 pt-2">
                            <p className="text-base text-[#20345C] font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                            <hr className="mt-3" />
                            <p className="mt-4 text-base text-[#20345C] font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <FocusSection />
      <hr className='w-full h-2 mt-6' />
      <hr className='w-full h-2 -mt-1' />
        </section>
    );
}
