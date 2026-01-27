import { lazy, Suspense, useEffect, useState } from "react";

import Hero from "../components/sponsorship/Hero";
import SponsorsGrid from "../components/sponsorship/SponsorsGrid";
import SponsorPatnership from "../components/sponsorship/SponsorPatnership";
import SponsorCTA from "../components/sponsorship/SponsorCTA";

const Cards = lazy(() => import("../components/sponsorship/Cards"));
const SponsorBenefits = lazy(
  () => import("../components/sponsorship/SponsorBenefits"),
);
const PlatinumSponsors = lazy(
  () => import("../components/sponsorship/PlatiniumSponsors"),
);
const GoldSponsors = lazy(
  () => import("../components/sponsorship/GoldSponsors"),
);
const PremiumSponsors = lazy(
  () => import("../components/sponsorship/PremiumSponsors"),
);
const SilverSponsors = lazy(
  () => import("../components/sponsorship/SilverSponsors"),
);
const ContactSection = lazy(
  () => import("../components/sponsorship/ContactSection"),
);

const SponsorShip = () => {
  const [sponsorImages, setSponsorImages] = useState({
    platinum: [],
    gold: [],
    premium: [],
    silver: [],
  });

  useEffect(() => {
    fetch("https://hquranacademy.com/api/sponsorsPackages")
      .then((res) => res.json())
      .then((data) => {
        if (!data.subscribers) return;

        setSponsorImages({
          platinum:
            data.subscribers["Platinum Sponsor"]
              ?.map((s) => s.image_url)
              .filter(Boolean) || [],
          gold:
            data.subscribers["Gold Sponsor"]
              ?.map((s) => s.image_url)
              .filter(Boolean) || [],
          premium:
            data.subscribers["Premium Sponsor"]
              ?.map((s) => s.image_url)
              .filter(Boolean) || [],
          silver:
            data.subscribers["Silver Sponsor"]
              ?.map((s) => s.image_url)
              .filter(Boolean) || [],
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <Hero />
      <SponsorsGrid />
      <SponsorPatnership />
      <SponsorCTA />

      <Suspense fallback={null}>
        <Cards />
        <SponsorBenefits />

        <PlatinumSponsors images={sponsorImages.platinum} />
        <GoldSponsors images={sponsorImages.gold} />
        <PremiumSponsors images={sponsorImages.premium} />
        <SilverSponsors images={sponsorImages.silver} />

        <ContactSection />
      </Suspense>
    </div>
  );
};

export default SponsorShip;
