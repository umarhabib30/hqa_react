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
    img: "/about/ethos.jpg",
    title: "STEM Club:",
    desc: "Ignite curiosity through hands-on science, technology, engineering, and math exploration.",
  },
  {
    img: "/about/campus.jpg",
    title: "Art & Calligraphy",
    desc: "Unleash creativity with immersive art sessions and elegant calligraphy practice.",
  },
  {
    img: "/about/class.jpg",
    title: "Debate and Public Speaking",
    desc: "Build confidence and critical thinking through dynamic debate and speaking workshops.",
  },
  {
    img: "/about/ethos.jpg",
    title: "Coding & Robotics:",
    desc: " Learn to code, create robots, and solve real-world problems through innovation.",
  },
  {
    img: "/about/campus.jpg",
    title: "Sports Teams (Basketball, Soccer, and more):",
    desc: " Develop teamwork and athletic skills with our competitive and inclusive sports programs.",
  },
  {
    img: "/about/class.jpg",
    title: "Quran Memorization & Tajweed Circles:",
    desc: " Strengthen spiritual growth through guided Quran memorization and mastery of Tajweed.",
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
    <section className="font-serif pt-14 px-10  pb-74 md:pb-24 relative">
      <div className="w-full text-center mb-10">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-[#00285E] mb-4"
        >
          Clubs & Extracurricular <br /> Activities
        </motion.h1>
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p italic text-gray-800 max-w-6xl mx-auto"
        >
          We strongly encourage our students to explore their interests and
          talents outside the classroom. Our enriching extracurriculars offer
          diverse opportunities for growth and skill development:
        </motion.p>
      </div>

      {/* Image Full Width */}
      <motion.div
        variants={SlideRight(0.7)}
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
            className="w-full h-[18rem] sm:h-[28rem] md:h-[34rem] lg:h-[40rem] object-cover rounded-lg"
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
            variants={SlideLeft(0.2)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="
      absolute 
      top-[85%] left-1/2 -translate-x-1/2 bg-white
      md:top-auto md:left-auto md:translate-x-0  md:bottom-4 md:right-160 
      w-[90%] sm:w-[70%] md:w-[45%] lg:w-[45%]
      shadow-lg rounded-lg p-10 md:p-8
    "
          >
            <h4 className="text-[#00285E] h2 italic font-semibold mb-2">
              {slides[current].title}
            </h4>
            <p className="text-gray-800 p">{slides[current].desc}</p>

            {/* Left Arrow */}
            <motion.button
              onClick={prevSlide}
              variants={SlideButton(0.3)}
              initial="hidden"
              animate="visible"
              className="absolute top-1/2 -translate-y-1/2 -left-4 cursor-pointer bg-white border-2 border-[#CF3528] rounded-full h-10 w-10 flex items-center justify-center shadow-md"
            >
              <FaArrowLeft className="text-[#CF3528]" />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              onClick={nextSlide}
              variants={SlideButton(0.4)}
              initial="hidden"
              animate="visible"
              className="absolute top-1/2 -translate-y-1/2 -right-4 cursor-pointer bg-[#CF3528] text-white rounded-full h-10 w-10 flex items-center justify-center shadow-md"
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
