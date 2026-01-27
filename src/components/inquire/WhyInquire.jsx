import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const WhyInquire = () => {
  const cards = [
    {
      id: 1,
      border: "border-[#012974]",
      text: "A customized information packet tailored to your child’s grade level and interests.",
    },
    {
      id: 2,
      border: "border-[#CF3528]",
      text: "Answers to your specific questions about programs, tuition, curriculum, and Islamic values.",
    },
    {
      id: 3,
      border: "border-[#012974]",
      text: "Let us help you discover what makes HQA a unique and nurturing place for academic excellence and spiritual growth.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full font-serif min-h-screen overflow-hidden pb-12 pt-16 px-10 gap-12">
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <motion.h1
          variants={SlideRight(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#CF3528] h1 italic text-left"
        >
          Why Inquire?
        </motion.h1>

        <motion.p
          variants={SlideRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-800 p text-left"
        >
          By filling out our inquiry form, you open the door to a personalized
          admissions experience. You’ll receive:
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 mt-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className={`flex items-start gap-4 border-4 bg-white ${card.border} rounded-xl shadow-2xl p-6`}
            >
              <div className="text-3xl sm:text-4xl font-bold text-gray-700">
                {card.id}
              </div>
              <p className="text-gray-800 p text-left">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={SlideRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#012974] leading-relaxed mt-8 text-2xl sm:3xl font-bold italic text-left"
        >
          Invitations to open houses, school tours, and community events
        </motion.p>
      </div>

      {/* Right Side */}
      <motion.div
        variants={SlideLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full md:w-1/2 relative flex justify-center"
      >
        <img
          src="/inquire/Why inquire.jpeg"
          alt="Graduation caps"
          className="h-64 sm:h-80 lg:h-130 w-full object-cover rounded-4xl"
        />

        <div className="bg-[#eb7f75] w-[120px] sm:w-[200px] h-[80px] sm:h-[150px] rounded-4xl absolute -right-4 sm:-right-8 -bottom-6 sm:-bottom-8 z-[-1]" />

        <div className="bg-white w-[80px] sm:w-[150px] h-[80px] sm:h-[150px] absolute -left-4 -bottom-4 flex justify-center items-center rounded-tr-[100px]">
          <div className="bg-[#dfd7d7] h-[40px] sm:h-[100px] w-[40px] sm:w-[100px] rounded-full flex justify-center items-center">
            <div className="bg-blue-600 h-4 sm:h-7 w-4 sm:w-7 rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyInquire;
