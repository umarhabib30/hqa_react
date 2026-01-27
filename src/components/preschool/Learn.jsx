import { motion, AnimatePresence } from "framer-motion";
import { SlideUp } from "../../../utility/animation.js";
const Experience = () => {
  const cards = [
    {
      img: "/pre/Academic skills.jpeg",
      title: "Academic Skills",
      text: "Phonics, early math, vocabulary, reasoning, pre-reading & writing",
    },
    {
      img: "/pre/Emotional growth.jpg",
      title: "Emotional Growth",
      text: "Empathy, self-regulation, patience, communication.",
    },
    {
      img: "/pre/Social skills.jpg",
      title: "Social Skills",
      text: "Cooperation, leadership, sharing, grace & courtesy",
    },
    {
      img: "/pre/learn4.jpg",
      title: "Spiritual Learning",
      text: "Duas, daily adhkar, stories of the Prophets, kindness in action",
    },
    {
      img: "/pre/Life skills.jpeg",
      title: "Life Skills",
      text: "Independence, organization, problem-solving",
    },
  ];

  return (
    <section className="pt-50 md:pt-0 py-12 px-10 font-serif overflow-hidden">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <motion.h1
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="italic h1 mb-6 text-[#CF3528]"
        >
          <span className="text-[#00285E]"> What Your </span> Child Will Learn
        </motion.h1>
      </div>

      {/* Cards Layout */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer gap-10 mb-10">
          {cards.slice(0, 3).map((card, i) => {
            const isBlue = i === 0 || i === 2;
            return (
              <div
                key={i}
                className="relative group [perspective:1000px] rounded-2xl"
              >
                <div className="relative h-[380px] w-full rounded-2xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div
                    className={`absolute inset-0 flex flex-col rounded-2xl p-6 backface-hidden transition-transform ${
                      isBlue ? "bg-blue-100" : "bg-white"
                    }`}
                  >
                    <div className="w-full flex justify-center mb-4">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-54 md:h-64 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="p italic text-gray-800 mb-2 text-left">
                      {card.title}
                    </h3>
                    {/*  mobile */}
                    <p className="text-gray-700 text-sm sm:text-base lg:hidden">
                      {card.text}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div
                    className={`absolute inset-0 rounded-2xl flex flex-col p-6 [transform:rotateY(180deg)] backface-hidden ${
                      isBlue ? "bg-blue-100" : "bg-white"
                    }`}
                  >
                    <h3 className="p italic font-bold text-[#00285E] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-800 p">{card.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer gap-10">
          {cards.slice(3, 5).map((card, i) => (
            <div
              key={i}
              className="relative group [perspective:1000px] rounded-2xl"
            >
              <div className="relative h-[380px] w-full rounded-2xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col bg-white rounded-2xl p-6 backface-hidden transition-transform">
                  <div className="w-full flex justify-center mb-4">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-54 md:h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl italic text-gray-800 mb-2 text-left">
                    {card.title}
                  </h3>
                  {/* mobile */}
                  <p className="text-gray-700 text-sm sm:text-base lg:hidden">
                    {card.text}
                  </p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white rounded-2xl flex flex-col  p-6 [transform:rotateY(180deg)] backface-hidden">
                  <h3 className="text-2xl italic font-bold text-[#00285E] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
