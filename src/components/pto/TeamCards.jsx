import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const cardsData = [
  {
    id: 1,
    icon: "/pto/t1.png",
    stripColor: "bg-[#FF6B6B]",
    circleColor: "bg-[#FF6B6B]",
    para: "President",
    heading: "Natasha Osmanbhoy",
    desc: "Leading with vision and heart.",
  },
  {
    id: 2,
    icon: "/pto/t2.png",
    stripColor: "bg-[#4ECDC4]",
    circleColor: "bg-[#4ECDC4]",
    para: "Vice President",
    heading: "Nasuha Marican",
    desc: "Creating events that bring smiles and stories.",
  },
  {
    id: 3,
    icon: "/pto/t3.png",
    stripColor: "bg-[#FFA500]",
    circleColor: "bg-[#FFA500]",
    para: "Secretary",
    heading: "Regina Khan",
    desc: "Ensuring communications are clear, organized, and open.",
  },
  {
    id: 4,
    icon: "/pto/t4.png",
    stripColor: "bg-[#95E1D3]",
    circleColor: "bg-[#95E1D3]",
    para: "Treasurer",
    heading: "Safia Baig",
    desc: "Managing finances responsibly to support our students' dreams.",
  },
  {
    id: 5,
    icon: "/pto/t1.png",
    stripColor: "bg-[#FF6B6B]",
    circleColor: "bg-[#FF6B6B]",
    para: "Member",
    heading: "Natasha Osmanbhoy",
    desc: "",
  },
  {
    id: 6,
    icon: "/pto/t2.png",
    stripColor: "bg-[#4ECDC4]",
    circleColor: "bg-[#4ECDC4]",
    para: "Member",
    heading: "Nasuha Marican",
    desc: "",
  },
  {
    id: 7,
    icon: "/pto/t3.png",
    stripColor: "bg-[#FFA500]",
    circleColor: "bg-[#FFA500]",
    para: "Member",
    heading: "Regina Khan",
    desc: "",
  },
];

export default function SevenCardsGrid() {
  return (
    <section className="font-serif px-10 py-12">
      <motion.div
        variants={SlideUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {cardsData.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <div className={`h-2 w-full ${card.stripColor}`}></div>

            <div
              className={`absolute top-4 right-2 w-10 h-10 rounded-full ${card.circleColor}`}
            ></div>

            <div className="flex flex-col p-6">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={card.icon}
                  alt="icon"
                  className="w-18 h-18 object-contain"
                />
              </div>
              <p className="text-gray-600 p">{card.para}</p>

              <h3 className="p font-bold text-[#00285E] mb-2">
                {card.heading}
              </h3>

              <p className="text-gray-600 p">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
