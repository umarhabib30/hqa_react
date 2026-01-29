import { useState } from "react";
import About from "./About";
import Attendees from "./Attendees";

export default function EventTabs({ aboutContent = [], attendeesData = [] }) {
  const [activeTab, setActiveTab] = useState("about");

  const customShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

  // Attendees pagination
  const INITIAL_COUNT = 6;
  const LOAD_COUNT = 20;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_COUNT, attendeesData.length),
    );
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <section className="max-w-7xl mx-auto mt-10 px-10 py-12 font-serif">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        {/* LEFT — Tabs  */}
        <div className="md:col-span-3 flex flex-col space-y-3">
          <button
            style={{ boxShadow: customShadow }}
            className={`py-3 px-5 text-left font-semibold rounded-l-md transition-colors cursor-pointer ${
              activeTab === "about"
                ? "bg-[#00285e] text-white"
                : "bg-gray-100 text-[#00285e] hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            style={{ boxShadow: customShadow }}
            className={`py-3 px-5 text-left font-semibold rounded-l-md transition-colors cursor-pointer ${
              activeTab === "attendees"
                ? "bg-[#00285e] text-white"
                : "bg-gray-100 text-[#00285e] hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("attendees")}
          >
            Attendees
          </button>
        </div>

        {/* RIGHT — Tab Content */}
        <div
          className="md:col-span-7 p-6 bg-white rounded-md"
          style={{ boxShadow: customShadow }}
        >
          {activeTab === "about" && <About content={aboutContent} />}

          {activeTab === "attendees" && (
            <>
              <Attendees data={attendeesData.slice(0, visibleCount)} />

              <div className="mt-4  gap-3 flex items-center justify-center flex-wrap">
                {visibleCount < attendeesData.length && (
                  <button
                    onClick={handleShowMore}
                    className="px-6 py-2 bg-red-700 cursor-pointer  text-white rounded-md hover:bg-red-800 transition"
                  >
                    Show More
                  </button>
                )}

                {visibleCount > INITIAL_COUNT && (
                  <button
                    onClick={handleShowLess}
                    className="px-6 py-2 bg-gray-700 cursor-pointer  text-white rounded-md hover:bg-gray-600 transition"
                  >
                    Show Less
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
