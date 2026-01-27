import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation";

const members = [
  {
    img: "/committee/Yasser Bangash.jpg",
    name: "Yasser Bangash",
    role: "Assists with school improvement strategies and data review.",
    desc: "Yasser Bangash serves on the School Improvement Committee and School Board and has been actively involved with Houston Quran Academy since 2009. He brings his professional experience as a mechanical engineer in the oil industry where he focuses on solving complex challenges and driving innovation.",
  },
  {
    img: "/committee/Sheraz Mughal.png",
    name: "Sheraz Mughal",
    role: "Actively supports school safety, events, and development initiatives",
    desc: "Sheraz has more than 20 years of experience in information and technology, he brings deep expertise in global operations, strategic IT governance, and multi-region service delivery.",
  },
  {
    img: "/committee/Noman Ali.png",
    name: "Noman Ali",
    role: "Supports HQA marketing and digital web strategy",
    desc: "Noman has over 10 years of experience in marketing operations. He works to strengthen connections between the school, students, parents, and the broader community through a cohesive and engaging online presence.",
  },
  {
    img: "/committee/Maha Alhanbali.png",
    name: "Maha Alhanbali",
    role: "Supports academic enhancements and student-focused initiatives.",
    desc: "Maha Alhanbali has served as Head of the Mathematics Department at Houston Quran Academy since 2015. A dedicated member of the HQA community for over 13 years, she is a long-standing parent whose four children are graduates of the academy. She continues to support HQA in multiple leadership and service capacities.",
  },
  {
    img: "/committee/Imtiaz Ahmed.png",
    name: "Imtiaz Ahmed",
    role: "Provides strategic direction and oversees committee operations.",
    desc: "Imtiaz Ahmed holds a Master’s degree in Geophysics and a PhD from The University of Texas at Austin. He worked for over 21 years as a Research Scientist at BP America, specializing in seismic modeling and subsurface imaging to support energy exploration and drilling optimization.",
  },
  {
    img: "/committee/Name Withheld.png",
    name: "Name Withheld ",
    role: "Committee Member (by request)",
    desc: "",
  },
];

export default function CommitteeMembers() {
  return (
    <section className="w-full px-6 py-20 font-serif bg-[#f8fafc] overflow-hidden">
      {/* Header Section */}
      <motion.div
        variants={SlideUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-14"
      >
        <h2 className="text-[#052B5B] mb-4 text-4xl md:text-5xl font-bold italic">
          Committee Members
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
          Each member contributes unique strengths, professional expertise, and
          a shared dedication to supporting HQA's vision of excellence.
        </p>
      </motion.div>

      {/* 3D Flip Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {members.map((m, i) => (
          <div
            key={i}
            className="relative group [perspective:1000px] cursor-pointer"
          >
            {/* Flip Container */}
            <div className="relative h-[450px] w-full rounded-2xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* FRONT SIDE */}
              <div className="absolute inset-0 flex flex-col bg-white rounded-2xl overflow-hidden backface-hidden border border-gray-200">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-80 object-cover"
                />
                <div className="w-full h-2 bg-[#052B5B]"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#052B5B] text-xl mb-1">
                    {m.name}
                  </h3>
                  <p className="text-gray-500 font-medium italic">{m.role}</p>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 bg-[#052B5B] rounded-2xl flex flex-col justify-center p-8 [transform:rotateY(180deg)] backface-hidden text-white">
                <h3 className="text-2xl font-bold mb-2">{m.name}</h3>
                <p className="text-blue-200 font-medium mb-4 italic">
                  {m.role}
                </p>
                <div className="w-12 h-1 bg-white mb-6"></div>
                <p className="text-lg leading-relaxed opacity-90">{m.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
