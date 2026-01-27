import { motion } from "framer-motion";
import { SlideRight } from "../../../utility/animation.js";
const Slogan = () => {
  return (
    <section className="flex justify-center items-center py-12 md:px-10 font-serif overflow-hidden">
      <motion.div
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full md:w-[96%] bg-[#BCDDFC] bg-cover bg-center py-6 flex flex-col items-center justify-center text-center rounded-lg shadow-lg"
      >
        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-center mb-16 md:mb-20"
        >
          <div className="flex-shrink-0 px-4">
            <img
              src="/logo.png"
              alt="Heritage Logo"
              className="h-20 w-20 mx-auto"
            />
          </div>
        </motion.div>

        <motion.p
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 max-w-6xl slogan px-4 md:px-6 mb-4"
        >
          “The open-door policy here makes every voice matter. Administrators,
          teachers, and students engage openly—fostering trust, collaboration,
          and a genuine sense of belonging.”
        </motion.p>
        <motion.p
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 max-w-3xl font-bold italic text-[28px] mb-8 md:mb-12 px-4"
        >
          — Mr. Ali Shah, Operations Manager
        </motion.p>

        <motion.div
          variants={SlideRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-center mt-8"
        >
          <div className="flex-grow h-px bg-[#00285E] mr-4 max-w-[40%]"></div>
          <div className="flex-shrink-0 px-4">
            <img
              src="/bcommaa.png"
              alt="Quote Icon"
              className="h-10 w-10 mx-auto"
            />
          </div>
          <div className="flex-grow h-px bg-[#00285E] ml-4 max-w-[40%]"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Slogan;
