import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation.js";

const faqs = [
  {
    q: "What curriculum does HQA follow?",
    a: "HQA integrates Islamic studies with a rigorous academic curriculum, ensuring a balance of deen and dunya.",
  },
  {
    q: "Do you offer extracurricular activities?",
    a: "Yes, students can participate in robotics, sports, art, debate clubs, and more.",
  },
  {
    q: "How do teachers support individualized learning?",
    a: "Teachers provide personalized mentorship, small group sessions, and tailored assessments.",
  },
  {
    q: "Is financial aid available for families?",
    a: "Yes, we offer scholarships and financial assistance for eligible families.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-10 font-serif overflow-hidden">
      <motion.h1
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 italic text-[#00285E] mb-12"
      >
        Parent Questions, Answered
      </motion.h1>

      <motion.div
        variants={SlideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-6"
      >
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 ${
              openIndex === i ? "bg-white" : "bg-[#F3F4FF]"
            }`}
            onClick={() => toggleFAQ(i)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="p font-bold text-[#00285E]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className=" p italic w-full">{item.q}</h3>
              </div>
              <button className="p">
                {openIndex === i ? <FaMinus /> : <FaPlus />}
              </button>
            </div>

            {openIndex === i && (
              <>
                <div className="border-t border-gray-300 my-4"></div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.a}
                </p>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQs;
