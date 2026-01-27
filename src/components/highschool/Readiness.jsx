import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation.js";
import { motion } from "framer-motion";
const Readiness = () => {
  const cards = [
    {
      id: 1,
      border: "border-[#BCDDFC]",
      text: "PSAT & SAT preparation embedded in curriculum",
    },
    {
      id: 2,
      border: "border-[#00285E]",
      text: "Academic Advising to build individualized college plans",
    },
    {
      id: 3,
      border: "border-[#BCDDFC]",
      text: "Leadership & Service Opportunities that strengthen resumes and character",
    },
    {
      id: 4,
      border: "border-[#00285E]",
      text: "Islamic Ethics & Worldview Integration in all subjects",
    },
  ];

  return (
    <section className="w-full font-serif py-12 px-4 sm:px-10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#CF3528] mb-6  h1 italic"
        >
          <span className="text-[#00285E]">College & Career </span>
          Readiness
        </motion.h1>
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 p max-w-6xl mx-auto leading-relaxed text-center"
        >
          Our college-prep pathway ensures students are well-equipped to
          navigate their academic future:
        </motion.p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side  */}
        <motion.div
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex items-start gap-4 border-4 bg-white ${card.border} rounded-xl shadow-xl p-6 sm:p-8 transition-transform duration-300 hover:scale-[1.02]`}
            >
              <div className="w-12 h-12 flex items-center justify-center text-[#00285E] font-bold text-4xl">
                {card.id}
              </div>
              <p className="text-gray-800 p ">{card.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Right Side  */}
        <motion.div
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-64 sm:h-80 md:h-auto flex"
        >
          <img
            src="/highschool/high school (9).jpg"
            alt="Graduation caps"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      <motion.div
        variants={SlideUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="h2 italic text-gray-900 max-w-9xl mx-auto leading-relaxed">
          “At HQA, we don’t just prepare students for college. We prepare them
          for life—with confidence, character, and conviction.”
        </p>
      </motion.div>
    </section>
  );
};

export default Readiness;
