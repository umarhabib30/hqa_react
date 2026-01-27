import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const Slider = ({ heading, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  const updateVisibleSlides = () => {
    if (window.innerWidth < 640) {
      setVisibleSlides(2);
      setIsMobile(true);
    } else if (window.innerWidth < 1024) {
      setVisibleSlides(2);
      setIsMobile(false);
    } else {
      setVisibleSlides(4);
      setIsMobile(false);
    }
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const maxIndex = Math.max(0, images.length - visibleSlides);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - visibleSlides));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + visibleSlides));
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  return (
    <section className="py-12 font-serif text-center px-4 sm:px-10 overflow-hidden">
      <motion.h1
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 text-red-700 mb-6 italic"
      >
        {heading}
      </motion.h1>

      <div className="relative flex items-center justify-center w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
          }}
        >
          {images.map((img, index) => {
            const tiltClass =
              index % 4 === 0
                ? "rotate-[2deg]"
                : index % 4 === 1
                ? "rotate-[-2deg]"
                : index % 4 === 2
                ? "rotate-[2deg]"
                : "rotate-[-2deg]";

            return (
              <div
                key={index}
                style={{ minWidth: `${100 / visibleSlides}%` }}
                className="flex justify-center items-center"
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className={`w-full h-[360px] sm:h-[300px] lg:h-[420px] object-cover rounded-2xl 
                    transition-transform duration-500 mb-12 mt-12 p-1 ${tiltClass} origin-bottom`}
                />
              </div>
            );
          })}
        </div>

        <div
          className={`absolute -bottom-0 sm:bottom-12 flex gap-4 rounded-2xl p-1 
            ${isMobile ? "justify-center w-full" : "bg-gray-200"}`}
        >
          <button
            onClick={prevSlide}
            disabled={isPrevDisabled}
            className={`w-10 h-10 flex items-center cursor-pointer justify-center rounded-full shadow-lg hover:scale-110 transition
              ${
                isMobile
                  ? `border-2 ${
                      isPrevDisabled
                        ? "border-gray-400 text-gray-400 cursor-not-allowed"
                        : "border-red-700 text-red-700"
                    } bg-transparent`
                  : `border-2 ${
                      isPrevDisabled
                        ? "border-gray-400 text-gray-400 cursor-not-allowed"
                        : "border-blue-900 text-blue-900"
                    }`
              } ${isPrevDisabled ? "opacity-50 hover:scale-100" : ""}`}
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            disabled={isNextDisabled}
            className={`w-10 h-10 flex items-center cursor-pointer justify-center rounded-full shadow-lg hover:scale-110 transition
              ${
                isMobile
                  ? `border-2 ${
                      isNextDisabled
                        ? "border-gray-400 bg-gray-400 cursor-not-allowed"
                        : "border-red-600 bg-red-600"
                    } text-white`
                  : `border-2 ${
                      isNextDisabled
                        ? "border-gray-400 text-gray-400 cursor-not-allowed"
                        : "border-red-700 text-red-600"
                    }`
              } ${isNextDisabled ? "opacity-50 hover:scale-100" : ""}`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
