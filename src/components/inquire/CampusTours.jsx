import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const CampusTours = () => {
  const cards = [
    {
      id: 1,
      number: "1",
      text: "A warm, student-guided tour of our classrooms, Qur’an study spaces, and community areas.",
    },
    {
      id: 2,
      number: "2",
      text: "A one-on-one interview with our Admissions Team to get to know your family, answer your questions, and understand your goals for your child’s future.",
    },
    {
      id: 3,
      number: "3",
      text: "Tours and interviews are available on weekdays while classes are in session, and on select Saturdays—giving you a real glimpse into daily life at HQA.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-16 font-serif bg-gray-50 overflow-hidden">
      {/* Heading */}
      <motion.h1
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic text-center mb-6 leading-snug"
      >
        <span className="text-[#00285E]">Personalized Campus Tours</span>{" "}
        <br className="hidden sm:block" />
        <span className="text-[#CF3528]">& Family Interviews</span>
      </motion.h1>

      <motion.p
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-800 text-center p max-w-8xl mx-auto mb-10 sm:mb-12 px-2"
      >
        Step into the heart of Houston Quran Academy and see what makes our
        school a meaningful choice for your child’s educational and spiritual
        journey.
      </motion.p>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Right side -  */}
        <div
          variants={SlideRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-1 md:order-1"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl italic text-[#00285E] mb-6 sm:mb-8 leading-snug  md:text-left">
            Our 30-minute visit experience
            <br className="hidden sm:block" />
            includes:
          </h3>

          {/* Cards */}
          <motion.div
            variants={SlideRight(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-6"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-lg hover:shadow-xl rounded-lg p-6 flex items-start gap-3 sm:gap-4 transition"
              >
                <span className="text-gray-800 font-bold text-3xl sm:text-4xl">
                  {card.number}
                </span>
                <p className="text-gray-800 p text-left">{card.text}</p>
              </div>
            ))}

            {/* Bigger  card */}
            <div className="bg-[#00285E] shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-lg p-6 sm:p-8 transition">
              <p className="text-white text-sm sm:text-lg leading-relaxed">
                <strong>Please note:</strong> Interviews are a required part of
                the application process, and spots fill quickly. We strongly
                encourage you to schedule your visit early in the admissions
                timeline.
              </p>
            </div>
          </motion.div>

          {/*  centered paragraph */}
          <div className="mt-8 text-center md:hidden max-w-4xl">
            <motion.p
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-800 p"
            >
              To schedule your tour and interview, please make sure you’ve
              completed our Online Inquiry Form. These visits are currently open
              only to families applying for the 2025–2026 school year.
            </motion.p>
          </div>
        </div>

        {/* Left side  */}
        <div className="order-2 md:order-2 flex flex-col gap-4">
          {/*  top image */}
          <img
            src="/inquire/Personalized campus tour(1).JPG"
            alt="Campus Tour"
            className="w-full h-52 sm:h-64 md:h-100 object-cover rounded-lg shadow-md"
          />
          {/*  side-by-side images */}
          <div className="grid md:grid-cols-2 gap-4">
            <img
              src="/inquire/Personalized campus tour.JPG"
              alt="Campus Life"
              className="w-full h-32 sm:h-40 md:h-74 object-cover rounded-lg shadow-md"
            />
            <img
              src="/inquire/Personalized campus tour.jpeg"
              alt="Campus Students"
              className="w-full h-32 sm:h-40 md:h-74 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      {/*  centered paragraph */}
      <div className="hidden md:block mt-16 text-center max-w-6xl mx-auto">
        <motion.p
          variants={SlideUp(1.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 p"
        >
          To schedule your tour and interview, please make sure you’ve completed
          our Online Inquiry Form. These visits are currently open only to
          families applying for the 2025–2026 school year.
        </motion.p>
      </div>
    </section>
  );
};

export default CampusTours;
