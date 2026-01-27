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
    img: "/pre/pre (8).jpg",
    title: "Montessori with a Mission",
    desc: "Our certified teachers follow the American Montessori Society (AMS) model—giving your child the freedom to explore, ask questions, and build real-world skills through hands-on discovery.",
  },
  {
    img: "/pre/pre (10).jpg",
    title: "Faith at the Foundation",
    desc: "Your child will be immersed in a warm Islamic setting—reciting duas, learning Prophet stories, and practicing compassion, empathy, and gratitude every day.",
  },
  {
    img: "/pre/pre (6).jpg",
    title: "Individualized Attention",
    desc: "Every child is different. That’s why we guide them at their own pace—honoring their strengths, understanding their challenges, and helping them blossom.",
  },
  {
    img: "/pre/pre (1).jpg",
    title: "Academically Aligned",
    desc: "Our curriculum seamlessly transitions students into 1st grade, meeting and exceeding Texas academic standards. HQA also offers Montessori Kindergarten and a Traditional Kindergarten pathway.",
  },
  {
    img: "/pre/pre (5).jpg",
    title: "Confidence Through Independence",
    desc: "From the smallest classroom tasks to the biggest 'aha' moments, our Montessori setup empowers children to become self-motivated, curious, and confident learners.",
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
    <div className=" pb-[260px] md:pb-0 py-12 px-4 sm:px-10 overflow-hidden">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic text-[#00285E] mb-8 font-serif"
      >
        Why Parents Choose{" "}
        <span className="text-[#CF3528]">HQA Pre-School</span>
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
        className="flex flex-col lg:flex-row font-serif items-center justify-between gap-6 py-12 px-2 sm:px-10 relative"
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
              className="w-full h-92 sm:h-96 md:h-[30rem] lg:h-[30rem] object-cover rounded-xl"
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
            className="absolute bottom-[-20rem] sm:bottom-[-2rem] left-1/2 -translate-x-1/2 
             bg-[#012974] shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
             w-[95%] sm:w-[85%] md:w-[75%] 
             lg:hidden"
          >
            <h4 className="text-[#FAF1C4] font-serif italic font-semibold mb-2 h2">
              {slides[current].title}
            </h4>
            <p className="text-white p">{slides[current].desc}</p>

            {/* Navigation Buttons - Mobile */}
            <div className="flex justify-center mt-4 space-x-4 mb-16">
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

        {/* Card for Desktop on Right */}
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
