import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlideRight } from "../../../utility/animation.js";

const pillars = [
  {
    id: 1,
    title: "Committed Balanced Muslims",
    text: `Creating Muslims who balance spirituality, character, and worldly excellence while serving humanity with integrity.`,
    img: "/home/pillar3.jpg",
  },
  {
    id: 2,
    title: "Knowledgeable Scholars",
    text: `Developing scholars who embody Islamic knowledge and modern sciences to guide communities with wisdom and compassion.`,
    img: "/home/pillar2.JPG",
  },
  {
    id: 3,
    title: "Contributing Citizens & Community Builders",
    text: `Deepening faith through Quran memorization (Hifz), Salah, and character-building.
Quranic Foundation: “Allah elevates those who believe and those who are given knowledge.” (Quran 58:11)`,
    img: "/home/pillar1.JPEG",
  },
];

const CorePillars = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Pillar 1
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

  // Pillar 2
  const y2 = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45, 0.6],
    ["100%", "0%", "0%", "-100%"]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45, 0.6],
    [0, 1, 1, 0]
  );

  const y3 = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.85, 1],
    ["100%", "0%", "0%", "0%"]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.95, 1],
    [0, 1, 1, 1]
  );

  const dot1Color = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["#CF3528", "#CF3528"]
  );
  const dot2Color = useTransform(
    scrollYProgress,
    [0.35, 0.7],
    ["#fff", "#CF3528"]
  );
  const dot3Color = useTransform(
    scrollYProgress,
    [0.65, 1],
    ["#fff", "#CF3528"]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-white font-serif"
    >
      <div className="sticky top-0 h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 md:gap-12 items-center w-full">
          {/* Left Side */}
          <div className="space-y-6">
            <div>
              <motion.h1
                variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="h1 pt-12 font-normal text-gray-800 mb-4 mt-8"
              >
                <span className="text-[#CF3528]">Core</span>{" "}
                <span className="text-[#00285E] italic">Pillars</span>
              </motion.h1>
              <motion.p
                variants={SlideRight(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-2xl p font-normal leading-relaxed mb-6 sm:mb-8"
              >
                At Houston Quran Academy, our mission is more than education. We
                shape balanced Muslims, cultivate scholars, and empower
                compassionate leaders. These core pillars ignite purpose, and
                elevate minds.
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col space-y-6 pl-6 border-l-2 border-[#CF3528]">
              {[
                { label: " Committed Balanced Muslims", color: dot1Color },
                { label: "Knowledgeable Scholars", color: dot2Color },
                {
                  label: "Contributing Citizens & Community Builders ",
                  color: dot3Color,
                },
              ].map((dot, i) => (
                <div key={i} className="relative flex items-center">
                  <motion.div
                    style={{ backgroundColor: dot.color }}
                    className={`absolute left-0 w-4 h-4 rounded-full border border-[#CF3528] ${
                      i === 0
                        ? "-translate-x-8 -translate-y-2"
                        : i === 1
                        ? "-translate-x-8 -translate-y-1/2 top-1/2"
                        : "-translate-x-8 translate-y-0 mt-3"
                    }`}
                  />
                  <p className="text-gray-800 p">{dot.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 sm:pt-2 pb-20">
              <a
                // href="/inquire"
                className="bg-[#00285E] hover:bg-blue-800 text-white px-6 py-3 rounded text-sm md:text-lg font-medium transition-colors cursor-pointer"
              >
                Start Your Journey
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden rounded-lg">
            {[
              { y: y1, opacity: opacity1 },
              { y: y2, opacity: opacity2 },
              { y: y3, opacity: opacity3 },
            ].map((motionProps, i) => (
              <motion.div
                key={i}
                style={{ y: motionProps.y, opacity: motionProps.opacity }}
                transition={{
                  duration: 1.2 + i * 0.6,
                  ease: "easeOut",
                  delay: 0.1 + i * 0.1,
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <img
                    src={pillars[i].img}
                    alt={pillars[i].title}
                    className="w-[95%] h-[75%] object-cover rounded-3xl"
                  />
                  <div className="bg-[#00285EE5] pb-46 text-white p-3 md:p-4 rounded-xl -mt-6 sm:-mt-26 w-[98%] max-w-[500px]">
                    <h3 className="p font-normal mb-2">{pillars[i].title}</h3>
                    <p className="p ">{pillars[i].text}</p>
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

export default CorePillars;
