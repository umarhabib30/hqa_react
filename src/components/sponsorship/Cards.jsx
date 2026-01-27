import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "../../../utility/animation";
import { useEffect, useState } from "react";
import SponsorForm from "./SponsorForm";

const Cards = () => {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const designAssets = {
    1: {
      img: "/sponsorship/card1.png",
      bgColor: "bg-[#E4EAF2]",
      borderColor: "border-[#CAD5E2]",
    },
    2: {
      img: "/sponsorship/card2.png",
      bgColor: "bg-[#FEE685]",
      borderColor: "border-[#FFDF20]",
    },
    3: {
      img: "/sponsorship/card3.png",
      bgColor: "bg-[#DDD6FF]",
      borderColor: "border-[#DAB2FF]",
    },
    4: {
      img: "/sponsorship/card4.png",
      bgColor: "bg-[#CAD5E2]",
      borderColor: "border-[#D1D5DC]",
    },
  };

  useEffect(() => {
    fetch("https://hquranacademy.com/api/sponsorsPackages")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setSponsors(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-6">
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-16 h-16 border-4 border-[#00285E]/10 border-t-[#00285E] rounded-full animate-spin"></div>
          {/* Inner Ring (Slower & Reverse) */}
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-blue-200/20 border-t-blue-400 rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
        </div>

        <div className="text-center">
          <h3 className="text-[#00285E] font-serif italic text-xl tracking-wide animate-pulse">
            Curating Excellence
          </h3>
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mt-2">
            Loading Sponsorship Packages
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-12 bg-white font-serif">
      <motion.div
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <p className="text-[#F02020] text-lg">Sponsorship Tiers</p>
        <p className="text-[#00285E] text-3xl font-bold">
          Sponsorship Levels & Benefits
        </p>
      </motion.div>

      <motion.div
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-4 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {sponsors.map((sponsor) => {
          const design = designAssets[sponsor.id] || designAssets[4];

          return (
            <div
              key={sponsor.id}
              className={`border ${design.borderColor} ${design.bgColor} rounded-2xl p-6 flex flex-col justify-between shadow`}
            >
              <div>
                <div className="flex items-center border-b pb-3 mb-3">
                  <img
                    src={design.img}
                    className="w-14 h-14 mr-3"
                    alt={sponsor.title}
                  />
                  <div>
                    <p className="font-semibold">{sponsor.title}</p>
                    <p className="font-bold">
                      ${Math.floor(sponsor.price_per_year).toLocaleString()}
                      <span className="text-gray-500 text-sm"> / year</span>
                    </p>
                  </div>
                </div>

                <ul className="text-sm space-y-2">
                  {sponsor.benefits.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedSponsor(sponsor)}
                className="mt-6 bg-white cursor-pointer rounded-xl py-3 font-bold hover:bg-gray-100"
              >
                Become a Sponsor
              </button>
            </div>
          );
        })}
      </motion.div>

      {selectedSponsor && (
        <SponsorForm
          sponsor={selectedSponsor}
          onClose={() => setSelectedSponsor(null)}
        />
      )}
    </div>
  );
};

export default Cards;
