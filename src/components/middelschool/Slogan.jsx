import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SlideRight } from "../../../utility/animation.js";
import { motion } from "framer-motion";
const Slogan = () => {
  return (
    <section className="flex justify-center items-center py-12 px-10 font-serif">
      <div className="relative w-[96%] bg-[#00285E] bg-cover bg-center py-18 flex flex-col items-center justify-center text-center rounded-lg shadow-lg overflow-hidden">

        <motion.h1
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic text-white pb-18 px-1  "
        >
          Academic Excellence
        </motion.h1>
        <motion.p
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white max-w-6xl  p px-4 md:px-6 mb-4"
        >
          Our Middle School curriculum is designed to challenge, inspire, and
          empower students in Grades 6 through 8. Core subjects are taught by
          passionate, subject-specialist educators who blend high academic
          expectations with moral and spiritual guidance.
        </motion.p>
        <motion.button
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-2 cursor-pointer bg-white text-red-700 px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105 mt-8"
        >
          Student Life <FaArrowRight className="text-red-700" />
        </motion.button>
      </div>
    </section>
  );
};

export default Slogan;
