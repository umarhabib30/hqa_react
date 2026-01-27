import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
export default function SponsorCTA() {
  return (
    <div className="bg-[#BCDDFC] py-36 flex flex-col items-center text-center px-4 font-serif">
      <motion.h2
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" italic  text-gray-800 mb-6 h1"
      >
        Interested in Becoming Our Next Sponsor?
      </motion.h2>

      <motion.button
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white cursor-pointer text-red-700 p px-8 py-3 rounded-lg transition-colors duration-300 hover:bg-blue-700 hover:text-white"
      >
        Become a Sponsor
      </motion.button>
    </div>
  );
}
