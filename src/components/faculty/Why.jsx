import { SlideUp } from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const slides = [
  {
    img: "/faculty/why.jpg",
    text: "Collaborative and Faith-Centered Culture",
  },
  {
    img: "/faculty/c3.jpg",
    text: "Open-Door Communication with Parents",
  },
  {
    img: "/faculty/hero.jpg",
    text: "High Retention and Long-Term Commitment",
  },
  {
    img: "/faculty/c1.jpg",
    text: "Deep Respect for Every Student’s Journey",
  },
];

const Why = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col py-10 pb-20 md:pb-0 items-center font-serif overflow-hidden"
    >
      <motion.h1
        variants={SlideUp(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="h1 italic text-center mb-8"
      >
        <span className="text-[#00285E]">Why Our Team Stands Out</span>
      </motion.h1>

      <div className="relative w-full flex justify-center">
        <img
          src={slides[current].img}
          alt="HQA Uniform"
          className="w-[100%] object-cover h-auto rounded-lg"
        />

        <div
          className="absolute -bottom-14 md:bottom-3 left-1/2 transform -translate-x-1/2 
                        max-w-4xl w-[90%] bg-[#00285E] text-white 
                        py-2 px-3 md:py-4 md:px-6 rounded-lg 
                        flex items-center justify-between text-sm md:text-base"
        >
          <div
            className="flex items-center gap-1 md:gap-2 h-full cursor-pointer"
            onClick={handlePrev}
          >
            <FaPlay className="text-white md:rotate-180 text-xs md:text-base" />
            <div className="w-[1px] bg-white h-6 md:h-12"></div>
          </div>

          <p className="text-center flex-1 px-2">{slides[current].text}</p>

          <div
            className="flex items-center gap-1 md:gap-2 h-full cursor-pointer"
            onClick={handleNext}
          >
            <div className="w-[1px] bg-white h-6 md:h-12"></div>
            <FaPlay className="text-white md:rotate-0 text-xs md:text-base" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
