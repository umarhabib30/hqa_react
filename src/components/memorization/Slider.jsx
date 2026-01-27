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
    img: "/memorizaation/slider.jpg",
    title: "Comprehension Before Memorization",
    desc: "Before a single verse is committed to memory, students must first understand its meaning. This builds a solid spiritual and intellectual foundation.",
  },
  {
    img: "/memorizaation/againgement.jpeg",
    title: "Faith & Knowledge",
    desc: "Our curriculum blends Islamic values with academic excellence, empowering students with a strong foundation.",
  },
  {
    img: "/memorizaation/community.jpeg",
    title: "Community Engagement",
    desc: "We cultivate leaders who serve with compassion, integrity, and responsibility in their communities.",
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
    <section className="font-serif pt-14 px-10  pb-55 md:pb-24 relative overflow-hidden">
      <div className="w-full text-center mb-10">
        <motion.h2
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-[#00285E]"
        >
          What Sets Our Program Apart
        </motion.h2>
      </div>

      <motion.div
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[current].img}
            src={slides[current].img}
            alt="HQA Building"
            className="w-full h-[20rem] sm:h-[28rem] md:h-[34rem] lg:h-[40rem] object-cover rounded-lg"
            variants={SlideRight(0)}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </AnimatePresence>

        {/* Card Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            variants={SlideLeft(0.3)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="
      absolute 
      top-[35%] pb-62 left-1/2 -translate-x-1/2
      md:top-auto md:left-auto md:translate-x-0 md:-bottom-22 md:right-6
      w-[99%] sm:w-[70%] md:w-[45%] lg:w-[55%]
      bg-[#E3F1FF] shadow-lg rounded-lg p-8 md:p-8
    "
          >
            <h4 className="text-[#00285E] italic font-semibold mb-2 text-xl sm:text-xl md:text-3xl">
              {slides[current].title}
            </h4>
            <p className="text-gray-800 p">{slides[current].desc}</p>

            <motion.button
              onClick={prevSlide}
              variants={SlideButton(0.3)}
              initial="hidden"
              animate="visible"
              className="absolute top-1/2 -translate-y-1/2 cursor-pointer -left-4 bg-white border-2 border-[#CF3528] rounded-full h-10 w-10 flex items-center justify-center shadow-md"
            >
              <FaArrowLeft className="text-[#CF3528]" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              variants={SlideButton(0.4)}
              initial="hidden"
              animate="visible"
              className="absolute top-1/2 -translate-y-1/2 cursor-pointer -right-4 bg-[#CF3528] text-white rounded-full h-10 w-10 flex items-center justify-center shadow-md"
            >
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Slider;
