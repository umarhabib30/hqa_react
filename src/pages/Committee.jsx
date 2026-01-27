import { lazy, Suspense } from "react";

// Components that load immediately (Critical for the top of the page)
import Hero from "../components/committee/Hero";
import CommitteeSection from "../components/committee/CommitteeSection";
import CommitteeMembers from "../components/committee/CommitteeMembers";

// Lazy-loaded components 
const CommitteeMission = lazy(() => import("../components/committee/CommitteeMission"));
const WhatWeDo = lazy(() => import("../components/committee/WhatWeDo"));
const MajorInitiatives = lazy(() => import("../components/committee/MajorInitiatives"));
const CareerWeek = lazy(() => import("../components/committee/CareerWeek"));
const AnnualReview = lazy(() => import("../components/committee/AnnualReview"));

const Committee = () => {
  return (
    <div>
   
      <Hero />
      <CommitteeSection />
      <CommitteeMembers />

      
      <Suspense fallback={null}>
        <CommitteeMission />
        <WhatWeDo />
        <MajorInitiatives />
      </Suspense>

      <Suspense fallback={null}>
        <CareerWeek />
        <AnnualReview />
      </Suspense>
    </div>
  );
};

export default Committee;