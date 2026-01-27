import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlideRight } from "../../../utility/animation.js";

const pillars = [
  {
    id: 1,
    title: "Holistic Curriculum",
    text: `A perfect blend of Quranic memorization, academic excellence, Arabic, and Islamic Studies — preparing students to thrive in both Dunya and Akhirah.`,
    img: "/admission/Holistic Curriculum.jpg",
  },
  {
    id: 2,
    title: "Personalized Learning",
    text: `Developing scholars who embody Islamic knowledge and modern sciences to guide communities with wisdom and compassion.`,
    img: "/admission/Personalized Learning.jpg",
  },
  {
    id: 3,
    title: "Proven Results",
    text: `Creating Muslims who balance spirituality, character, and worldly excellence while serving humanity with integrity.`,
    img: "/admission/Proven Results.jpg",
  },
  {
    id: 4,
    title: "A Diverse & Inclusive Community",
    text: `Building a nurturing environment that values diversity, fosters unity, and ensures every student feels at home.`,
    img: "/admission/community.jpeg",
  },
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35],
    ["0%", "0%", "-100%", "-100%"]
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35],
    [1, 1, 1, 0]
  );

  const y2 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5, 0.6],
    ["100%", "0%", "0%", "-100%"]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5, 0.6],
    [0, 1, 1, 0]
  );

  const y3 = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75, 0.85],
    ["100%", "0%", "0%", "-100%"]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.75, 0.85],
    [0, 1, 1, 0]
  );

  const y4 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1, 1],
    ["100%", "0%", "0%", "0%"]
  );
  const opacity4 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1, 1],
    [0, 1, 1, 1]
  );

  const dot1Color = useTransform(
    scrollYProgress,
    [0, 0.25, 0.3],
    ["#CF3528", "#CF3528", "#CF3528"]
  );
  const dot2Color = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.55],
    ["#fff", "#CF3528", "#CF3528"]
  );
  const dot3Color = useTransform(
    scrollYProgress,
    [0.5, 0.75, 0.8],
    ["#fff", "#CF3528", "#CF3528"]
  );
  const dot4Color = useTransform(
    scrollYProgress,
    [0.75, 1],
    ["#fff", "#CF3528"]
  );

  const dots = [
    { label: "Holistic Curriculum", color: dot1Color },
    { label: "Personalized Learning", color: dot2Color },
    { label: "Proven Results", color: dot3Color },
    { label: "A Diverse & Inclusive Community", color: dot4Color },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[500vh] bg-white font-serif px-4 py-12"
    >
      <div className="sticky top-0 h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 md:gap-12 items-center w-full">
          {/* Left Side */}
          <div className="space-y-6 pb-60">
            <motion.h1
              variants={SlideRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="h1 pt-12 text-gray-800 mb-4 mt-3"
            >
              <span className="text-[#00285E] italic">
                Why Choose <br /> HQA?
              </span>
            </motion.h1>

            {/* Timeline */}
            <div className="relative flex flex-col space-y-4 pl-6 border-l-2 border-[#CF3528]">
              {dots.map((dot, i) => (
                <div key={i} className="relative flex items-center">
                  <motion.div
                    style={{ backgroundColor: dot.color }}
                    className={`absolute left-0 w-4 h-4 rounded-full border border-[#CF3528] -translate-x-8 ${
                      i === 0
                        ? "-translate-y-3"
                        : i === 1
                        ? "-translate-y-1/2 top-1/2"
                        : i === 2
                        ? "translate-y-0"
                        : "translate-y-3"
                    }`}
                  />
                  <p className="text-gray-800 p">{dot.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side  */}
          <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden rounded-lg">
            {[
              { y: y1, opacity: opacity1 },
              { y: y2, opacity: opacity2 },
              { y: y3, opacity: opacity3 },
              { y: y4, opacity: opacity4 },
            ].map((motionProps, i) => (
              <motion.div
                key={i}
                style={{ y: motionProps.y, opacity: motionProps.opacity }}
                transition={{
                  duration: 1.2 + i * 0.6,
                  ease: "easeOut",
                  delay: 0.1 + i * 0.2,
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <img
                    src={pillars[i].img}
                    alt={pillars[i].title}
                    className="w-[95%] h-[75%] object-cover rounded-3xl"
                  />
                  <div className="bg-[#00285E] pb-16 text-white p-3 md:p-6 rounded-xl -mt-16 sm:-mt-16 w-[95%] max-w-[520px]">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
                      {pillars[i].title}
                    </h3>
                    <p className="text-sm sm:text-lg leading-relaxed">
                      {pillars[i].text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
