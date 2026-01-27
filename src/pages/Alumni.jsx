import { lazy, Suspense } from "react";
import React from "react";

import Hero from "../components/alumni/Hero";
import HeritageSection from "../components/alumni/HeritageSection";
import Message from "../components/alumni/Message";
import HoustonQuranAcademyAlumniForm from "../components/alumni/HoustonQuranAcademyAlumniForm";
import RecentEventsSection from "../components/alumni/RecentEventsSection";

// Lazy-loaded components
const Mission = lazy(() => import("../components/alumni/Mission"));
const StaffSection = lazy(() => import("../components/alumni/StaffSection"));
const VoicesSection = lazy(() => import("../components/alumni/VoicesSection"));
// const Connected = lazy(() => import("../components/alumni/Connected"));
const UpcomingEvents = lazy(() => import("../components/pto/UpcomingEvents"));

const Gallery = lazy(() => import("../components/alumni/Gallery"));
const Slogan = lazy(() => import("../components/alumni/Slogan"));
const WhereAreTheyNow = lazy(
  () => import("../components/alumni/WhereAreTheyNow"),
);
const Cta = lazy(() => import("../components/alumni/Cta"));

const Alumni = () => {
  return (
    <div>
      <Hero />
      <HeritageSection />
      <Message />

      <Suspense fallback={null}>
        <Mission />
        <StaffSection />
        <VoicesSection />
        {/* <Connected /> */}
        <UpcomingEvents
          apiUrl="https://hquranacademy.com/api/alumniEvents"
          eventType="alumni"
        />
        <HoustonQuranAcademyAlumniForm />
        <RecentEventsSection />
      </Suspense>

      <Suspense fallback={null}>
        <Gallery />
        <Slogan />
        <WhereAreTheyNow />
        <Cta />
      </Suspense>
    </div>
  );
};

export default Alumni;
