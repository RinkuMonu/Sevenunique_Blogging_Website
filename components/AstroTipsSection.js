import Image from "next/image";

export default function AstroTipsSection() {
  // Example astro tips data
  const tips = [
    { img: "/Newimg/Astrology/T1.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
    { img: "/Newimg/Astrology/T2.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
    { img: "/Newimg/Astrology/T3.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
    { img: "/Newimg/Astrology/T4.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
    { img: "/Newimg/Astrology/T5.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
    { img: "/Newimg/Astrology/T6.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
    { img: "/Newimg/Astrology/T7.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
    { img: "/Newimg/Astrology/T8.png", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" },
  ];

  return (
    <section className="max-w-7xl mx-auto pb-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-red-600 underline underline-offset-2 mb-4">Astro tips</h1>

      {/* Tips grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mb-8">
        {tips.map((tip, idx) => (
          <div key={idx} className="flex flex-col items-center group cursor-pointer">
            <div className="w-full rounded-xl overflow-hidden mb-2 aspect-[4/3] relative">
              <Image
                src={tip.img}
                alt="Astro tip visual"
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
        ))}
      </div>
      
      {/* View more button */}
      <div className="flex justify-center mt-2">
        <button className="bg-red-600 text-white font-semibold shadow-2xl  py-2 px-14 rounded-full text-lg hover:bg-red-700 transition">
          View more
        </button>
      </div>
      <hr className='w-full h-2 mt-6' />
      <hr className='w-full h-2 -mt-1' />
    </section>
  );
}
