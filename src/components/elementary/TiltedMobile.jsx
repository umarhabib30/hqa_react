import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation.js";
const requirements = [
  "Memorize and recite Qur’an with proper Tajweed",
  "Explore Islamic history and seerah",
  "Engage in daily duas and moral stories",
  "Practice adab (manners), akhlaq (character), and salaah (prayer routines)",
];

const TiltedMobile = () => {
  return (
    <section className="py-12 px-6 sm:px-10 font-serif overflow-hidden">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic text-center mb-6 text-[#CF3528]"
      >
        Where We’re Headed
      </motion.h1>
      <motion.p
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-lg sm:text-xl italic mb-2 text-gray-800"
      >
        Innovation, Expansion, Unity
      </motion.p>
      <motion.p
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-lg sm:text-xl italic mb-10 text-gray-800"
      >
        As we move forward, we stay rooted in our faith and ready for the
        future:
      </motion.p>

      {/* Two-column layout */}
      <motion.div
        variants={SlideRight(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        {/* Left Side  */}
        <div className="flex flex-col space-y-5">
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex items-center p-5 sm:p-6 rounded-lg shadow-black shadow-md w-full transition-all duration-300 ${
                  isDark
                    ? "bg-[#00285E] text-white"
                    : "bg-[#C8E1F8] text-[#00285E]"
                }`}
              >
                <span
                  className={`p mr-4 font-semibold ${
                    isDark ? "text-white" : "text-[#00285E]"
                  }`}
                >
                  {index + 1}
                </span>
                <p className="p">{req}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default TiltedMobile;
