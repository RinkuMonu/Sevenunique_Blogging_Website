import Image from "next/image";

export default function CartoonsSection({ cartoons }) {
  return (
    <>
    <section className="max-w-7xl mx-auto py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-6">Cartoons</h1>

      {/* Cartoon grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-8">
        {cartoons.map((cartoon, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className=" w-[255px] h-[148px] rounded-xl overflow-hidden mb-2 relative bg-white">
              <Image
                src={cartoon.img}
                alt="Cartoon"
                // layout="fill"
                width={255}
                height={148}
                objectFit="cover"
                className="rounded-xl w-[255px] h-[148px]"
                priority={idx < 5}
              />
            </div>
            <p className="text-center text-base text-[#20345C] font-medium">
              {cartoon.desc}
            </p>
          </div>
        ))}
      </div>

      {/* View more button */}
      <div className="flex justify-center mt-2">
        <button className="bg-red-600 text-white font-semibold py-2 px-14 rounded-full text-lg hover:bg-red-700 transition">
          View more
        </button>
      </div>
    </section>
    
    <hr className="w-full h-2 mt-6" />
    <hr className="w-full h-2 -mt-1" />
   </>
  );
}
