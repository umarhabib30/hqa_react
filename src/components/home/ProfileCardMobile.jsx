import React, { useState, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlideButton,
  SlideLeft,
  SlideRight,
  StaggerChildren,
} from "../../../utility/animation.js";

const slidesData = [
  {
    name: "Fatimah Siddiqui",
    class: "9th Grade Top Achiever",
    stats: [
      { value: "/home/Untitled.gif", label: "NMS" },
      { value: "home/p2.gif", label: "Memorization" },
      { value: "home/p3.gif", label: "ACT recognition" },
      { value: "home/p4.gif", label: "SAT recognition" },
    ],
    image: "/home/Fatimah Siddiqui.png",
    quote: "Exemplary honor role",
  },
  {
    name: "Yaseen Salous",
    class: "10th Grade Top Achiever",
    stats: [
      { value: "home/p1.gif", label: "NMS" },
      { value: "home/hafiz.gif", label: "Hafiz" },
      { value: "home/p3.gif", label: "ACT Recognition" },
      { value: "home/p4.gif", label: "SAT Recognition" },
    ],
    image: "/home/mobile (4).png",
    quote: "Excellence is the result of dedication and hard work",
  },
  {
    name: "Rahma Rabie",
    class: "9th Grade Top Achiever",
    stats: [
      { value: "home/p1.gif", label: "Quran Bee" },
      { value: "home/p2.gif", label: "Hafiz" },
      { value: "home/tajweed.gif", label: "Spelling Bee" },
      { value: "home/p4.gif", label: "Top 5% Iowa" },
    ],
    image: "/home/mobile (2).png",
    quote: "Success is built on the foundation of hard work and faith",
  },
  {
    name: "Yaseen Salous",
    class: "9th Grade Top Achiever",
    stats: [
      { value: "home/p1.gif", label: "NMS" },
      { value: "home/p2.gif", label: "Hafiz" },
      { value: "home/tajweed.gif", label: "SAT recognition " },
      { value: "home/p4.gif", label: "PSAT recognition" },
    ],
    image: "/home/mobile (3).png",
    quote: "Success is built on the foundation of hard work and faith",
  },
];

export default function ProfileCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const slide = slidesData[currentSlide];

  const nextSlide = useCallback(
    () => setCurrentSlide((i) => (i + 1) % slidesData.length),
    [],
  );

  const prevSlide = useCallback(
    () => setCurrentSlide((i) => (i === 0 ? slidesData.length - 1 : i - 1)),
    [],
  );

  // Swipe logic
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  return (
    <div
      className="p-4 sm:p-12 font-serif relative z-20 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-6xl mx-auto relative">
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

        {/* Content Grid */}
        <div className="bg-[#BCDDFC] rounded-b-xl grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] relative pb-40 md:pb-0">
          {/* Column 1 — Image */}
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
                loading="lazy"
                className="absolute -bottom-56 md:-top-32 h-84 md:h-[46rem] w-auto md:-left-16 object-contain z-0"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </motion.div>

          {/* Column 2 — Info */}
          <motion.div
            className="order-1 md:order-2 p-4 sm:p-6 flex flex-col justify-center z-10"
            variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView="visible"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.name}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
              >
                {/* Name + Class */}
                <div className="mb-4">
                  <p className="text-lg text-red-700 mb-2">{slide.class}</p>
                  <h2 className="text-3xl font-semibold text-gray-800">
                    {slide.name}
                  </h2>
                </div>

                {/* Stats */}
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
                        className="p-4 flex flex-col items-center min-h-[140px]"
                      >
                        <img
                          src={stat.value}
                          alt={stat.label}
                          className="w-20 h-20 object-contain"
                          loading="lazy"
                        />
                        <p className="mt-2 text-base text-gray-800 text-center line-clamp-2">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider Lines */}
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-64 w-px bg-white"></div>
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-white"></div>
                </motion.div>

                {/* Quote */}
                <motion.p
                  variants={SlideLeft(0.4)}
                  initial="hidden"
                  whileInView="visible"
                  className="text-center italic text-xl mb-4"
                >
                  “{slide.quote}”
                </motion.p>

                {/* Button + Mobile Arrows */}
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

                  <div className="flex flex-col items-end gap-3 mt-4 md:hidden">
                    <button
                      onClick={prevSlide}
                      className="bg-red-700 text-white p-2 rounded-full"
                    >
                      <FaArrowRight />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="border border-red-700 text-red-700 p-2 rounded-full"
                    >
                      <FaArrowLeft />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Desktop Arrows */}
          <div className="absolute top-4 right-4 flex flex-row md:flex-col gap-2 z-10">
            <button
              onClick={prevSlide}
              className="bg-red-700 cursor-pointer text-white p-2 sm:p-3 rounded-full"
            >
              <FaArrowRight />
            </button>
            <button
              onClick={nextSlide}
              className="border border-red-700 cursor-pointer text-red-700 p-2 sm:p-3 rounded-full"
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

// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const slidesData = [
//   {
//     name: "Dana Almadi",
//     class: "9th Grade Top Achiever",
//     stats: [
//       { value: "home/p1.gif", label: "Exemplary Honor Roll" },
//       { value: "home/p2.gif", label: "Memorization" },
//       { value: "home/p3.gif", label: "Spelling Bee Champion" },
//       { value: "home/p4.gif", label: "Science Fair" },
//     ],
//     image: "home/profilem.webp",
//     quote: "Excellence is the result of dedication and hard work",
//   },
//   {
//     name: "Nour Ghoneim",
//     class: "10th Grade Top Achiever",
//     stats: [
//       { value: "home/p1.gif", label: "Excellence Award" },
//       { value: "home/hafiz.gif", label: "Hafiz" },
//       { value: "home/p3.gif", label: "Meaning" },
//       { value: "home/p4.gif", label: "Science Fair" },
//     ],
//     image: "home/profilem2.webp",
//     quote: "“Excellence is the result of dedication and hard work”",
//   },
//   {
//     name: "Menna Gomaa",
//     class: "9th Grade Top Achiever",
//     stats: [
//       { value: "home/p1.gif", label: "Honor Roll" },
//       { value: "home/p2.gif", label: "Memorization" },
//       { value: "home/tajweed.gif", label: "Tajweed" },
//       { value: "home/p4.gif", label: "Volunteering" },
//     ],
//     image: "home/profilem3.webp",
//     quote: "“Success is built on the foundation of hard work and faith”",
//   },
// ];

// const ProfileCardMobile = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slide = slidesData[currentSlide];

//   const nextSlide = () => setCurrentSlide((i) => (i + 1) % slidesData.length);

//   const prevSlide = () =>
//     setCurrentSlide((i) => (i === 0 ? slidesData.length - 1 : i - 1));

//   return (
//     <div className="w-full px-4 py-8 font-serif md:hidden overflow-hidden">
//       <div className="text-center mb-6">
//         <h2 className="h1 italic mb-4">
//           <span className="text-[#00285E]">Beyond Struggles, </span>
//           <span className="text-red-600">Beyond Stars!</span>
//         </h2>
//         <p className="mt-2 text-gray-800 p">
//           We proudly celebrate our top achievers, whose dedication and
//           excellence inspire us all.
//         </p>
//       </div>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={slide.name}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           onDragEnd={(e, { offset, velocity }) => {
//             if (offset.x < -100 || velocity.x < -500) nextSlide();
//             else if (offset.x > 100 || velocity.x > 500) prevSlide();
//           }}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.3 }}
//           className="bg-[#BCDDFC] rounded-2xl shadow-lg p-6 sm:p-8 pt-10 sm:pt-12 pb-28 sm:pb-32 relative min-h-[500px] sm:min-h-[560px]"
//         >
//           {/* Header */}
//           <p className="text-lg font-normal text-red-700">{slide.class}</p>
//           <h2 className="text-3xl sm:text-2xl font-normal text-gray-900 mt-2">
//             {slide.name}
//           </h2>

//           {/* Stats  */}
//           <div className="mt-8 sm:mt-10 text-gray-900">
//             {[0, 1].map((row) => (
//               <div
//                 key={row}
//                 className={`grid grid-cols-2 text-center ${
//                   row === 0 ? "border-b border-white" : ""
//                 }`}
//               >
//                 {slide.stats.slice(row * 2, row * 2 + 2).map((stat, idx) => (
//                   <div
//                     key={idx}
//                     className={`py-4 sm:py-6 ${
//                       idx % 2 === 0 ? "border-r border-white" : ""
//                     }`}
//                   >
//                     <img
//                       src={stat.value}
//                       alt={stat.label}
//                       className="mx-auto w-12 h-12 object-contain"
//                     />
//                     <p className="text-lg sm:text-xl mt-2">{stat.label}</p>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {/* Quote */}
//           <p className="mt-6 text-center font-normal text-2xl italic text-gray-800">
//             {slide.quote}
//           </p>

