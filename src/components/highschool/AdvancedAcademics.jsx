import {  SlideRight, SlideUp } from "../../../utility/animation.js";
import { motion } from "framer-motion";
const AdvancedAcademics = () => {
  const cards = [
    { img: "/pre/c1.jpg", title: "Honors Courses" },
    { img: "/pre/c2.jpg", title: "Dual-Credit College Courses" },
    { img: "/pre/c3.jpg", title: "Pre-AP and AP Courses & Exams" },
    {
      img: "/pre/c1.jpg",
      title: "Electives in Technology, Leadership, and Islamic Studies",
    },
  ];

  const subjects = [
    "Algebra I",
    "English I",
    "English II",
    "Algebra II",
    "U.S History",
  ];

  return (
    <div className="font-serif px-10 py-12">
      <div className="text-center items-center justify-center">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-[#00285e]"
        >
          Advanced Courses <span className="text-red-700">& Enrichment</span>
        </motion.h1>
      </div>

      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center mt-10 px-6 md:px-20"
      >
        <p className="p max-w-4xl italic text-gray-800 text-center">
          HQA students are given opportunities to excel beyond standard
          coursework through a range of advanced academic options:
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 w-full bg-opacity-50 text-white p-3 text-center text-lg font-medium">
              {card.title}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Second Paragraph */}
      <motion.div
        variants={SlideUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center mt-12 px-6 md:px-20"
      >
        <p className="h2 max-w-6xl italic font-medium text-red-700 text-center">
          Students also take State of Texas STAAR End-of-Course (EOC)
          assessments in:
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        variants={SlideRight(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-8 "
      >
        {subjects.map((subject, index) => (
          <button
            key={index}
            className="bg-[#00285e] text-white py-4 text-lg  rounded-lg shadow-lg hover:bg-red-700 transition duration-300 w-full"
          >
            {subject}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default AdvancedAcademics;
