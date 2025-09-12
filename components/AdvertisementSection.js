import Image from "next/image";

// components/AdvertisementSection.jsx
export default function AdvertisementSection() {
    return (
            <div className="w-full flex my-10 justify-center">
                <div className="flex gap-10 w-full max-w-screen-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[70%]">
                        <div className="flex flex-col items-center justify-center  rounded-lg  w-full">
                            <Image width={500} height={250} src="/Newimg/header/leftside2.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
                        </div>

                        <div className="flex flex-col items-center justify-center  rounded-lg  w-full">
                            <Image width={500} height={250} src="/Newimg/header/leftside1.jpg" alt="Ad" className="object-cover h-64 relative adverimg" />
                        </div>

                        <div className="flex flex-col items-center justify-center  rounded-lg  w-full col-span-2">
                            
                            <Image width={728} height={90} src="/Newimg/header/bottom1.jpg" alt="Ad" className="object-cover h-24 relative adverimg" />
                        </div>

                        <div className="flex flex-col items-center justify-center  rounded-lg  w-full col-span-2">
                           
                            <Image width={728} height={90} src="/Newimg/header/bottom2.jpg" alt="Ad" className="object-cover h-24 relative adverimg"  />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center  rounded-lg w-[30%]">
                        <Image width={300} height={900} src="/Newimg/header/sidenew.jpg" alt="Ad" className="object-cover h-[491px] relative adverimg" />
                    </div>
                </div>
            </div>

    );
}
