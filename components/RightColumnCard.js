import React from 'react';

const RightColumnCard = ({ cardItems }) => {
    return (
        <div className="flex flex-col gap-5">
            {cardItems.map((item, index) => (
                <div
                    key={index}
                    className="md:flex items-center space-x-4 border-b last:border-0 pb-3"
                >
                    <img
                        src={item.image}
                        alt="News"
                        className="lg:w-58 lg:h-36 object-cover rounded-md flex-shrink-0"
                    />
                    <p className="text-[#002765] font-bold flex-grow">{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default RightColumnCard;
