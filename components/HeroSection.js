export default function HeroSection() {
    return (
      <section className="py-8">
  
        {/* Breadcrumb */}
        <div className="text-red-500 text-xl mb-4">
          Home / Live TV <span className="text-red-500 text-xl">●</span>
        </div>
  
        {/* Video Embed */}
        <div className="relative w-full h-[50vh] aspect-video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Live Breaking News"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen 
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
      </section>
    );
  }
  