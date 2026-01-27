import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const requirements = [
  "Fundraising for Katy and Richmond campuses",
  "Community engagement",
  "Networking and partnership",
  "Celebration and gratitude",
];

const Goals = () => {
  return (
    <section className="py-12 bg-[#FFFDF5] px-10 font-serif overflow-hidden">
      <h1 className="h1 text-[#00285E] italic text-center mb-6">
        Fundraiser <span className="text-[#CF3528]">Agenda</span>
      </h1>
      <div className="w-full grid md:grid-cols-2 items-stretch">
        {/* Left Side (Cards) */}
        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col space-y-4 h-full"
        >
          {requirements.map((req, index) => {
            const isDark = index % 2 === 0; 
            return (
              <div
                key={index}
                style={{
                  width: `calc(100% - ${index * 2}%)`, 
                  height: "100%",
                }}
                className={`flex items-center p-4 transition-all duration-300 clip-card ${
                  isDark
                    ? "bg-[#00285E] text-white"
                    : "bg-[#BCDDFC] text-[#00285E]"
                }`}
              >
                <img
                  src={`/donation/t${index + 1}.gif`}
                  alt={`Icon ${index + 1}`}
                  className="w-10 h-10 mr-4 object-contain"
                />

                <p className="p">{req}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative shadow-lg overflow-hidden w-full h-full clip-left"
        >
          <img
            src="/donation/donatio.jpg"
            alt="Library"
            className="w-full h-[90vh] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Goals;
