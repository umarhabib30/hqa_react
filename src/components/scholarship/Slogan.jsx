import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";
const Slogan = () => {
  return (
    <section className="relative bg-[#C8E1F8]  py-12  px-10 flex items-center justify-center text-center font-serif">
      <motion.div
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full md:w-[96%]  flex flex-col items-center justify-center"
      >
        <div className="relative w-full flex items-center justify-center mb-16 md:mb-20">
          <div className="flex-grow h-px bg-white mr-4 max-w-[40]"></div>

          <div className="flex-shrink-0 px-4">
            <img
              src="/logo.png"
              alt="Heritage Logo"
              className="h-20 w-20 mx-auto"
            />
          </div>
          <div className="flex-grow h-px bg-white ml-4 max-w-[40]"></div>
        </div>

        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-black  slogan px-2 mb-4"
        >
          “Graduating from HQA laid the groundwork for my college success. The
          disciplined study habits and ethical leadership skills I acquired here
          prepared me to thrive at the University of Texas at Austin.”
        </motion.p>
        <motion.p
          variants={SlideUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#00285E] max-w-3xl italic font-bold text-[28px] mb-8 md:mb-12 px-4"
        >
          — Ms. Amina Rahman, Parent{" "}
        </motion.p>

        <div className="relative w-full flex items-center justify-center mt-8">
          <div className="flex-grow h-px bg-white mr-4 max-w-[40]"></div>

          <div className="flex-shrink-0 px-4">
            <img
              src="/bcommaa.png"
              alt="Quote Icon"
              className="h-10 w-10 mx-auto"
            />
          </div>

          <div className="flex-grow h-px bg-white ml-4 max-w-[40]"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Slogan;
