import React, { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlideButton,
  SlideLeft,
  SlideRight,
  StaggerChildren,
} from "../../../utility/animation.js";

export default function ProfileCard() {
  const [slidesData, setSlidesData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  /* ===============================
     FETCH TOP ACHIEVER API
     =============================== */
  useEffect(() => {
    fetch("https://hquranacademy.com/api/topAchiever")
      .then((res) => res.json())
      .then((json) => {
        if (json.status) {
          setSlidesData(
            json.data.map((item) => ({
              name: item.achiever_name,
              class: item.class_achiever,
              image: item.image,
              quote: item.achiever_desc,
              stats: item.meta_data.map((m) => ({
                value: m.image,
                label: m.title,
              })),
            })),
          );
        }
      })
      .catch((err) => console.error("TopAchiever API Error:", err));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((i) =>
      slidesData.length ? (i + 1) % slidesData.length : 0,
    );
  }, [slidesData.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((i) =>
      slidesData.length ? (i === 0 ? slidesData.length - 1 : i - 1) : 0,
    );
  }, [slidesData.length]);

  /* Swipe */
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  if (!slidesData.length) return null;

  const slide = slidesData[currentSlide];

  return (
    <div
      className="p-4 sm:p-12 font-serif relative z-20 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* HEADER */}
        <div className="px-2 sm:px-12 py-6 border-b border-blue-200 text-center">
          <motion.h1
            variants={SlideLeft(0)}
            initial="hidden"
            whileInView="visible"
            className="h1 text-[#00285E]"
          >
            Beyond Struggles,
            <span className="text-red-700 italic"> Beyond Stars!</span>
          </motion.h1>

          <motion.p
            variants={SlideRight(0.1)}
            initial="hidden"
            whileInView="visible"
            className="p text-gray-800 mt-6 mb-10"
          >
            We proudly celebrate our top achievers,
            <br />
            whose dedication and excellence inspire us all
          </motion.p>
        </div>

        {/* CONTENT GRID */}
        <div className="bg-[#BCDDFC] rounded-b-xl grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] relative pb-40 md:pb-0">
          <motion.div
            className="order-2 md:order-1 flex justify-start mt-6 md:mt-0 relative"
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.name}
                className="absolute -bottom-56 md:-top-32 h-64 md:h-[46rem] w-auto md:-left-16 object-contain z-0"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 p-4 sm:p-6 flex flex-col justify-center z-10"
            variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView="visible"
          >
            <p className="text-lg text-red-700 mb-2">{slide.class}</p>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              {slide.name}
            </h2>

            <motion.div
              variants={StaggerChildren(0.1)}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-md mx-auto"
            >
              <div className="grid grid-cols-2 text-center">
                {slide.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={SlideLeft(0.1 * idx)}
                    className={`p-2 flex flex-col items-center min-h-[160px]
          ${idx === 0 ? "border-b border-r border-white" : ""}
          ${idx === 1 ? "border-b border-white" : ""}
          ${idx === 2 ? "border-r border-white" : ""}
        `}
                  >
                    <img
                      src={stat.value}
                      alt={stat.label}
                      className="w-20 h-20 object-contain"
                    />
                    <p className="mt-3 text-base text-gray-800 text-center">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p className="text-center italic text-xl mb-4">
              {slide.quote}
            </motion.p>

            <div className="text-center">
              <Link to="/student-life">
                <motion.button
                  variants={SlideButton(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  className="text-black px-8 py-3 cursor-pointer border border-white rounded-lg"
                >
                  Student Life
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* ARROWS */}
          <div className="absolute top-4 right-4 flex md:flex-col gap-2 z-10">
            <button
              onClick={prevSlide}
              className="bg-red-700 text-white p-3 rounded-full"
            >
              <FaArrowRight />
            </button>
            <button
              onClick={nextSlide}
              className="border border-red-700 text-red-700 p-3 rounded-full"
            >
              <FaArrowLeft />
            </button>
          </div>
        </div>
      </div>

      <div className="h-32 md:h-0"></div>
    </div>
  );
}
