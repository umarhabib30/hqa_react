import React from "react";
import { FaPhoneAlt, FaBuilding } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const Question = () => {
  return (
    <section className="py-12 px-10 font-serif bg-[#FFFDF5] text-center">
      <motion.h1
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic text-[#00285E] mb-6"
      >
        Still Have <span className="text-[#CF3528]">Questions?</span>
      </motion.h1>
      <motion.p
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-600 mb-10 h2 italic"
      >
        We’re here to help!
      </motion.p>

      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
      >
        <div className="rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center text-center">
          <div className="bg-[#00285E] text-white p-4 rounded-full mb-4">
            <FaPhoneAlt size={24} />
          </div>
          <p className="text-gray-800 p">
            Prefer to speak directly? Call us at <br />
            <span className="text-[#CF3528] font-semibold">281-717-4622</span>
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 shadow-lg p-6 flex flex-col items-center text-center">
          <div className="bg-[#00285E] text-white p-4 rounded-full mb-4">
            <FaBuilding size={24} />
          </div>
          <p className="text-gray-800 p">
            Want to visit? Schedule a tour <br />
            <a
              href="https://hqasis.com/visitor/form"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CF3528] font-semibold cursor-pointer hover:underline"
            >
              Here
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Question;
