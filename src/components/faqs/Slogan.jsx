import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Slogan = () => {
  return (
    <section className="relative bg-[#C8E1F8]  py-12  px-10 flex items-center justify-center text-center font-serif">
      <div className="relative w-full  flex flex-col items-center justify-center">
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-center mb-16 md:mb-20"
        >
          <div className="flex-grow h-px bg-black mr-4 max-w-[40%]"></div>

          <div className="flex-shrink-0 px-4">
            <img
              src="/logo.png"
              alt="Heritage Logo"
              className="h-20 w-20 mx-auto"
            />
          </div>
          <div className="flex-grow h-px bg-black ml-4 max-w-[40%]"></div>
        </motion.div>

        <motion.p
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-black slogan max-w-6xl px-4 md:px-6 mb-4"
        >
          “As a working parent, I value the extended care and safe
          environment—HQA goes above and beyond.”
        </motion.p>
        <motion.p
          variants={SlideRight(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#00285E] max-w-4xl font-bold italic text-[28px] mb-8 md:mb-12 px-4"
        >
          — Mr. Rahim, Parent of Two
        </motion.p>

        <motion.div
          variants={SlideUp(1.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-center mt-8"
        >
          <div className="flex-grow h-px bg-black mr-4 max-w-[40%]"></div>

          <div className="flex-shrink-0 px-4">
            <img
              src="/bcommaa.png"
              alt="Quote Icon"
              className="h-10 w-10 mx-auto"
            />
          </div>

          <div className="flex-grow h-px bg-black ml-4 max-w-[40%]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slogan;
