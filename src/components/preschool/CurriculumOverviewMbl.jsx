import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const tags = [
  "All",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "K",
];
const filters = ["All", "Library", "Mathematics", "Quran", "Science"];

const cards = [
  {
    img: "/pre/c1.jpg",
    subject: "Decisions",
    grade: "Grade 1",
    tag: "Grade 1",
    category: "Decisions",
  },
  {
    img: "/pre/c2.jpg",
    subject: "Library",
    grade: "Grade 2",
    tag: "Grade 2",
    category: "Library",
  },
  {
    img: "/pre/c3.jpg",
    subject: "Mathematics",
    grade: "Grade 3",
    tag: "Grade 3",
    category: "Mathematics",
  },
  {
    img: "/pre/c1.jpg",
    subject: "Quran",
    grade: "Grade 4",
    tag: "Grade 4",
    category: "Quran",
  },
  {
    img: "/pre/c1.jpg",
    subject: "Science",
    grade: "Grade 5",
    tag: "Grade 5",
    category: "Science",
  },
  {
    img: "/pre/c2.jpg",
    subject: "Decisions",
    grade: "K",
    tag: "K",
    category: "Decisions",
  },
];

export default function CurriculumOverviewMbl() {
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [openTagDropdown, setOpenTagDropdown] = useState(false);
  const [openFilterDropdown, setOpenFilterDropdown] = useState(false);

  // Filter logic
  const filteredCards = cards.filter((card) => {
    const tagMatch =
      !selectedTag || selectedTag === "All" || card.tag === selectedTag;
    const filterMatch =
      !selectedFilter ||
      selectedFilter === "All" ||
      card.category === selectedFilter;
    return tagMatch && filterMatch;
  });

  const displayedCards = filteredCards.slice(0, 4);

  return (
    <div className="bg-[#fffdf4] min-h-screen px-5 py-10 font-serif">
      <p className="text-2xl italic text-red-700 text-center">
        Curriculum Overview
      </p>

      <div className="mt-6 space-y-4">
        {/* Tags Dropdown */}
        <div className="relative w-full">
          <button
            className="w-full border px-4 py-2 rounded-lg bg-[#00285e] text-white flex justify-between items-center"
            onClick={() => {
              setOpenTagDropdown(!openTagDropdown);
              setOpenFilterDropdown(false);
            }}
          >
            {selectedTag || "Filter by Result"}
            <BsThreeDotsVertical />
          </button>
          {openTagDropdown && (
            <div className="mt-2 w-full bg-white border rounded-lg shadow-lg z-20 relative">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedTag(tag);
                    setOpenTagDropdown(false);
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
            className="w-full border px-4 py-2 rounded-lg bg-[#00285e] text-white flex justify-between items-center"
            onClick={() => {
              setOpenFilterDropdown(!openFilterDropdown);
              setOpenTagDropdown(false);
            }}
          >
            {selectedFilter || "Filter by Subject"}
            <BsThreeDotsVertical />
          </button>
          {openFilterDropdown && (
            <div className="mt-2 w-full bg-white border rounded-lg shadow-lg z-20 relative">
              {filters.map((filter, index) => (
                <p
                  key={index}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedFilter(filter);
                    setOpenFilterDropdown(false);
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
      <div className="grid grid-cols-1 gap-4 mt-6">
        {displayedCards.length > 0 ? (
          displayedCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden h-[240px] p-2 cursor-pointer flex flex-col justify-between"
            >
              <img
                src={card.img}
                alt={card.subject}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="flex justify-between items-center px-2 pt-2">
                <h3 className="text-sm font-semibold text-gray-800">
                  {card.subject}
                </h3>
                <span className="text-xs text-gray-500">{card.grade}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full mt-10 text-gray-500">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}
