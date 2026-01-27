import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
const benefits = [
  {
    title: "Giveaways & Coupons",
    description:
      "Boost engagement at sponsor booths while collecting visitor information.",
    bgColor: "bg-[#00285E]",
    textColor: "text-white",
  },
  {
    title: "Sponsor Banner Ads",
    description:
      "Sponsor logos highlighted repeatedly throughout the event for maximum visibility.",
    bgColor: "bg-[#BCDDFC]",
    textColor: "text-[#252525]",
  },
];

export default function SponsorBenefits() {
  return (
    <motion.div
      variants={SlideUp(0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto p-6 border border-[#363636] rounded-lg my-10"
    >
      <h2 className="text-center h1 text-[#00285E] mb-6">
        Additional Sponsor Benefits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className={`${benefit.bgColor} ${benefit.textColor} p-6 rounded-lg shadow-md flex flex-col`}
          >
            <h3 className="font-semibold p mb-2">{benefit.title}</h3>
            <p className="p">{benefit.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
