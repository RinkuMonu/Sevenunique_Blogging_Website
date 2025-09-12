import Image from "next/image";

export default function MoreStories() {
  // Data for each column
  const stories = [
    {
      img: "/Newimg/Tech/11.png",
      overlay: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      ],
    },
    {
      img: "/Newimg/Tech/12.png",
      overlay: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      ],
    },
    {
      img: "/Newimg/Tech/13.png",
      overlay: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      items: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto pb-8">
      <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-6">More Stories</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story, idx) => (
          <div key={idx}>
            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4 cursor-pointer hover:text-red-500">
              <Image
                src={story.img}
                alt="Story image"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority={idx === 0}
              />
              <div className="absolute inset-0 flex items-end px-5 pb-5 bg-gradient-to-t from-black/70 via-black/35 to-transparent">
                <div className="text-white text-lg font-semibold">
                  {story.overlay}
                </div>
              </div>
            </div>
            {/* List of items */}
            <div className="flex flex-col gap-2 cursor-pointer ">
              {story.items.map((item, i) => (
                <div key={i} className="text-base text-blue-800 hover:text-red-500">{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full justify-center flex mt-8">
                <button className="bg-red-600 text-white cursor-pointer rounded-full px-10 py-2 text-md  font-semibold hover:bg-red-700 shadow-xl mb-3">
                    View more
                </button>
            </div>
    </section>
  );
}
