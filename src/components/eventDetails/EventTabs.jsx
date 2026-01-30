import { useEffect, useState } from "react";
import About from "./About";
import Attendees from "./Attendees";
import axios from "axios";

export default function EventTabs({ eventId, aboutContent = [] }) {
  const [activeTab, setActiveTab] = useState("about");
  const [attendeesData, setAttendeesData] = useState([]);
  const customShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";

  const INITIAL_COUNT = 6;
  const LOAD_COUNT = 20;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    if (!eventId) return;

    axios
      .get(`http://localhost:8000/api/pto-event-attendees`, {
        params: { event_id: eventId },
      })
      .then((res) => setAttendeesData(res.data))
      .catch((err) => console.error(err));
  }, [eventId]);

  const handleShowMore = () =>
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_COUNT, attendeesData.length),
    );

  const handleShowLess = () => setVisibleCount(INITIAL_COUNT);

  return (
    <section className="max-w-7xl mx-auto mt-10 px-10 py-12 font-serif">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="md:col-span-3 flex flex-col space-y-3">
          <button
            style={{ boxShadow: customShadow }}
            className={`py-3 px-5 text-left font-semibold rounded-l-md ${
              activeTab === "about"
                ? "bg-[#00285e] text-white"
                : "bg-gray-100 text-[#00285e]"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>

          <button
            style={{ boxShadow: customShadow }}
            className={`py-3 px-5 text-left font-semibold rounded-l-md ${
              activeTab === "attendees"
                ? "bg-[#00285e] text-white"
                : "bg-gray-100 text-[#00285e]"
            }`}
            onClick={() => setActiveTab("attendees")}
          >
            Attendees
          </button>
        </div>

        <div
          className="md:col-span-7 p-6 bg-white rounded-md"
          style={{ boxShadow: customShadow }}
        >
          {activeTab === "about" && <About content={aboutContent} />}

          {activeTab === "attendees" && (
            <>
              <Attendees data={attendeesData.slice(0, visibleCount)} />

              <div className="mt-4 flex gap-3 justify-center flex-wrap">
                {visibleCount < attendeesData.length && (
                  <button
                    onClick={handleShowMore}
                    className="px-6 py-2 bg-red-700 text-white rounded-md"
                  >
                    Show More
                  </button>
                )}
                {visibleCount > INITIAL_COUNT && (
                  <button
                    onClick={handleShowLess}
                    className="px-6 py-2 bg-gray-700 text-white rounded-md"
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
