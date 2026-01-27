import { SlideUp } from "../../../utility/animation";
import { motion, useInView, AnimatePresence, motion as m } from "framer-motion";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const slides = [
  {
    img: "/student/quran.jpg",
    text: "Quran Competitions: Showcasing memorization and recitation skills, inspiring excellence.",
  },
  {
    img: "/student/building.png",
    text: "Spirit Weeks – A week of themed activities that build school spirit, creativity, and community bonding.",
  },
  {
    img: "/faculty/c3.jpg",
    text: " Annual Fundraisers and Iftar Dinners – Community events that bring families together to support school initiatives and share a blessed Ramadan meal.",
  },
  {
    img: "/student/eid.jpeg",
    text: " Eid Celebrations – Festive school-wide programs honoring Eid with activities, performances, and cultural traditions.",
  },
  {
    img: "/faculty/c1.jpg",
    text: " Field Trips and Outdoor Adventures – Engaging excursions that promote hands-on learning, teamwork, and exploration beyond the classroom.",
  },
  {
    img: "/student/eid.jpeg",
    text: " Annual Fundraisers and Iftar Dinners – Community events that bring families together to support school initiatives and share a blessed Ramadan meal.",
  },
];

const Events = () => {
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
      className="relative w-full flex flex-col py-10 items-center font-serif overflow-hidden"
    >
      {/* Blue Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#00285E] -z-10"></div>

      {/* Heading */}
      <motion.div
        variants={SlideUp(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full text-center mb-10"
      >
        <h1 className="h1 italic text-[#00285E] mb-4">
          Events & <span className="text-red-700"> Celebrations </span>
        </h1>
        <p className="p italic text-gray-800 max-w-6xl mx-auto">
          Throughout the year, students enjoy a variety of fun, faith-based
          events and vibrant celebrations that foster a deep sense of community:
        </p>
      </motion.div>

      {/* Full-width Image */}
      <div className="relative w-full flex justify-center">
        <AnimatePresence mode="wait">
          <m.img
            key={current}
            src={slides[current].img}
            alt="HQA Event"
            className="w-[90%] object-cover h-[600px] rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        <div
          className="absolute bottom-0 md:bottom-3 left-1/2 transform -translate-x-1/2 
                        max-w-4xl w-[90%] bg-[#00285E] text-white 
                        py-2 px-3 md:py-4 md:px-6 rounded-lg 
                        flex items-center justify-between text-sm md:text-base"
        >
          {/* Left Icon & Line */}
          <div
            className="flex items-center gap-1 md:gap-2 h-full cursor-pointer"
            onClick={handlePrev}
          >
            <FaPlay className="text-white md:rotate-180 text-xs md:text-base" />
            <div className="w-[1px] bg-white h-6 md:h-12"></div>
          </div>

          {/* Center Text */}
          <AnimatePresence mode="wait">
            <m.p
              key={current}
              className="text-center text-sm md:text-xl flex-1 px-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {slides[current].text}
            </m.p>
          </AnimatePresence>

          {/* Right Line & Icon */}
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

export default Events;
