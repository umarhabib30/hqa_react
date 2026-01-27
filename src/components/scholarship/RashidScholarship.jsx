import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation";
const RashidScholarship = () => {
  return (
    <section className="flex flex-col items-center px-10 py-12 font-serif">
      {/* Title */}
      <motion.h1
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[#CF3528] italic h1 text-center w-full mb-8"
      >
        Dr. Rashid's Scholarship
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        <div className="relative w-full md:w-2/5 flex justify-center order-1">
          <div className="absolute -left-2 sm:left-6 -bottom-3 w-[85%] max-w-xs h-[90%] bg-[#CF3528] rounded-lg"></div>

          <img
            src="/scholarship/owner.png"
            alt="Dr. Rashid"
            className="relative z-10 w-full max-w-sm cursor-pointer rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right  */}
        <div className="w-full md:w-3/5 space-y-4 text-center md:text-left order-2">
          <motion.h2
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h2 italic text-gray-800 text-left "
          >
            In Honor of Dedication to <br /> the Holy Quran
          </motion.h2>

          <motion.p
            variants={SlideRight(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-800 p text-left"
          >
            Dr. Muhammad Rashid and his wife have established a heartfelt
            scholarship program in honor of serious HQA students who are
            committed to memorizing the Holy Quran. While open to all eligible
            students, priority is given to those in financial need when more
            than one top candidate is identified.
          </motion.p>

          <a
            href="https://uwf.edu/hmcse/departments/electrical-and-computer-engineering/faculty/dr-muhammad-h-rashid.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              variants={SlideRight(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 bg-[#002147] rounded-md text-white px-5 py-2 cursor-pointer shadow hover:bg-[#00152b] transition"
            >
              Dr. Rashid's Full Biography
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RashidScholarship;
