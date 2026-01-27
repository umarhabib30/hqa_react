import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const Connected = () => {
  const [open, setOpen] = useState("events");
  const [alumniEvents, setAlumniEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  useEffect(() => {
    fetch("https://hquranacademy.com/api/alumniEvents")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && Array.isArray(data.data)) {
          // Sort by date (earliest first) and take upcoming ones
          const today = new Date();

          const formatted = data.data
            .map((event) => ({
              ...event,
              _dateObj: new Date(event.start_date), // assuming start_date field
            }))
            .filter((e) => e._dateObj >= today)
            .sort((a, b) => a._dateObj - b._dateObj);

          setAlumniEvents(formatted);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Alumni Events API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full py-12 px-6 md:px-12 font-serif bg-[#00285E]">
      {/* Two column layout */}
      <motion.div
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        <div className="flex flex-col space-y-6 h-full">
          <div className="text-white mb-6">
            <h2 className="h1 italic mb-5">Stay Connected</h2>
            <p className="h2 italic max-w-4xl">
              Stay close to your HQA family no matter where life takes you.
            </p>
          </div>

          <div className="border rounded-lg shadow-md overflow-hidden flex flex-col bg-white text-[#252626]">
            <button
              onClick={() => toggle("events")}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg text-[#252626]"
            >
              Upcoming Events
              {open === "events" ? (
                <FaChevronUp className="text-[#252626]" />
              ) : (
                <FaChevronDown className="text-[#252626]" />
              )}
            </button>
            {open === "events" && (
              <div className="px-6 pb-4 text-[#252626] mt-4 space-y-4">
                {loading ? (
                  <p>Loading events...</p>
                ) : alumniEvents.length > 0 ? (
                  alumniEvents.slice(0, 5).map(
                    (
                      event, // Limit to 5 for accordion
                    ) => (
                      <p key={event.id} className="border-b pb-2">
                        {event.year || new Date(event.start_date).getFullYear()}{" "}
                        - {event.title}
                      </p>
                    ),
                  )
                ) : (
                  <p>No upcoming alumni events at this time.</p>
                )}
              </div>
            )}
          </div>

          <div className="border rounded-lg shadow-md overflow-hidden flex flex-col bg-white text-[#252626]">
            <button
              onClick={() => toggle("update")}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg text-[#252626]"
            >
              Update Your Information
              {open === "update" ? (
                <FaChevronUp className="text-[#252626]" />
              ) : (
                <FaChevronDown className="text-[#252626]" />
              )}
            </button>
            {open === "update" && (
              <div className="px-6 pb-4 bg-white text-[#252626] mt-4 space-y-4">
                <p className="border-b pb-2">
                  Keep your contact and profile information up to date.
                </p>
                <p className="border-b pb-2">
                  Make sure your email and phone number are correct.
                </p>
                <p className="border-b pb-2">
                  Update your current address or employment info if needed.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full h-full">
          <img
            src="/alumni/connection.jpg"
            alt="Students learning"
            className="w-full h-140 object-cover rounded-lg shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Connected;
