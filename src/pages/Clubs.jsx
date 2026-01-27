import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/clubs/Hero";
import WelcomeMsg from "../components/clubs/WelcomeMsg";

// Lazy-loaded components
const Journey = lazy(() => import("../components/clubs/Journey"));
const JourneyMbl = lazy(() => import("../components/clubs/JourneyMbl"));
const Welcome = lazy(() => import("../components/clubs/Welcome"));
const Learning = lazy(() => import("../components/clubs/Learning"));
const CardSlider = lazy(() => import("../components/clubs/CardSlider"));
const Slogan = lazy(() => import("../components/clubs/Slogan"));
const Cta = lazy(() => import("../components/clubs/Cta"));

const Clubs = () => {
  return (
    <div>
      <Hero />
      <WelcomeMsg />

      <Suspense fallback={null}>
        <div className="hidden md:block">
          <Journey />
        </div>
        <div className="block md:hidden">
          <JourneyMbl />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <Welcome />
        <Learning />
        <CardSlider />
        <Slogan />
        <Cta />
      </Suspense>
    </div>
  );
};

export default Clubs;
