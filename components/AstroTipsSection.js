import Image from "next/image";

export default function AstroTipsSection({ title = "Astro Tips", tips = [] }) {
  return (
    <section className="max-w-7xl mx-auto pb-8">
      {/* Dynamic Title */}
      <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-4">
        {title}
      </h1>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mb-8">
        {Array.isArray(tips) &&
          tips.flatMap((tip, idx) => {
            const elements = [
              <div key={`tip-${idx}`} className="flex flex-col items-center group cursor-pointer">
                <div className="w-full rounded-xl overflow-hidden mb-2 aspect-[4/3] relative">
                  <Image
                    src={tip.img}
                    alt={tip.alt || "Astro tip visual"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                    priority={idx < 4}
                  />
                </div>
                <p className="text-left text-base text-[#20345C] font-medium group-hover:text-red-500">
                  {tip.desc}
                </p>
              </div>
            ];

            if ((idx + 1) % 4 === 0 && idx + 1 !== tips.length) {
              elements.push(
                <hr key={`hr-${idx}`} className="col-span-4 border-gray-900 mt-4 mb-4" />
              );
            }

            return elements;
          })}
      </div>



      {/* View More Button */}
      <div className="flex justify-center mt-2">
        <button className="bg-red-600 text-white font-semibold shadow-2xl py-2 px-14 rounded-full text-lg hover:bg-red-700 transition">
          View more
        </button>
      </div>

      <hr className="w-full h-2 mt-6" />
      <hr className="w-full h-2 -mt-1" />
    </section>
  );
}
