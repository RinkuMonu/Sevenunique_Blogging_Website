import Image from "next/image";
import Link from "next/link";

export default function TopNewsSection() {
    const newsItems = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      imageUrl: '/Newimg/header/topnews1.png', 
    }));
  
    return (
      <section className="py-8">
        
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-red-600 underline mb-6">Top News</h2>
  
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {newsItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-[#00000040] border bg-white p-4 rounded-xl " style={{boxShadow:"2px 4px 22px 0px #00000026"}}>
              
              {/* News Text */}
              <p className="text-gray-700">{item.title}</p>
              
              {/* News Image */}
              <Image
                src={item.imageUrl}
                alt="News"
                className="w-24 h-16 object-cover rounded"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
  
        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <Link href={"/"} className="bg-red-600 text-white px-10 py-2 rounded-full text-md font-medium hover:bg-red-700" style={{boxShadow:" 0px 0px 100px 0px #0000000D"}}>
            View more
          </Link>
        </div>
        
      </section>
    );
  }
  