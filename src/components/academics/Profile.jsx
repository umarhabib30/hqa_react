import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlideUp,
  SlideLeft,
  SlideRight,
  SlideButton,
} from "../../../utility/animation.js";

const slides = [
  {
    img: "/academics/profile.jpg",
    title: "Grounded in Qur’anic Values",
    desc: "They embody the teachings of the Qur’an and Sunnah, using Islamic principles to guide their actions, decisions, and relationships.",
  },
  {
    img: "/about/campus.jpg",
    title: " Faith & Knowledge",
    desc: "Our curriculum blends Islamic values with academic excellence, empowering students with a strong foundation.",
  },
  {
    img: "/about/class.jpg",
    title: " Community Engagement",
    desc: "We cultivate leaders who serve with compassion, integrity, and responsibility in their communities.",
  },
];

const Profile = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="py-12 px-4 sm:px-10">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic text-[#00285E] mb-8 font-serif"
      >
        Profile of <span className="text-[#CF3528]">Our Graduates</span>
      </motion.h1>
      <motion.p
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto px-4 text-gray-800 p"
      >
        Our students leave Houston Quran Academy equipped with the faith,
        knowledge, and character to thrive in this world and the next. Here's
        what defines an HQA graduate:
      </motion.p>

      <motion.section
        variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row font-serif items-center justify-between gap-6 py-12 px-4 sm:px-10 relative"
      >
        {/* Image on Left */}
        <div className="w-full lg:w-[55%] relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current].img}
              src={slides[current].img}
              alt="HQA Building"
              variants={SlideRight(0)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full h-72 sm:h-96 md:h-[30rem] lg:h-[30rem] object-cover rounded-xl"
            />
          </AnimatePresence>

          {/* Card Overlay for Mobile */}
          <motion.div
            key={slides[current].title}
            variants={SlideLeft(0.3)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute bottom-[-10rem] sm:bottom-[-2rem] left-1/2 -translate-x-1/2 
             bg-[#012974] shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
             w-[90%] sm:w-[85%] md:w-[75%] 
             lg:hidden"
          >
            <h4 className="text-[#FAF1C4] font-serif italic font-semibold mb-2 h2">
              {slides[current].title}
            </h4>
            <p className="text-white p">{slides[current].desc}</p>

            {/* Navigation Buttons - Mobile */}
            <div className="flex justify-center mt-4 space-x-4">
              <motion.button
                onClick={prevSlide}
                variants={SlideButton(0.3)}
                initial="hidden"
                animate="visible"
                className="bg-white border-2 border-[#CF3528] rounded-full h-8 w-8 flex items-center justify-center shadow-md"
              >
                <FaArrowLeft className="text-[#CF3528] text-xs" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                variants={SlideButton(0.4)}
                initial="hidden"
                animate="visible"
                className="bg-[#CF3528] text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md"
              >
                <FaArrowRight className="text-xs" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Card for Desktop */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            variants={SlideLeft(0)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="hidden lg:block lg:w-[45%] bg-[#012974] -left-12 shadow-lg rounded-lg p-6 md:p-10 relative translate-y-22"
          >
            <h4 className="text-[#FAF1C4] font-serif italic font-semibold mb-2 text-2xl">
              {slides[current].title}
            </h4>
            <p className="text-white p">{slides[current].desc}</p>

            {/* Desktop Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              variants={SlideButton(0.3)}
              initial="hidden"
              animate="visible"
              className="absolute -left-3 md:-left-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white border-2 border-[#CF3528] rounded-full h-8 w-8 flex items-center justify-center shadow-md"
            >
              <FaArrowLeft className="text-[#CF3528] text-sm" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              variants={SlideButton(0.4)}
              initial="hidden"
              animate="visible"
              className="absolute -right-3 md:-right-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-[#CF3528] text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md"
            >
              <FaArrowRight className="text-sm" />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </motion.section>
    </div>
  );
};

export default Profile;
