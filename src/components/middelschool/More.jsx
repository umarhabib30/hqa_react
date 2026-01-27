import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation.js";
import { motion } from "framer-motion";
const More = () => {
  const cards = [
    {
      id: 1,
      border: "border-[#00285E]",
      text: "Leadership & Responsibility through student councils and peer mentoring",
      img: "/middel/g1.gif",
    },
    {
      id: 2,
      border: "border-[#BCDDFC]",
      text: "Islamic Identity through relevant lessons and practical application of deen",
      img: "/middel/g2.gif",
    },
    {
      id: 3,
      border: "border-[#00285E]",
      text: "Confidence & Public Speaking through class discussions, debates, and presentations",
      img: "/middel/g3.gif",
    },
    {
      id: 4,
      border: "border-[#BCDDFC]",
      text: "Service & Integrity through community service initiatives and daily character goals",
      img: "/middel/g4.gif",
    },
  ];

  return (
    <section className="w-full font-serif py-12 px-10 overflow-hidden ">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#CF3528] mb-8 h1 italic"
        >
          <span className="text-[#00285E]">More Than Just</span> Academics
        </motion.h1>
        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 max-w-5xl p"
        >
          At this pivotal stage of development, we focus on more than grades.
          HQA's Middle School program cultivates:
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side  */}
        <motion.div
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex items-start gap-4 border-4 bg-white ${card.border} rounded-xl shadow-xl p-4 sm:p-6 transition-transform duration-300 hover:scale-[1.02]`}
            >
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={card.img}
                  alt={`Icon ${card.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-800 p">{card.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Right Side  */}
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-64 sm:h-80 md:h-auto flex"
        >
          <img
            src="/middel/More than just academic.jpeg"
            alt="Graduation caps"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default More;
