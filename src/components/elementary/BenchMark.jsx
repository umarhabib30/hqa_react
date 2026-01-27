import { SlideUp, SlideLeft, SlideRight } from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BenchMark = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full flex flex-col items-center py-12 px-10 font-serif overflow-hidden"
    >
      <motion.h1
        variants={SlideUp(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="h1 italic text-center mb-6 md:mb-12"
      >
        <span className="text-[#00285E]">Benchmark Testing </span>{" "}
        <span className="text-[#CF3528]"> & Assessments</span>
      </motion.h1>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row  gap-8">
        <motion.div
          variants={SlideRight(0.8)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="md:w-2/5 w-full"
        >
          <img
            src="/elementary/element (11).jpg"
            alt="STAAR Exam"
            className="w-full h-90 rounded-lg object-cover"
          />
        </motion.div>

        <motion.div
          variants={SlideLeft(0.8)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="md:w-3/5 w-full flex flex-col justify-start"
        >
          <h3 className="h2 italic  text-[#00285E] mb-8">
            <span className="text-[#CF3528]">STAAR Testing </span>
          </h3>
          <p className="text-gray-800 p max-w-xl mb-6">
            Houston Quran Academy students participate in the State of Texas
            Assessments of Academic Readiness (STAAR®), which includes:
          </p>
          <ul className="list-disc list-inside p text-gray-800 space-y-2 pl-2">
            <li>Math (Grades 3–5)</li>
            <li>Reading Language Arts (RLA) (Grades 3–5)</li>
            <li>Science (Grade 5)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default BenchMark;
