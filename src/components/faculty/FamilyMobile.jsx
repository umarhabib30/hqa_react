import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const requirements = [
  "Professionally qualified in their field",
  "Trained in student-centered instructional practices",
  "Committed to integrating Islamic values into every lesson",
  "Actively engaged in professional development",
];

const FamilyMobile = () => {
  return (
    <section className="block md:hidden py-12 px-4 font-serif  overflow-hidden">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl italic text-center mb-6 text-[#CF3528]"
      >
        Meet our Family
      </motion.h1>

      <motion.p
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-base md:text-lg max-w-3xl mx-auto mb-6 text-gray-700"
      >
        Our teachers bring together a dynamic blend of academic credentials,
        classroom experience, and spiritual insight. Whether teaching core
        subjects, Quranic studies, or enrichment programs, they lead with
        passion, creativity, and care.
      </motion.p>

      <motion.p
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-lg font-semibold italic text-[#00285E] mb-6 text-center"
      >
        Each member of our faculty is:
      </motion.p>

      <motion.div
        variants={SlideRight(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col space-y-4"
      >
        {requirements.map((req, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex items-center p-4 rounded-lg shadow-black shadow-2xl w-full ${
                isOdd
                  ? "bg-[#00285E] text-white"
                  : "bg-[#C8E1F8] text-[#00285E]"
              }`}
            >
              <span
                className={`text-2xl mr-4 font-semibold ${
                  isOdd ? "text-white" : "text-[#00285E]"
                }`}
              >
                {index + 1}
              </span>
              <p className="text-base">{req}</p>
            </div>
          );
        })}
      </motion.div>
      <motion.p
        variants={SlideUp(1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 text-red-700  italic text-center text-xl"
      >
        “Teaching is not just about information — it’s about inspiration. At
        HQA, our teachers uplift minds and hearts.”
      </motion.p>
    </section>
  );
};

export default FamilyMobile;
