import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const requirements = [
  "Fundraising for Katy and Richmond campuses",
  "Community engagement",
  "Networking and partnership",
  "Celebration and gratitude",
];

const GoalsMbl = () => {
  return (
    <section className="block md:hidden py-12 px-4 font-serif overflow-hidden">
      {/* Cards */}
      <div className="flex flex-col space-y-4">
        {requirements.map((req, index) => {
          const isOdd = index % 2 === 0;
          return (
            <motion.div
              variants={SlideRight(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={index}
              className={`flex items-center p-4 rounded-lg shadow-black shadow-2xl w-full ${
                isOdd
                  ? "bg-[#00285E] text-white"
                  : "bg-[#C8E1F8] text-[#00285E]"
              }`}
            >
              <span
                className={`p mr-4 font-semibold ${
                  isOdd ? "text-white" : "text-[#00285E]"
                }`}
              >
                {index + 1}
              </span>
              <p className="p">{req}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default GoalsMbl;