//           {/* CTA Button */}

//           <Link to="/student-life">
//             <button className="mt-6 mb-48 sm:mt-8 px-4 py-2 bg-white border border-gray-700 rounded-md text-sm text-gray-900 font-medium hover:bg-gray-100 w-full">
//               Student Life
//             </button>
//           </Link>

//           {/* Profile Image */}
//           <img
//             src={slide.image}
//             alt={slide.name}
//             className="absolute -bottom-16 sm:-bottom-1 -left-4 sm:-left-6 w-72 sm:w-56 object-contain z-40"
//           />

//           {/* Navigation Arrows */}
//           <div className="absolute bottom-40 sm:bottom-10 right-4 flex flex-col gap-3 z-50">
//             <button
//               onClick={prevSlide}
//               className="bg-red-700 text-white p-2 sm:p-3 rounded-full hover:bg-red-800"
//             >
//               <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
//             </button>

//             <button
//               onClick={nextSlide}
//               className="border border-red-700 text-red-700 p-2 sm:p-3 rounded-full hover:bg-red-100"
//             >
//               <FaArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
//             </button>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ProfileCardMobile;

// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const ProfileCardMobile = () => {
//   const [slidesData, setSlidesData] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     fetch("https://hquranacademy.com/api/topAchiever")
//       .then((res) => res.json())
//       .then((json) => {
//         if (json.status) {
//           setSlidesData(
//             json.data.map((item) => ({
//               name: item.achiever_name,
//               class: item.class_achiever,
//               image: item.image,
//               quote: item.achiever_desc,
//               stats: item.meta_data.map((m) => ({
//                 value: m.image,
//                 label: m.title,
//               })),
//             }))
//           );
//         }
//       });
//   }, []);

//   if (!slidesData.length) return null;

//   const slide = slidesData[currentSlide];

//   const nextSlide = () => setCurrentSlide((i) => (i + 1) % slidesData.length);

//   const prevSlide = () =>
//     setCurrentSlide((i) => (i === 0 ? slidesData.length - 1 : i - 1));

//   return (
//     <div className="w-full px-4 py-8 font-serif md:hidden overflow-hidden">
//       <div className="text-center mb-6">
//         <h2 className="h1 italic mb-4">
//           <span className="text-[#00285E]">Beyond Struggles, </span>
//           <span className="text-red-600">Beyond Stars!</span>
//         </h2>
//       </div>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={slide.name}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           onDragEnd={(e, { offset }) => {
//             if (offset.x < -100) nextSlide();
//             else if (offset.x > 100) prevSlide();
//           }}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.3 }}
//           className="bg-[#BCDDFC] rounded-2xl shadow-lg p-6 pb-28 relative min-h-[500px]"
//         >
//           <p className="text-lg text-red-700">{slide.class}</p>
//           <h2 className="text-3xl text-gray-900 mt-2">{slide.name}</h2>

//           <div className="mt-8">
//             <div className="grid grid-cols-2 text-center">
//               {slide.stats.map((stat, idx) => (
//                 <div key={idx} className="py-6">
//                   <img
//                     src={stat.value}
//                     alt={stat.label}
//                     className="mx-auto w-12 h-12"
//                   />
//                   <p className="mt-2">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="mt-6 text-center italic text-xl">{slide.quote}</p>

//           {/* <Link to="/student-life">
//             <button className="mt-6 w-full bg-white border rounded-md py-2">
//               Student Life
//             </button>
//           </Link> */}

//           <img
//             src={slide.image}
//             alt={slide.name}
//             className="absolute -bottom-10 left-0 w-64 object-contain"
//           />

//           <div className="absolute bottom-10 right-4 flex flex-col gap-3">
//             <button
//               onClick={prevSlide}
//               className="bg-red-700 text-white p-2 rounded-full"
//             >
//               <FaArrowRight />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="border border-red-700 text-red-700 p-2 rounded-full"
//             >
//               <FaArrowLeft />
//             </button>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ProfileCardMobile;
