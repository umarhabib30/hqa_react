import React, { useRef, useEffect, useState } from "react";
import { SlideLeft, SlideRight } from "../../../utility/animation.js";
import { motion } from "framer-motion";
const ITBSSection = () => {
  const contentRef = useRef(null);
  const [textHeight, setTextHeight] = useState(0);

  const content = [
    {
      heading: "Language Skills",
      items: [
        "Vocabulary",
        "Reading Comprehension",
        "Writing Mechanics & Grammar",
        "Spelling",
      ],
    },
    {
      heading: "Mathematics",
      items: ["Math Concepts", "Computation Skills", "Problem Solving"],
    },
    {
      heading: "Science & Social Studies",
      items: [
        "General Science Understanding",
        "Social Studies Concepts",
        "Study Skills & Use of Resources",
      ],
    },
  ];

  useEffect(() => {
    if (contentRef.current) {
      setTextHeight(contentRef.current.clientHeight);
    }

    const handleResize = () => {
      if (contentRef.current) {
        setTextHeight(contentRef.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-12 px-10 font-serif pb-28 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left side  */}
        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
          ref={contentRef}
        >
          <motion.h1
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h2 italic text-[#CF3528]"
          >
            Iowa Test of Basic Skills{" "}
            <span className="text-[#00285E]">(ITBS)</span>
          </motion.h1>

          <motion.p
            variants={SlideRight(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-800 p"
          >
            In addition to STAAR, students in Grades 6–8 take the Iowa Test of
            Basic Skills, a nationally recognized benchmark to measure academic
            progress.
          </motion.p>

          <motion.h3
            variants={SlideRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#CF3528] h2 italic"
          >
            ITBS Evaluation Areas:
          </motion.h3>

          {content.map((section, idx) => (
            <motion.div
              variants={SlideRight(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={idx}
            >
              <h4 className="text-[#00285E] h2 mt-4">{section.heading}</h4>
              <ul className="list-disc list-inside text-gray-800 p mt-2">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.p
            variants={SlideRight(1.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-800 p mt-4"
          >
            This dual-assessment model ensures that students are not only
            meeting state expectations but are also nationally competitive.
          </motion.p>
        </motion.div>

        {/* Right side*/}
        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 h-[450px] md:h-[950px]"
        >
          <img
            src="/middel/Middle (7).jpg"
            alt="ITBS Image 1"
            className="w-full h-[85%] object-cover rounded-lg shadow-md"
          />
          {/*  images */}
          <div className="grid grid-cols-2 gap-4 h-[65%]">
            <img
              src="/middel/Middle (3).jpg"
              alt="ITBS Image 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <img
              src="/middel/Middle (6).jpg"
              alt="ITBS Image 3"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ITBSSection;
