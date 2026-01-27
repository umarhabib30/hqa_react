import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation";
const Notes = () => {
  return (
    <section className="bg-[#FFFDF5] py-28 px-10 flex flex-col items-center text-center font-serif">
      <div className="relative w-[95%] flex items-center justify-center mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <span className="relative bg-[#fdfbf7] px-4">
          <img
            src="/logo.png"
            alt="Heritage Logo"
            className="h-12 w-12 mx-auto"
          />
        </span>
      </div>

      <motion.h1
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[#252626] text-2xl sm:text-3xl font-serif h1 italic mb-4"
      >
        Important Enrollement Notes
      </motion.h1>

      <motion.ul
        variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-800 max-w-6xl p list-disc pl-6 text-left space-y-2"
      >
        <li>
          Enrollement is first-come, first-served. Prompt action at each step is
          crucial.
        </li>
        <li>
          For support or clarification, reach out to our Admissions Office at{" "}
          <a href="mailto:skhalid@hquranacademy.org" className="">
            skhalid@hquranacademy.org
          </a>{" "}
          or call <span className="">281 717 4622</span>.
        </li>
      </motion.ul>
    </section>
  );
};

export default Notes;
