import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const cards = [
  {
    id: 1,
    icon: "/pto/familes.png",
    number: "200+",
    numberColor: "text-[#FF6B6B]",
    tag: "Families",
    title: "Build Ummah",
    desc: "Foster our shared sense of family and purpose",
    circleColor: "bg-[#FF6B6B]",
  },
  {
    id: 2,
    icon: "/pto/card2.png",
    number: "15+",
    numberColor: "text-[#4ECDC4]",
    tag: "Volunteers",
    title: "Community",
    desc: "Bring together parents, teachers, and students",
    circleColor: "bg-[#4ECDC4]",
  },
  {
    id: 3,
    icon: "/pto/raised.png",
    number: "$50K+",
    numberColor: "text-[#FFA500]",
    tag: "Raised",
    title: "Support Programs",
    desc: "Fund projects beyond the school budget",
    circleColor: "bg-[#FFA500]",
  },
  {
    id: 4,
    icon: "/pto/programs.png",
    number: "20+",
    numberColor: "text-[#95E1D3]",
    tag: "Teachers",
    title: "Safe Environment",
    desc: "Create inspiring spaces guided by Islamic values",
    circleColor: "bg-[#95E1D3]",
  },
];

export default function PTOFourCards() {
  return (
    <motion.div
      variants={SlideUp(0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 font-serif"
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="relative bg-white rounded-2xl shadow-md p-10 cursor-pointer overflow-hidden"
        >
          <div
            className={`absolute -top-4 -right-4 w-20 h-20 rounded-full ${card.circleColor} opacity-70`}
          ></div>

          <img
            src={card.icon}
            alt={card.tag}
            className="w-14 h-14 mb-4 z-10 relative"
          />

          <p className={`h2 font-bold ${card.numberColor} mb-1 z-10 relative`}>
            {card.number}
          </p>

          <p className="p text-gray-800 z-10 relative">{card.tag}</p>

          <h3 className="p font-semibold mt-2 z-10 relative">{card.title}</h3>

          <p className="text-gray-800 p mt-1 z-10 relative">{card.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
