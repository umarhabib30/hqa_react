import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Connect = ({
  primaryCta = { label: "Discover Our Legacy", href: "#" },
  secondaryCta = { label: "Meet Our Visionaries", href: "#" },
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const titleText = "Connect with Our Story";
  const subtitleText = "Be Part of the HQA Journey";
  const titleLetters = titleText.split("");

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
    if (isInView && textIndex < titleLetters.length) {
      const timer = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [isInView, textIndex, titleLetters.length]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-between items-center w-full font-serif min-h-screen overflow-hidden py-12 px-10"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 leading-tight text-center md:text-left space-y-2">
        <h1 className="h1 italic font-serif ">
          {titleLetters.map((letter, i) => {
            let colorClass = "text-[#00285E]";
            if (i >= 12) {
              colorClass = "text-[#CF3528]";
            }
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={
                  isInView
                    ? { opacity: i <= textIndex ? 1 : 0 }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.15 }}
                className={colorClass}
              >
                {letter}
              </motion.span>
            );
          })}
        </h1>

        <motion.p
          className="text-gray-800 leading-relaxed italic max-w-xl p"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView && textIndex >= titleLetters.length
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We invite you to be part of the HQA journey. Whether you’re a
          prospective parent, future student, or proud alumnus—your chapter in
          our story is just beginning.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row mb-8 gap-4 pt-6 
             items-center sm:items-start 
             justify-center sm:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView && textIndex >= titleLetters.length
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Primary Button */}
          <a
            href={primaryCta.href}
            className="w-48 h-12 flex items-center justify-center 
               bg-[#00285E] border border-[#00285E] 
               text-white text-lg font-medium 
               shadow-md hover:bg-[#013b85] 
               focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-[#00285E]/70"
          >
            {primaryCta.label}
          </a>

          {/* Secondary Button */}
          <a
            href={secondaryCta.href}
            className="w-48 h-12 flex items-center justify-center 
               border border-[#00285E] rounded-md bg-transparent 
               text-gray-800 text-lg font-medium 
               hover:bg-red-700 hover:text-white hover:border-0 
               focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/70"
          >
            {secondaryCta.label}
          </a>
        </motion.div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 relative flex justify-center mt-10 md:mt-0">
        <motion.img
          src="/about/Connect with Our Story.jpg"
          alt="Graduation caps"
          className="h-64 sm:h-80 lg:h-[26rem] w-full object-cover rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <motion.div
          className="bg-[#eb7f75] w-[140px] sm:w-[200px] h-[90px] sm:h-[150px] rounded-4xl 
          absolute -right-6 sm:-right-10 -bottom-10 sm:-bottom-8 z-[-1]"
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        />

        {/* Circle Decoration */}
        <motion.div
          className="flex bg-white w-[90px] sm:w-[150px] h-[90px] sm:h-[150px] 
          absolute -left-6 sm:-left-8 -bottom-12 sm:-bottom-6 
          justify-center items-center rounded-tr-[100px] rounded"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-[#dfd7d7]  h-[70px] sm:h-[100px] w-[70px] sm:w-[100px] rounded-full flex justify-center items-center">
            <motion.div
              className="bg-blue-600 h-5 sm:h-7 w-5 sm:w-7 rounded-full"
              animate={isInView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ repeat: isInView ? Infinity : 0, duration: 2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
