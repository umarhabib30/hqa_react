import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const careerCards = [
  { text: "Programs evaluation" },
  { text: "Activities assessment" },
  { text: "Internal systems review" },
  { text: "Process optimization" },
];

export default function AnnualReview() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 font-serif overflow-hidden ">
      <div className="flex flex-col md:flex-row items-stretch max-w-7xl mx-auto ">
        <motion.div
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 flex"
        >
          <img
            src="/committee/Annual Review & Improvement.png"
            alt="Career Week"
            className="w-full h-full object-cover rounded-l-xl  shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
          />
        </motion.div>

        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col justify-between bg-[#f7f7f7] p-6 md:p-8 rounded-r-xl"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#00285E] mb-3">
              Annual Review & Improvement{" "}
            </h3>

            <div className="flex items-center mb-4">
              <span className="w-16 border-t-2 border-red-900 mr-3"></span>
              <span className="text-red-900 font-semibold text-sm md:text-base">
                Comprehensive Assessment
              </span>
            </div>

            <p className="text-gray-700 mb-8 text-sm md:text-base">
              Each year, the Committee conducts a structured review of programs,
              activities, internal systems, and processes supporting teaching,
              learning, and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {careerCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 md:p-6 flex items-center  shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-lg transition"
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

          <div className="relative bg-[#00285E] text-white rounded-xl p-6 md:p-8  flex items-start  shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition">
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
              <div className="w-24 h-24 bg-[#004080] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="flex items-center">
              <FaArrowRight className="text-white text-3xl mr-4 flex-shrink-0" />
              <p className="text-sm md:text-base">
                The Committee provides detailed recommendations to enhance
                efficiency, educational impact, and student experience across
                the school.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="text-center mt-12">
        <p className="text-gray-700 p  mb-4">
          Want to learn more about our initiatives?
        </p>
        <button className="inline-flex items-center bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:bg-[#004080] cursor-pointer hover:shadow-lg">
          Get In Touch
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
