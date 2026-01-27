import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../../utility/animation";
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
    image: "/admission/library.jpg",
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
    image: "/admission/library.jpg",
  },
};

const Foundation = ({ selectedLevel }) => {
  const data = contentByLevel[selectedLevel] || contentByLevel["Pre School"];

  return (
    <section className="py-12 px-10 font-serif overflow-hidden">
      <motion.h1
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 italic mb-10 text-[#00285E]"
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
      </motion.h1>

      <p className="text-[#00285E] mb-6 font-semibold">{data.subtitle}</p>

      <div className="w-full grid md:grid-cols-2 items-stretch">
        {/* Left Side */}
        <motion.div
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col space-y-4 h-full"
        >
          {data.items.map((item, index) => {
            const isDark = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col px-6 py-6 transition-all duration-300 clip-card ${
                  isDark
                    ? "bg-[#00285E] text-white"
                    : "bg-[#BCDDFC] text-[#00285E]"
                }`}
              >
                <p className="p mb-1 font-semibold">{item.heading}</p>
                <p className="p mb-1">{item.text}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative shadow-lg overflow-hidden w-full h-full clip-left"
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Foundation;
