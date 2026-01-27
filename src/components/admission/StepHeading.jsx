import { motion } from "framer-motion";
import { SlideRight } from "../../../utility/animation.js";
const StepHeading = () => {
  return (
    <div>
      <motion.h2
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="h1 text-gray-800  text-center"
      >
        <span className="text-[#CF3528]">HQA Enrollment Process</span>
        <br />
        <span className="text-[#00285E] italic">in 4 Simple Steps</span>
      </motion.h2>
    </div>
  );
};

export default StepHeading;
