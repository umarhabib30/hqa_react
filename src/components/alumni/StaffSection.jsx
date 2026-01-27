import React, { useState, useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const StaffSection = () => {
  const [alumni, setAlumni] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetch("https://hquranacademy.com/api/alumniHuston")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          const formatted = data.data.map((item) => ({
            id: item.id,
            name: item.name,
            role: item.profession,
            description: item.description,
            img: `https://hquranacademy.com/storage/${item.image}`,
          }));
          setAlumni(formatted);
        }
      })
      .catch((err) => console.error("Alumni API Error:", err));
  }, []);

  const visibleAlumni = expanded ? alumni : alumni.slice(0, 8);

  const openModal = (person) => {
    setSelectedPerson(person);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPerson(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="w-full px-5 md:px-10 bg-[#FFFDF2] py-12 font-serif">
      <section className="rounded-lg p-6 md:p-10">
        <h2 className="h1 italic text-center text-[#00285E] mb-6">
          Houston Quran Academy <span className="text-red-700">Alumni</span>
        </h2>

        <p className="text-gray-700 p text-center mb-10 max-w-4xl mx-auto">
          Meet our alumni who have graduated and are achieving excellence around
          the world.
        </p>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {visibleAlumni.map((person) => (
            <div key={person.id} className="relative group">
              <div className="absolute -top-3 -left-3 w-full h-full bg-[#CF3528] rounded-md z-0"></div>

              <div className="relative z-10 bg-white rounded-md shadow-lg overflow-hidden">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-60 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{person.name}</h3>

                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-600 italic">
                      {person.role}
                    </p>

                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(person);
                      }}
                      className="w-8 h-8 cursor-pointer bg-[#CF3528] text-white flex items-center justify-center rounded-full hover:bg-[#b42d22]"
                    >
                      <FaPlus size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More / Less */}
        {alumni.length > 8 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setExpanded(!expanded)}
              className="bg-[#CF3528] text-white px-6 py-2 rounded-md hover:bg-[#b42d22]"
            >
              {expanded ? "Show Less" : "More Alumni"}
            </button>
          </div>
        )}
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-[#CF3528]"
              >
                <FaTimes size={20} />
              </button>

              <div className="p-6 text-center">
                <img
                  src={selectedPerson.img}
                  alt={selectedPerson.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />

                <h3 className="h2 font-bold text-[#00285E] mb-1">
                  {selectedPerson.name}
                </h3>

                <p className="p text-gray-500 italic mb-4">
                  {selectedPerson.role}
                </p>

                <p className="text-gray-700 p leading-relaxed">
                  {selectedPerson.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StaffSection;
