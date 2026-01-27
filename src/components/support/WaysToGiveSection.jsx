import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";

const waysToGive = [
  {
    id: 1,
    icon: "/support/1.png",
    title: "Cash or Check",
    subtitle: "Traditional giving method with personal touch.",
    points: [
      "Make checks payable to: Houston Quran Academy",
      "Mailing Address: Houston Quran Academy, 1902 Baker Rd, Houston, TX 77094",
    ],
  },
  {
    id: 2,
    icon: "/support/2.png",
    title: "Credit Card, PayPal, Zelle, Venmo",
    subtitle: "Choose secure electronic giving through multiple platforms.",
    points: ["Venmo: hquranacademy", "Zelle: onlinepayment@hquranacademy.org"],
  },
  {
    id: 3,
    icon: "/support/3.png",
    title: "Matching Gifts",
    subtitle: "Make your donation go twice as far.",
    points: [
      "Check if your employer offers a Corporate Matching Program",
      "Complete your employer's matching form (online or paper)",
      "Send it to Houston Quran Academy",
      "We will coordinate with your company to process the matched gift",
    ],
  },
  {
    id: 4,
    icon: "/support/4.png",
    title: "Recurring Monthly or Annual Gifts",
    subtitle: "Set up a consistent, impactful contribution.",
    points: [
      "Visit: www.hquranfund.org/give",
      "Select: 'Enhance your influence – make this gift recurring'",
      "Choose: Monthly or Annual recurring donations",
      "Benefit: Contribute meaningfully without a large one-time payment",
    ],
  },
  {
    id: 5,
    icon: "/support/5.png",
    title: "Wire Transfers",
    subtitle: "Direct bank transfers for larger contributions.",
    points: [
      "For wire transfer instructions:",
      "Call the Vice Principal's Office: (281) 717-4622",
    ],
  },
  {
    id: 6,
    icon: "/support/6.png",
    title: "IRA Charitable Transfers",
    subtitle: "Tax-advantaged giving for those 70½ or older.",
    points: [
      "Donate up to $100,000 per year directly from your IRA to HQA",
      "May fulfill your Required Minimum Distribution (RMD)",
      "May reduce taxable income",
      "For details: (281) 717-4622",
    ],
  },
  {
    id: 7,
    icon: "/support/7.png",
    title: "Legacy Gifts (Will or Living Trust)",
    subtitle: "Create a lasting legacy for future generations.",
    points: [
      "Include Houston Quran Academy in your Will or Living Trust",
      "Donate: A specific dollar amount or percentage of your estate",
      "Benefits: Supports HQA after your lifetime, does not affect current finances",
      "Eligible for estate tax deduction",
      "Contact Principal's Office: (281) 717-4622",
    ],
  },
];

export default function WaysToGive() {
  const [open, setOpen] = useState({});

  const toggle = (id) => setOpen({ ...open, [id]: !open[id] });

  return (
    <section className="w-full bg-white py-20 px-6 flex flex-col items-center font-serif">
      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 text-[#052B5B] text-center mb-4"
      >
        Ways to Give
      </motion.h2>

      <motion.p
        variants={SlideLeft(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-600 text-center p max-w-4xl mb-12"
      >
        Choose the giving method that works best for you. Every contribution
        makes a difference.
      </motion.p>

      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer max-w-7xl w-full"
      >
        {waysToGive.map((card) => {
          const isOpen = open[card.id];

          return (
            <div
              key={card.id}
              className="bg-white rounded-xl border border-gray-200 shadow-[0_0_18px_rgba(0,0,0,0.18)] transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-full h-2 bg-[#c32526] rounded-t-xl" />

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={card.icon}
                    alt="icon"
                    className="w-12 h-12 object-contain"
                  />

                  <div>
                    <h3 className="p font-semibold text-[#052B5B]">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 p mt-1">{card.subtitle}</p>
                  </div>
                </div>

                <div className="border-b border-gray-300 mb-4" />

                <ul className="text-gray-700 space-y-2 p mb-4">
                  {isOpen ? (
                    card.points.map((p, i) => (
                      <li
                        key={i}
                        className="leading-relaxed flex items-start overflow-hidden"
                      >
                        <span className="mr-2 flex-shrink-0">•</span>
                        <span className="break-all md:break-words">{p}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start overflow-hidden">
                      <span className="mr-2 flex-shrink-0">•</span>
                      <span className="break-all md:break-words">
                        {card.points[0]}
                      </span>
                    </li>
                  )}
                </ul>

                <div className="border-b border-gray-300 mb-4" />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(card.id);
                  }}
                  className="text-[#0b4ea2] p cursor-pointer font-medium hover:underline"
                >
                  {isOpen ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
