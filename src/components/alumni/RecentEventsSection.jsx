import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const RecentEventsSection = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch("https://hquranacademy.com/api/alumniPosts")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          const formatted = data.data.map((item) => ({
            id: item.id,
            title: item.title,
            date: new Date(item.post_date).toDateString(),
            imageUrl: `https://hquranacademy.com/storage/${item.image}`,
            description: item.description,
          }));
          setEvents(formatted);
        }
      })
      .catch((err) => console.error("Alumni Posts API Error:", err));
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="px-10 py-12 bg-white font-serif">
      <h2 className="h1 font-serif text-[#0E2954] mb-8 tracking-wide">
        Read About Our Most Recent Events
      </h2>

      {/* EVENTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => openModal(event)}
            className="cursor-pointer border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="h-56 w-full object-cover"
              loading="lazy"
            />

            <div className="p-4">
              <h3 className="text-lg font-serif font-bold text-[#0E2954] mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{event.date}</p>
              <span className="text-sm font-semibold text-[#0B49BD]">
                READ MORE →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-[#0E2954]"
                onClick={closeModal}
              >
                <FaTimes className="text-2xl" />
              </button>

              {/* CONTENT */}
              <div className="p-6">
                <img
                  src={selectedEvent.imageUrl}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-md mb-6"
                />

                <h3 className="text-2xl font-serif font-bold text-[#0E2954] mb-2">
                  {selectedEvent.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {selectedEvent.date}
                </p>

                <div className="text-base text-gray-800 leading-relaxed whitespace-pre-line">
                  {selectedEvent.description}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RecentEventsSection;
