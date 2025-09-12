import Image from "next/image";
import FocusSection from "./FocusSection";

export default function HoroscopeSection() {
  const horoscopes = [
    { sign: "LIBRA", img: "/Newimg/Astrology/1.png" },
    { sign: "VIRGO", img: "/Newimg/Astrology/2.png" },
    { sign: "ARIES", img: "/Newimg/Astrology/3.png" },
    { sign: "CAPRICORN", img: "/Newimg/Astrology/4.png" },
    { sign: "TAURUS", img: "/Newimg/Astrology/5.png" },
    { sign: "PISCES", img: "/Newimg/Astrology/6.png" },
    { sign: "GEMINI", img: "/Newimg/Astrology/7.png" },
    { sign: "SCORPIO", img: "/Newimg/Astrology/8.png" },
    { sign: "LEO", img: "/Newimg/Astrology/9.png" },
    { sign: "SAGITTARIUS", img: "/Newimg/Astrology/10.png" },
    { sign: "CANCER", img: "/Newimg/Astrology/11.png" },
    { sign: "VIRGO", img: "/Newimg/Astrology/2.png" },

  ];

  return (
    <section className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-2">Today’s Horoscope</h1>

        <div className="bg-[#D9D9D9] text-gray-700 text-center w-[500px] h-[70px] flex flex-col items-center justify-center rounded-md">
          <Image src="/Newimg/header/bottom1.jpg" alt="adver" width={468} height={60} className="w-[500px] h-[70px] object-cover rounded-md" />
        </div>
      </div>

      {/* Horoscope Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
        {horoscopes.map((h, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <div className="w-36 h-48 relative rounded-xl overflow-hidden mb-3 shadow-md cursor-pointer ">
              <Image
                src={h.img}
                alt={h.sign}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority={idx < 2}
              />
            </div>
            <p className="text-center text-base font-medium text-gray-800 group-hover:text-red-500">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        ))}
      </div>
      <FocusSection />
      <hr className='w-full h-2 mt-6' />
      <hr className='w-full h-2 -mt-1' />
    </section>
  );
}
