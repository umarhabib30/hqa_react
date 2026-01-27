import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { events } from "../../constants/events";
import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation";

export default function UpcomingEvents() {
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
        {events.map((event) => (
          <motion.div
            variants={SlideRight(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={event.id}
            className="flex flex-col sm:flex-row gap-6 border-b pb-8 last:border-none"
          >
            <div className="flex-shrink-0 w-full sm:w-24 flex justify-center sm:block">
              <div className="flex sm:flex-col items-center sm:items-stretch gap-2 sm:gap-0 text-center rounded-md shadow-sm overflow-hidden">
                <div className="bg-[#E8EFF7] text-[#092962] font-semibold py-2 px-4 sm:px-0 sm:py-2 p">
                  {event.month}
                </div>
                <div className="bg-[#092962] text-white font-bold py-3 px-6 sm:px-0 sm:py-4 p">
                  {event.date}
                </div>
                <div className="bg-[#E8EFF7] text-[#092962] py-1 px-4 sm:px-0 sm:py-1 p">
                  {event.year}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="h2 font-semibold text-[#092962] mb-2">
                {event.title}
              </h3>
              <div className="text-gray-600 p mb-3 flex flex-col gap-1">
                <p className="flex items-center gap-2 p">
                  <FaClock className="text-[#092962]" /> {event.time}
                </p>

                <p className="flex items-center gap-2 p">
                  <FaMapMarkerAlt className="text-[#092962]" /> {event.location}
                </p>
              </div>

              {/* <p className="text-gray-700 mb-3 leading-relaxed p">
                {event.description}
              </p> */}

              <Link
                to={`/events/${event.slug}`}
                className="inline-block text-[#092962] p font-semibold hover:underline transition"
              >
                RSVP Today
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
