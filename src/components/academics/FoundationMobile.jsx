import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../../utility/animation";

const contentByLevel = {
  "Pre School": {
    title: "Montessori & Qur’an Foundations",
    subtitle: "Aged 18 Months–5 Years",
    items: [
      {
        heading: "Montessori Method:",
        text: "Hands-on, child-centered learning that nurtures independence, social skills, and a lifelong love of discovery.",
      },
      {
        heading: "Qur’an Time:",
        text: "Daily recitation and storytelling from the Sunnah to build early spiritual connections.",
      },
      {
        heading: "Flexible Care:",
        text: "Mon–Thurs, 8 AM–3 PM; Fri, 8 AM–1 PM; extended day until 5 PM.",
      },
    ],
    cta: "Learn more about our early years approach",
    image: "/academics/quran.jpg",
  },

  Elementary: {
    title: "Building Core Skills",
    subtitle: "Grades K–5",
    items: [
      {
        heading: "TEKS-Aligned Curriculum:",
        text: "Mastery of Reading, Math, Science & Social Studies with Qur’anic integration across subjects.",
      },
      {
        heading: "Project-Based Learning:",
        text: "Real-world challenges that spark curiosity and teamwork.",
      },
      {
        heading: "Enrichment Workshops:",
        text: "Robotics clubs, Arabic calligraphy, art studios, and weekly character-building sessions.",
      },
    ],
    cta: "Explore our elementary curriculum",
    image: "/academics/program.jpg",
  },

  "Middle School": {
    title: "Inquiry & Identity",
    subtitle: "Grades 6–8",
    items: [
      {
        heading: "Interdisciplinary Studies:",
        text: "Blend of STEM, humanities, and Islamic ethics to foster critical thinking.",
      },
      {
        heading: "Leadership Labs:",
        text: "Student government, service projects, and public-speaking masterclasses.",
      },
      {
        heading: "Digital Citizenship:",
        text: "Responsible tech use, digital research skills, and online ethics.",
      },
    ],
    cta: "Discover our middle school experience",
    image: "/admission/library.jpg",
  },

  "High School": {
    title: "College & Career Ready",
    subtitle: "Grades 9–12",
    items: [
      {
        heading: "Advanced Coursework:",
        text: "Honors, Pre-AP, and AP classes; dual-credit partnerships with local colleges.",
      },
      {
        heading: "Standardized Test Prep:",
        text: "PSAT, SAT, ACT workshops integrated into advisory periods.",
      },
      {
        heading: "Capstone Projects:",
        text: "Senior internships, community-engaged research, and our distinguished graduation portfolio.",
      },
    ],
    cta: "See high school pathways",
    image: "/admission/library.jpg",
  },
};

const FoundationMobile = ({ selectedLevel }) => {
  const data = contentByLevel[selectedLevel] || contentByLevel["Pre School"];

  return (
    <section className="block md:hidden py-12 px-4 font-serif">
      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic text-center mb-4 text-[#00285E]"
      >
        {data.title.includes("Montessori") ? (
          <>
            Montessori &{" "}
            <span className="text-[#CF3528]">Qur’an Foundations</span>
          </>
        ) : (
          <>
            {data.title.split(" | ")[0]}{" "}
            <span className="text-[#CF3528]">
              {data.title.split(" | ")[1] || ""}
            </span>
          </>
        )}
      </motion.h2>

      <p className="text-center text-[#00285E] mb-6 font-semibold">
        {data.subtitle}
      </p>

      {/* Cards */}
      <motion.div
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col space-y-4"
      >
        {data.items.map((item, index) => {
          const isDark = index % 2 === 0;
          return (
            <div
              key={index}
              className={`p-5 rounded-lg shadow-black shadow-md w-full transition-all duration-300 ${
                isDark
                  ? "bg-[#00285E] text-white"
                  : "bg-[#C8E1F8] text-[#00285E]"
              }`}
            >
              <h3 className="p mb-2 font-semibold">{item.heading}</h3>
              <p className="p">{item.text}</p>
            </div>
          );
        })}
      </motion.div>

      <div className="flex justify-center">
        <button className="bg-[#CF3528] mt-8 text-white px-6 py-2 text-center shadow-md hover:bg-[#b02b20] transition duration-300 flex items-center gap-2">
          {data.cta} <FaArrowRight className="text-sm" />
        </button>
      </div>
    </section>
  );
};

export default FoundationMobile;
