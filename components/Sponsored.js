import Image from "next/image";

const sponsoredData = [
  {
    img: "/Newimg/Home/1.png",
    alt: "Sponsored Brand Video Example",
  },
  { img: "/Newimg/Home/1.png", alt: "Sponsored Brand Video Example" },
  { img: "/Newimg/Home/1.png", alt: "Sponsored Brand Video Example" },
  { img: "/Newimg/Home/1.png", alt: "Sponsored Brand Video Example" },
  { img: "/Newimg/Home/1.png", alt: "Sponsored Brand Video Example" },
];

export default function SponsoredBrandsSection() {
  return (
    <div className="pb-8 bg-white">
      {/* Heading */}
      <h2 className="text-3xl mb-2 font-bold text-red-600  underline">
      Sponsored Brands
            </h2>
      {/* Subheading */}
      <p className="text-gray-600 text-sm mb-6">Featured Sponsored Video Ads</p>

      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {sponsoredData.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-72 md:w-80 flex flex-col items-center"
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={320}
              height={180}
              className="object-cover w-full h-40"
              priority
            />
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 justify-items-center">
        {sponsoredData.slice(3, 5).map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-[32rem] flex flex-col items-center"
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={520}
              height={240}
              className="object-cover w-full h-56"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
