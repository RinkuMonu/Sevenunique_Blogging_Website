import Image from "next/image";
import FocusSection from "./FocusSection";

export default function TechMobile() {
  return (
    <div className=" py-8 bg-white w-full">
      <h2 className="text-3xl font-bold text-red-700 underline mb-6">Mobile</h2>
      <div className="grid grid-cols-[70%_30%] gap-6 mb-6">
        {/* Left Column - 70% */}
        <div className="flex flex-col gap-6">
          {/* Top image section */}
          <div className="relative rounded-xl overflow-hidden h-64">
            <Image
              src="/images/technology/mobile-img.png"
              alt="Top Feature"
              layout="fill"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-lg font-medium leading-tight">
                Lorem ipsum <span className="text-blue-300">dolor sit amet</span>, consectetur adipiscing elit, sed do eiusmod
              </p>
            </div>
          </div>

          {/* Bottom image/content section */}
          <div className="flex gap-4">
            <div className="rounded-xl overflow-hidden w-1/2 relative h-48 flex-shrink-0">
              <Image
                src="/images/technology/mobile-img2.png"
                alt="Bottom Left"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-blue-900 font-medium text-sm mb-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - 30% */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="flex bg-white rounded-xl overflow-hidden  shadow-sm">
            <div className="w-2/5 relative h-28 flex-shrink-0">
              <Image
                src="/images/technology/mob-1.png"
                alt="Side Card 1"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="w-3/5 p-2 flex items-center">
              <p className="text-blue-900 text-sm font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex bg-white rounded-xl overflow-hidden  shadow-sm">
            <div className="w-2/5 relative h-28 flex-shrink-0">
              <Image
                src="/images/technology/mob-2.png"
                alt="Side Card 2"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="w-3/5 p-2 flex items-center">
              <p className="text-blue-900 text-sm font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex bg-white rounded-xl overflow-hidden  shadow-sm">
            <div className="w-2/5 relative h-28 flex-shrink-0">
              <Image
                src="/images/technology/mob-3.png"
                alt="Side Card 3"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="w-3/5 p-2 flex items-center">
              <p className="text-blue-900 text-sm font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </p>
            </div>
          </div>
        </div>
      </div>
      <FocusSection />
      <hr className='w-full h-2 mt-6' />
      {/* <hr className='w-full h-2 -mt-1' /> */}
    </div>
  );
}
