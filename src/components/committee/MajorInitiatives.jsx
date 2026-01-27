import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
export default function MajorInitiatives() {
  return (
    <section className="py-16 px-6 bg-[#FFFFFFCC] font-serif">
      <motion.div
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="h1  text-[#00285E]">Major Annual Initiatives</h2>
        <p className="mt-3 text-gray-700 p">
          Strategic programs designed to enrich the student experience and
          strengthen our community
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-xl max-w-7xl mx-auto overflow-hidden">
        <motion.div
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="/committee/Family Picnic.jpg"
            alt="Family Picnic"
            className="w-full h-64 md:h-80 object-cover rounded-l-xl"
          />
        </motion.div>

        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 p-8 flex flex-col justify-center rounded-r-xl bg-[#f7f7f7]"
        >
          <h3 className="text-2xl  text-[#00285E] h1 mb-2">Family Picnic</h3>

          <div className="flex items-center mb-4">
            <span className="w-16 border-t-2 border-red-900 mr-3"></span>
            <span className="text-[#CF3528] font-semibold">
              Co-Organized with PTO
            </span>
          </div>

          <p className="text-gray-700 p">
            A joyful community event bringing together families, staff, and
            students for games, food, and connection—celebrating unity and
            school spirit at HQA.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
