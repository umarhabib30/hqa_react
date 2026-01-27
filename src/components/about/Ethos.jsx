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
    img: "/about/Holistic Development.jpg",
    title: "Holistic Development",
    desc: "We nurture the intellectual, emotional, and spiritual aspects of each student—preparing them to excel in every facet of life.",
  },
  {
    img: "/about/Commitment to Excellence.jpg",
    title: " Commitment to Excellence",
    desc: "We challenge our students to think critically, act with integrity, and strive for their highest potential",
  },
  {
    img: "/about/Empowerment Through Faith.jpg",
    title: "Empowerment Through Faith",
    desc: "Rooted in Quranic wisdom, our programs cultivate strong, faithful leaders with confidence and purpose.",
  },
  {
    img: "/about/Community and Collaboration.jpeg",
    title: "Community and Collaboration",
    desc: "We foster a connected, inclusive atmosphere where students, teachers, alumni, and families feel seen, heard, and valued",
  },
];

const Ethos = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="flex flex-col lg:flex-row font-serif items-center justify-between gap-6 py-14 px-2 md:px-10 relative">
      {/* Mobile Heading  */}
      <div className="w-full lg:hidden flex flex-col items-center mb-4 md:mb-6">
        <motion.h1
          className="text-[30px] sm:text-3xl md:text-4xl font-serif italic mb-2 md:mb-3 text-center"
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-[#CF3528] inline-block"
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            The HQA{" "}
          </motion.span>
          <motion.span
            className="text-blue-900 inline-block"
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ethos
          </motion.span>
        </motion.h1>

        <motion.h3
          className="italic text-gray-800 text-[18px] "
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Guiding Principles from <br /> Classroom to Community
        </motion.h3>
      </div>

      {/* Left Image */}
      <motion.div
        variants={SlideRight(1.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:w-[50%] relative"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[current].img}
            src={slides[current].img}
            alt="HQA Building"
            className="w-full h-60 sm:h-96 md:h-[28rem] lg:h-[36rem] object-cover rounded-xl"
            variants={SlideRight(0)}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </AnimatePresence>

        {/* Card  */}
        <motion.div
          key={slides[current].title}
          variants={SlideLeft(0.2)}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="
    bg-white rounded-lg 
    p-2 sm:p-6 md:p-14 
    w-[90%] sm:w-[80%] md:w-[75%] lg:w-[100%] 
    relative
    -mt-4   /* only mobile: card overlaps bottom of img */
    sm:mt-0 /* remove overlap on tablet/desktop */
    sm:absolute sm:left-1/2 sm:-translate-x-1/2 
    sm:bottom-[-1.5rem] md:bottom-4 left-6
    lg:left-auto lg:translate-x-0 lg:bottom-4 lg:-right-140
    shadow-[0_0_15px_rgba(0,0,0,0.4)]
  "
        >
          <AnimatePresence mode="wait">
            <div>
              <h4 className="text-[#CF3528] font-serif italic font-semibold mb-2 h2 ">
                {slides[current].title}
              </h4>
              <p className="text-gray-800 p leading-relaxed mb-4 sm:mb-0">
                {slides[current].desc}
              </p>
            </div>
          </AnimatePresence>

          {/* Navigation  - Mobile */}
          <div className="flex justify-center sm:hidden mt-4 space-x-4">
            <motion.button
              onClick={prevSlide}
              variants={SlideButton(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-white border-2 cursor-pointer border-[#CF3528] rounded-full h-8 w-8 flex items-center justify-center shadow-md"
            >
              <FaArrowLeft className="text-[#CF3528] text-xs" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              variants={SlideButton(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-[#CF3528]  cursor-pointer text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md"
            >
              <FaArrowRight className="text-xs" />
            </motion.button>
          </div>

          {/* Desktop Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            variants={SlideButton(0.3)}
            initial="hidden"
            animate="visible"
            className="absolute -left-3 md:-left-4 top-1/2 transform -translate-y-1/2  cursor-pointer bg-white border-2 border-[#CF3528] rounded-full h-7 w-7 md:h-8 md:w-8 items-center justify-center shadow-md hidden sm:flex"
          >
            <FaArrowLeft className="text-[#CF3528] text-xs md:text-sm" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            variants={SlideButton(0.4)}
            initial="hidden"
            animate="visible"
            className="absolute  cursor-pointer -right-3 md:-right-4 top-1/2 transform -translate-y-1/2 bg-[#CF3528] text-white rounded-full h-7 w-7 md:h-8 md:w-8 items-center justify-center shadow-md hidden sm:flex"
          >
            <FaArrowRight className="text-xs md:text-sm" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Content  - Desktop Only */}
      <div className="w-full lg:w-[50%] flex-col  mb-90 items-start hidden lg:flex">
        {/* Title */}
        <motion.h1
          className="h1 font-serif italic mb-3 text-left"
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="text-[#CF3528] inline-block"
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            The HQA&nbsp;
          </motion.span>
          <motion.span
            className="text-blue-700 inline-block"
            variants={SlideUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ethos
          </motion.span>
        </motion.h1>

        <motion.h3
          className="italic text-gray-800 h2 text-left"
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Guiding Principles from <br /> Classroom to Community
        </motion.h3>
      </div>
    </section>
  );
};

export default Ethos;
