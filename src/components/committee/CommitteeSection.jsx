import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

export default function CommitteeSection() {
  return (
    <section className="w-full px-6 py-20 flex justify-center font-serif bg-[#f8fafc]">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-lg">
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-10 flex flex-col justify-center"
        >
          <h2 className="h1 text-[#052B5B] mb-6">Committee Introduction</h2>

          <p className="text-gray-700 p leading-relaxed mb-6">
            The HQA Improvement Committee is a dedicated team focused on
            elevating the academic environment, enhancing the student
            experience, and improving overall school operations at Houston Quran
            Academy.
          </p>

          <p className="text-gray-700 p leading-relaxed mb-6">
            Led by one Committee Head and supported by five committed Members,
            the team collaborates with school leadership, staff, and families to
            ensure steady progress throughout the year.
          </p>

          <h3 className="h2 font-semibold text-[#052B5B] mb-4">
            Our mission is simple:
          </h3>

          <p className="text-gray-700 p leading-relaxed">
            help HQA grow stronger, more efficient, and more inspiring for every
            student.
          </p>
        </motion.div>

        <motion.div
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white"
        >
          <img
            src="/committee/Our mission.jpeg"
            alt="Committee"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
