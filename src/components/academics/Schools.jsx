import { motion } from "framer-motion";
import { SlideRight } from "../../../utility/animation";

const School = ({ selectedLevel, setSelectedLevel }) => {
  const levels = ["Pre School", "Elementary", "Middle School", "High School"];

  return (
    <motion.div
      variants={SlideRight(0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-4 px-4 sm:px-10 py-8 sm:py-12 sm:flex sm:flex-row"
    >
      {levels.map((level, index) => (
        <button
          key={index}
          onClick={() => setSelectedLevel(level)}
          className={`px-4 py-3 sm:px-6 sm:py-2 rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base transition duration-300
            ${
              selectedLevel === level
                ? "bg-[#b02b20] text-white"
                : "bg-[#00285E] text-white hover:bg-[#b02b20]"
            }`}
        >
          {level}
        </button>
      ))}
    </motion.div>
  );
};

export default School;
