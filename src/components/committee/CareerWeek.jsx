import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const careerCards = [
  { text: "Guest speakers from diverse professions" },
  { text: "Hands-on workshops" },
  { text: "Mentorship opportunities" },
  { text: "Career exploration activities" },
];

export default function CareerWeek() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 font-serif overflow-hidden ">
      <div className="flex flex-col md:flex-row items-stretch max-w-7xl mx-auto ">
        <motion.div
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col justify-between bg-[#f7f7f7] p-6 md:p-8 rounded-l-xl"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#00285E] mb-3">
              HQA Career Week
            </h3>

            <div className="flex items-center mb-4">
              <span className="w-16 border-t-2 border-red-900 mr-3"></span>
              <span className="text-red-900 font-semibold text-sm md:text-base">
                Sponsored by the Improvement Committee
              </span>
            </div>

            <p className="text-gray-700 mb-8 text-sm md:text-base">
              A two-week program introducing students to a variety of
              professions through guest speakers, hands-on workshops, mentorship
              opportunities, and career exploration activities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {careerCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 md:p-6 flex items-center shadow-md hover:shadow-lg transition"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center mr-4">
                  <FaCheck className="text-green-500" />
                </div>
                <p className="text-gray-800 text-sm md:text-base">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div className="relative bg-[#00285E] text-white rounded-xl p-6 md:p-8 shadow-2xl flex items-start hover:shadow-3xl transition">
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
              <div className="w-24 h-24 bg-[#004080] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="flex items-center">
              <FaArrowRight className="text-white text-3xl mr-4 flex-shrink-0" />
              <p className="text-sm md:text-base">
                This initiative helps students explore career paths, broaden
                their perspectives, and learn directly from real-world
                professionals.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 flex"
        >
          <img
            src="/committee/Career Week.jpg"
            alt="Career Week"
            className="w-full h-full object-cover rounded-r-xl  shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
