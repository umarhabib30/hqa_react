import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const programCards = [
  {
    id: 1,
    title: "Mentorship Programs",
    desc: "Connecting students with positive role models for guidance and support.",
    border: "#BCDDFC",
  },
  {
    id: 2,
    title: "Leadership Development Workshops",
    desc: "Equipping students with the skills to become effective leaders within their communities.",
    border: "#00285E",
  },
  {
    id: 3,
    title: "Career Exploration Days",
    desc: "Introducing students to various professions and helping them consider future paths.",
    border: "#BCDDFC",
  },
  {
    id: 4,
    title: "Health & Wellness Programs",
    desc: "Promoting physical and mental well-being through workshops and activities.",
    border: "#00285E",
  },
];

const Programs = () => {
  return (
    <section className="w-full font-serif py-12 px-6 lg:px-16 overflow-hidden">
      {/* Heading */}
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic text-center mb-12 text-red-700"
      >
        Special Programs & Initiatives
      </motion.h1>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Side - Cards */}
        <motion.div
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 text-gray-700 max-w-4xl text-base leading-relaxed"
        >
          {programCards.map((card) => (
            <div
              key={card.id}
              className={`border-2 rounded-lg p-3 w-full shadow-[0_4px_12px_rgba(0,0,0,0.25)]`}
              style={{ borderColor: card.border }}
            >
              <div className="flex gap-2">
                <span className="text-4xl font-bold text-[#00285E]">
                  {card.id}.
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-[#252626]">
                    {card.title}
                  </h3>
                  <p className="mt-2 p leading-tight">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Side  */}
        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex justify-center mb-12 mt-14 md:mt-0"
        >
          <div className="w-100 h-124 border-4 border-[#00285E] rounded-tr-[80px] translate-y-8 relative">
            <div className="absolute -top-6 -left-2 w-86 md:w-96 h-124 bg-[#00285E] rounded-tr-[100px] flex items-center justify-center shadow-lg">
              <img
                src="/academics/growth.png"
                alt="Growth"
                className="w-82 md:w-106 h-172 bottom-0 right-2 absolute object-cover rounded-tr-[60px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
