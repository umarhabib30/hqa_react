import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const pillars = [
  {
    id: 1,
    para: "1990s–2000s: Vision Ignited",
    title: "Where Dreams Took Root",
    points: [
      "Pioneering scholars and community leaders envision a school that fuses Islamic values with academic rigor.",
      "A handful of dedicated families gather in a leased space, planting the seeds of HQA’s legacy.",
    ],
    img: "/histroy/book.jpg",
  },
  {
    id: 2,
    para: "2010s: Building the Foundation",
    title: "From Hope to a Home",
    points: [
      "Enrollment grows steadily as trust in our mission deepens.",
      "Launch of our signature Hifz-ul-Qur’an program alongside a strong STEM curriculum.",
      "HQA secures a permanent 10-acre campus, complete with modern classrooms and sacred prayer halls.",
    ],
    img: "/histroy/book.jpg",
  },
  {
    id: 3,
    para: "2020s–2025: Accelerating Excellence",
    title: "Innovation with Integrity",
    points: [
      "Cutting-edge technology labs, competitive sports programs, and full-spectrum Islamic Studies enrich student life.",
      "Achieved dual accreditation from respected educational bodies.",
      "Formed strategic partnerships to enhance student leadership and career readiness.",
    ],
    img: "/histroy/book.jpg",
  },
  {
    id: 4,
    para: "2026 & Beyond: Vision into Reality",
    title: "A Brighter Future, Insha’Allah",
    points: [
      "Plans underway for a state-of-the-art expansion and community engagement center.",
      "Our growing alumni network now leads in medicine, law, da’wah, entrepreneurship, education — and beyond.",
    ],
    img: "/histroy/book.jpg",
  },
  {
    id: 5,
    para: "Enrollment Finalization",
    title: "Portal Access and Admission Confirmation",
    points: [
      "Receive portal access credentials after administrative review.",
      "Access student information and real-time updates.",
      "Follow the portal for next enrollment steps and orientation.",
    ],
    img: "/admission/step4.jpg",
  },
];

const Steps = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(pillars.length - 1) * 100}%`]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[350vh] md:h-[500vh] bg-[#00295e] font-serif"
    >
      <div className="sticky top-0 h-screen flex flex-col px-4 md:px-10 overflow-hidden">
        <div className="flex-grow relative overflow-hidden md:mb-12">
          <motion.div
            style={{ x: xTranslate }}
            className="absolute inset-0 flex w-full h-full"
          >
            {pillars.map((pillar, i) => (
              <div key={i} className="flex-shrink-0 w-full h-full px-2 sm:px-4">
                <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                  {/* Image Section */}
                  <div className="w-[100%] md:w-[55%] h-[35vh] sm:h-[40vh] md:h-[80vh] relative mb-2 md:mb-0">
                    <img
                      src={pillar.img}
                      alt={pillar.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Card Section */}
                  <div className="w-[98%] md:w-[55%] flex relative md:-ml-12 z-30 -mt-12 md:mt-0">
                    <div className="bg-[#C8E1F8] rounded-md text-gray-800 p-6 sm:p-8 w-full flex flex-col overflow-visible shadow-lg">
                      {/* Using para key here instead of "Step X" */}
                      <p className="text-lg font-bold uppercase tracking-wider mb-1 text-[#cf3527]">
                        {pillar.para}
                      </p>

                      <h3 className="text-3xl md:text-5xl italic mb-6 text-[#00285E]">
                        {pillar.title}
                      </h3>

                      {/* Rendering points as a list */}
                      <ul className="space-y-4">
                        {pillar.points.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-800 text-lg md:text-xl leading-relaxed"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-[#00285E] flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
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
