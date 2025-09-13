import Image from "next/image";

export default function ElectionPage() {
    const sideItems = [
        { src: "/Newimg/science/8.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in" },
        { src: "/Newimg/science/9.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in" },
        { src: "/Newimg/science/10.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in" },
        { src: "/Newimg/science/11.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in" },
        { src: "/Newimg/science/12.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in" },
    ];
    const rightContents = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in",
      ];
    return (
        <div className="min-h-screen pb-6">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* First Column (≈ 40%) */}
                    <div className="md:col-span-5 space-y-6">
                        <div>
                            <div className="relative w-full h-48 rounded overflow-hidden mb-4">
                                <Image
                                    src="/Newimg/election/1.png"
                                    alt="Main News"
                                    width={436}
                                    height={283}
                                    style={{ objectFit: "cover" }}
                                    className="rounded"
                                />
                            </div>
                            <span className="text-xs text-gray-400">Updated 9 mins ago</span>
                            <h2 className="text-xl font-semibold mt-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            </h2>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            </h3>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="relative w-full md:w-1/3 h-28 rounded overflow-hidden">
                                    <Image
                                        src="/Newimg/science/12.png"
                                        alt="Sub-news"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                                    </p>
                                    <span className="text-xs text-gray-400 mt-1 block">Updated 9 mins ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Column (≈ 30%) */}
                    <div className="md:col-span-4 space-y-4">
                        {sideItems.map((item, idx) => (
                            <div key={idx}>
                                <div className="flex items-center mb-2">
                                    <div className="relative w-20 h-[85px] min-w-[143px] rounded overflow-hidden mr-3">
                                        <Image
                                            src={item.src}
                                            alt={`side-news-${idx}`}
                                            width={143}
                                            height={85}
                                            style={{ objectFit: "cover" }}
                                            className="rounded"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-700">
                                        {item.text}
                                    </p>
                                </div>
                                <hr className="w-full" />
                            </div>
                        ))}
                    </div>


                    {/* Third Column (≈ 30%) */}
                    <div className="md:col-span-3 space-y-4">
  <div className="grid grid-cols-1 gap-4">
    {rightContents.map((text, idx) => (
      <div key={idx}>
        <p className="text-xs text-gray-700">{text}</p>
        {idx < rightContents.length - 1 && <hr className="w-full mt-2" />}
      </div>
    ))}
  </div>
</div>

                </div>
            </div>
            
            <hr className="w-full h-2 mt-8" />
            <hr className="w-full h-2 -mt-1" />
        </div>
    );
}
