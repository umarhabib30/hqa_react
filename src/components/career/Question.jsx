import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Question = () => {
  return (
    <section className=" py-20 px-6 flex flex-col items-center justify-center text-center font-serif  overflow-hidden">
      <motion.h1
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic text-[#CF3528] mb-12"
      >
        Questions?{" "}
      </motion.h1>

      <motion.p
        variants={SlideLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl p text-gray-800  mb-12"
      >
        Reach out to our HR department for more information:{" "}
      </motion.p>

      <motion.h2
        variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h2 italic text-[#CF3528] mb-6"
      >
        281-717-4877 <br />
        <br />
        hr@hqafund.org
      </motion.h2>
    </section>
  );
};

export default Question;
