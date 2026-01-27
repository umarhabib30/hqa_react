import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlideRight } from "../../../utility/animation.js";

const pillars = [
  {
    id: 1,
    title: "Application",
    text: `As early as December, apply for placement testing. Submit:`,
    bullets: [
      "Placement testing registration form",
      "Previous school report card",
      "Previous STAAR and/or standardized test reports as applicable.",
    ],
    para: "Note: HQA’s birthday cut-off date is September 30th of that school year.",
    img: "/enrollement/portal (1).jpeg",
  },
  {
    id: 2,
    title: "Placement Testing",
    text: `Call to schedule placement testing in February (on weekends).Placements tests are scheduled on a first-come-first-served basis, and space is limited.   `,
    bullets: [],
    para: "The examination covers material from the student’s previous year. For example, a student applying for 3rd grade will be tested on end-of-2nd grade material. The placement test is ",
    para2: "Note: There is a $30 placement testing fee per child.",
    img: "/enrollement/step1.jpg",
  },
  {
    id: 3,
    title: "Principal Review",
    text: `The Principal will review each student’s file and may request an interview with the student and parents. `,
    bullets: [],
    para: "Once the principal approves an application. You will then be notified by phone if your child passed and met the school requirements.",
    img: "/enrollement/principal.png",
  },
  {
    id: 4,
    title: "Registration",
    text: `When accepted, fill out the registration forms to guarantee your child’s seat or be placed on a waiting list. `,
    bullets: [],
    para: "Submit all documents Via student portal.Please note: in order to expedite your registration, submit all documents at once.   Incomplete application will not be processed.",
    img: "/enrollement/potal.png",
  },
];

const Steps = () => {
  const containerRef = useRef(null);
  const horizontalScrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll effect
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(pillars.length - 1) * 100}%`]
  );

  // Opacity transitions for timeline dots
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4],
    [1, 1, 0.5, 0.5]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5, 0.6],
    [0.5, 1, 1, 0.5]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7, 0.8],
    [0.5, 1, 1, 0.5]
  );
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0.5, 1, 1]);

  const opacities = [opacity1, opacity2, opacity3, opacity4];

  // Dot colors
  const dot1Color = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["#CF3528", "#CF3528"]
  );
  const dot2Color = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    ["#fff", "#CF3528"]
  );
  const dot3Color = useTransform(
    scrollYProgress,
    [0.5, 0.75],
    ["#fff", "#CF3528"]
  );
  const dot4Color = useTransform(
    scrollYProgress,
    [0.75, 1],
    ["#fff", "#CF3528"]
  );

  const dotColors = [dot1Color, dot2Color, dot3Color, dot4Color];

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] md:h-[500vh] pt-12 bg-white font-serif"
    >
      <div className="sticky top-0 h-screen flex flex-col px-10  overflow-hidden">
        <div className="pb-6">
          <motion.h2
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl text-gray-800  text-center"
          >
            <span className="text-[#CF3528]">HQA Enrollment Process</span>
            <br />
            <span className="text-[#00285E] italic">in 4 Simple Steps</span>
          </motion.h2>

          <div className="relative flex flex-row justify-between items-center mt-2 sm:mt-8 md:mt-10 px-4 sm:px-8 md:px-16 ">
            <div className="absolute left-0 right-0 top-[50%] h-0.5 bg-gray-300 z-0 mx-8 sm:mx-12 md:mx-16"></div>

            {pillars.map((_, i) => (
              <motion.div
                key={i}
                style={{ opacity: opacities[i] }}
                className="flex items-center justify-center flex-1 relative z-10"
              >
                <motion.div
                  style={{ backgroundColor: dotColors[i] }}
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-[#CF3528] z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex-grow relative overflow-hidden mb-8 md:mb-12">
          <motion.div
            ref={horizontalScrollContainerRef}
            style={{ x: xTranslate }}
            className="absolute inset-0 flex w-full h-full"
          >
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full h-full px-2 sm:px-4 "
              >
                <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                  {/* Image  */}
                  <div className="w-full md:w-[55%] h-[35vh] sm:h-[40vh] md:h-[65vh] relative mb-4 md:mb-0">
                    <img
                      src={pillar.img}
                      alt={pillar.title}
                      className="w-full h-full object-cover "
                    />
                  </div>

                  {/* Card */}
                  <div className="w-11/12  md:w-[45%] h-auto md:min-h-[50vh] flex relative md:-ml-12 z-30 -mt-12 md:mt-0">
                    <div className="bg-[#012974] text-white p-4 w-full flex flex-col overflow-y-auto shadow-lg">
                      <h3 className="text-xl sm:text-2xl italic mb-1 text-[#FAF1C4]">
                        Step {pillar.id}
                      </h3>
                      <h3 className="text-xl sm:text-2xl italic mb-1 text-[#FAF1C4]">
                        {pillar.title}
                      </h3>

                      <p className="p text-white leading-relaxed mb-1">
                        {pillar.text}
                      </p>

                      <ul className="list-disc list-inside p text-white mb-1 space-y-1">
                        {pillar.bullets.map((point, j) => (
                          <li key={j} className="break-words">
                            {point}
                          </li>
                        ))}
                      </ul>

                      <p className="p italic text-white mt-2">{pillar.para}</p>
                      <p className="p italic text-white mt-2">{pillar.para2}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
