import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation.js";

const Experience = () => {
  const cards = [
    {
      img: "/highschool/Leadership programs.JPG",
      title: "Leadership Programs",
      text: "Cultivating confidence and responsibility through hands-on leadership experiences.",
    },
    {
      img: "/highschool/Jumma led khutbah.JPG",
      title: "Student-Led Jumu'ah Khutbahs",
      text: "Empowering students to lead and inspire through faith-based sermons.",
    },
    {
      img: "/pre/learn3.jpg",
      title: "Yearbook & Newsletter Club",
      text: "Showcasing creativity and school spirit through writing, design, and media.",
    },
    {
      img: "/highschool/Service learning program.jpeg",
      title: "Service Learning Projects",
      text: "Building compassion and civic engagement through meaningful community service.",
    },
    {
      img: "/highschool/Career Days.jpeg",
      title: "College Tours & Career Days",
      text: "Guiding students toward future goals through real-world exploration and mentorship.",
    },
  ];

  return (
    <section className="py-12 px-10 font-serif overflow-hidden">
      <div className="text-center max-w-6xl mx-auto mb-12">
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="italic h1 mb-6 text-[#CF3528]"
        >
          Student Experience
        </motion.h1>

        <motion.p
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="italic p text-gray-800 mb-8"
        >
          High school life at HQA is vibrant, empowering, and grounded in
          values. From engaging classroom discussions to extracurricular
          opportunities, our students find both community and challenge.
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

        {/* Bottom row (2 cards) */}
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
    </section>
  );
};

export default Experience;
