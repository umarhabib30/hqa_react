import { FaArrowRight } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation.js";
import { motion } from "framer-motion";
const Values = () => {
  return (
    <section className="w-full font-serif py-12 px-10 overflow-hidden">
      <div className="text-center mb-12">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h1 italic"
        >
          <span className="text-[#00285E]">Academic Excellence </span>
          <span className="text-[#CF3528]">with Islamic Values</span>
        </motion.h1>
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 p mt-6 max-w-6xl mx-auto text-center"
        >
          HQA High School offers a powerful blend of college-preparatory
          curriculum and faith-based learning. Our curriculum aligns with Texas
          graduation standards, and all students complete the Distinguished
          Level of Achievement, qualifying them for top-tier college admissions.
        </motion.p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start p">
        {/* Left Side  */}
        <motion.div
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 text-gray-800"
        >
          <h3 className="text-2xl text-[#00285E] italic">
            Core Areas of Study (Credits Required):
          </h3>

          <div>
            <h4 className="font-semibold text-[#00285E]">English (4)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>English I–IV</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Social Studies (3)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                World History, U.S. History, World Geography, Government &
                Economics
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Math (4)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Algebra I, Algebra II, Geometry, Pre-Calculus</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Science (4)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Biology, Chemistry, Physics, Earth & Space Science</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">
              Physical Education (1)
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Physical Fitness, Outdoor/Adventure</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Fine Arts (1)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Art or Digital Art</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Speech (0.5)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Communication</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">
              Foreign Language (3)
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Arabic I–III</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Electives (7)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Quran Studies, Religion, Leadership, Yearbook, and more</li>
            </ul>
          </div>

          {/* Button */}
          {/* <button className="mt-6 flex items-center gap-2 border border-[#CF3528] text-[#CF3528] px-6 py-2 rounded-lg bg-white hover:bg-[#CF3528] hover:text-white transition">
            View Detailed Graduation Plan <FaArrowRight />
          </button> */}
        </motion.div>

        {/* Right Side  */}
        <motion.div
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/histroy/img.png"
            alt="Student"
            className="w-full max-w-md object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
