import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

const StartSection = () => {
  const [open, setOpen] = useState("quran");

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="w-full py-12 px-6 md:px-12 font-serif">
      <div className="flex justify-center mb-10">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-center max-w-4xl leading-snug"
        >
          <span className="text-[#00285E]">A Strong Start in </span>
          <span className="text-[#CF3528]">
            Quran, Arabic & Islamic Studies
          </span>
        </motion.h1>
      </div>

      <motion.div
        variants={SlideUp(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        <div className="flex flex-col space-y-4 h-full">
          <div className="border rounded-lg shadow-md overflow-hidden flex flex-col">
            <button
              onClick={() => toggle("quran")}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-3xl bg-[#00285E] text-white"
            >
              Quran
              {open === "quran" ? (
                <FaChevronUp className="text-white" />
              ) : (
                <FaChevronDown className="text-white" />
              )}
            </button>
            {open === "quran" && (
              <div className="px-6 pb-4 bg-white text-gray-700 mt-8 p">
                Each day, students attend three distinct Quran classes:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Memorization</li>
                  <li>Meaning/Understanding</li>
                  <li>Revision</li>
                </ul>
                <p className="mt-2">
                  This holistic approach ensures depth, accuracy, and lifelong
                  retention.
                </p>
              </div>
            )}
          </div>

          <div className="border rounded-lg shadow-md overflow-hidden flex flex-col ">
            <button
              onClick={() => toggle("arabic")}
              className="w-full flex justify-between items-center px-6 py-4 text-left  text-3xl bg-[#00285E] text-white"
            >
              Arabic Language
              {open === "arabic" ? (
                <FaChevronUp className="text-white" />
              ) : (
                <FaChevronDown className="text-white" />
              )}
            </button>
            {open === "arabic" && (
              <div className="px-6 pb-4 bg-white mt-8 text-gray-700 p">
                Students build proficiency in Arabic through grammar,
                vocabulary, and conversation practice, ensuring they can
                understand classical and modern texts with confidence.
              </div>
            )}
          </div>

          <div className="border rounded-lg shadow-md overflow-hidden flex flex-col">
            <button
              onClick={() => toggle("islamic")}
              className="w-full flex justify-between items-center px-6 py-4 text-left  text-3xl bg-[#00285E] text-white"
            >
              Islamic Studies
              {open === "islamic" ? (
                <FaChevronUp className="text-white" />
              ) : (
                <FaChevronDown className="text-white" />
              )}
            </button>
            {open === "islamic" && (
              <div className="px-6 pb-4 bg-white text-gray-700 mt-8 p">
                Our curriculum covers Seerah, Fiqh, Aqeedah, and Akhlaaq,
                helping students connect Islamic principles with everyday life
                and develop strong moral character.
              </div>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="w-full h-full">
          <img
            src="/memorizaation/start.jpg"
            alt="Students learning"
            className="w-full h-100 object-cover rounded-lg shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default StartSection;
