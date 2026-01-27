import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Cards = () => {
  const cards = [
    {
      id: 1,
      img: "/inquire/quran.jpg",
      title: "Qur’an, Hifz & Character Building",
      para1:
        "We want your visit to Houston Quran Academy to be meaningful and focused on Qur’an learning and character development. ",
      para2:
        "If there’s someone specific you’d like to meet during your time on campus, such as a Hifz instructor, Qur’an teacher, Islamic Studies mentor, or character program leader. Please let us know when you schedule your visit.We’ll do our best to arrange a personalized meeting so you can better understand the programs and people shaping your child’s faith and values at HQA.",
    },
    {
      id: 2,
      img: "/inquire/Individual and collaborative.jpeg",
      title: "Strong Academics & Extracurricular Activities",
      para1:
        "We want your visit to Houston Quran Academy to be meaningful and focused on academic excellence and student enrichment. If there’s someone specific you’d like to meet during your time on campus, such as a classroom teacher, academic coordinator, STEM instructor, or extracurricular program leader. Please let us know when you schedule your visit.",
      para2:
        "We’ll do our best to arrange a personalized meeting so you can better understand the programs and people shaping your child’s academic growth at HQA.",
    },
  ];

  return (
    <section className="w-full py-12 px-10  font-serif overflow-hidden">
      <motion.h1
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 text-center  italic text-[#00285E] mb-12"
      >
        Discover What Sets Us Apart
      </motion.h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`bg-white shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden 
              ${index === 0 ? "rounded-tl-[90px]" : ""} 
              ${index === 1 ? "rounded-br-[90px]" : ""}`}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-110 object-cover"
            />

            {/* Card Content */}
            <div className="p-6 ">
              <motion.h3
                variants={SlideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h2 text-center  italic text-[#00285E] mb-4"
              >
                {card.title}
              </motion.h3>

              <motion.p
                variants={SlideUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-700 p mb-3"
              >
                {card.para1}
              </motion.p>
              <motion.p
                variants={SlideUp(1.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-700 p"
              >
                {card.para2}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
