import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const titleText = "Your Personal Learning Journey";
  const subtitleText = "Educating Hearts and Minds for a Higher Purpose";

  const titleLetters = titleText.split("");
  const subtitleLetters = subtitleText.split("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && textIndex < titleLetters.length) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [textIndex, titleLetters.length, isInView]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-between items-center w-full font-serif min-h-screen overflow-hidden pb-12 pt-18 px-10 gap-12  "
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-2">
        <h1 className="text-[#CF3528] h1 italic leading-tight">
          {titleLetters.map((letter, index) => (
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
        <motion.h3
          className="italic text-[#252626] h2 leading-tight"
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? { opacity: textIndex >= titleLetters.length ? 1 : 0 }
              : { opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Educating Hearts and Minds for a Higher Purpose
        </motion.h3>

        <motion.p
          className="text-gray-800 p leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: textIndex >= titleLetters.length ? 1 : 0,
                  y: textIndex >= titleLetters.length ? 0 : 20,
                }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          At Houston Quran Academy, every step of your child’s education is
          designed to nurture both academic excellence and spiritual growth.
          Through a rich blend of Qur’anic studies, core academics, and
          character development, students grow into confident, compassionate
          individuals grounded in Islamic values.
          <br />
          <br />
          Here, your child will flourish as a thoughtful learner, a responsible
          leader, and a faithful servant of Allah—prepared to navigate the
          challenges of the modern world with purpose, resilience, and a strong
          moral compass.
        </motion.p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 relative flex justify-center">
        <motion.img
          src="/academics/purpose.jpg"
          alt="Graduation caps"
          className="h-64 sm:h-80 lg:h-150 w-full object-cover rounded-4xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <motion.div
          className="bg-[#eb7f75] w-[120px] sm:w-[200px] h-[80px] sm:h-[150px] rounded-4xl absolute -right-4 sm:-right-8 -bottom-6 sm:-bottom-8 z-[-1]"
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={
            isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 20, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.8 }}
        />

        <motion.div
          className="bg-white w-[80px] sm:w-[150px] h-[80px] sm:h-[150px] absolute -left-4 -bottom-4 flex justify-center items-center rounded-tr-[100px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-[#dfd7d7] h-[40px] sm:h-[100px] w-[40px] sm:w-[100px] rounded-full flex justify-center items-center">
            <motion.div
              className="bg-blue-600 h-4 sm:h-7 w-4 sm:w-7 rounded-full"
              animate={
                isInView
                  ? {
                      scale: [1, 1.2, 1],
                    }
                  : { scale: 1 }
              }
              transition={{
                repeat: isInView ? Infinity : 0,
                duration: 2,
                delay: 1.5,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
