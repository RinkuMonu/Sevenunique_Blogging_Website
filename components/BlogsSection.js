import Image from "next/image";

export default function BlogsSection({ blogs }) {
  return (
    <section className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-red-600 underline underline-offset-2 mb-6">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-8 mb-8">
        {blogs.map((blog, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <div className="w-28 h-24 rounded-xl overflow-hidden relative bg-white flex-shrink-0">
              <Image
                src={blog.img}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority={idx < 4}
              />
            </div>
            <div>
              <h2 className="text-base text-[#20345C] font-semibold mb-2">
                {blog.title}
              </h2>
              <div className="text-xs text-[#54A3DA] font-medium">
                {blog.category}/ <span className="text-gray-700">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View more button */}
      <div className="flex justify-center mt-2">
        <button className="bg-red-600 text-white font-semibold py-2 px-14 rounded-full text-md shadow-2xl hover:bg-red-700 transition">
          View more
        </button>
      </div>
      <hr className="w-full h-2 mt-6" />
      <hr className="w-full h-2 -mt-1" />
    </section>
  );
}
