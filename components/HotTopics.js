import React from 'react';

// Data for the topic sections
const topicSections = [
  {
    title: 'Trending topics',
    topics: ['weather Today', 'PM Modi', 'Gold Price', 'Gurugram Traffic', 'Delhi Rains', 'Jaipur Rains', 'Punjab Flood', 'Punjab Flood'],
  },
  {
    title: 'Hot on Social',
    topics: ['weather Today', 'PM Modi', 'Gold Price', 'Gurugram Traffic', 'Delhi Rains', 'Jaipur Rains', 'Punjab Flood', 'Punjab Flood'],
  },
  {
    title: 'Popular Category',
    topics: ['weather Today', 'PM Modi', 'Gold Price', 'Gurugram Traffic', 'Delhi Rains', 'Jaipur Rains', 'Punjab Flood', 'Punjab Flood'],
  },
    {
    title: 'Language Sites',
    topics: ['weather Today', 'PM Modi', 'Gold Price', 'Gurugram Traffic', 'Delhi Rains', 'Jaipur Rains', 'Punjab Flood', 'Punjab Flood'],
  },
  {
    title: 'Hot on Social',
    topics: ['weather Today', 'PM Modi', 'Gold Price', 'Gurugram Traffic', 'Delhi Rains', 'Jaipur Rains', 'Punjab Flood', 'Punjab Flood'],
  },
];

// ChevronDown Icon Component
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);


// Main App Component
export default function HotTopics() {
  return (
    <div className=" font-sans text-gray-800 py-10">
     
        {topicSections.map((section, index) => (
          <div key={index} className="border-t border-gray-600 py-4">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-3">
           <p className="text-3xl underline font-bold text-red-600 mb-6">{section.title}</p>
              <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                <span>More</span>
                <ChevronDown />
              </button>
            </div>
            
            {/* Topics List */}
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-700">
              {section.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="flex items-center">
                  <span className="text-gray-400 mr-4">•</span>
                  <a href="#" className="hover:text-red-600 transition-colors duration-200">
                    {topic}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
 
  );
}

