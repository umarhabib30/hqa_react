import React, { useEffect, useState } from "react";
import { FaChartLine } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const CircularProgress = ({ percent, color }) => {
  const degree = (percent / 100) * 360;
  const gradient = `conic-gradient(${color} ${degree}deg, #E5E7EB ${degree}deg)`;
  return (
    <div className="relative w-32 h-32 mx-auto flex-shrink-0">
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: gradient }}
      ></div>
      <div className="absolute inset-[20px] text-white rounded-full flex items-center justify-center bg-[#00285E] font-bold text-lg">
        {percent}%
      </div>
    </div>
  );
};

const DonationsImpact = () => {
  const [cards, setCards] = useState([]);
  const [meta, setMeta] = useState({ title: "", desc: "" });
  const [totalInvestment, setTotalInvestment] = useState(0);

  useEffect(() => {
    fetch("https://hquranacademy.com/api/achievements")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.data.length > 0) {
          // Set Main Header Data from the first item
          setMeta({
            title: data.data[0].main_title,
            desc: data.data[0].main_desc,
          });

          // Calculate Total
          const total = data.data.reduce(
            (sum, item) => sum + Number(item.card_price || 0),
            0,
          );
          setTotalInvestment(total);

          // Map API data to your card structure
          setCards(data.data);
        }
      })
      .catch((err) => console.error("Error fetching achievements:", err));
  }, []);

  return (
    <section className="bg-[#FFFCEB] py-16 px-6 font-serif text-center overflow-hidden">
      {/* Top Label */}
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#FAF1C4] inline-block px-4 py-1 text-[#00285E] rounded-full mb-4"
      >
        Making a Difference
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        variants={SlideUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h1 text-[#00285E] italic"
      >
        2025 at a Glance: What We Achieved Together{" "}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={SlideRight(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-700 max-w-3xl mx-auto mt-4 mb-10"
      >
        Your generous donations are transforming lives and building the future
        of Islamic education in our community. Every contribution makes a
        lasting impact.
      </motion.p>

      {/* Blue Info Bar */}
      <motion.div
        variants={SlideLeft(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#012A8D] text-white rounded-xl py-6 px-8 mb-16 max-w-md mx-auto shadow-lg flex items-center justify-center"
      >
        <div className="flex items-center gap-4">
          <FaChartLine className="text-4xl text-[#FAF1C4]" />
          <div>
            <p className="text-lg font-medium">Total Investment</p>
            <h3 className="text-3xl sm:text-4xl font-bold mt-1 text-[#FAF1C4]">
              ${totalInvestment.toLocaleString()}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        variants={SlideUp(1.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-[0_8px_30px_rgba(0,40,94,0.15)] border border-[#D9E3FF] rounded-2xl p-6 text-left flex flex-col w-full min-h-[600px]"
          >
            {/* Top content */}
            <div className="mb-6">
              <h3 className="h2 text-[#00285E] text-center mb-6 min-h-[60px]">
                {item.card_title}
              </h3>
              <div className="flex items-center justify-between gap-4">
                <p className="text-[#D32F2F] text-3xl font-bold">
                  ${Number(item.card_price).toLocaleString()}
                </p>
                <CircularProgress
                  percent={item.card_percentage}
                  color={index % 3 === 1 ? "#F97316" : "#16A34A"}
                />
              </div>
            </div>

            {/* Bottom Blue Section */}
            <div className="bg-[#E7F0FF] rounded-xl p-5 flex-grow">
              <h4 className="text-[#00285E] h2 mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {Array.isArray(item.card_desc) &&
                  item.card_desc.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-[#D32F2F] rounded-full mt-2 flex-shrink-0"></span>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Bottom Button */}
      <div className="mt-16">
        <button className="bg-[#00285E] cursor-pointer text-white px-8 py-3 rounded-md hover:bg-[#001a40] transition duration-300">
          Make a Donation Today
        </button>
      </div>
    </section>
  );
};

export default DonationsImpact;
