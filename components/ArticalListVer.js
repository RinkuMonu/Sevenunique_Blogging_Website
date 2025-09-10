import React from "react";

const ArticleList = ({articlesV}) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="space-y-4">
        {articlesV.map((article) => (
          <div
            key={article.id}
            className="flex items-center space-x-4 border-b border-gray-200 pb-4"
          >
            {/* Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-24 h-20 object-cover rounded-lg"
            />

            {/* Text */}
            <h3 className="text-gray-700 font-medium text-sm leading-snug">
              {article.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
