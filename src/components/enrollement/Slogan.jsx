import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Slogan = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20 px-10 flex items-center justify-center text-center font-serif  overflow-hidden"
      style={{ backgroundImage: "url('/inquire/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-red-700/70"></div>


      <div className="relative w-full  flex flex-col items-center justify-center">
       
        <motion.div
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-center mb-16 md:mb-20"
        >

          <div className="flex-grow h-px bg-white mr-4 max-w-[40%]"></div>

        
          <div className="flex-shrink-0 px-4">
            <img
              src="/logo.png"
              alt="Heritage Logo"
              className="h-16 w-16 mx-auto"
            />
          </div>

          <div className="flex-grow h-px bg-white ml-4 max-w-[40%]"></div>
        </motion.div>

        <motion.p
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white max-w-6xl slogan px-4 md:px-6 mb-4"
        >
          “I transferred here last year, and the warm welcome from teachers and
          peers made me feel at home instantly.”
        </motion.p>
        <motion.p
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white max-w-3xl font-bold text-[28px] italic mb-8 md:mb-12 px-4"
        >
          — Amina K., 7th Grade{" "}
        </motion.p>

        <motion.div
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-center mt-8 md:mt-16"
        >
     
          <div className="flex-grow h-px bg-white mr-4 max-w-[40%]"></div>

         
          <div className="flex-shrink-0 px-4">
            <img
              src="/admission/wcommaa.png"
              alt="Quote Icon"
              className="h-16 w-16 mx-auto"
            />
          </div>

          <div className="flex-grow h-px bg-white ml-4 max-w-[40%]"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slogan;
