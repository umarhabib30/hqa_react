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

const CorePillarsMobile = () => {
  const containerRef = useRef(null);
  const horizontalScrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(pillars.length - 1) * 100}%`]
  );

  // Dot opacity transitions
  const opacities = pillars.map((_, i) =>
    useTransform(
      scrollYProgress,
      [
        i * (1 / pillars.length),
        (i + 0.5) * (1 / pillars.length),
        (i + 1) * (1 / pillars.length),
      ],
      [0.5, 1, 0.5]
    )
  );

  // Dot color transitions
  const dotColors = pillars.map((_, i) =>
    useTransform(
      scrollYProgress,
      [i * (1 / pillars.length), (i + 1) * (1 / pillars.length)],
      ["#fff", "#CF3528"]
    )
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[350vh] bg-white font-serif block md:hidden"
    >
      <div className="sticky top-0 h-screen flex flex-col px-6 overflow-hidden">
        <div className="pb-4">
          {/* Timeline */}
          <div className="relative flex flex-row justify-between items-center  px-6">
            <div className="absolute left-0 right-0 top-[50%] h-0.5 bg-gray-300 z-0"></div>
            {pillars.map((_, i) => (
              <motion.div
                key={i}
                style={{ opacity: opacities[i] }}
                className="flex items-center justify-center flex-1 relative z-10"
              >
                <motion.div
                  style={{ backgroundColor: dotColors[i] }}
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-[#CF3528]"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex-grow relative overflow-hidden ">
          <motion.div
            ref={horizontalScrollContainerRef}
            style={{ x: xTranslate }}
            className="absolute inset-0 flex w-full h-full"
          >
            {pillars.map((pillar, i) => (
              <div
                key={pillar.id}
                className="flex-shrink-0 w-full h-full px-2 flex flex-col items-center justify-center"
              >
                {/*  Image */}
                <div className="w-full h-[45vh] sm:h-[55vh] relative mb-6">
                  <img
                    src={pillar.img}
                    alt={pillar.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/*   Card */}
                <div className="bg-[#00285EE5] text-white p-6 w-full rounded-3xl mt-2 z-30 min-h-[240px] flex flex-col">
                  <h3
                    className="text-lg sm:text-xl
 font-semibold mb-2"
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-lg sm:text-base leading-relaxed flex-grow">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Button */}
        <div className="pt-4 pb-8 ">
          <button className="bg-[#00285E] hover:bg-blue-800 text-white px-6 py-3 rounded-md  text-sm font-medium transition-colors cursor-pointer">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default CorePillarsMobile;
