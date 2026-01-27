import React, { useState } from "react";
import { SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const speakers = [
  {
    img: "/donation/s1.jpg",
    name: "Dr. Aisha Khan",
    role: "Motivational Speaker",
  },
  { img: "/donation/s2.jpg", name: "Imran Malik", role: "Tech Innovator" },
  { img: "/donation/s3.jpg", name: "Sara Ahmed", role: "Entrepreneur" },
  { img: "/donation/c3.jpg", name: "Ali Raza", role: "Community Leader" },
  { img: "/donation/c2.jpg", name: "Fatima Noor", role: "Education Advocate" },
  { img: "/donation/c1.jpg", name: "Usman Tariq", role: "Startup Mentor" },
];

const SpeakersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % speakers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const getVisibleSpeakers = () => {
    const prev = (activeIndex - 1 + speakers.length) % speakers.length;
    const next = (activeIndex + 1) % speakers.length;
    return [speakers[prev], speakers[activeIndex], speakers[next]];
  };

  const visibleSpeakers = getVisibleSpeakers();

  return (
    <section className="relative py-16 sm:py-20 font-serif overflow-hidden">
      {/* Background & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
        style={{ backgroundImage: "url('/donation/speakerbg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-blue-900/50"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 text-white mb-10 sm:mb-16"
        >
          Our Speakers
        </motion.h1>

        <motion.div
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center relative"
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:left-0 md:-left-10 top-1/2 -translate-y-1/2 bg-white text-red-700 hover:bg-white/40 cursor-pointer p-3 rounded-full z-20 transition"
          >
            <FaArrowLeft size={18} />
          </button>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 w-full transition-all duration-500">
            {visibleSpeakers.map((speaker, index) => (
              <div
                key={speaker.name}
                className={`relative w-full max-w-[280px] sm:max-w-xs h-[380px] sm:h-[400px] rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 ${
                  index === 1
                    ? "scale-105 sm:scale-110 z-20"
                    : "scale-95 sm:scale-95 z-10 opacity-90"
                }`}
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-0 w-full text-white px-4">
                  <h3 className="text-left font-semibold text-lg sm:text-xl">
                    {speaker.name}
                  </h3>
                  <p className="text-left text-gray-300 text-sm sm:text-base">
                    {speaker.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:right-0 md:-right-10 top-1/2 -translate-y-1/2 bg-white text-red-700 hover:bg-white/40 cursor-pointer p-3 rounded-full z-20 transition"
          >
            <FaArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersSection;
