import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

export default function HQAPTOSection() {
  return (
    <section className="relative bg-[#F9FAFB] py-12 px-10 overflow-hidden font-serif">
      <div className="absolute top-10 left-10 w-44 h-44 bg-[#FDE7EB] rounded-full opacity-70"></div>

      <motion.div
        variants={SlideUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center relative z-10 mb-16 px-4"
      >
        <span className="inline-block bg-[#EEF2FF] text-[#00285E] px-5 py-2 rounded-full p">
          Our Mission & Impact
        </span>

        <h2 className="h1 text-[#00285E] mt-6">About the HQA PTO</h2>

        <p className="text-[#4B5563] max-w-2xl mx-auto mt-4 p">
          The HQA PTO brings together parents, teachers, and the wider community
          to make our school the best it can be — all guided by Islamic values.
        </p>
      </motion.div>

      <div className="relative z-10  grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        <motion.div
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="relative cursor-pointer"
        >
          <div
            className="
      w-full h-[200px] md:h-[380px] 
      bg-[#E5E7EB] 
      rounded-2xl 
      transform rotate-[3deg]
      shadow-md
    "
          ></div>

          <img
            src="/pto/childrens.jpg"
            alt="children"
            className="absolute top-4 left-4 w-[92%] cursor-pointer rounded-2xl shadow-xl border-4 border-white"
          />

          <div
            className="
      absolute bottom-0 md:bottom-6 left-[14%] md:left-[54%]
      bg-white 
      py-3 md:py-6 px-1 md:px-6 
      rounded-xl shadow-lg 
      flex items-center gap-3 
      min-w-[200px] 
    "
          >
            <img
              src="/pto/percentIcon.png"
              className="w-8 h-8 object-contain"
              alt="icon"
            />

            <div className="flex flex-col leading-tight">
              <p className="p font-bold text-[#00285E] text-lg">98%</p>
              <span className="text-sm text-gray-500">Family Satisfaction</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE TEXT */}
        <motion.div
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-5 pr-4"
        >
          <h3 className="h2 text-[#00285E]">Why Join the HQA PTO?</h3>

          <p className="text-[#4B5563] p">
            From bake sales and teacher appreciation meals to curriculum
            enrichment tools, the PTO works to make a meaningful and lasting
            impact. Your involvement builds ummah — our shared sense of family
            and purpose.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 p">
              <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full">
                <Check className="text-white" size={16} />
              </div>
              <span>Build lifelong friendships</span>
            </li>

            <li className="flex items-start gap-3 p">
              <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full">
                <Check className="text-white" size={16} />
              </div>
              <span>Support academic excellence</span>
            </li>

            <li className="flex items-start gap-3 p">
              <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full">
                <Check className="text-white" size={16} />
              </div>
              <span>Create memorable experiences</span>
            </li>

            <li className="flex items-start gap-3 p">
              <div className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full">
                <Check className="text-white" size={16} />
              </div>
              <span>Strengthen Islamic values</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
