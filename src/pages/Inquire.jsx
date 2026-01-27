import { lazy, Suspense, useEffect } from "react";

import Hero from "../components/inquire/Hero";

// Lazy-loaded components
const HeritageSection = lazy(() =>
  import("../components/inquire/HeritageSection")
);
const WhyInquire = lazy(() => import("../components/inquire/WhyInquire"));
const Cards = lazy(() => import("../components/inquire/Cards"));
const CampusTours = lazy(() => import("../components/inquire/CampusTours"));
const Process = lazy(() => import("../components/inquire/Process"));
const TourSchedule = lazy(() => import("../components/inquire/TourSchedule"));
const Slogan = lazy(() => import("../components/inquire/Slogan"));
const InfoSection = lazy(() => import("../components/inquire/InfoSection"));
const Learning = lazy(() => import("../components/inquire/Learning"));
const Campus = lazy(() => import("../components/inquire/Campus"));
const Cta = lazy(() => import("../components/inquire/Cta"));

const Inquire = () => {
  return (
    <div>
      <Hero />

      <Suspense fallback={null}>
        <HeritageSection />
        <WhyInquire />
        <Cards />
      </Suspense>

      <Suspense fallback={null}>
        <CampusTours />
        <Process />
        <TourSchedule />
      </Suspense>

      <Suspense fallback={null}>
        <Slogan />
        <InfoSection />
        <Learning />
        <Campus />
        <Cta />
      </Suspense>
    </div>
  );
};

export default Inquire;
