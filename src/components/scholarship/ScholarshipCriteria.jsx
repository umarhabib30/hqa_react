import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const ScholarshipCriteria = () => {
  const criteria = [
    "Families of previous recipients are not eligible in the current year.",
    "Only one scholarship per family will be awarded annually.",
    "Applications must be submitted before the deadline—late entries will not be considered.",
    "Parents must complete the application to nominate their child.",
    "Scholarship covers 2 months of full tuition.",
    "A minimum of 7 scholarships will be granted (based on applicants).",
    "No teacher recommendation letters are needed.",
    "In the event of a tie: Runner-up receives 1 month of tuition. If both top students tie, preference goes to the student with more siblings enrolled at HQA.",
  ];

  return (
    <section className="w-full px-6 py-12 bg-[#FFFDF5] font-serif overflow-hidden">
      <motion.h1
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic text-[#00285E] mb-10"
      >
        Scholarship Criteria
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Criteria List */}
        <motion.div
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {criteria.map((item, index) => (
            <div
              key={index}
              className={`p-4  shadow-md p ${
                index % 2 === 0
                  ? "bg-[#0B2E4D] text-white"
                  : "bg-[#BCDDFC] text-[#00285E]"
              }`}
            >
              {item}
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <img
            src="/scholarship/Scholarship Criteria-2.jpeg"
            alt="Library"
            className="w-full h-56 sm:h-64 lg:h-96 object-cover  shadow"
          />
          <img
            src="/scholarship/Class room.jpg"
            alt="Classroom"
            className="w-full h-56 sm:h-64 lg:h-70 object-cover  shadow"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScholarshipCriteria;
