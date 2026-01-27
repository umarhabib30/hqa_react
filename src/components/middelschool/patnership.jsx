import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Patnership = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const headingText = "Uniform Vendor Partnership";
  const headingLetters = headingText.split("");

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
    if (isInView && textIndex < headingLetters.length) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [textIndex, headingLetters.length, isInView]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-between items-center w-full font-serif min-h-screen overflow-hidden py-12 px-10 gap-12"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="h1  italic text-[#00285E]">
          {headingLetters.map((letter, index) => (
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
        </h1>

        <motion.p
          className="text-gray-800 p"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: textIndex >= headingLetters.length ? 1 : 0,
                  y: textIndex >= headingLetters.length ? 0 : 20,
                }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          East Essence Uniforms for Girls (Grades 5–12) We’ve partnered again
          with East Essence, a trusted online Islamic clothing store, for
          quality, affordable abayas for our female students in Grades 5 through
          12.
          <br />
          <br />
          You’re welcome to order through East Essence Or choose a tailor/vendor
          of your choice.Just ensure the style and color follow our school’s
          specifications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: textIndex >= headingLetters.length ? 1 : 0,
                  y: textIndex >= headingLetters.length ? 0 : 20,
                }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-4"
        >
          <button className="flex items-center gap-2 bg-[#00285E] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#001d43] transition duration-300">
            Order Now <FaArrowRight />
          </button>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 relative flex justify-center">
        <motion.img
          src="/elementary/uniform.jpeg"
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

export default Patnership;
