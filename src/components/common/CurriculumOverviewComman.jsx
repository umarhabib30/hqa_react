import React, { useState } from "react";

export default function CurriculumOverviewComman({
  tags = [],
  gradesData = {},
  hideSidebar = false, 
}) {
  const filters = [
    "All",
    "Mathematics",
    "Quran",
    "Science",
    "English",
    "Islamic Studies",
    "Arabic",
    "Social Studies",
    "Physical Education",
  ];

  const [selectedTag, setSelectedTag] = useState(tags[0] || "All");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [openSubject, setOpenSubject] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Flatten all subjects
  const allSubjects = Object.values(gradesData).flatMap((grade) => grade);

  // Filter by tag
  const isGradeSelected = selectedTag !== "All" && gradesData[selectedTag];
  const gradeData = isGradeSelected ? gradesData[selectedTag] : allSubjects;

  const gradeSubjects =
    selectedFilter === "All"
      ? selectedSubject === "All"
        ? selectedTag === "All"
          ? allSubjects // show all subjects of all grades
          : gradeData // show all subjects of selected grade
        : gradeData.filter((subj) => subj.name === selectedSubject)
      : allSubjects.filter((subj) =>
          subj.name.toLowerCase().includes(selectedFilter.toLowerCase())
        );

  
  const displayedSubjects = showAll
    ? gradeSubjects
    : gradeSubjects.slice(0, 12);

  return (
    <div className="bg-[#fffdf4] min-h-screen pr-6 py-12 font-serif overflow-hidden relative">
      <section>
        <p className="h1 italic text-red-700 text-center">
          Curriculum Overview
        </p>
        <p className="mt-6 ml-2 md:ml-14">Filters by Tags</p>
      </section>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-5 ml-2 md:ml-14">
        {tags.map((tag, index) => (
          <p
            key={index}
            onClick={() => {
              setSelectedTag(tag);
              setSelectedSubject("All");
              setOpenSubject(null);
              setShowAll(false); 
            }}
            className={`h-[45px] px-4 flex justify-center items-center text-white rounded-md cursor-pointer transition duration-500 ${
              selectedTag === tag
                ? "bg-[#00285e]"
                : "bg-[#6682b7] hover:bg-[#00285e]"
            }`}
          >
            {tag}
          </p>
        ))}
      </div>

      {/* Sidebar + Cards */}
      <section className="flex flex-col lg:flex-row gap-6 mt-5 ml-2 md:ml-14 items-start">
        {/* Sidebar — hidden for preschool */}
        {!hideSidebar && (
          <div className="w-full lg:w-64 bg-white rounded-lg p-4 shadow-lg h-auto max-h-[600px] overflow-y-auto">
            {isGradeSelected ? (
              <>
                <p className="font-semibold mb-3">{selectedTag} Subjects</p>
                <ul className="space-y-3">
                  <li
                    onClick={() => setSelectedSubject("All")}
                    className={`border-b pb-2 cursor-pointer ${
                      selectedSubject === "All"
                        ? "text-blue-700 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    All Subjects
                  </li>

                  {gradeData.map((subj, i) => (
                    <li
                      key={i}
                      onClick={() => setSelectedSubject(subj.name)}
                      className={`border-b pb-2 cursor-pointer ${
                        selectedSubject === subj.name
                          ? "text-blue-700 font-semibold"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {subj.name}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <form className="space-y-3">
                {filters.map((filter, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 cursor-pointer border-b pb-2"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={filter}
                      checked={selectedFilter === filter}
                      onChange={() => setSelectedFilter(filter)}
                      className="w-3 h-3"
                    />
                    <span className="text-gray-800">{filter}</span>
                  </label>
                ))}
              </form>
            )}
          </div>
        )}

        {/* Cards */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full auto-rows-auto">
            {displayedSubjects.length > 0 ? (
              displayedSubjects.map((subj, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md overflow-hidden w-full h-[260px] p-4 cursor-pointer flex flex-col transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => setOpenSubject(subj)}
                >
                  <img
                    src={subj.img}
                    alt={subj.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="flex justify-between items-center px-1 mt-8 pb-4">
                    <h3 className="text-base font-semibold text-gray-800">
                      {subj.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {subj.grade || selectedTag}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full mt-20 text-gray-500">
                No subjects found.
              </p>
            )}
          </div>

          {/* See More / See Less Button */}
          {gradeSubjects.length > 12 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-[#00285e] text-white px-6 py-2 rounded-md hover:bg-[#6682b7] transition duration-300"
              >
                {showAll ? "See Less" : "See More"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Popup */}
      {openSubject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl shadow-2xl p-6 w-[90%] max-w-3xl animate-fadeIn relative overflow-y-auto max-h-[85vh]">
            <div className="sticky top-0 z-50 flex justify-end bg-gradient-to-br from-blue-50 to-indigo-50 rounded-t-2xl pb-2">
              <button
                className="text-gray-700 text-lg font-bold"
                onClick={() => setOpenSubject(null)}
              >
                ✕
              </button>
            </div>

            {/* Main Heading */}
            <div className="w-full border-b-2 border-red-500 mb-4">
              <h2 className="text-3xl font-bold text-center text-blue-900">
                {openSubject.name} • {selectedTag}
              </h2>
            </div>

            {/* Subheadings & Points */}
            <div className="text-gray-700 leading-relaxed space-y-4">
              {openSubject.details.map((section, idx) => (
                <div key={idx}>
                  <p>{section.time}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mt-3">
                    {section.title}
                  </h3>

                  <ul className="list-none ml-4 mt-2 space-y-1">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
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
