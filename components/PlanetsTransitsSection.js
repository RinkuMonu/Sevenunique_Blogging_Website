import Image from "next/image";
import FocusSection from "./FocusSection";

export default function PlanetsTransitsSection({
    heading = "Planets & Transits",   
    mainImage,
    mainImageAlt,
    mainText,
    sideImages = [],   
    rightImage = { src: "", alt: "" },  
    bottomTexts = [],     
}) {
    return (
        <section className="max-w-7xl mx-auto pb-8">
            <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-2">
            {heading}
            </h1>

            <section className="max-w-7xl mx-auto py-8">
                <div className="flex gap-6">

                    <div className="flex gap-3 w-[65%]">
                        <div className="flex flex-col">
                            <div className="w-[380px] h-[402px] rounded-xl overflow-hidden mb-2 relative">
                                <Image
                                    src={mainImage}
                                    alt={mainImageAlt}
                                    width={380}
                                    height={402}
                                    className="rounded-xl object-cover h-[402px]"
                                    priority
                                />
                            </div>
                            <p className="text-base text-[#20345C] font-medium">
                                {mainText}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {Array.isArray(sideImages) && sideImages.map((img, idx) => (
                                <div key={idx}>
                                    <div className="w-[255px] h-[154px] rounded-xl overflow-hidden relative">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            width={255}
                                            height={154}
                                            className="rounded-xl"
                                        />
                                    </div>
                                    <p className="text-base text-[#20345C] font-medium">
                                        {img.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-left w-[35%] h-full">
                        <div className="bg-gray-200 rounded-md flex flex-col overflow-hidden h-[250px] w-[363px] items-center">
                            <Image
                                src={rightImage.src}
                                alt={rightImage.alt}
                                width={300}
                                height={250}
                                className="mb-1 object-cover w-[363px] h-[250px]"
                            />
                        </div>

                        <div className="w-full mt-2 pt-2">
                            {Array.isArray(bottomTexts) && bottomTexts.map((text, idx) => (
                                <p key={idx} className="text-base text-[#20345C] border-t pt-2 font-medium mt-4">
                                    {text}
                                </p>
                            ))}
                            <hr className="mt-3" />
                        </div>
                    </div>

                </div>
            </section>

            <FocusSection />

            <hr className="w-full h-2 mt-6" />
            <hr className="w-full h-2 -mt-1" />
        </section>
    );
}
