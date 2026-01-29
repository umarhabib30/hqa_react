import React, { useState, useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const ptoMembers = [
  {
    img: "/pto/team/natasha.jpg",
    name: "Natasha Osmanbhoy",
    role: "President",
    description: "Leading with vision and heart.",
  },
  {
    img: "/pto/team/nasuha.jpg",
    name: "Nasuha Marican",
    role: "Vice President",
    description: "Creating events that bring smiles and stories.",
  },
  {
    img: "/pto/team/regina.jpg",
    name: "Regina Khan",
    role: "Secretary",
    description: "Ensuring communications are clear and organized.",
  },
  {
    img: "/pto/team/safia.jpg",
    name: "Safia Baig",
    role: "Treasurer",
    description: "Managing finances responsibly to support students.",
  },
  
  {
    img: "/pto/team/member1.jpg",
    name: "Member Name 1",
    role: "Member",
    description: "Supporting PTO activities and school events.",
  },
  {
    img: "/pto/team/member2.jpg",
    name: "Member Name 2",
    role: "Member",
    description: "Helping build a stronger school community.",
  },
];

export default function PTOMembersSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const limit = isMobile ? 4 : 8;
  const visibleMembers = expanded ? ptoMembers : ptoMembers.slice(0, limit);

  const openModal = (person) => {
    setSelectedPerson(person);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPerson(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="w-full px-5 md:px-10 py-12 font-serif bg-[#F9FAFB]">
      <section className="rounded-lg p-6 md:p-10 border-2 border-gray-200 shadow-xl bg-white">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#00285E] mb-4"
        >
          PTO Members
        </motion.h1>

        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 text-center mb-10 max-w-3xl mx-auto"
        >
          Meet the parents and teachers who serve our community with care and
          purpose.
        </motion.p>

        {/* Cards Grid (same style as StaffSection) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer gap-10">
          {visibleMembers.map((person, index) => (
            <div key={index} className="relative">
              <div className="relative bg-white rounded-md overflow-hidden shadow-lg group border">
                {/* image */}
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#00285E]">
                    {person.name}
                  </h3>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 italic">{person.role}</p>

                    <div
                      onClick={() => openModal(person)}
                      className="w-8 h-8 bg-[#CF3528] text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-[#b42d22] transition-colors"
                    >
                      <FaPlus size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        {ptoMembers.length > limit && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setExpanded((p) => !p)}
              className="bg-[#CF3528] text-white px-8 py-2 rounded-md hover:bg-[#b42d22] transition-all font-semibold shadow-md"
            >
              {expanded ? "Show Less" : "More PTO Members"}
            </button>
          </div>
        )}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-[200] flex items-center justify-center px-4"
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
              className="bg-white rounded-lg max-w-md w-full relative shadow-2xl overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-[#CF3528] z-10 p-2"
              >
                <FaTimes size={20} />
              </button>

              <div className="p-8 text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={selectedPerson.img}
                    alt={selectedPerson.name}
                    className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#CF3528] shadow-md"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#00285E] mb-1">
                  {selectedPerson.name}
                </h3>
                <p className="text-lg italic text-[#CF3528] mb-6">
                  {selectedPerson.role}
                </p>

                <div className="h-[1px] bg-gray-200 w-2/3 mx-auto mb-6" />

                <p className="text-gray-700 leading-relaxed text-base">
                  {selectedPerson.description ||
                    "This member supports PTO activities and school programs."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
