import Image from "next/image";

export default function AdvertisementSection() {
    return (
        <section className="py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Left: Two stacked ads */}
                <div className="md:col-span-2 flex flex-col gap-8">
                    <div className="bg-[#D9D9D9] text-gray-700 text-center w-full h-[100px] flex flex-col items-center justify-center rounded-md">
                        <Image src="/Newimg/header/bottom1.jpg" alt="adver" width={468} height={60} className="w-full h-[100px] object-cover rounded-md" />
                    </div>
                    <div className=" text-center w-full h-[100px] flex flex-col items-center justify-center rounded-md">
                        <Image src="/Newimg/header/bottom2.jpg" alt="adver" width={468} height={60} className="w-[468px] h-[100px] object-cover rounded-md" />
                    </div>
                </div>

                {/* Right: Square ad */}
                <div className="bg-gray-300 rounded flex flex-col items-center overflow-hidden justify-center h-[250px] w-full shadow">
                    <div className="mt-4 flex flex-col items-center">
                        <Image
                            src="/Newimg/header/leftside2.jpg"
                            alt="SEVENUNIQUE logo"
                            width={380}
                            height={250}
                            className="mb-2 object-cover"
                        />
                    </div>
                </div>
            </div>
            <hr className='w-full h-2 mt-6' />
            <hr className='w-full h-2 -mt-1' />
        </section>
    );
}
