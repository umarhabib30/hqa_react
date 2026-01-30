import React, { lazy, Suspense } from "react";

import Hero from "../components/pto/Hero";
import LeadershipSection from "../components/pto/LeadershipSection";
import TeamCards from "../components/pto/TeamCards";

// Lazy-loaded components
const Cta = lazy(() => import("../components/pto/Cta"));
const HQAPTOSection = lazy(() => import("../components/pto/HQAPTOSection"));
const StatsCards = lazy(() => import("../components/pto/StatsCards"));
const UpcomingEvents = lazy(() => import("../components/pto/UpcomingEvents"));
const PTOProgramsComponent = lazy(
  () => import("../components/pto/PTOProgramsComponent"),
);
const GetInvolvedSection = lazy(
  () => import("../components/pto/GetInvolvedSection"),
);
const CommunityEvents = lazy(() => import("../components/pto/CommunityEvents"));
const EventsGrid = lazy(() => import("../components/pto/EventsGrid"));
const SubscribeSection = lazy(
  () => import("../components/pto/SubscribeSection"),
);
const SupportSection = lazy(() => import("../components/pto/SupportSection"));
const SpiritCorner = lazy(() => import("../components/pto/SpiritCorner"));
const ResourcesForFamilies = lazy(
  () => import("../components/pto/ResourcesForFamilies"),
);
const HelpSection = lazy(() => import("../components/pto/HelpSection"));

const Pto = () => {
  return (
    <div>
      <Hero />
      <LeadershipSection />
      <TeamCards />

      <Suspense fallback={null}>
        <Cta />
        <HQAPTOSection />
        <StatsCards />
        <UpcomingEvents
          apiUrl="http://localhost:8000/api/ptoEvents"
          eventType="pto"
        />
        <PTOProgramsComponent />
      </Suspense>

      <Suspense fallback={null}>
        <GetInvolvedSection />
        <CommunityEvents />
        <EventsGrid />
        <SubscribeSection />
        <SupportSection />
        <SpiritCorner />
        <ResourcesForFamilies />
        <HelpSection />
      </Suspense>
    </div>
  );
};

export default Pto;
