import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation.js";

const requirements = [
  "Memorize and recite Qur’an with proper Tajweed",
  "Explore Islamic history and seerah",
  "Engage in daily duas and moral stories",
  "Practice adab (manners), akhlaq (character), and salaah (prayer routines)",
];

const Tilted = () => {
  return (
    <section className="py-12 px-10 bg-[#FFFDF5] font-serif overflow-hidden">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic text-center mb-6 text-[#CF3528]"
      >
        <span className="text-[#00285E]">Integrated Islamic</span> Learning{" "}
      </motion.h1>
      <motion.p
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center p  md:text-2xl max-w-5xl mx-auto mb-10 text-gray-700"
      >
        Faith and academics go hand in hand at HQA. Our Elementary students:{" "}
      </motion.p>

      <div className="w-full grid md:grid-cols-2 items-stretch gap-6">
        {/* Left Side  */}
        <motion.div
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col space-y-4 h-full"
        >
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0;
            return (
              <div
                key={index}
                style={{
                  width: `calc(100% - ${index * 2}%)`,
                }}
                className={`flex items-center p-6 clip-card transition-all duration-300
                  ${
                    isDark
                      ? "bg-[#00285E] text-white"
                      : "bg-[#BCDDFC] text-[#00285E]"
                  }
                `}
              >
                <p className="p" dangerouslySetInnerHTML={{ __html: req }} />
              </div>
            );
          })}
        </motion.div>

        {/* Right Side  */}
        <motion.div
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative shadow-lg overflow-hidden w-full h-full clip-left"
        >
          <img
            src="/elementary/element (1).jpg"
            alt="Library"
            className="w-full h-[400px] md:h-[420px] object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        variants={SlideUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-[#CF3528] h2  italic mb-2">Goal:</p>
        <p className="text-gray-800 h2  italic max-w-8xl mx-auto leading-relaxed">
          To instill taqwa, empathy, and leadership from a young age.
        </p>
      </motion.div>
    </section>
  );
};

export default Tilted;
