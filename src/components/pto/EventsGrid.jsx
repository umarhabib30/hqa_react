import React from "react";
import { motion } from "framer-motion";

const events = [
  { title: "Muffins with Moms", season: "Spring & Fall", icon: "/pto/1.png" },
  { title: "Bagels with Baba", season: "Winter", icon: "/pto/2.png" },
  { title: "Family Picnic", season: "Summer", icon: "/pto/3.png" },
  { title: "Family Camp", season: "Fall", icon: "/pto/4.png" },
  { title: "Bake Sales", season: "Year-round", icon: "/pto/5.png" },
  { title: "Legacy Iftar", season: "Ramadan", icon: "/pto/6.png" },
];

export default function EventsGrid() {
  return (
    <div className="w-full flex justify-center px-10 py-16 font-serif">
      <div className="w-full max-w-9xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="bg-[#F9FAFB] rounded-xl shadow-lg cursor-pointer p-5 flex flex-col gap-3 transition hover:shadow-md"
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center`}
            >
              <img
                src={event.icon}
                alt={event.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            <h3 className="p font-semibold text-gray-800">{event.title}</h3>

            <p className="p text-gray-500">{event.season}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
