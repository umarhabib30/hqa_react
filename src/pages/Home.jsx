import { lazy, Suspense } from "react";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";

// Lazy-loaded 
const CorePillars = lazy(() => import("../components/home/CorePillars"));
const CorePillarsMobile = lazy(() =>
  import("../components/home/CorePillarsMobile")
);
const PillarTextMbl = lazy(() => import("../components/home/PillarTextMbl"));
const StackingPolaroidCards = lazy(() =>
  import("../components/home/StackingPolaroidCards")
);
const Achievements = lazy(() => import("../components/home/Achievements"));
const Results = lazy(() => import("../components/home/Results"));
const ProfileCard = lazy(() => import("../components/home/ProfileCard"));
const ProfileCardMobile = lazy(() =>
  import("../components/home/ProfileCardMobile")
);
const AlumniComponent = lazy(() =>
  import("../components/home/AlumniComponent")
);
const FamilySection = lazy(() => import("../components/home/FamilySection"));
const VoicesSection = lazy(() => import("../components/home/VoicesSection"));
const SchoolComponent = lazy(() =>
  import("../components/home/SchoolComponent")
);
const SliderUni = lazy(() => import("../components/home/SliderUni"));
const NewJourney = lazy(() => import("../components/home/NewJourney"));
const HQANews = lazy(() => import("../components/home/HQANews"));
const WriteYourStory = lazy(() => import("../components/home/WriteYourStory"));

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Suspense fallback={null}>
        {/* Desktop-only components */}
        <div className="hidden md:block">
          <CorePillars />
          <StackingPolaroidCards />
          <Achievements />
          <Results />
          <ProfileCard />
        </div>
      </Suspense>
      {/* Mobile-only components */}
      <Suspense fallback={null}>
        <div className="block md:hidden">
          <PillarTextMbl />
          <CorePillarsMobile />
          <StackingPolaroidCards />
          <Achievements />
          <Results />
          <ProfileCardMobile />
        </div>
      </Suspense>
    
      {/* Shared components */}
      <Suspense fallback={null}>
        <AlumniComponent />
        <FamilySection />
        <VoicesSection />
        <SchoolComponent />
        <SliderUni />
        <NewJourney />
        <HQANews />
        <WriteYourStory />
      </Suspense>
    </div>
  );
};

export default Home;
