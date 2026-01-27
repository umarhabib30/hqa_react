import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const whatWeDoCards = [
  {
    icon: "/committee/w1.png",
    title: "Review & Recommend",
    text: "Reviewing and recommending improvements to programs, activities, and systems",
  },
  {
    icon: "/committee/w2.png",
    title: "Support & Enhance",
    text: "Supporting teachers and staff with resources, planning assistance, and enhancement ideas",
  },
  {
    icon: "/committee/w1.png",
    title: "Collaborate & Connect",
    text: "Collaborating with the PTO on major schoolwide events",
  },
  {
    icon: "/committee/w1.png",
    title: "Lead & Innovate",
    text: "Leading improvement projects that positively impact students and families",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 px-6 bg-[#f6f9fc] font-serif overflow-hidden">
      <div className="text-center mb-10">
        <motion.h2
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" text-[#00285E] h1"
        >
          What We Do
        </motion.h2>
        <motion.p
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-3 text-gray-700 p max-w-3xl  mx-auto p "
        >
          The Improvement Committee actively contributes to the enrichment of
          school operations through strategic initiatives and collaborative
          efforts.
        </motion.p>
      </div>

      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 cursor-pointer max-w-7xl mx-auto gap-6 mb-6"
      >
        {whatWeDoCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex flex-col  shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={card.icon}
              alt={`icon-${index}`}
              className="w-16 h-16 mb-4"
            />
            <h3 className=" font-semibold mb-2 p">{card.title}</h3>
            <p className="text-gray-800 p">{card.text}</p>
          </div>
        ))}
      </motion.div>

      <div className="bg-[#BCDDFC] text-[#282828] rounded-xl p p-8 text-center shadow-md">
        <p>
          Our work ensures that HQA maintains a <strong>high-quality</strong> ,
          {"    "}
          <strong>well-organized</strong> and{" "}
          <strong>enriching environment</strong>
        </p>
      </div>
    </section>
  );
}
