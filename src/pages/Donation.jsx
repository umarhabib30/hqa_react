import { lazy, Suspense, useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

import Hero from "../components/donation/Hero";
import Join from "../components/donation/Join";
import FundraiserSection from "../components/donation/FundraiserSection";
import Gallery from "../components/donation/Gallery";
import MomentumSection from "../components/donation/MomentumSection";

const ProjectsTimeline = lazy(() =>
  import("../components/donation/ProjectsTimeline")
);
const ProjectsTimelineMobile = lazy(() =>
  import("../components/donation/ProjectsTimelineMobile")
);
const Event = lazy(() => import("../components/donation/Event"));
const FundraiserGoals = lazy(() =>
  import("../components/donation/FundraiserGoals")
);
const Goals = lazy(() => import("../components/donation/Goals"));
const GoalsMbl = lazy(() => import("../components/donation/GoalsMbl"));
const SpeakersSection = lazy(() =>
  import("../components/donation/SpeakersSection")
);
const EventDetails = lazy(() =>
  import("../components/donation/EventDetails")
);
const Cta = lazy(() => import("../components/donation/Cta"));

const Donation = () => {
  const donationRef = useRef(null);

  const scrollToEvent = () => {
    donationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero />
      <Join />
      <FundraiserSection />
      <Gallery />
      <MomentumSection />

      <Suspense fallback={null}>
        <div className="hidden md:block">
          <ProjectsTimeline />
        </div>
        <div className="block md:hidden">
          <ProjectsTimelineMobile />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <Event />
        <FundraiserGoals />
      </Suspense>

      <Suspense fallback={null}>
        <div className="hidden md:block">
          {/* <Goals /> */}
        </div>
        <div className="block md:hidden">
          {/* <GoalsMbl /> */}
        </div>
      </Suspense>

      <Suspense fallback={null}>
        {/* <SpeakersSection /> */}
        <div ref={donationRef}>
          <EventDetails />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <Cta />
      </Suspense>

      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={scrollToEvent}
          className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-2xl active:scale-95 flex items-center gap-2"
        >
          <span>View Event Details</span>
          <FiArrowDown className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Donation;