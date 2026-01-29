
const EventFilter = ({
  allCategories,
  activeCategories,
  onToggle,
  onSelectAll,
  onDeselectAll,
}) => {
  const isAllSelected = activeCategories.size === allCategories.length;
  const isNoneSelected = activeCategories.size === 0;

  return (
    <div className="mt-6 bg-[#bcddfc] rounded-2xl p-4">
      <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
        Filter
      </h3>

      <div className="flex justify-start mb-4">
        <button
          onClick={onSelectAll}
          className={`px-4 py-1 text-sm font-semibold rounded-l-lg transition-colors ${
            isAllSelected
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={onDeselectAll}
          className={`px-4 py-1 text-sm font-semibold rounded-r-lg transition-colors ${
            !isNoneSelected
              ? "bg-indigo-100 text-indigo-700 border-y border-r border-indigo-200 hover:bg-indigo-200"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Selected
        </button>
      </div>

      <button
        onClick={onDeselectAll}
        className="text-xs font-semibold uppercase text-gray-600 hover:text-red-500 transition-colors mb-4 block"
      >
        Deselect All
      </button>

      <div className="space-y-3">
        {allCategories.map((category) => (
          <div
            key={category}
            className="flex items-center text-sm text-gray-800 cursor-pointer hover:bg-blue-100 rounded-lg p-1 transition-colors"
            onClick={() => onToggle(category)}
          >
            <input
              type="checkbox"
              id={`filter-${category}`}
              checked={activeCategories.has(category)}
              onChange={() => onToggle(category)}
              className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500"
              style={{ accentColor: "#4f46e5" }}
            />
            <label
              htmlFor={`filter-${category}`}
              className="ml-3 text-gray-700 font-medium cursor-pointer"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventFilter;
