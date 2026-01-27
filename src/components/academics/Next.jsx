import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

const Next = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const redText = "Your Next";
  const blueText = "Chapter";

  const redLetters = redText.split("");
  const blueLetters = blueText.split("");
  const totalLetters = redLetters.length + blueLetters.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isInView && textIndex < totalLetters) {
      const timer = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [textIndex, totalLetters, isInView]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-between items-center w-full font-serif min-h-screen overflow-hidden py-12 px-10 gap-12"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="h1 lg:text-5xl italic ">
          <span className="text-[#00285E]">
            {redLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? { opacity: index <= textIndex ? 1 : 0 }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>{" "}
          <span className="text-[#CF3528]">
            {blueLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: index + redLetters.length <= textIndex ? 1 : 0,
                      }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          className="text-gray-800 p leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: textIndex >= totalLetters ? 1 : 0,
                  y: textIndex >= totalLetters ? 0 : 20,
                }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          At Houston Quran Academy, we support each student as they take the
          next steps toward a bright, purpose-driven future. Whether it’s
          refining academic strengths, exploring college and career pathways, or
          deepening personal and spiritual goals, we walk alongside your child
          every step of the way.
          <br />
          <br />
          Our graduates have gone on to attend respected colleges and
          universities, equipped not only with academic excellence but with
          strong Islamic character and confidence. With personalized guidance
          and a faith-based foundation, your child is prepared to succeed—in
          both dunya and akhirah, inshaAllah.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: textIndex >= totalLetters ? 1 : 0,
                  y: textIndex >= totalLetters ? 0 : 20,
                }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-4"
        >
          <Link to="/alumni">
            <button className="flex items-center cursor-pointer gap-2 bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#001d43] transition duration-300">
              Alumni
              <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Right Side  */}
      <div className="w-full md:w-1/2 relative flex justify-center">
        <motion.img
          src="/academics/chapter.jpg"
          alt="Graduation caps"
          className="h-64 sm:h-80 lg:h-130 w-full object-cover rounded-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </section>
  );
};

export default Next;
