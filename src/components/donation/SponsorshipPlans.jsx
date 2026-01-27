import React from "react";
import { FaCrown, FaMedal, FaStar, FaAward } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const sponsorships = [
  {
    title: "Platinum Sponsor",
    amount: "$20,000",
    icon: <FaCrown className="text-[#CF3528] text-3xl" />, // 🔴 red inner icon
    gradient: "from-[#CF3528] to-[#00285E]",
    triangleColor: "#f1c2bf", // match icon accent
    iconBg: "bg-[#f1c2bf]",
    benefits: [
      "3-minute speaking slot on stage during the main event",
      "Premium stall space at the event venue",
      "Logo prominently featured on all promotional materials and website",
      "VIP seating for up to 10 guests",
      "Social media shoutouts and dedicated email blast",
    ],
  },
  {
    title: "Gold Sponsor",
    amount: "$10,000",
    icon: <FaMedal className="text-[#00285E] text-3xl" />, // 🔵 blue inner icon
    gradient: "from-[#00285E] to-[#00285E]",
    triangleColor: "#FAF1C480", // gold tone (match iconBg)
    iconBg: "bg-[#FAF1C480]",
    benefits: [
      "3-minute speaking slot on stage during the main event",
      "Premium stall space at the event venue",
      "Logo prominently featured on all promotional materials and website",
      "VIP seating for up to 8 guests",
      "Social media shoutouts and dedicated email blast",
    ],
    buttonColor: "bg-[#0A2351]",
  },
  {
    title: "Silver Sponsor",
    amount: "$5,000",
    icon: <FaStar className="text-[#00285E] text-3xl" />, // 🔵 blue inner icon
    gradient: "from-[#00285E] to-[#00285E]",
    triangleColor: "#BCDDFC", // silver tone
    iconBg: "bg-[#BCDDFC]",
    benefits: [
      "3-minute speaking slot on stage during the main event",
      "Premium stall space at the event venue",
      "Logo prominently featured on all promotional materials and website",
      "VIP seating for up to 6 guests",
      "Social media shoutouts and dedicated email blast",
    ],
    buttonColor: "bg-[#0A2351]",
  },
  {
    title: "Bronze Sponsor",
    amount: "$2,500",
    icon: <FaAward className="text-[#00285E] text-3xl" />, // 🔵 blue inner icon
    gradient: "from-[#00285E] to-[#00285E]",
    triangleColor: "#BCDDFC", // bronze tone
    iconBg: "bg-[#BCDDFC]]",
    benefits: [
      "3-minute speaking slot on stage during the main event",
      "Premium stall space at the event venue",
      "Logo prominently featured on all promotional materials and website",
      "Social media shoutouts and dedicated email blast",
    ],
    buttonColor: "bg-[#0A2351]",
  },
];

export default function SponsorshipPlans() {
  return (
    <section className="bg-white py-20 px-6 font-serif text-center overflow-hidden">
      {/* Label */}
      <motion.div
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#FAF1C4] inline-block px-4 py-1 text-[#00285E] rounded-full mb-4"
      >
        Sponsorship Opportunities
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 text-[#00285E] italic mb-4 text-center"
      >
        Houston Quran Academy Sponsorship Plans
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        variants={SlideLeft(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-700 max-w-2xl mx-auto mb-12 text-center"
      >
        Support our mission to promote Quranic education and community outreach.
        Choose a sponsorship tier that fits your commitment.
      </motion.p>

      {/* Cards */}
      <motion.div
        variants={SlideUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-8xl mx-auto"
      >
        {sponsorships.map((plan, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,40,94,0.1)] rounded-2xl flex flex-col overflow-hidden hover:shadow-xl transition duration-300 relative"
          >
            {/* Top Gradient Bar */}
            <div className={`relative h-4 bg-gradient-to-r ${plan.gradient}`}>
              {/* Colored Triangle */}
              <div
                className="absolute top-8 right-0 w-0 h-0 border-t-[80px] border-t-transparent border-r-[80px]"
                style={{ borderRightColor: plan.triangleColor }}
              ></div>
            </div>

            {/* Icon */}
            <div className="mt-8 flex pl-5">
              <div
                className={`w-14 h-14 ${plan.iconBg} rounded-full flex items-center justify-center shadow-md`}
              >
                {plan.icon}
              </div>
            </div>

            {/* Title & Price */}
            <div className="text-left px-6 mt-4">
              <h3 className="text-[#00285E] h2 mb-1">{plan.title}</h3>
              <p className="text-[#D32F2F] h2 italic mb-4">{plan.amount}</p>
            </div>

            {/* Benefits */}
            <div className="px-6 pb-6 flex-1 p">
              <ul className="space-y-3 text-gray-700 text-left">
                {plan.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#D32F2F] mt-1">✔</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="px-6 pb-6 mt-auto">
              <button
                className={`w-full text-white py-2 cursor-pointer rounded-md font-medium hover:opacity-90 transition ${
                  index === 0
                    ? "bg-gradient-to-r from-[#CF3528] to-[#00285E]"
                    : plan.buttonColor
                }`}
              >
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Contact line */}
      <p className="text-gray-600 mt-10 text-center p">
        Need a custom sponsorship package?{" "}
        <a href="#" className="text-[#D32F2F] underline">
          Contact us
        </a>{" "}
        to discuss tailored opportunities.
      </p>
    </section>
  );
}
