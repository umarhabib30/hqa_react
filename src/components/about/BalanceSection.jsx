import {
  SlideLeft,
  SlideRight,
  SlideUp,
  FadeIn,
  StaggerChildren,
} from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sections = [
  {
    id: 1,
    title: "Intellectual Balance",
    description: "Focus: Learning, Excellence, Thinking, Creativity",
    list: [
      "Islam encourages us to excel in every field of life",
      "Education is a right for every individual",
      "A sound education nourishes the mind, body, and soul",
      "We foster creativity, critical thinking, and individual talent",
      "Committed to strong curricula, qualified staff, and effective processes",
      "Recognize that students learn in different ways and at different paces",
    ],
    img: "/about/Intellectual Balance.jpg",
    reverse: false,
    bg: "#00285E",
    textColor: "text-white",
    headingColor: "text-white",
  },
  {
    id: 2,
    title: "Emotional & Social Balance",
    description: "Focus: Love, Empathy, Respect, Relationships",
    list: [
      "Every student deserves respect, compassion, and love",
      "We believe in equality for all—no discrimination",
      "Parents, teachers, and administrators serve as role models",
      "Education is a partnership between school and family",
      "Our youth are our greatest trust and most valuable asset",
      "Every voice—especially youth—must be heard and valued",
      "We promote respect for all cultures, values, and religions",
    ],
    img: "/about/Emotional & Social Balance.jpg",
    reverse: true,
    bg: "#C8E1F8",
    textColor: "text-gray-800",
    headingColor: "text-[#00285E]",
  },
  {
    id: 3,
    title: "Spiritual Balance",
    description: "Focus: Islamic Identity, Moderation, Moral Grounding",
    list: [
      "Islam is a universal model for life",
      "Rooted in the Qur’an, Sunnah, and the way of the Sahabah",
      "Islam is the foundation of morals, manners, and character",
      "A strong Islamic environment is essential for youth development",
      "Islam promotes balance and moderation in all aspects of life",
      "Recognizes both fixed rulings (thawabit) and flexible rulings (mutaghayyirat)",
      "Encourages simplicity and ease in religious practice",
      "Firmly rejects extremism, intolerance, and bigotry",
    ],
    img: "/about/Spiritual Balance.jpg",
    reverse: false,
    bg: "#00285E",
    textColor: "text-white",
    headingColor: "text-white",
  },
  {
    id: 4,
    title: "Civic & Ethical Balance",
    description: "Focus: Justice, Responsibility, Society",
    list: [
      "HQA emphasizes academics, not politic",
      "We promote success within the American contex",
      "Freedom of expression is respected—no coercion f beliefs",
      "We support gender equity and opportunity for al",
      "Encourage collaboration on noble and jst causes",
      "Stand firmly for justice for all peopl",
      "Every member's voice matters in our school commuity",
      "Embrace humility: admit mistakes, learn, and gro",
      "Believe in the saying: 'It takes a village to raise a child'",
      "Apply Islamic principles thoughtfully in the American Muslim context",
    ],
    img: "/about/Balance.jpeg",
    reverse: true,
    bg: "#C8E1F8",
    textColor: "text-gray-800",
    headingColor: "text-[#00285E]",
  },
];

const SectionItem = ({ section }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={StaggerChildren(0.1)}
      className={`flex flex-col md:flex-row ${
        section.reverse ? "md:flex-row-reverse" : ""
      } overflow-hidden`}
    >
      <motion.div
        variants={section.reverse ? SlideRight(0.2) : SlideLeft(0.2)}
        className={`w-full md:w-1/2 p-6 md:p-6 flex flex-col justify-center ${section.textColor}`}
        style={{ backgroundColor: section.bg }}
      >
        <motion.h2
          variants={FadeIn(0.3)}
          className={`h2 mb-4 ${section.headingColor}`}
        >
          {section.title}
        </motion.h2>
        <motion.p variants={FadeIn(0.4)} className="mb-4 p">
          {" "}
          {/* Added text size for mobile */}
          {section.description}
        </motion.p>
        <motion.ul
          variants={StaggerChildren(0.05)}
          className="list-disc pl-5 md:pl-6 space-y-1 md:space-y-2 text-sm md:text-base"
        >
          {section.list.map((item, itemIndex) => (
            <motion.li key={itemIndex} variants={FadeIn(0.1)}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* ---- Image ---- */}
      <motion.div
        variants={section.reverse ? SlideLeft(0.2) : SlideRight(0.2)}
        className="w-full md:w-1/2"
      >
        <img
          src={section.img}
          alt={section.title}
          className="w-full h-auto md:h-130 object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

const BalanceSections = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="w-full py-8 md:py-12 px-4 md:px-10 font-serif overflow-x-hidden"
    >
      {" "}
      <div className="text-center max-w-5xl mx-auto mb-6 md:mb-8">
        {" "}
        <motion.h1
          variants={SlideUp(0.6)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="h1 italic text-[#CF3528] mb-4 md:mb-6"
        >
          Rooted in Faith, Guided by Purpose
        </motion.h1>
        <motion.p
          variants={SlideUp(1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="p text-gray-800 leading-relaxed"
        >
          At Houston Quran Academy, our values and guiding principles are
          grounded in the Qur'an and Sunnah. We believe in nurturing
          well-rounded individuals through a balanced approach to spiritual,
          intellectual, emotional, and civic growth. Every belief we hold shapes
          a student's character, purpose, and contribution to the world—both as
          a Muslim and as a compassionate global citizen.
        </motion.p>
      </div>
      {sections.map((section) => (
        <SectionItem key={section.id} section={section} />
      ))}
    </div>
  );
};

export default BalanceSections;
