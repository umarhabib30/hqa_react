import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const benefits = [
  {
    icon: "/sponsorship/i1.png",
    title: "Community Engagement",
    description:
      "Build meaningful connections with the local Muslim community and strengthen your brand’s presence.",
  },
  {
    icon: "/sponsorship/i2.png",
    title: "Educational Excellence",
    description:
      "Support high-quality academic and Quranic education for the next generation.",
  },
  {
    icon: "/sponsorship/i3.png",

    title: "Spiritual Growth",
    description: "Contribute to nurturing well-rounded, faith-driven students.",
  },
  {
    icon: "/sponsorship/i4.png",
    title: "Positive Public Image",
    description:
      "Align with a respected educational institution and strengthen your brand identity.",
  },
  {
    icon: "/sponsorship/i5.png",
    title: "Networking Opportunities",
    description:
      "Connect with influential community members, families, and professionals.",
  },
  {
    icon: "/sponsorship/i6.png",
    title: "Potential Tax Benefits",
    description:
      "Eligible charitable contributions may qualify for tax deductions.",
  },
  {
    icon: "/sponsorship/i7.png",
    title: "Marketing Exposure",
    description:
      "Gain visibility through event promotions, digital campaigns, and printed materials.",
  },
  {
    icon: "/sponsorship/i8.png",
    title: "Philanthropic Satisfaction",
    description:
      "Support a meaningful mission with long-term community impact.",
  },
  {
    icon: "/sponsorship/i9.png",
    title: "Long-Term Impact",
    description:
      "Help shape future leaders and contribute to community resilience.",
  },
  {
    icon: "/sponsorship/i10.png",
    title: "Strengthening Community Bonds",
    description: "Become part of a united, purpose-driven network.",
  },
  {
    icon: "/sponsorship/i11.png",
    title: "Contribution to Society",
    description:
      "Play a role in creating a more educated, compassionate population.",
  },
  {
    icon: "/sponsorship/i12.png",
    title: "Interfaith Dialogue",
    description:
      "Support initiatives that foster understanding and cooperation between communities.",
  },
];

export default function SponsorPatnership() {
  return (
    <div className="px-10 py-12 bg-white font-serif overflow-hidden">
      <motion.h2
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center h1 mb-12 italic text-[#00285E]"
      >
        Benefits of Sponsorship <br /> & Partnership
      </motion.h2>

      <div className="flex flex-col md:flex-row md:items-start mb-12 gap-20 italic">
        <motion.h3
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h2 text-[#363636] italic md:w-2/3 font-semibold"
        >
          Why Partner With Houston Quran Academy?
        </motion.h3>
        <motion.p
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-4/5 p text-[#363636]"
        >
          Collaborating with HQA provides meaningful opportunities for
          businesses, organizations, and individuals to support impactful
          education while gaining visibility in a highly engaged community.
        </motion.p>
      </div>

      <motion.div
        variants={SlideUp(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer"
      >
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col  p-6 rounded-xl 
                 bg-white
                 shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.3)]
                 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(255,255,255,0.2)]
                 transition-shadow duration-300"
          >
            <img
              src={benefit.icon}
              alt={benefit.title}
              className="w-16 h-16 mb-4"
            />
            <h4 className="font-semibold p mb-2">{benefit.title}</h4>
            <p className=" p text-gray-800">{benefit.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
