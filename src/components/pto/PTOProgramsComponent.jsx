import React from "react";

export default function PTOProgramsComponent({ cards = [] }) {
  const defaultCards = [
    {
      id: 1,
      img: "https://picsum.photos/600/400?random=1",
      icon: "/pto/p1.png",
      title: "Family Wellness",
      subtitle:
        "Halal-friendly health workshops, Quran-themed mindfulness sessions",
    },
    {
      id: 2,
      img: "https://picsum.photos/600/400?random=2",
      icon: "/pto/p2.png",
      title: "Academic Enrichment",
      subtitle:
        "STEM kits with Islamic history connections, Arabic literacy resources",
    },
    {
      id: 3,
      img: "https://picsum.photos/600/400?random=3",
      icon: "/pto/p3.png",
      title: "Counseling & Guidance",
      subtitle:
        "Workshops on resilience, gratitude (shukr), and emotional wellness",
    },
  ];

  const cardData = cards.length > 0 ? cards : defaultCards;

  const accentClasses = {
    red: "border-[#FF6B6B] text-[#FF6B6B]",
    green: "border-[#66BB6A] text-[#66BB6A]",
    yellow: "border-[#FFA500] text-[#FFA500]",
  };

  return (
    <section className="relative w-full flex justify-center py-12 px-10 overflow-hidden font-serif">
      <div
        className="
          absolute 
          top-2 
          left-0 
          w-[200%] 
          h-44 
          bg-blue-100 
          -z-10 
          rotate-[-4deg]
        "
        style={{
          clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)",
        }}
      ></div>

      <div>
        <div className="flex justify-center">
          <div className="rounded-md px-8 py-3 bg-[#f4ecd8] text-[#FFA500] p shadow-sm">
            Student Support
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-1">
          <h2 className="h1 text-[#00285E]">PTO Programs</h2>
          <p className="mt-1 text-gray-800 max-w-2xl mx-auto p">
            Inspired by our faith, we prioritize the holistic growth of every
            child.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 cursor-pointer gap-6">
          {cardData.map((c, idx) => {
            const btnColor =
              idx === 0
                ? accentClasses.red
                : idx === 1
                ? accentClasses.green
                : accentClasses.yellow;

            return (
              <article
                key={c.id}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl duration-200"
              >
                <div className="relative">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-48 object-cover md:h-44"
                  />

                  <img
                    src={c.icon}
                    alt="icon"
                    className="absolute top-3 left-3 w-20 h-20  p-1  object-cover"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{c.title}</h3>
                    <p className="mt-2 text-gray-500 p">{c.subtitle}</p>
                  </div>

                  {/* <div className="mt-4 flex items-center justify-between">
                    <button
                      className={`px-4 py-2 rounded-md cursor-pointer bg-white border font-medium p ${btnColor}`}
                    >
                      Learn more
                    </button>
                    <span className="text-sm text-gray-400">&nbsp;</span>
                  </div> */}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
