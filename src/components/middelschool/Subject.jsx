import { SlideUp } from "../../../utility/animation.js";
import { motion } from "framer-motion";

const Subject = () => {
  const cards = [
    {
      img: "/middel/Critical thinking.JPG",
      title: "Critical Thinking and Analysis",
      text: "Projects and assignments are designed to promote deep analysis, research, and application of knowledge. ",
    },
    {
      img: "/middel/Personal development.jpg",
      title: "Personal Development",
      text: "Students receive daily practical lessons on building their Islamic character and life skills. ",
    },
    {
      img: "/middel/Social studies.JPEG",
      title: "Social Studies",
      text: "U.S. History, World Geography, Civics, Islamic Contributions to Society",
    },
    {
      img: "/middel/s4.jpg",
      title: "Collaboration and Leadership",
      text: "Opportunities for students to participate in group projects, student government, and community-building activities ensure they develop strong leadership and collaboration skills.",
    },
    {
      img: "/middel/Spiritual growth and reflection.JPG",
      title: "Spiritual Growth and Reflection",
      text: "Students engage in daily prayers, Quranic recitation, and Islamic teachings to strengthen their relationship with Allah (SWT). This spiritual foundation enhances their faith, guiding both their academic and personal development.",
    },
    {
      img: "/middel/High Academic expectations.JPG",
      title: "High Academic Expectations",
      text: "Students are expected to excel in both core subjects (math, science, language arts, and social studies) and specialized subjects like Islamic Studies and Quranic memorization.",
    },
  ];

  return (
    <section className="py-12 px-10 font-serif overflow-hidden">
      <div className="text-center max-w-6xl mx-auto mb-12 ">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="italic h1 mb-6 text-[#CF3528]"
        >
          <span className="text-[#00285E]">Core Subjects </span> and Curriculum
        </motion.h1>

        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p"
        >
          Our Middle School Program at HQA bridges the gap between elementary
          and high school, equipping students with advanced academic skills
          while fostering personal growth, social responsibility, and emotional
          intelligence. We aim to develop well-rounded individuals who are
          prepared for the challenges of high school and beyond.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer gap-10">
        {cards.map((card, i) => {
          const isBlue = i === 0 || i === 2 || i === 4;
          return (
            <div
              key={i}
              className="relative group [perspective:1000px] rounded-2xl"
            >
              <div className="hidden sm:block relative h-[380px] w-full rounded-2xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
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

              {/* Mobile Static Layout */}
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
    </section>
  );
};

export default Subject;
