import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { useEffect, useState } from "react";

export default function ResourcesForFamilies() {
  const [downloads, setDownloads] = useState({
    newsletter: null,
    guide: null,
  });

  const items = [
    {
      title: "myHQA Portal",
      desc: "Calendars, grades, and learning tools",
      icon: "/pto/r1.png",
      arrow: "/pto/a1.png",
      color: "#ff6f6f",
      type: "portal",
    },
    {
      title: "Newsletter",
      desc: "Community news and parenting tips",
      icon: "/pto/r2.png",
      arrow: "/pto/a2.png",
      color: "#3fc7b7",
      type: "newsletter",
    },
    {
      title: "Guides",
      desc: "Helpful resources for families",
      icon: "/pto/r3.png",
      arrow: "/pto/a3.png",
      color: "#ffb020",
      type: "guide",
    },
  ];

  useEffect(() => {
    fetch("https://hquranacademy.com/api/ptoLetterGuides")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.data.length) {
          setDownloads({
            newsletter: `https://hquranacademy.com/storage/${data.data[0].newsletter_download}`,
            guide: `https://hquranacademy.com/storage/${data.data[0].guide_download}`,
          });
        }
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  const handleDownload = (type) => {
    if (type === "newsletter" && downloads.newsletter) {
      window.open(downloads.newsletter, "_blank");
    }

    if (type === "guide" && downloads.guide) {
      window.open(downloads.guide, "_blank");
    }

    if (type === "portal") {
      // future portal link
      console.log("Portal clicked");
    }
  };

  return (
    <section className="w-full flex justify-center px-10 py-16 bg-[#F9FAFB] font-serif">
      <div className="w-full max-w-9xl">
        <motion.h2
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center h1 text-[#00285E]"
        >
          Resources for Families
        </motion.h2>

        <motion.p
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-gray-700 p mt-2"
        >
          Your one-stop hub for everything HQA
        </motion.p>

        <motion.div
          variants={SlideRight(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 cursor-pointer gap-8 mt-12"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="bg-white rounded-3xl shadow-md border border-gray-200 p-8 flex flex-col gap-5"
            >
              <div className="rounded-xl">
                <img src={item.icon} alt="icon" className="w-12 h-12" />
              </div>

              <h3 className="text-[#00285E] p font-semibold">{item.title}</h3>

              <p className="text-gray-600 p">{item.desc}</p>

              <div>
                <button
                  onClick={() => handleDownload(item.type)}
                  className="rounded-full px-6 py-2 p cursor-pointer font-medium mt-2 transition hover:opacity-80 flex items-center gap-2"
                  style={{
                    border: `2px solid ${item.color}`,
                    color: item.color,
                  }}
                >
                  <img src={item.arrow} alt="arrow icon" className="w-4 h-4" />
                  <span>Access</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
