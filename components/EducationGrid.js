

const EducationCard = ({ imageUrl, text }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group">
    <img
      src={imageUrl}
      alt={text ? text.substring(0, 30) : "Education image"}
      width={500}
      height={300}
      className="object-cover w-full h-58 transition-transform duration-500 ease-in-out transform group-hover:scale-110"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/20 flex items-end">
      <p className="p-4 text-white text-lg">
        {text}
      </p>
    </div>
  </div>
);

const EducationGrid = ({ cardData , heading }) => {
  return (
   
      <div className="py-10">
           <p className="text-3xl underline font-bold text-red-600 mb-6">
        {heading}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cardData && cardData.map((card, index) => (
            <EducationCard key={index} imageUrl={card.imageUrl} text={card.text} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md">
            View more
          </button>
        </div>
      </div>

  );
};

export default EducationGrid;



