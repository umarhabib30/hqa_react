import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation.js";

const Experience = () => {
  const cards = [
    {
      img: "/elementary/Reading development.JPG",
      title: "Reading Development",
      text: "We utilize the DRA system to assess and cultivate reading comprehension skills from Kindergarten through Elementary grades.",
    },
    {
      img: "/elementary/mathematicss.JPG",
      title: "Mathematics and Science",
      text: "Our curriculum emphasizes conceptual understanding, ensuring that students not only memorize facts but also develop the ability to critically think and solve complex problems.",
    },
    {
      img: "/elementary/Cultural awareness.jpeg",
      title: "Cultural Awareness",
      text: "Students are introduced to diverse cultures and histories, helping them develop a global perspective and empathy.",
    },
    {
      img: "/elementary/Individual and collaborative.jpeg",
      title: "Independent and Collaborative Work",
      text: "Through a balance of individual assignments and group projects, students cultivate both self-reliance and teamwork skills.",
    },
    {
      img: "/elementary/Character development.JPG",
      title: "Character Development",
      text: "At HQA, we emphasize Islamic character education to nurture students' moral and spiritual growth. Through the teachings of the Qur'an and Hadith, students learn values such as honesty, respect, empathy, and responsibility, which guide them in their academic journey and daily lives.",
    },
  ];

  return (
    <section className="py-12 px-10 font-serif overflow-hidden">
      {/* Heading + Paragraph Centered */}
      <div className="text-center max-w-6xl mx-auto mb-12">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="italic h1 mb-6 text-[#CF3528]"
        >
          <span className="text-[#00285E]"> Our Academic</span> Framework
        </motion.h1>

        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="italic p text-gray-800 mb-8"
        >
          The Elementary Program at HQA is designed to lay a robust academic
          foundation by blending critical thinking, creativity, and
          responsibility. Students are encouraged to deeply engage with a
          TEKS-aligned curriculum, enhance their problem-solving abilities, and
          apply their knowledge in practical and meaningful ways.
        </motion.p>

        <motion.p
          variants={SlideUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="italic h2 text-gray-800"
        >
          Subjects Offered
        </motion.p>
      </div>

      {/* Cards Layout */}
      <div>
        {/* Top row  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer gap-10 mb-10">
          {cards.slice(0, 3).map((card, i) => {
            const isBlue = i === 0 || i === 2;
            return (
              <div
                key={i}
                className="relative group [perspective:1000px] rounded-2xl"
              >
                {/* Desktop flip card */}
                <div className="hidden sm:block relative h-[360px] w-full rounded-2xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="p italic text-gray-800 mb-3 text-left">
                      {card.title}
                    </h3>
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

                {/* Mobile static layout */}
                <div
                  className={`sm:hidden flex flex-col rounded-2xl p-6 shadow-xl ${
                    isBlue ? "bg-blue-100" : "bg-white"
                  }`}
                >
                  <div className="w-full flex justify-center mb-4">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="p italic text-gray-800 mb-2 text-left">
                    {card.title}
                  </h3>
                  <p className="text-gray-800 p text-left">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer gap-10">
          {cards.slice(3, 5).map((card, i) => (
            <div
              key={i}
              className="relative group [perspective:1000px] rounded-2xl"
            >
              {/* Desktop flip card */}
              <div className="hidden sm:block relative h-[380px] w-full rounded-2xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col bg-white rounded-2xl p-6 backface-hidden transition-transform">
                  <div className="w-full flex justify-center mb-4">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="p italic text-gray-800 mb-3 text-left">
                    {card.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white rounded-2xl flex flex-col p-6 [transform:rotateY(180deg)] backface-hidden">
                  <h3 className="p italic font-bold text-[#00285E] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-800 p">{card.text}</p>
                </div>
              </div>

              {/* Mobile static layout */}
              <div className="sm:hidden flex flex-col bg-white rounded-2xl p-6 shadow-xl">
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <h3 className="p italic text-gray-800 mb-2 text-left">
                  {card.title}
                </h3>
                <p className="text-gray-800 p text-left">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="italic p text-center max-w-6xl text-gray-800 mt-8 mx-auto"
      >
        Our instruction emphasizes interactive, student-centered learning that
        builds critical thinking, collaboration, and leadership skills.
      </motion.p>
    </section>
  );
};

export default Experience;
