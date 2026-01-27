import React, { useRef, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../../utility/animation.js";

const ITBSSection = () => {
  const contentRef = useRef(null);
  const [textHeight, setTextHeight] = useState(0);

  const content = [
    {
      heading: "Language Skills",
      items: [
        "Vocabulary",
        "Reading Comprehension",
        "Language & Writing Skills",
        "Word Analysis (Grades K–2)",
        "Listening Skills (Grades K–2)",
        "Spelling (Grades 4–5)",
      ],
    },
    {
      heading: "Mathematics",
      items: ["Concepts & Estimation", "Math Computation", "Problem Solving"],
    },
    {
      heading: "Science & Social Studies",
      items: [
        "Scientific Inquiry",
        "Social Studies Knowledge",
        "Interpreting Information & Study Skills",
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
        {/* Left side */}
        <div className="flex flex-col gap-6" ref={contentRef}>
          <motion.h1
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h1 italic text-[#CF3528]"
          >
            Iowa Test of Basic Skills{" "}
            <span className="text-[#00285E]">(ITBS)</span>
          </motion.h1>

          <motion.p
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-800 p"
          >
            In addition to STAAR, students in Grades K–5 take the ITBS annually
            to measure performance against national standards. It evaluates:
          </motion.p>

          {content.map((section, idx) => (
            <motion.div
              variants={SlideRight(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={idx}
            >
              <h4 className="text-[#00285E] h2 mt-4">{section.heading}</h4>
              <ul className="list-disc list-inside text-gray-800 p mt-2 space-y-1">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.p
            variants={SlideRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-800 p mt-4"
          >
            These assessments help us identify areas of strength and growth
            while personalizing instruction for every learner.
          </motion.p>
          <div>
            <motion.button
              variants={SlideRight(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center cursor-pointer justify-center gap-2 bg-[#00285E] text-white px-6 py-3 rounded-md font-medium hover:bg-[#CF3528] transition-all duration-300"
            >
              <span>Download Curriculum Guide</span>
              <FaArrowRight className="text-white text-lg" />
            </motion.button>
          </div>
        </div>

        {/* Right side - Images */}
        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:h-auto"
        >
          {/* Large top image  */}
          <img
            src="/elementary/element (10).jpg"
            alt="ITBS Image 1"
            className="w-full h-90 md:h-120 object-cover rounded-lg shadow-md"
          />
          {/* Two side-by-side images  */}
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/elementary/element (3).jpg"
              alt="ITBS Image 2"
              className="w-full h-50 md:h-110 object-cover rounded-lg shadow-md"
            />
            <img
              src="/elementary/element (13).jpg"
              alt="ITBS Image 3"
              className="w-full h-50 md:h-110 object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ITBSSection;
