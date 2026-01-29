import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaClock, FaMapMarkerAlt, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../../utility/animation";

export default function UpcomingEvents({ apiUrl }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        if (result.status) {
          setEvents(result.data);
        }
      } catch (error) {
        console.error("Error fetching PTO events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [apiUrl]);

  // Helper to format dates from "2026-01-25"
  const formatDateParts = (dateString) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleString("default", { month: "short" }).toUpperCase(),
      day: date.getDate(),
      year: date.getFullYear(),
    };
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <FaSpinner className="animate-spin text-[#092962] text-3xl" />
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 font-serif">
      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 text-[#092962] mb-8 text-center sm:text-left"
      >
        Upcoming Events
      </motion.h2>

      <div className="flex flex-col gap-8">
        {events.length > 0 ? (
          events.map((event) => {
            const { month, day, year } = formatDateParts(event.start_date);
            return (
              <motion.div
                variants={SlideRight(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={event.id}
                className="flex flex-col sm:flex-row gap-6 border-b pb-8 last:border-none"
              >
                {/* Date Badge */}
                <div className="flex-shrink-0 w-full sm:w-24 flex justify-center sm:block">
                  <div className="flex sm:flex-col items-center sm:items-stretch gap-2 sm:gap-0 text-center rounded-md shadow-sm overflow-hidden">
                    <div className="bg-[#E8EFF7] text-[#092962] font-semibold py-2 px-4 sm:px-0 sm:py-2">
                      {month}
                    </div>
                    <div className="bg-[#092962] text-white font-bold py-3 px-6 sm:px-0 sm:py-4 text-xl">
                      {day}
                    </div>
                    <div className="bg-[#E8EFF7] text-[#092962] py-1 px-4 sm:px-0 sm:py-1">
                      {year}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="h2 font-semibold text-[#092962] mb-2">
                    {event.title}
                  </h3>
                  <div className="text-gray-600 mb-3 flex flex-col gap-1">
                    <p className="flex items-center gap-2">
                      <FaClock className="text-[#092962]" />
                      {event.start_time} - {event.end_time}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#092962]" />{" "}
                      {event.location}
                    </p>
                  </div>

                  {/* Using id since slug isn't in the API response provided */}
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-block text-[#092962] font-semibold hover:underline transition"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">
            No upcoming events scheduled.
          </p>
        )}
      </div>
    </section>
  );
}
