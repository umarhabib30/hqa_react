import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const committeeCards = [
  {
    icon: "/committee/1.png",
    text: "Recommending meaningful enhancements to the Planning Team",
  },
  {
    icon: "/committee/2.png",
    text: "Strengthening academic and extracurricular programs",
  },
  {
    icon: "/committee/3.png",
    text: "Encouraging communication and collaboration among staff, families, and administration",
  },
  {
    icon: "/committee/4.png",
    text: "Creating experiences that inspire student growth and community engagement",
  },
];

export default function CommitteeMission() {
  return (
    <section className="py-16 px-6 bg-[#BCDDFC]">
      <motion.div
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="h1 text-[#00285E]">Committee Mission</h2>
        <p className="mt-3 text-gray-700 p max-w-2xl mx-auto">
          Our mission is to support continuous improvement at HQA through
          dedicated action and collaboration
        </p>
      </motion.div>

      <motion.div
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto gap-6 mb-6"
      >
        {committeeCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex items-center shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={card.icon}
              alt={`icon-${index}`}
              className="w-12 h-12 mr-4"
            />
            <p className="text-gray-800 p">{card.text}</p>
          </div>
        ))}
      </motion.div>

      {/* Full-width Card */}
      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#00285E] p text-white rounded-xl p-8 text-center shadow-md"
      >
        <p>
          We Function with a Solutions-Focused mindset rooted in Islamic values
          and Student Success
        </p>
      </motion.div>
    </section>
  );
}
