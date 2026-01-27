import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation";

const Growth = () => {
  return (
    <section className="w-full font-serif py-12 px-6 lg:px-16">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1  italic text-center mb-12 text-[#00285E]"
      >
        Designed for Your Growth
      </motion.h1>

      <motion.div
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2  items-center"
      >
        {/* Left Side  */}
        <div className="relative flex justify-center mb-12">
          <div className="w-100 h-100 border-4 border-[#00285E] rounded-tr-[80px] translate-y-8 relative">
            <div className="absolute -top-6 -left-2 w-86 md:w-96 h-104 bg-[#00285E] rounded-tr-[100px] flex items-center justify-center shadow-lg">
              <img
                src="/academics/growth.png"
                alt="Growth"
                className=" w-82 md:w-92 h-142 bottom-0 right-2  absolute object-cover rounded-tr-[60px]"
              />
            </div>
          </div>
        </div>

        {/* Right Side  */}
        <motion.div
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 text-gray-700 p"
        >
          <p>
            Whether your child is mastering advanced math, progressing through
            Hifz, or exploring subjects that inspire future college and career
            goals, Houston Quran Academy offers a flexible and enriching
            curriculum tailored to each learner.
          </p>
          <p>
            From Qur’anic memorization and Islamic studies to rigorous
            academics—including advanced science, math, and humanities—our
            programs are designed to support your child’s unique strengths and
            aspirations. With dedicated teachers and a values-driven
            environment, your child will be equipped to succeed in high school,
            college, and life—with confidence, faith, and purpose.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Growth;
