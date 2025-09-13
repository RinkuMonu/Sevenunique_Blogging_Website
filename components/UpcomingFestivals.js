"use client";

export default function UpcomingFestivals({
  heading,
  description,
  columns,
  rows,
  buttonText,
  onViewMore,
}) {
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl text-red-700 underline font-bold mb-2">{heading}</h1>
        {/* Description */}
        <p className="text-xl text-blue-900 font-medium mb-6 leading-snug">
          {description}
        </p>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="border-b border-gray-200">
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="text-lg text-left font-semibold text-blue-900 pb-3"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ridx) => (
                <tr
                  key={ridx}
                  className="border-b border-gray-200"
                >
                  {row.map((cell, cidx) => (
                    <td
                      key={cidx}
                      className="py-2 text-left text-blue-900"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* View more button */}
        <div className="flex justify-center mt-10">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-2.5 rounded-full text-lg font-semibold shadow-lg shadow-red-200 transition"
            onClick={onViewMore}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <hr className="w-full h-2 mt-8" />
      <hr className="w-full h-2 -mt-1" />
    </div>
  );
}
