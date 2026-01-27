import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/home/schol1.jpg",
    numberImg: "home/001.png",
    title:
      "Imagine a School Where Graduates Excel at the Nation's Most Prestigious Universities",
    description:
      "At Houston Quran Academy, we go beyond preparing students for graduation — we empower them to achieve greatness.",
    quote:
      "Our graduates have earned admission into some of the most respected universities in the nation.",
  },
  {
    id: 2,
    image: "/home/schol2.jpg",
    numberImg: "home/002.png",
    title: "Building Leaders of Tomorrow",
    description:
      "At Houston Quran Academy, we nurture leadership, discipline, and purpose. Our unique curriculum blends academic excellence with Islamic values, helping every student discover their potential and make a lasting impact on society.",
    quote:
      "We cultivate a generation of confident, compassionate, and visionary leaders ready to shape the future.",
  },
  {
    id: 3,
    image: "/home/schol3.JPEG",
    numberImg: "home/003.png",
    title: "Empowering Through Knowledge",
    description:
      "Knowledge is the cornerstone of transformation. Through holistic education and spiritual guidance, we equip students with the skills, confidence, and moral foundation to excel in every stage of life and contribute meaningfully to their communities.",
    quote:
      "True empowerment begins with knowledge that inspires purpose and service.",
  },
];

const SlideCard = ({
  title,
  description,
  bgColor = "#0E2954",
  textColor = "white",
}) => (
  <div
    className={`p-6 rounded-xl shadow-md`}
    style={{ backgroundColor: bgColor, color: textColor }}
  >
    <h3 className="p mb-6">{title}</h3>
    <p className="p">{description}</p>
  </div>
);

const QuoteCard = ({ numberImg, quote }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={quote}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 mb-4"
    >
      <img src={numberImg} alt="Slide Number" className="w-16 h-22" />
      <p className="italic text-gray-700 p">{quote}</p>
    </motion.div>
  </AnimatePresence>
);

export default function ResponsiveSlider() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  // Swipe Handlers
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipe = 50;
    if (distance > minSwipe) nextSlide();
    else if (distance < -minSwipe) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <motion.section
      className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16 font-serif overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        className="text-[24px] sm:text-4xl md:text-5xl mb-8 lg:text-left font-serif"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="text-[#0F2C56] font-serif">From HQA to </span>
        <span className="text-[#C0392B] italic">Higher Ground</span>
      </motion.h1>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-6">
        <SlideCard
          title={slides[current].title}
          description={slides[current].description}
        />
        <div className="w-full relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current].id}
              src={slides[current].image}
              alt={slides[current].title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md h-72 sm:h-80 md:h-96 object-cover rounded-xl shadow-md"
            />
          </AnimatePresence>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between">
          <QuoteCard
            numberImg={slides[current].numberImg}
            quote={slides[current].quote}
          />
          <div className="flex justify-end gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-700 text-red-700 hover:bg-red-700 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="w-full relative order-1">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current].id}
              src={slides[current].image}
              alt={slides[current].title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="w-full h-72 sm:h-80 md:h-122 object-cover rounded-xl shadow-md"
            />
          </AnimatePresence>
        </div>

        <motion.div className="flex flex-col justify-between gap-6 order-2">
          <SlideCard
            title={slides[current].title}
            description={slides[current].description}
          />
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between flex-1">
            <QuoteCard
              numberImg={slides[current].numberImg}
              quote={slides[current].quote}
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 cursor-pointer border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer bg-red-600 text-white hover:bg-red-700 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
