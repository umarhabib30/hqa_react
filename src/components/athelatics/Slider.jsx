import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlideUp,
  SlideButton,
  SlideRight,
  SlideLeft,
} from "../../../utility/animation.js";

const slides = [
  {
    img: "/athelatics/athletic (6).jpeg",
    title: "HQA Boys Basketball – Regional Champions 2024",
  },
  {
    img: "/athelatics/athletic (27).jpeg",
    title: "Middle School Soccer – Semi-Finalists in Inter-Islamic Schools Cup",
  },
  {
    img: "/athelatics/athletic (12).jpeg",
    title: "Students awarded MVP honors for leadership  & sportsmanship",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="font-serif pt-14 px-4 sm:px-10 pb-50 md:pb-24 relative overflow-hidden">
      <div className="w-full text-center mb-8">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-red-700 mb-4"
        >
          Achievements
        </motion.h1>

        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center italic max-w-5xl mx-auto text-gray-700"
        >
          We are proud of our students' accomplishments both on and off the
          field. Recent highlights include:
        </motion.p>
      </div>

      {/* Main Slider */}
      <motion.div
        variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full"
      >
        {/* Image */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current].img}
              src={slides[current].img}
              alt="Slider"
              className="w-full h-[18rem] sm:h-[28rem] md:h-[34rem] lg:h-[40rem] object-cover rounded-lg"
              variants={SlideRight(0)}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />
          </AnimatePresence>
        </div>

        <div className="absolute top-[85%] left-1/2 -translate-x-1/2 md:top-auto md:translate-x-0 md:-bottom-22 md:left-12 w-full max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].title}
                variants={SlideLeft(0.3)}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className="w-[90%] sm:w-[70%] md:w-[45%] lg:w-[30%] bg-[#00285E] shadow-lg rounded-lg p-6 md:p-8"
              >
                <div
                  className="text-white italic font-semibold mb-2 text-lg sm:text-xl md:text-4xl leading-snug"
                  dangerouslySetInnerHTML={{ __html: slides[current].title }}
                ></div>
              </motion.div>
            </AnimatePresence>

            <div className="flex space-x-4 md:space-x-0 md:space-y-4 md:-mb-58 md:gap-2">
              <motion.button
                onClick={prevSlide}
                variants={SlideButton(0.3)}
                initial="hidden"
                animate="visible"
                className="bg-white border-2 border-[#CF3528] cursor-pointer rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
              >
                <FaArrowLeft className="text-[#CF3528] text-lg" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                variants={SlideButton(0.4)}
                initial="hidden"
                animate="visible"
                className="bg-[#CF3528] cursor-pointer text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:bg-[#b52d20] transition-colors"
              >
                <FaArrowRight className="text-lg" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Slider;
