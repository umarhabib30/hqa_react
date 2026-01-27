import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const Slogan = () => {
  return (
    <section className="flex justify-center items-center py-12  sm:px-10 font-serif  overflow-hidden">
      <div className="relative w-[96%] bg-[#BCDDFC] bg-cover bg-center py-6 flex flex-col items-center justify-center text-center rounded-lg shadow-lg">
        <div className="relative w-full flex items-center justify-center mb-16 md:mb-20">
          <motion.div
            variants={SlideUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-shrink-0 px-4"
          >
            <img
              src="/logo.png"
              alt="Heritage Logo"
              className="h-20 w-20 mx-auto"
            />
          </motion.div>
        </div>

        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 max-w-6xl slogan px-4 md:px-6 mb-4"
        >
          “Our Board believes that a strong Islamic education doesn’t just
          prepare students for college — it prepares them for life and the
          Hereafter.”
        </motion.p>
        <motion.p
          variants={SlideUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 max-w-3xl font-bold text-[28px] mb-8 md:mb-12 px-4"
        >
          — Chairman of Board
        </motion.p>

        <motion.div
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-center mt-8"
        >
          <div className="flex-grow h-px bg-[#CF3528] mr-4 max-w-[40%]"></div>
          <div className="flex-shrink-0 px-4">
            <img
              src="/rcommaa.png"
              alt="Quote Icon"
              className="h-10 w-10 mx-auto"
            />
          </div>
          <div className="flex-grow h-px bg-[#CF3528] ml-4 max-w-[40%]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slogan;
