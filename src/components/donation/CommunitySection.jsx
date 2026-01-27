import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const slides = [
  {
    img: "/donation/slide.jpg",
    text: `The collective effort of “advancing together with greater strength” will bring substantial benefits to our community. It will foster unity.`,
  },
  {
    img: "/donation/s1.jpg",
    text: `By working hand in hand, we can create opportunities for growth and prosperity across generations.`,
  },
  {
    img: "/donation/s3.jpg",
    text: `Our community thrives when collaboration and compassion guide every step forward.`,
  },
];

const CommunitySection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-20 bg-white gap-10 md:gap-12 font-serif overflow-hidden">
      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.h2
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 mb-12 text-[#00285E] italic"
        >
          Our Community
        </motion.h2>
        <motion.p
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-700 mt-4 p leading-relaxed max-w-md"
        >
          The collective effort of “advancing together with greater strength”
          will bring substantial benefits to our community. It will foster
          unity, create opportunities for growth and development, and lead to a
          stronger and more prosperous community overall.
        </motion.p>
        <motion.button
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 cursor-pointer bg-[#00285E] text-white px-8 py-3 rounded-md hover:bg-[#001a40] transition duration-300"
        >
          Join Us
        </motion.button>
      </div>

      {/* Right Side - Image Slider */}
      <motion.div
        variants={SlideLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full md:w-1/2 relative flex items-center justify-center"
      >
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:-left-10 bg-red-700  cursor-pointer text-white p-3 rounded-full shadow-md hover:bg-[#00285E] hover:text-white transition duration-300 z-10"
        >
          <FaChevronLeft size={18} />
        </button>

        {/* Image Container */}
        <div className="relative w-full max-w-[500px]">
          {/* Image */}
          <div className="rounded-t-xl overflow-hidden shadow-lg">
            <img
              src={slides[current].img}
              alt="Community"
              className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover transition-all duration-500"
            />
          </div>

          {/* Text Container - */}
          <div className="mt-0 w-full bg-[#00285E] text-white p p-4 md:p-5 leading-relaxed rounded-b-xl shadow-lg">
            {slides[current].text}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2  cursor-pointer md:-right-10  text-white bg-red-700 p-3 rounded-full shadow-md hover:bg-[#00285E] hover:text-white transition duration-300 z-10"
        >
          <FaChevronRight size={18} />
        </button>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
