import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../../utility/animation";
const ScholarshipSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12 font-serif bg-[#FFFDF5] overflow-hidden ">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <motion.h1
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 "
        >
          <span className="text-[#00285E] italic">
            Scholarships & <br />
          </span>{" "}
          <span className="text-[#CF3528] italic">Financial Aid</span>
        </motion.h1>
        <motion.h2
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h2 italic font-semibold"
        >
          Empowering Students, Honoring Excellence
        </motion.h2>

        <motion.p
          variants={SlideRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 p"
        >
          At Houston Quran Academy ,our scholarship program reflects our
          commitment to supporting outstanding students while encouraging Quran
          memorization and character development.
        </motion.p>
      </div>

      {/* Right Image */}
      <motion.div
        variants={SlideLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src="/scholarship/Scholarship and financial aid.jpg"
          alt="Scholarship Graduate"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </motion.div>
    </section>
  );
};

export default ScholarshipSection;
