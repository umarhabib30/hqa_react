import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlideLeft,
  SlideRight,
  SlideUp,
  StaggerChildren,
} from "../../../utility/animation.js";

const cardVariants = {
  enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

const imgVariants = {
  enter: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
};

export default function AlumniComponent() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hquranacademy.com/api/homeMemories")
      .then((res) => res.json())
      .then((json) => {
        if (json.status) {
          setTestimonials(json.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  const nextSlide = () => {
    setDir(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDir(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 100) prevSlide();
    else if (info.offset.x < -100) nextSlide();
  };

  if (loading || testimonials.length === 0) return null;

  const slide = testimonials[current];

  return (
    <div className="px-4 sm:px-12 py-12 lg:py-24 font-serif bg-white overflow-hidden relative z-10">
      {/* ---------- Mobile Layout ---------- */}
      <div className="lg:hidden pt-12 flex flex-col">
        <motion.h1
          className="text-3xl sm:text-4xl text-indigo-900 mb-8"
          variants={SlideLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Beyond Memories;{" "}
          <span className="text-red-600 italic">A Future Together!</span>
        </motion.h1>

        <motion.p
          className="text-gray-800 mb-6 p"
          variants={SlideLeft(1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our alumni are making a difference worldwide—leading in their careers
          and serving communities while carrying HQA's values with them.
        </motion.p>

        {/* DYNAMIC IMAGE */}
        <motion.div
          className="w-full flex justify-center mb-0"
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.img
              key={slide.id}
              src={slide.image}
              alt={slide.name}
              className="w-full max-w-sm max-h-94 h-auto object-contain rounded-tl-xl rounded-bl-xl"
              variants={imgVariants}
              custom={dir}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </motion.div>

        <SliderCard
          slide={slide}
          dir={dir}
          onDragEnd={handleDragEnd}
          next={nextSlide}
          prev={prevSlide}
          mobile
        />
      </div>

      {/* ---------- Desktop Layout ---------- */}
      <div className="hidden lg:flex items-start lg:items-center lg:gap-0">
        <div className="w-full lg:w-4/5 flex flex-col space-y-6">
          <motion.div
            variants={StaggerChildren(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* FIXED HEADING */}
            <motion.h1
              className="text-[48px] text-[#012974]"
              variants={SlideUp(0.3)}
            >
              Beyond Memories;{" "}
              <span className="text-red-600 italic">A Future Together!</span>
            </motion.h1>

            {/* FIXED DESCRIPTION */}
            <motion.p className="mb-6 p" variants={SlideUp(0.6)}>
              Our alumni are making a difference worldwide—leading in their
              careers and serving communities while carrying HQA's values.
            </motion.p>
          </motion.div>

          <SliderCard
            slide={slide}
            dir={dir}
            onDragEnd={handleDragEnd}
            next={nextSlide}
            prev={prevSlide}
          />
        </div>

        {/* DYNAMIC IMAGE */}
        <motion.div
          className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-6"
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.img
              key={slide.id}
              src={slide.image}
              alt={slide.name}
              className="w-full max-w-sm lg:max-w-full max-h-[600px] -ml-18 h-auto object-contain"
              variants={imgVariants}
              custom={dir}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

/* -------------------------------------------
   REUSABLE SLIDER CARD COMPONENT
-------------------------------------------- */
const SliderCard = ({ slide, dir, onDragEnd, next, prev, mobile }) => {
  return (
    <div className={`relative ${mobile ? "-mt-4" : "mt-0"} z-10`}>
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={slide.id}
          className={`bg-[#00285E] shadow-lg p-4 sm:p-8 text-white flex flex-col justify-between rounded-xl ${
            mobile ? "min-h-[340px]" : "min-h-[360px]"
          }`}
          variants={cardVariants}
          custom={dir}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={onDragEnd}
        >
          <p className="italic text-lg sm:text-xl lg:text-[28px] leading-relaxed mb-6 whitespace-pre-line">
            {slide.quote}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <a
              href="/alumni"
              className="rounded-md bg-white px-6 py-3 text-red-700 hover:bg-red-700 hover:text-white transition"
            >
              Alumni Network
            </a>

            <span className="italic text-sm sm:text-xl lg:text-2xl">
              {slide.name} {slide.graduated}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={prev}
          className="border border-red-700 cursor-pointer text-red-700 p-3 rounded-full hover:bg-red-100 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          className="bg-red-700 cursor-pointer text-white p-3 rounded-full hover:bg-red-800 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
