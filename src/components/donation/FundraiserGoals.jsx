import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation";

export default function FundraiserGoals() {
  const [goal, setGoal] = useState(0);
  const [raised, setRaised] = useState(0);
  const [totalDonors, setTotalDonors] = useState(0);
  const [milestones, setMilestones] = useState([]);
  const [completionRate, setCompletionRate] = useState(0);

  useEffect(() => {
    fetch("https://hquranacademy.com/api/fundraises")
      .then((res) => res.json())
      .then((res) => {
        if (res.status && res.data) {
          const item = res.data;

          const rawGoal = item.goal_end || 0;
          const rawRaised = item.total_donation_collected || 0;

          setGoal(rawGoal);
          setRaised(rawRaised);
          setTotalDonors(item.total_donors || 0); 
          setCompletionRate(item.goal_completion_percentage || 0);

          const numMilestones = 5;
          const dynamicMilestones = [];
          for (let i = 1; i <= numMilestones; i++) {
            const value = (rawGoal / numMilestones) * i;
            dynamicMilestones.push(Math.round(value));
          }
          setMilestones(dynamicMilestones);
        }
      })
      .catch((err) => console.error("Fundraise API Error:", err));
  }, []);

  const remaining = goal - raised;

  const formatNum = (num) => num.toLocaleString();

  return (
    <section className="bg-[#F8FBFF] py-12 px-4 sm:py-16 sm:px-6 text-center font-serif overflow-hidden">
      <motion.h1
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[#00285E] italic mb-8 sm:mb-10 text-xl sm:text-2xl md:text-4xl"
      >
        Fundraiser Goals
      </motion.h1>

      <motion.div
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-[#00285E]"
      >
        <div className="flex justify-between mb-3 sm:mb-4 px-1 sm:px-4 text-sm sm:text-base">
          <span>Raised So Far</span>
          <span>Goal</span>
        </div>

        <div className="flex justify-between items-center font-semibold mb-8 sm:mb-10 px-1 sm:px-4 text-base sm:text-lg">
          <span>${formatNum(raised)}</span>
          <span>${formatNum(goal)}</span>
        </div>

        <div className="relative mb-8 sm:mb-12 mx-1 sm:mx-0">
          <div className="relative h-8 sm:h-10 bg-[#E4E9F1] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#00285E] rounded-full transition-all duration-700"
              style={{ width: `${completionRate}%` }}
            ></div>

            {milestones.map((m, i) => {
              const positionPercent = goal > 0 ? (m / goal) * 100 : 0;
              const adjustedPosition =
                i === milestones.length - 1 ? 96 : positionPercent;
              const flagSrc =
                i < 2 ? "/donation/flag.png" : "/donation/secFlag.png";

              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${adjustedPosition}%`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img
                    src={flagSrc}
                    alt="milestone flag"
                    className="w-6 h-6 sm:w-8 sm:h-10 object-contain"
                  />
                </div>
              );
            })}
          </div>

          {milestones.map((m, i) => {
            let position = goal > 0 ? (m / goal) * 100 : 0;
            if (i === milestones.length - 2) position = Math.min(position, 88);
            if (i === milestones.length - 1) position = 96;

            return (
              <div
                key={i}
                className="absolute flex justify-center w-0"
                style={{
                  left: `${position}%`,
                  top: "100%",
                  transform: "translateX(-50%)",
                }}
              >
                <span className="mt-2 sm:mt-3 text-[#00285E] text-xs sm:text-sm whitespace-nowrap">
                  ${formatNum(m)}
                </span>
              </div>
            );
          })}
        </div>

        <div className="border-b border-[#8B8B8B] mt-16 sm:mt-20"></div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-8 text-[#00285E]">
          <div>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl">
              {completionRate}%
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">
              Completion Rate
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl">
              ${formatNum(remaining)}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">
              Remaining to Goal
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl">
              {formatNum(totalDonors)}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">
              Total Donors
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
