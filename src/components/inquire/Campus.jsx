import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const slides = ["/inquire/Our campus(1).JPG", "/inquire/Our campus.JPG",];

const Campus = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-12 overflow-hidden">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic text-red-700 mb-8 font-serif "
      >
        Our Campus
      </motion.h1>

      <div className="relative w-[90%] mx-auto h-[70vh] sm:h-[80vh] overflow-hidden rounded-xl shadow-lg">
        <img
          src={slides[current]}
          alt="Campus Slide"
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows  */}
        {!isMobile && (
          <div className="absolute cursor-pointer bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-gray-200 rounded-2xl p-1">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex cursor-pointer items-center justify-center rounded-full shadow-lg hover:scale-110 transition border-2 border-blue-900 text-blue-900 bg-white"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition border-2 border-red-700 text-red-600 bg-white"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>

      {/* Navigation Arrows  */}
      {isMobile && (
        <div className="mt-6 flex justify-center gap-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition border-2 border-red-700 text-red-700 bg-transparent"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition bg-red-600 text-white border-2 border-red-600"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Campus;
