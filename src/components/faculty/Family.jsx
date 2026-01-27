import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

const requirements = [
  "Professionally qualified in their field",
  "Trained in student-centered instructional practices",
  "Committed to integrating Islamic values into every lesson",
  "Actively engaged in professional development",
];

const Family = () => {
  return (
    <section className="py-12 px-10 font-serif overflow-hidden">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic  text-center mb-6 text-[#CF3528]"
      >
        Meet our Family
      </motion.h1>
      <motion.p
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center p max-w-6xl italic  mx-auto mb-10 text-gray-700"
      >
        Our teachers bring together a dynamic blend of academic credentials,
        classroom experience, and spiritual insight. Whether teaching core
        subjects, Quranic studies, or enrichment programs, they lead with
        passion, creativity, and care.
      </motion.p>
      <motion.p
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-lg md:text-3xl italic text-[#00285E] mb-6"
      >
        Each member of our faculty is:
      </motion.p>

      <div className="w-full grid md:grid-cols-2 items-stretch gap-6">
        {/* Left Side  */}
        <motion.div
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col space-y-4 h-full"
        >
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0;
            return (
              <div
                key={index}
                style={{
                  width: `calc(100% - ${index * 2}%)`,
                }}
                className={`flex items-center p-6 clip-card transition-all duration-300
                  ${
                    isDark
                      ? "bg-[#00285E] text-white"
                      : "bg-[#BCDDFC] text-[#00285E]"
                  }
                `}
              >
                <p className="p">{req}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Right Side  */}
        <motion.div
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative shadow-lg overflow-hidden w-full h-full clip-left"
        >
          <img
            src="/faculty/meet .jpeg"
            alt="Library"
            className="w-full h-[400px] md:h-[380px] object-cover"
          />
        </motion.div>
      </div>
      <motion.p
        variants={SlideUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 text-red-700 italic text-center h2 mx-auto"
      >
        “Teaching is not just about information — it’s about inspiration. At
        HQA, our teachers uplift minds and hearts.”
      </motion.p>
    </section>
  );
};

export default Family;
