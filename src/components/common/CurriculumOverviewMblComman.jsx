import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function CurriculumOverviewMbl({
  tags = [],
  gradesData = {}, 
  filters = ["All", "Mathematics", "Quran", "Science", "English"],
}) {
  const [selectedTag, setSelectedTag] = useState(tags[0] || "All");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [openTagDropdown, setOpenTagDropdown] = useState(false);
  const [openFilterDropdown, setOpenFilterDropdown] = useState(false);
  const [openSubject, setOpenSubject] = useState(null);
  const [showAllSubjects, setShowAllSubjects] = useState(false);

  const allSubjects = Object.values(gradesData).flatMap(
    (gradeArray) => gradeArray
  );

  const gradeSubjects =
    selectedTag === "All" ? allSubjects : gradesData[selectedTag] || [];

  let filteredCards = gradeSubjects.filter((card) => {
    return (
      selectedFilter === "All" ||
      card.name.toLowerCase().includes(selectedFilter.toLowerCase())
    );
  });

  const subjectsToShow =
    showAllSubjects || filteredCards.length <= 4
      ? filteredCards
      : filteredCards.slice(0, 4);

  return (
    <div className="bg-[#fffdf4] min-h-screen px-4 sm:px-5 py-10 font-serif overflow-hidden">
      <p className="text-2xl sm:text-3xl italic text-red-700 text-center">
        Curriculum Overview
      </p>
      <div className="mt-6 space-y-4">
        {/* Tags Dropdown */}
        <div className="relative w-full">
          <button
            className="w-full border px-4 py-2 rounded-lg bg-[#00285e] text-white flex justify-between items-center text-sm sm:text-base"
            onClick={() => {
              setOpenTagDropdown(!openTagDropdown);
              setOpenFilterDropdown(false);
            }}
          >
            {selectedTag || "Filter by Grade"}
            <BsThreeDotsVertical />
          </button>
          {openTagDropdown && (
            <div className="mt-2 w-full bg-white border rounded-lg shadow-lg z-20 relative max-h-60 overflow-y-auto">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm sm:text-base"
                  onClick={() => {
                    setSelectedTag(tag);
                    setOpenTagDropdown(false);
                    setOpenSubject(null);
                    setShowAllSubjects(false); 
                  }}
                >
                  {tag}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Subject Filters Dropdown */}
        <div className="relative w-full">
          <button
            className="w-full border px-4 py-2 rounded-lg bg-[#00285e] text-white flex justify-between items-center text-sm sm:text-base"
            onClick={() => {
              setOpenFilterDropdown(!openFilterDropdown);
              setOpenTagDropdown(false);
            }}
          >
            {selectedFilter || "Filter by Subject"}
            <BsThreeDotsVertical />
          </button>
          {openFilterDropdown && (
            <div className="mt-2 w-full bg-white border rounded-lg shadow-lg z-20 relative max-h-60 overflow-y-auto">
              {filters.map((filter, index) => (
                <p
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm sm:text-base"
                  onClick={() => {
                    setSelectedFilter(filter);
                    setOpenFilterDropdown(false);
                    setOpenSubject(null);
                    setShowAllSubjects(false); 
                  }}
                >
                  {filter}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {subjectsToShow.length > 0 ? (
          subjectsToShow.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden h-[240px] p-2 cursor-pointer flex flex-col justify-between"
              onClick={() => setOpenSubject(card)}
            >
              <img
                src={card.img}
                alt={card.name}
                className="w-full h-38 sm:h-40 object-cover rounded-lg"
              />
              <div className="flex justify-between items-center px-2 pt-2">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-6">
                  {card.grade || selectedTag} – {card.name}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full mt-10 text-gray-500 text-sm sm:text-base">
            No results found.
          </p>
        )}
      </div>

      {/* Show More / Show Less Button */}
      {filteredCards.length > 4 && (
        <div className="flex justify-center mt-4">
          <button
            className="px-6 py-2 bg-[#00285e] text-white rounded-lg text-sm sm:text-base"
            onClick={() => setShowAllSubjects(!showAllSubjects)}
          >
            {showAllSubjects ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Popup */}
      {openSubject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-[95%] max-w-md sm:max-w-lg lg:max-w-xl h-full sm:h-auto max-h-[90vh] overflow-y-auto relative p-6">
            <div className="sticky top-0 z-50 flex justify-end  rounded-t-2xl pb-2">
              <button
                className="text-gray-700 text-lg sm:text-xl font-bold"
                onClick={() => setOpenSubject(null)}
              >
                ✕
              </button>
            </div>

            <div className="w-full border-b-2 border-red-500 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-900">
                {openSubject.grade || selectedTag} – {openSubject.name}
              </h2>
            </div>

            <div className="text-gray-700 leading-relaxed space-y-4 text-sm sm:text-base">
              {openSubject.details?.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                    {openSubject.grade || selectedTag} – {section.title}
                  </h3>
                  <ul className="list-none ml-4 mt-2 space-y-1">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm sm:text-base"
                      >
                        <span className="text-red-500 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
