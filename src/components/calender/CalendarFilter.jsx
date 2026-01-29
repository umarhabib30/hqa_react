import React, { useState } from "react";

export const FILTER_OPTIONS = [
  "Academic Events",
  "Admission Events",
  // "Admissions Fairs & Travel",
  "Alumni, Parents & Families",
  "Athletics",
  "College Counseling",
  // "D'Amour Center for Faith, Service & Justice",
  // "Social Justice Series",
  "Student Life",
];

export const CalendarFilter = ({ activeFilters, setActiveFilters }) => {
  const [viewMode, setViewMode] = useState("All");

  const handleToggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const handleDeselectAll = () => {
    setActiveFilters([]);
  };

  const handleUpdate = () => {
    console.log("Calendar Updated with new filters:", activeFilters);
  };

  return (
    <div className="mt-6 rounded-xl bg-white p-4 text-black shadow-inner">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-[#0f172a]">Filter</h3>
        <div className="flex rounded-lg bg-gray-200 p-0.5">
          <button
            onClick={() => setViewMode("All")}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
              viewMode === "All"
                ? "bg-[#0f172a] text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setViewMode("Selected")}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
              viewMode === "Selected"
                ? "bg-[#e2e8f0] text-gray-800 shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            disabled
          >
            Selected
          </button>
        </div>
      </div>

      <button
        onClick={handleDeselectAll}
        className="mb-4 px-3 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors font-medium"
      >
        DESELECT ALL
      </button>

      <div className="space-y-2">
        {FILTER_OPTIONS.map((filter) => (
          <div key={filter} className="flex items-center text-sm">
            <input
              type="checkbox"
              id={filter}
              checked={activeFilters.includes(filter)}
              onChange={() => handleToggleFilter(filter)}
              className="h-4 w-4 text-[#0f172a] border-gray-300 rounded focus:ring-[#0f172a]"
            />
            <label
              htmlFor={filter}
              className="ml-2 text-gray-800 cursor-pointer"
            >
              {filter}
            </label>
          </div>
        ))}
      </div>

      <button
        onClick={handleUpdate}
        className="mt-6 w-full py-2 bg-[#e2e8f0] text-[#0f172a] font-semibold rounded-md hover:bg-[#cbd5e0] transition-colors"
      >
        UPDATE CALENDAR
      </button>

      <div className="mt-4 text-xs text-gray-500">
        **Current Filters:** {activeFilters.length} / {FILTER_OPTIONS.length}{" "}
        Selected
      </div>
    </div>
  );
};
